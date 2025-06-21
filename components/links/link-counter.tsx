import type { LinkCounterProps } from "@/types"

export function LinkCounter({ count, categoryName, isAllCategories }: LinkCounterProps) {
  return (
    <div className="text-center mb-6">
      <p className="text-sm text-gray-400">
        {count} {count === 1 ? "enlace" : "enlaces"}
        {!isAllCategories && categoryName && <span> en {categoryName}</span>}
      </p>
    </div>
  )
}
