import { useMemo } from "react"
import type { Link } from "@/types"

interface UseFilteredLinksProps {
  links: Link[]
  activeCategory: string
}

function sortLinks(links: Link[]): Link[] {
  return [...links].sort((a, b) => {
    if (a.favorite && !b.favorite) return -1
    if (!a.favorite && b.favorite) return 1
    if (a.favorite && b.favorite) return (a.order ?? 0) - (b.order ?? 0)
    return 0
  })
}

export function useFilteredLinks({ links, activeCategory }: UseFilteredLinksProps): Link[] {
  return useMemo(() => {
    const filtered = activeCategory === "todos" ? links : links.filter((l) => l.category === activeCategory)
    return sortLinks(filtered)
  }, [links, activeCategory])
}
