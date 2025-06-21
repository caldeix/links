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
      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
        isActive
          ? "bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg shadow-cyan-500/25"
          : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-700"
      }`}
    >
      <span>{category.emoji}</span>
      <span>{category.name}</span>
    </button>
  )
}
