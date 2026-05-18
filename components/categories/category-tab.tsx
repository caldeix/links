"use client"

import type { Category } from "@/types"

interface CategoryTabProps {
  category: Category
  isActive: boolean
  onClick: () => void
}

export function CategoryTab({ category, isActive, onClick }: CategoryTabProps) {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2"
      style={
        isActive
          ? {
              background:  "linear-gradient(135deg, var(--app-gold), var(--app-violet))",
              color:       "#fff",
              boxShadow:   "var(--app-glow-gold)",
            }
          : {
              background:  "var(--app-card)",
              color:       "var(--app-muted)",
              border:      "1px solid var(--app-border)",
            }
      }
    >
      <span>{category.emoji}</span>
      <span>{category.name}</span>
    </button>
  )
}
