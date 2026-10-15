// Solo servidor/build: usa fs. Lo importan app/page.tsx, app/layout.tsx, app/llms.txt y app/sitemap.ts.
import { readFile } from "node:fs/promises"
import path from "node:path"
import type { FaviconMap, LinksData } from "@/types"

const PUBLIC_DIR = path.join(process.cwd(), "public")

async function readJson<T>(file: string): Promise<T> {
  return JSON.parse(await readFile(path.join(PUBLIC_DIR, file), "utf8")) as T
}

// favicons.json lo genera scripts/fetch-favicons.mjs; si no existe, las tarjetas usan el icono genérico
async function readFavicons(): Promise<FaviconMap> {
  try {
    return await readJson<FaviconMap>("favicons/favicons.json")
  } catch {
    return {}
  }
}

function assertValid(data: LinksData): void {
  const errors: string[] = []
  if (!data.profile?.name) errors.push("profile.name es obligatorio")
  if (!Array.isArray(data.categories)) errors.push("categories debe ser un array")
  if (!Array.isArray(data.links)) errors.push("links debe ser un array")
  const categoryIds = new Set(data.categories?.map((c) => c.id))
  data.links?.forEach((link, i) => {
    for (const field of ["title", "description", "url", "category"] as const) {
      if (!link[field]) errors.push(`links[${i}].${field} es obligatorio`)
    }
    if (link.category && !categoryIds.has(link.category)) {
      errors.push(`links[${i}] (${link.title}): la categoría "${link.category}" no existe`)
    }
  })
  if (errors.length) throw new Error(`public/links.json no es válido:\n- ${errors.join("\n- ")}`)
}

// Se ejecuta en build (export estático): los datos quedan dentro del HTML.
// Si links.json está mal, el build falla y no se despliega.
export async function getLinksData(): Promise<LinksData> {
  const [data, favicons] = await Promise.all([readJson<LinksData>("links.json"), readFavicons()])
  assertValid(data)
  return {
    ...data,
    links: data.links.map((link) =>
      !link.emoji?.trim() && favicons[link.url] ? { ...link, favicon: favicons[link.url] } : link
    ),
  }
}
