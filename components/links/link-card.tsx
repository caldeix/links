import type { LinkCardProps } from "@/types"

export function LinkCard({ link, index }: LinkCardProps) {
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block group animate-slide-up"
      style={{ animationDelay: `${index * 0.08}s` }}
    >
      <div
        className="relative flex items-center gap-4 rounded-2xl p-4 transition-all duration-300 overflow-hidden"
        style={{
          background:    "var(--app-card)",
          border:        "1px solid var(--app-border)",
          boxShadow:     "var(--app-shadow)",
        }}
        onMouseEnter={(e) => {
          const el = e.currentTarget
          el.style.background   = "var(--app-card-hover)"
          el.style.borderColor  = "rgba(212,175,55,0.45)"
          el.style.boxShadow    = "var(--app-glow-gold)"
          el.style.transform    = "translateY(-2px) scale(1.01)"
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget
          el.style.background   = "var(--app-card)"
          el.style.borderColor  = "var(--app-border)"
          el.style.boxShadow    = "var(--app-shadow)"
          el.style.transform    = ""
        }}
      >
        {/* Shimmer hover effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(212,175,55,0.05)] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none" />

        <div className="text-2xl flex-shrink-0">{link.emoji}</div>

        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-brand-text group-hover:text-brand-gold transition-colors">
            {link.title}
          </h3>
          <p className="text-sm text-brand-muted truncate">{link.description}</p>
        </div>

        <div className="text-brand-gold group-hover:translate-x-1 transition-transform flex-shrink-0">→</div>
      </div>
    </a>
  )
}
