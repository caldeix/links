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
      type="button"
      onClick={onClick}
      aria-pressed={isActive}
      className={`focus-ring px-4 py-2 rounded-full text-sm font-bold transition-all duration-300 flex items-center gap-2 ${
        isActive
          ? "bg-brand-blue-strong text-white shadow-[var(--app-glow-blue)]"
          : "bg-brand-card-hover text-white hover:bg-[rgb(75_85_99)]"
      }`}
    >
      <span aria-hidden="true">{category.emoji}</span>
      <span>{category.name}</span>
    </button>
  )
}
