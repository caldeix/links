import { Github, Star } from "lucide-react"
import type { LinkCardProps } from "@/types"

export function LinkCard({ link, index }: LinkCardProps) {
  const hasGithub = Boolean(link.github)

  return (
    <div
      className="group animate-slide-up"
      style={{ animationDelay: `${index * 0.08}s` }}
    >
      <div
        className="relative rounded-2xl overflow-hidden transition-all duration-300 group-hover:-translate-y-0.5"
        style={{
          background: "var(--app-card)",
          border:     "1px solid var(--app-border)",
          boxShadow:  "var(--app-shadow)",
        }}
        onMouseEnter={(e) => {
          const el = e.currentTarget
          el.style.borderColor = "rgba(212,175,55,0.45)"
          el.style.boxShadow   = "var(--app-glow-gold)"
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget
          el.style.borderColor = "var(--app-border)"
          el.style.boxShadow   = "var(--app-shadow)"
        }}
      >
        {/* ── Favorite star ─────────────────────────────────────── */}
        {link.favorite && (
          <div className="absolute top-2 left-2 z-10 pointer-events-none">
            <Star className="w-3.5 h-3.5" style={{ fill: "var(--app-gold)", color: "var(--app-gold)" }} />
          </div>
        )}

        {/* ── App link ──────────────────────────────────────────── */}
        <a
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex items-center gap-4 p-4 transition-colors duration-200 hover:bg-brand-card-hover"
        >
          {/* Shimmer */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(212,175,55,0.05)] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none" />

          <div className="text-2xl flex-shrink-0">{link.emoji}</div>

          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-brand-text group-hover:text-brand-gold transition-colors">
              {link.title}
            </h3>
            <p className="text-sm text-brand-muted break-words">{link.description}</p>
          </div>

          <div className="text-brand-gold group-hover:translate-x-1 transition-transform flex-shrink-0">
            →
          </div>
        </a>

        {/* ── GitHub strip (apps only) ───────────────────────────── */}
        {hasGithub && (
          <a
            href={link.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 text-xs text-brand-dim
                       hover:text-brand-violet hover:bg-brand-violet-dim
                       transition-all duration-200"
            style={{ borderTop: "1px solid var(--app-border)" }}
          >
            <Github className="w-3 h-3 flex-shrink-0" />
            <span className="font-mono tracking-wide">Ver repositorio en GitHub</span>
          </a>
        )}
      </div>
    </div>
  )
}
