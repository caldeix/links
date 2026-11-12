import type { LinksData } from "@/types"
import { PERSON_ID, PORTFOLIO_URL, SITE_URL, SITE_TITLE, WEBSITE_ID, absoluteUrl, isHttpUrl, sameUrl } from "./site"

// JSON-LD schema.org (ProfilePage + Person + proyectos) generado desde links.json.
// Es lo que buscadores e IA usan para asociar el nombre con esta web, el portfolio, LinkedIn y GitHub.
// La Person usa el mismo @id y la misma url que en el portfolio, para que Google la trate como una sola
// persona cuya página principal es el portfolio, y el ProfilePage forma parte del WebSite de la portada.
export function buildStructuredData({ profile, links }: LinksData) {
  const isImage = profile.emoji.startsWith("/")

  // Otros perfiles de la misma persona: enlaces http(s) de la categoría "perfil" (el portfolio ya es su url)
  const sameAs = links
    .filter((link) => link.category === "perfil" && isHttpUrl(link.url) && !sameUrl(link.url, PORTFOLIO_URL))
    .map((link) => link.url)

  const projects = links
    .filter((link) => link.category === "apps")
    .map((link) => {
      const hasWeb = !sameUrl(link.url, link.github) && !/^https?:\/\/github\.com\//i.test(link.url)
      return hasWeb
        ? {
            "@type": "WebApplication",
            name: link.title,
            description: link.description,
            url: link.url,
            applicationCategory: "WebApplication",
            operatingSystem: "Web",
            ...(link.github && { sameAs: link.github }),
            author: { "@id": PERSON_ID },
          }
        : {
            "@type": "SoftwareSourceCode",
            name: link.title,
            description: link.description,
            url: link.url,
            codeRepository: link.github ?? link.url,
            author: { "@id": PERSON_ID },
          }
    })

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfilePage",
        "@id": SITE_URL,
        url: SITE_URL,
        name: SITE_TITLE,
        inLanguage: "es",
        isPartOf: { "@id": WEBSITE_ID },
        mainEntity: { "@id": PERSON_ID },
      },
      {
        "@type": "Person",
        "@id": PERSON_ID,
        name: profile.name,
        ...(profile.alternateName?.length && { alternateName: profile.alternateName }),
        ...(profile.jobTitle && { jobTitle: profile.jobTitle }),
        description: profile.description,
        url: PORTFOLIO_URL,
        ...(isImage && { image: absoluteUrl(profile.emoji) }),
        sameAs,
        ...(profile.knowsAbout?.length && { knowsAbout: profile.knowsAbout }),
      },
      {
        "@type": "ItemList",
        name: "Proyectos",
        itemListElement: projects.map((item, i) => ({ "@type": "ListItem", position: i + 1, item })),
      },
    ],
  }
}
