import type { Metadata } from "next"
import "./globals.css"

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? ""

export const metadata: Metadata = {
  title: "Links · Caldeix",
  description: "Desarrollador apasionado por la tecnología — enlaces y proyectos.",
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
