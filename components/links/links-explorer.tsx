"use client"

import { useState } from "react"
import type { Category, Link } from "@/types"
import { useFilteredLinks } from "@/hooks/use-filtered-links"
import { CategoryTabs } from "@/components/categories/category-tabs"
import { LinkCounter } from "./link-counter"
import { LinksGrid } from "./links-grid"

interface LinksExplorerProps {
  categories: Category[]
  links: Link[]
}

// Única parte interactiva de la página: pestañas de categoría + lista filtrada.
// Los datos llegan ya resueltos desde el build (app/page.tsx), así que el HTML estático contiene todos los enlaces.
export function LinksExplorer({ categories, links }: LinksExplorerProps) {
  const [activeCategory, setActiveCategory] = useState("todos")
  const filteredLinks = useFilteredLinks({ links, activeCategory })

  const activeCategoryName = categories.find((cat) => cat.id === activeCategory)?.name
  const isAllCategories = activeCategory === "todos"

  return (
    <>
      <CategoryTabs
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />
      <LinkCounter
        count={filteredLinks.length}
        categoryName={activeCategoryName}
        isAllCategories={isAllCategories}
      />
      <LinksGrid links={filteredLinks} />
    </>
  )
}
