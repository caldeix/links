import type { FallbackNoticeProps } from "@/types"

export function FallbackNotice({ isVisible }: FallbackNoticeProps) {
  if (!isVisible) return null

  return (
    <div className="mb-4 p-3 bg-yellow-900/20 border border-yellow-600/30 rounded-lg text-center">
      <p className="text-yellow-400 text-sm">
        ⚠️ Usando datos de ejemplo. Edita <code className="bg-gray-800 px-1 rounded">public/links.json</code> para
        personalizar.
      </p>
    </div>
  )
}
