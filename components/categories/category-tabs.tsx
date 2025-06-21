"use client"

import type { CategoryTabsProps } from "@/types"
import { CategoryTab } from "./category-tab"

export function CategoryTabs({ categories, activeCategory, onCategoryChange }: CategoryTabsProps) {
  return (
    <div className="flex flex-wrap justify-center gap-2 mb-8">
      {categories.map((category) => (
        <CategoryTab
          key={category.id}
          category={category}
          isActive={activeCategory === category.id}
          onClick={() => onCategoryChange(category.id)}
        />
      ))}
    </div>
  )
}
