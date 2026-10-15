import type { LinkCounterProps } from "@/types"

export function LinkCounter({ count, categoryName, isAllCategories }: LinkCounterProps) {
  return (
    <div className="text-center mb-6">
      {/* aria-live: anuncia el nuevo total al cambiar de pestaña */}
      <p className="text-sm text-brand-muted" aria-live="polite">
        {count} {count === 1 ? "enlace" : "enlaces"}
        {!isAllCategories && categoryName && <span> en {categoryName}</span>}
      </p>
    </div>
  )
}
