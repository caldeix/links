"use client"

import { useState, useEffect } from "react"
import type { FaviconMap, LinksData } from "@/types"
import { FALLBACK_DATA, FAVICONS_JSON_URL, LINKS_JSON_URL } from "@/constants/fallback-data"

interface UseLinksDataReturn {
  data: LinksData
  loading: boolean
  usingFallback: boolean
}

// favicons.json lo genera scripts/fetch-favicons.mjs; si no existe, las tarjetas usan el icono genérico
async function loadFavicons(): Promise<FaviconMap> {
  try {
    const response = await fetch(FAVICONS_JSON_URL)
    return response.ok ? await response.json() : {}
  } catch {
    return {}
  }
}

export function useLinksData(): UseLinksDataReturn {
  const [data, setData] = useState<LinksData>(FALLBACK_DATA)
  const [loading, setLoading] = useState(true)
  const [usingFallback, setUsingFallback] = useState(false)

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true)
        const [response, favicons] = await Promise.all([fetch(LINKS_JSON_URL), loadFavicons()])

        if (!response.ok) {
          throw new Error("Error al cargar los datos")
        }

        const jsonData: LinksData = await response.json()
        const links = jsonData.links.map((link) =>
          !link.emoji?.trim() && favicons[link.url] ? { ...link, favicon: favicons[link.url] } : link
        )
        setData({ ...jsonData, links })
        setUsingFallback(false)
      } catch (err) {
        console.warn("No se pudo cargar links.json, usando datos de ejemplo:", err)
        setData(FALLBACK_DATA)
        setUsingFallback(true)
      } finally {
        setLoading(false)
      }
    }

    loadData()
  }, [])

  return { data, loading, usingFallback }
}
