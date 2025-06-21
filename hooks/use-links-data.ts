"use client"

import { useState, useEffect } from "react"
import type { LinksData } from "@/types"
import { FALLBACK_DATA, LINKS_JSON_URL } from "@/constants/fallback-data"

interface UseLinksDataReturn {
  data: LinksData
  loading: boolean
  usingFallback: boolean
}

export function useLinksData(): UseLinksDataReturn {
  const [data, setData] = useState<LinksData>(FALLBACK_DATA)
  const [loading, setLoading] = useState(true)
  const [usingFallback, setUsingFallback] = useState(false)

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true)
        const response = await fetch(LINKS_JSON_URL)

        if (!response.ok) {
          throw new Error("Error al cargar los datos")
        }

        const jsonData: LinksData = await response.json()
        setData(jsonData)
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
