// Descarga el favicon de cada enlace de public/links.json que no tenga emoji
// y genera public/favicons/favicons.json ({ [url]: "/favicons/<slug>.<ext>" }).
// Se ejecuta en prebuild (descarga completa) y predev (--reuse: solo lo que falte).
// Nunca rompe el build: si un icono no se puede obtener, avisa y la tarjeta usa un icono genérico.
import { readFile, writeFile, mkdir, rm, access } from "node:fs/promises"
import path from "node:path"
import { fileURLToPath } from "node:url"

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..")
const LINKS_JSON = path.join(ROOT, "public", "links.json")
const OUT_DIR = path.join(ROOT, "public", "favicons")
const MAP_FILE = path.join(OUT_DIR, "favicons.json")
const TIMEOUT_MS = 10_000
const REUSE = process.argv.includes("--reuse")

const EXT_BY_TYPE = {
  "image/png": "png",
  "image/svg+xml": "svg",
  "image/x-icon": "ico",
  "image/vnd.microsoft.icon": "ico",
  "image/jpeg": "jpg",
  "image/gif": "gif",
  "image/webp": "webp",
}
const IMAGE_EXTS = new Set(Object.values(EXT_BY_TYPE))

const slugify = (url) =>
  url.replace(/^https?:\/\//, "").replace(/[^a-z0-9]+/gi, "-").replace(/^-|-$/g, "").toLowerCase()

const exists = (file) => access(file).then(() => true, () => false)

async function get(url) {
  const res = await fetch(url, {
    redirect: "follow",
    signal: AbortSignal.timeout(TIMEOUT_MS),
    headers: { "user-agent": "caldeix-links-favicon-fetcher" },
  })
  if (!res.ok) throw new Error(`HTTP ${res.status} en ${url}`)
  return res
}

function attr(tag, name) {
  const m = tag.match(new RegExp(`\\s${name}\\s*=\\s*(?:"([^"]*)"|'([^']*)'|([^\\s>]+))`, "i"))
  return m ? (m[1] ?? m[2] ?? m[3]) : undefined
}

function extFromUrl(url) {
  const ext = path.extname(new URL(url).pathname).slice(1).toLowerCase()
  return IMAGE_EXTS.has(ext) ? ext : undefined
}

// <link rel="icon|shortcut icon|apple-touch-icon"> del HTML, con rutas resueltas contra la URL final
function parseIcons(html, pageUrl) {
  const icons = []
  // Admite atributos entrecomillados con ">" dentro (p. ej. href="data:image/svg+xml,<svg ...>")
  for (const [tag] of html.matchAll(/<link\b(?:[^>"']|"[^"]*"|'[^']*')*>/gi)) {
    const rel = (attr(tag, "rel") ?? "").toLowerCase()
    if (!/(^|\s)(icon|apple-touch-icon)(\s|$)/.test(rel) && rel !== "shortcut icon") continue
    const href = attr(tag, "href")
    if (!href) continue
    let url
    try {
      url = href.startsWith("data:") ? href : new URL(href, pageUrl).href
    } catch {
      continue
    }
    const size = Math.max(0, ...(attr(tag, "sizes") ?? "").split(/\s+/).map((s) => parseInt(s, 10) || 0))
    const type = (attr(tag, "type") ?? "").toLowerCase()
    icons.push({ url, rel, size, type })
  }
  return icons
}

// Preferencia: PNG ≥48px (el más pequeño que baste, se pinta a 28px) > PNG > apple-touch-icon > SVG > ICO / resto
function score({ url, rel, size, type }) {
  const kind = url.startsWith("data:")
    ? url.slice(5, url.search(/[;,]/))
    : type || `image/${extFromUrl(url) ?? ""}`
  if (rel.includes("apple-touch-icon")) return 900 + size
  if (kind === "image/png") return size >= 48 ? 2000 - size : 1000 + size
  if (kind === "image/svg+xml" || kind === "image/svg") return 800
  return 100 + size
}

function decodeDataUri(uri) {
  const m = uri.match(/^data:([^;,]+)(;base64)?,(.*)$/s)
  if (!m) throw new Error("data URI no válido")
  const [, mime, base64, payload] = m
  const ext = EXT_BY_TYPE[mime.toLowerCase()]
  if (!ext) throw new Error(`tipo no soportado: ${mime}`)
  const body = base64 ? Buffer.from(payload, "base64") : Buffer.from(decodeURIComponent(payload), "utf8")
  return { body, ext }
}

async function download(url) {
  if (url.startsWith("data:")) return decodeDataUri(url)
  const res = await get(url)
  const type = (res.headers.get("content-type") ?? "").split(";")[0].trim().toLowerCase()
  const ext = EXT_BY_TYPE[type] ?? (type.startsWith("image/") || type === "application/octet-stream" ? extFromUrl(url) : undefined)
  if (!ext) throw new Error(`no es una imagen (${type || "sin content-type"}): ${url}`)
  return { body: Buffer.from(await res.arrayBuffer()), ext }
}

async function resolveFavicon(linkUrl) {
  const page = await get(linkUrl)
  const pageUrl = page.url || linkUrl
  const html = await page.text()

  const candidates = parseIcons(html, pageUrl)
    .sort((a, b) => score(b) - score(a))
    .map((i) => i.url)

  // Sin icono declarado: /favicon.ico junto a la página y, salvo en sitios alojados
  // en subcarpetas de github.io (el de la raíz sería el de otra web), el de la raíz del dominio.
  const { hostname, pathname } = new URL(pageUrl)
  candidates.push(new URL("favicon.ico", pageUrl).href)
  if (!(hostname.endsWith(".github.io") && pathname !== "/")) candidates.push(new URL("/favicon.ico", pageUrl).href)

  const errors = []
  for (const url of [...new Set(candidates)]) {
    try {
      return await download(url)
    } catch (err) {
      errors.push(err.message)
    }
  }
  throw new Error(errors.join(" | ") || "sin candidatos")
}

async function main() {
  const { links = [] } = JSON.parse(await readFile(LINKS_JSON, "utf8"))
  const targets = links.filter((l) => !l.emoji?.trim() && /^https?:\/\//i.test(l.url ?? ""))

  const previous = REUSE && (await exists(MAP_FILE)) ? JSON.parse(await readFile(MAP_FILE, "utf8")) : {}
  if (!REUSE) await rm(OUT_DIR, { recursive: true, force: true })
  await mkdir(OUT_DIR, { recursive: true })

  const map = {}
  for (const link of targets) {
    const cached = previous[link.url]
    if (cached && (await exists(path.join(ROOT, "public", cached)))) {
      map[link.url] = cached
      continue
    }
    try {
      const { body, ext } = await resolveFavicon(link.url)
      const rel = `/favicons/${slugify(link.url)}.${ext}`
      await writeFile(path.join(ROOT, "public", rel), body)
      map[link.url] = rel
      console.log(`favicons: ✔ ${link.title} → ${rel}`)
    } catch (err) {
      console.warn(`favicons: ✖ ${link.title} (${link.url}) → icono genérico. ${err.message}`)
    }
  }

  await writeFile(MAP_FILE, JSON.stringify(map, null, 2) + "\n")
  console.log(`favicons: ${Object.keys(map).length}/${targets.length} enlaces sin emoji con favicon`)
}

main().catch((err) => {
  console.warn(`favicons: no se pudieron generar (${err.message}); se usará el icono genérico`)
})
