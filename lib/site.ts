// URL pública del sitio (GitHub Pages, basePath "/links" en producción)
export const SITE_ORIGIN = "https://caldeix.github.io"
export const SITE_URL = `${SITE_ORIGIN}/links/`

// Google da un solo nombre de sitio a todo caldeix.github.io y lo saca de la portada (el portfolio,
// repo caldeix.github.io). Aquí se repite el mismo para que todas las señales coincidan.
export const SITE_NAME = "Luis Miguel Caldeiro"
export const SITE_TITLE = `Links · ${SITE_NAME}`

// La ficha principal de la persona vive en el portfolio; esta página apunta a ella por su @id
export const PORTFOLIO_URL = `${SITE_ORIGIN}/`
export const PERSON_ID = `${PORTFOLIO_URL}#person`
export const WEBSITE_ID = `${PORTFOLIO_URL}#website`

/** URL absoluta de un recurso de public/ en producción (p. ej. "/profile-pic.jpg") */
export const absoluteUrl = (publicPath: string) => new URL(publicPath.replace(/^\//, ""), SITE_URL).href

export const isHttpUrl = (url: string) => /^https?:\/\//i.test(url)

/** Mismo destino ignorando la "/" final y mayúsculas del host */
export function sameUrl(a?: string, b?: string): boolean {
  if (!a || !b) return false
  const normalize = (url: string) => url.replace(/\/+$/, "").toLowerCase()
  return normalize(a) === normalize(b)
}
