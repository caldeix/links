import type { Metadata, Viewport } from "next"
import "./globals.css"
import { getLinksData } from "@/lib/links-data"
import { SITE_ORIGIN, SITE_TITLE, SITE_URL, absoluteUrl } from "@/lib/site"

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? ""

// Códigos de verificación de Google Search Console / Bing Webmaster.
// Se pasan como variables del repo en GitHub (Settings → Variables) y el workflow los inyecta en el build.
const GOOGLE_VERIFICATION = process.env.GOOGLE_SITE_VERIFICATION
const BING_VERIFICATION = process.env.BING_SITE_VERIFICATION

// Metadatos generados desde public/links.json para que nombre y descripción coincidan con la página y el JSON-LD
export async function generateMetadata(): Promise<Metadata> {
  const { profile } = await getLinksData()
  const role = profile.jobTitle ? `${profile.jobTitle}. ` : ""
  const description = `${profile.name}: ${role}${profile.description}. Perfil, contacto y proyectos.`
  const image = profile.emoji.startsWith("/") ? absoluteUrl(profile.emoji) : undefined

  return {
    metadataBase: new URL(SITE_ORIGIN),
    title: SITE_TITLE,
    description,
    applicationName: SITE_TITLE,
    authors: [{ name: profile.name, url: SITE_URL }],
    creator: "Caldeix",
    keywords: [profile.name, ...(profile.alternateName ?? []), ...(profile.knowsAbout ?? []), "portfolio", "proyectos"],
    alternates: { canonical: SITE_URL },
    manifest: `${BASE}/site.webmanifest`,
    icons: {
      icon: [
        { url: `${BASE}/favicon.ico` },
        { url: `${BASE}/favicon-32x32.png`, type: "image/png", sizes: "32x32" },
        { url: `${BASE}/favicon-16x16.png`, type: "image/png", sizes: "16x16" },
      ],
      apple: `${BASE}/apple-touch-icon.png`,
      shortcut: `${BASE}/favicon.ico`,
    },
    openGraph: {
      type: "profile",
      locale: "es_ES",
      url: SITE_URL,
      siteName: SITE_TITLE,
      title: `${profile.name} · Caldeix`,
      description,
      ...(image && { images: [{ url: image, width: 600, height: 600, alt: profile.name }] }),
    },
    twitter: {
      card: "summary",
      title: `${profile.name} · Caldeix`,
      description,
      ...(image && { images: [image] }),
    },
    verification: {
      ...(GOOGLE_VERIFICATION && { google: GOOGLE_VERIFICATION }),
      ...(BING_VERIFICATION && { other: { "msvalidate.01": BING_VERIFICATION } }),
    },
  }
}

export const viewport: Viewport = {
  themeColor: "#090A0F",
  colorScheme: "dark",
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
