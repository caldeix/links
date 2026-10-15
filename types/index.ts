export interface Link {
  /** Si se omite o es "", se usa el favicon de `url` (generado en build) */
  emoji?: string
  title: string
  description: string
  url: string
  category: string
  github?: string
  favorite?: boolean
  order?: number
  /** Generado: ruta del favicon descargado por scripts/fetch-favicons.mjs */
  favicon?: string
}

/** public/favicons/favicons.json → { [url]: "/favicons/<slug>.<ext>" } */
export type FaviconMap = Record<string, string>

export interface Category {
  id: string
  name: string
  emoji: string
}

export interface Profile {
  name: string
  description: string
  /** Emoji o ruta de una imagen de public/ (p. ej. "/profile-pic.jpg") */
  emoji: string
  /** SEO/GEO: rol profesional (JSON-LD jobTitle) */
  jobTitle?: string
  /** SEO/GEO: otros nombres con los que te buscan (JSON-LD alternateName) */
  alternateName?: string[]
  /** SEO/GEO: temas de especialidad (JSON-LD knowsAbout) */
  knowsAbout?: string[]
}

export interface LinksData {
  profile: Profile
  categories: Category[]
  links: Link[]
}

export interface ParticleProps {
  index: number
}

export interface LinkCardProps {
  link: Link
  index: number
}

export interface CategoryTabsProps {
  categories: Category[]
  activeCategory: string
  onCategoryChange: (categoryId: string) => void
}

export interface ProfileSectionProps {
  profile: Profile
}

export interface LinkCounterProps {
  count: number
  categoryName?: string
  isAllCategories: boolean
}
