import type { Link } from "@/types"
import { LinkCard } from "./link-card"

interface LinksGridProps {
  links: Link[]
}

export function LinksGrid({ links }: LinksGridProps) {
  if (links.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-4xl mb-4">🔍</div>
        <p className="text-gray-400">No hay links en esta categoría</p>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {links.map((link, index) => (
        <LinkCard key={`${link.category}-${index}`} link={link} index={index} />
      ))}
    </div>
  )
}
