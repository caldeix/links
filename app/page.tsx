import { getLinksData } from "@/lib/links-data"
import { buildStructuredData } from "@/lib/structured-data"
import { ParticleBackground } from "@/components/ui/particle-background"
import { MainContainer } from "@/components/layout/main-container"
import { ProfileSection } from "@/components/profile/profile-section"
import { LinksExplorer } from "@/components/links/links-explorer"
import { Footer } from "@/components/layout/footer"

// Server component: se renderiza en build con los datos de public/links.json ya dentro del HTML
export default async function LinkTree() {
  const data = await getLinksData()
  const structuredData = buildStructuredData(data)

  return (
    <>
      <script
        type="application/ld+json"
        // JSON.stringify no escapa "<": se evita que un texto con "</script>" cierre la etiqueta
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
      />
      <MainContainer>
        <ParticleBackground />
        <main className="relative z-10">
          <ProfileSection profile={data.profile} />
          <LinksExplorer categories={data.categories} links={data.links} />
        </main>
        <Footer />
      </MainContainer>
    </>
  )
}
