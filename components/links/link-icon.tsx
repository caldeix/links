import { useState } from "react"
import Image from "next/image"
import { Globe } from "lucide-react"
import type { Link } from "@/types"

// next/image con unoptimized:true NO añade basePath al src automáticamente.
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? ""

interface LinkIconProps {
  link: Link
}

// Emoji si lo hay; si no, el favicon descargado en build; si tampoco, un globo genérico.
export function LinkIcon({ link }: LinkIconProps) {
  const [faviconFailed, setFaviconFailed] = useState(false)
  const emoji = link.emoji?.trim()

  if (emoji) {
    return <div className="text-2xl flex-shrink-0" aria-hidden="true">{emoji}</div>
  }

  return (
    <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center">
      {link.favicon && !faviconFailed ? (
        <Image
          src={`${BASE_PATH}${link.favicon}`}
          alt=""
          width={28}
          height={28}
          className="w-7 h-7 rounded-md object-contain"
          onError={() => setFaviconFailed(true)}
        />
      ) : (
        <Globe className="w-6 h-6 text-brand-muted" aria-hidden="true" />
      )}
    </div>
  )
}
