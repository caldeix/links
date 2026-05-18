import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Links · Caldeix",
  description: "Desarrollador apasionado por la tecnología — enlaces y proyectos.",
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
