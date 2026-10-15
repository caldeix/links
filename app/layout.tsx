import type { Metadata, Viewport } from "next"
import "./globals.css"

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? ""

const SITE_URL = "https://caldeix.github.io/links/"
const TITLE = "Links · Caldeix"
const DESCRIPTION = "Luis Miguel Caldeiro Fernández, desarrollador apasionado por la tecnología: perfil, contacto y proyectos."

export const metadata: Metadata = {
  metadataBase: new URL("https://caldeix.github.io"),
  title: TITLE,
  description: DESCRIPTION,
  applicationName: TITLE,
  authors: [{ name: "Luis Miguel Caldeiro Fernández", url: "https://caldeix.github.io/me" }],
  creator: "Caldeix",
  keywords: ["Caldeix", "Luis Miguel Caldeiro", "desarrollador", "portfolio", "links", "proyectos"],
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
    siteName: TITLE,
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: "/links/profile-pic.jpg", width: 600, height: 600, alt: "Caldeix" }],
  },
  twitter: {
    card: "summary",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/links/profile-pic.jpg"],
  },
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
