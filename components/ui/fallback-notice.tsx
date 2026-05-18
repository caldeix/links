import type { FallbackNoticeProps } from "@/types"

export function FallbackNotice({ isVisible }: FallbackNoticeProps) {
  if (!isVisible) return null

  return (
    <div
      className="mb-4 p-3 rounded-lg text-center"
      style={{
        background:  "rgba(255,165,2,0.1)",
        border:      "1px solid rgba(255,165,2,0.3)",
      }}
    >
      <p className="text-brand-warning text-sm">
        ⚠️ Usando datos de ejemplo. Edita{" "}
        <code
          className="px-1 rounded text-xs"
          style={{ background: "var(--app-card)" }}
        >
          public/links.json
        </code>{" "}
        para personalizar.
      </p>
    </div>
  )
}
