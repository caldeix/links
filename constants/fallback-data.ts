import type { LinksData } from "@/types"

export const FALLBACK_DATA: LinksData = {
  profile: {
    name: "Tu Nombre",
    description: "Creador de contenido digital",
    emoji: "👤",
  },
  categories: [
    { id: "todos",  name: "Todos",    emoji: "🌟" },
    { id: "perfil", name: "Sobre mí", emoji: "👤" },
    { id: "apps",   name: "Apps",     emoji: "📱" },
  ],
  links: [
    {
      emoji: "🌐",
      title: "Mi sitio web",
      description: "Mi CV, habilidades y trayectoria",
      url: "https://caldeix.github.io/me",
      category: "perfil",
    },
    {
      emoji: "💼",
      title: "LinkedIn",
      description: "Conecta conmigo",
      url: "https://linkedin.com/in/caldeiro-luism",
      category: "perfil",
    },
    {
      emoji: "📧",
      title: "Email",
      description: "Envíame un mensaje",
      url: "mailto:caldeiro@protonmail.com",
      category: "perfil",
    },
  ],
}

export const PARTICLE_COUNT = 20

// basePath ("/links" en producción, "" en dev) expuesto por next.config.mjs
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? ""
export const LINKS_JSON_URL = `${BASE_PATH}/links.json`
export const FAVICONS_JSON_URL = `${BASE_PATH}/favicons/favicons.json`
