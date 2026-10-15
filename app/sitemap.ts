import type { MetadataRoute } from "next"
import { SITE_URL } from "@/lib/site"

// /links/sitemap.xml (estático). Dar de alta en Google Search Console / Bing Webmaster.
export const dynamic = "force-static"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE_URL, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${SITE_URL}llms.txt`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
  ]
}
