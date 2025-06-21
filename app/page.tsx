"use client"

import { useState } from "react"
import { useLinksData } from "@/hooks/use-links-data"
import { useFilteredLinks } from "@/hooks/use-filtered-links"
import { LoadingSpinner } from "@/components/ui/loading-spinner"
import { ParticleBackground } from "@/components/ui/particle-background"
import { FallbackNotice } from "@/components/ui/fallback-notice"
import { MainContainer } from "@/components/layout/main-container"
import { ProfileSection } from "@/components/profile/profile-section"
import { CategoryTabs } from "@/components/categories/category-tabs"
import { LinkCounter } from "@/components/links/link-counter"
import { LinksGrid } from "@/components/links/links-grid"
import { Footer } from "@/components/layout/footer"

interface Link {
  emoji: string
  title: string
  description: string
  url: string
  category: string
}

interface Category {
  id: string
  name: string
  emoji: string
}

interface Profile {
  name: string
  description: string
  emoji: string
}

interface LinksData {
  profile: Profile
  categories: Category[]
  links: Link[]
}

// Datos de fallback en caso de que no se pueda cargar el JSON
const fallbackData: LinksData = {
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
      emoji: "📱",
      title: "Instagram",
      description: "@tu_usuario",
      url: "https://instagram.com/tu_usuario",
      category: "social",
    },
    {
      emoji: "🐦",
      title: "Twitter",
      description: "Sígueme en Twitter",
      url: "https://twitter.com/tu_usuario",
      category: "social",
    },
    {
      emoji: "💻",
      title: "GitHub",
      description: "Mis proyectos",
      url: "https://github.com/tu_usuario",
      category: "trabajo",
    },
    {
      emoji: "📧",
      title: "Email",
      description: "Envíame un mensaje",
      url: "mailto:tu@email.com",
      category: "contacto",
    },
  ],
}

export default function LinkTree() {
  const [activeCategory, setActiveCategory] = useState("todos")
  const { data, loading, usingFallback } = useLinksData()
  const filteredLinks = useFilteredLinks({ links: data.links, activeCategory })

  if (loading) {
    return <LoadingSpinner />
  }

  const activeCategoryName = data.categories.find((cat) => cat.id === activeCategory)?.name
  const isAllCategories = activeCategory === "todos"

  return (
    <MainContainer>
      <>
        <ParticleBackground />

        <FallbackNotice isVisible={usingFallback} />

        <ProfileSection profile={data.profile} />

        <CategoryTabs categories={data.categories} activeCategory={activeCategory} onCategoryChange={setActiveCategory} />

        <LinkCounter count={filteredLinks.length} categoryName={activeCategoryName} isAllCategories={isAllCategories} />

        <LinksGrid links={filteredLinks} />

        <Footer usingFallback={usingFallback} />
      </>
    </MainContainer>
  )
}
