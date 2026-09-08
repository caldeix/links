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

export default function LinkTree() {
  const [activeCategory, setActiveCategory] = useState("todos")
  const { data, loading, usingFallback } = useLinksData()
  const filteredLinks = useFilteredLinks({ links: data.links, activeCategory })

  if (loading) return <LoadingSpinner />

  const activeCategoryName = data.categories.find((cat) => cat.id === activeCategory)?.name
  const isAllCategories = activeCategory === "todos"

  return (
    <MainContainer>
      <ParticleBackground />
      <FallbackNotice isVisible={usingFallback} />
      <ProfileSection profile={data.profile} />
      <CategoryTabs
        categories={data.categories}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />
      <LinkCounter
        count={filteredLinks.length}
        categoryName={activeCategoryName}
        isAllCategories={isAllCategories}
      />
      <LinksGrid links={filteredLinks} />
      <Footer />
    </MainContainer>
  )
}
