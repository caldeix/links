"use client"

import { useMemo } from "react"
import type { Link } from "@/types"

interface UseFilteredLinksProps {
  links: Link[]
  activeCategory: string
}

export function useFilteredLinks({ links, activeCategory }: UseFilteredLinksProps): Link[] {
  return useMemo(() => {
    return activeCategory === "todos" ? links : links.filter((link) => link.category === activeCategory)
  }, [links, activeCategory])
}
