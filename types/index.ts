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
  emoji: string
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

export interface FallbackNoticeProps {
  isVisible: boolean
}
