import { useMemo } from "react"
import type { Link } from "@/types"

interface UseFilteredLinksProps {
  links: Link[]
  activeCategory: string
}

export function useFilteredLinks({ links, activeCategory }: UseFilteredLinksProps): Link[] {
  return useMemo(
    () => (activeCategory === "todos" ? links : links.filter((l) => l.category === activeCategory)),
    [links, activeCategory],
  )
}
