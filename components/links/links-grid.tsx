import type { Link } from "@/types"
import { LinkCard } from "./link-card"

interface LinksGridProps {
  links: Link[]
}

export function LinksGrid({ links }: LinksGridProps) {
  if (links.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-4xl mb-4" aria-hidden="true">🔍</div>
        <p className="text-brand-muted">No hay enlaces en esta categoría</p>
      </div>
    )
  }

  return (
    <ul className="space-y-3">
      {links.map((link, index) => (
        <li key={link.url}>
          <LinkCard link={link} index={index} />
        </li>
      ))}
    </ul>
  )
}
