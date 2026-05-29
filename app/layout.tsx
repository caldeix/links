import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Links · Caldeix",
  description: "Desarrollador apasionado por la tecnología — enlaces y proyectos.",
  icons: {
    icon: [
      { url: `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/favicon.ico` },
      { url: `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/favicon-32x32.png`, type: "image/png", sizes: "32x32" },
      { url: `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/favicon-16x16.png`, type: "image/png", sizes: "16x16" },
    ],
    apple: `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/apple-touch-icon.png`,
    shortcut: `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/favicon.ico`,
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
