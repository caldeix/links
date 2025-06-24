import type { LinksData } from "@/types"

export const FALLBACK_DATA: LinksData = {
  profile: {
    name: "Tu Nombre",
    description: "Creador de contenido digital",
    emoji: "👤",
  },
  categories: [
    { id: "todos", name: "Todos", emoji: "🌟" },
    { id: "social", name: "Social", emoji: "📱" },
    { id: "trabajo", name: "Trabajo", emoji: "💼" },
    { id: "contacto", name: "Contacto", emoji: "📞" },
  ],
  links: [
    {
      "emoji": "💼",
      "title": "LinkedIn",
      "description": "Conecta conmigo",
      "url": "https://linkedin.com/in/caldeiro-luism",
      "category": "social"
    },
    {
      "emoji": "🌐",
      "title": "Mi sitio web",
      "description": "Mi CV habilidades y trayectoria",
      "url": "https://caldeix.github.io/me",
      "category": "trabajo"
    },
    {
      "emoji": "📧",
      "title": "Email",
      "description": "Envíame un mensaje",
      "url": "mailto:caldeiro@protonmail.com",
      "category": "contacto"
    },
  ],
}

export const PARTICLE_COUNT = 20
// Usar ruta relativa para que funcione tanto en desarrollo como en producción
export const LINKS_JSON_URL = (typeof window !== 'undefined' ? window.location.pathname.replace(/\/[^/]*$/, '') : '') + "/links.json"
