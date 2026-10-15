// URL pública del sitio (GitHub Pages, basePath "/links" en producción)
export const SITE_ORIGIN = "https://caldeix.github.io"
export const SITE_URL = `${SITE_ORIGIN}/links/`
export const SITE_TITLE = "Links · Caldeix"

/** URL absoluta de un recurso de public/ en producción (p. ej. "/profile-pic.jpg") */
export const absoluteUrl = (publicPath: string) => new URL(publicPath.replace(/^\//, ""), SITE_URL).href

export const isHttpUrl = (url: string) => /^https?:\/\//i.test(url)

/** Mismo destino ignorando la "/" final y mayúsculas del host */
export function sameUrl(a?: string, b?: string): boolean {
  if (!a || !b) return false
  const normalize = (url: string) => url.replace(/\/+$/, "").toLowerCase()
  return normalize(a) === normalize(b)
}
