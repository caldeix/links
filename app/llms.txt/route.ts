import { getLinksData } from "@/lib/links-data"
import { SITE_URL, isHttpUrl, sameUrl } from "@/lib/site"

// /links/llms.txt: resumen en Markdown para asistentes de IA (https://llmstxt.org), generado en build desde links.json
export const dynamic = "force-static"

export async function GET() {
  const { profile, categories, links } = await getLinksData()

  const section = (categoryId: string) =>
    links
      .filter((link) => link.category === categoryId)
      .map((link) => {
        const url = link.url.startsWith("mailto:") ? link.url.replace(/^mailto:/, "") : link.url
        const repo = link.github && !sameUrl(link.github, link.url) ? ` (código: ${link.github})` : ""
        return `- [${link.title}](${link.url}): ${link.description}${isHttpUrl(link.url) ? "" : ` — ${url}`}${repo}`
      })
      .join("\n")

  const body = [
    `# ${profile.name}`,
    "",
    `> ${[profile.jobTitle, profile.description].filter(Boolean).join(". ")}.`,
    "",
    profile.alternateName?.length ? `También conocido como: ${profile.alternateName.join(", ")}.` : "",
    profile.knowsAbout?.length ? `Especialidad: ${profile.knowsAbout.join(", ")}.` : "",
    `Página oficial de enlaces: ${SITE_URL}`,
    "",
    ...categories
      .filter((cat) => cat.id !== "todos" && links.some((link) => link.category === cat.id))
      .flatMap((cat) => [`## ${cat.name}`, "", section(cat.id), ""]),
  ]
    .filter((line, i, all) => line !== "" || all[i - 1] !== "")
    .join("\n")

  return new Response(body.trimEnd() + "\n", {
    headers: { "Content-Type": "text/markdown; charset=utf-8" },
  })
}
