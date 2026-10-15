import { Github, Star } from "lucide-react"
import type { LinkCardProps } from "@/types"
import { sameUrl } from "@/lib/site"
import { LinkIcon } from "./link-icon"

const NEW_TAB = <span className="sr-only">(se abre en una pestaña nueva)</span>

export function LinkCard({ link, index }: LinkCardProps) {
  // Sin franja si el enlace principal ya es el repositorio (proyectos sin web, p. ej. Ambient Wall)
  const showGithub = Boolean(link.github) && !sameUrl(link.github, link.url)

  return (
    <div
      className="group animate-slide-up"
      style={{ animationDelay: `${index * 0.08}s` }}
    >
      {/* Borde y brillo de hover/foco en globals.css (.link-card) */}
      <div className="link-card relative rounded-2xl overflow-hidden transition-all duration-300 group-hover:-translate-y-0.5">
        {/* ── Favorite star ─────────────────────────────────────── */}
        {link.favorite && (
          <div className="absolute top-2 left-2 z-10 pointer-events-none">
            <Star
              className="w-3.5 h-3.5"
              style={{ fill: "var(--app-gold)", color: "var(--app-gold)" }}
              aria-label="Favorito"
              role="img"
            />
          </div>
        )}

        {/* ── App link ──────────────────────────────────────────── */}
        <a
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="focus-ring-inset relative flex items-center gap-4 p-4 transition-colors duration-200 hover:bg-brand-card-hover"
        >
          {/* Shimmer */}
          <div className="shimmer absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(212,175,55,0.05)] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none" />

          <LinkIcon link={link} />

          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-brand-text group-hover:text-brand-gold transition-colors">
              {link.title}
            </h3>
            <p className="text-sm text-brand-muted break-words">{link.description}</p>
            {NEW_TAB}
          </div>

          <div className="text-brand-gold group-hover:translate-x-1 transition-transform flex-shrink-0" aria-hidden="true">
            →
          </div>
        </a>

        {/* ── GitHub strip ──────────────────────────────────────── */}
        {showGithub && (
          <a
            href={link.github}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring-inset flex items-center gap-2 px-4 py-2 text-xs text-brand-muted
                       hover:text-brand-violet hover:bg-brand-violet-dim
                       transition-all duration-200"
            style={{ borderTop: "1px solid var(--app-border)" }}
          >
            <Github className="w-3 h-3 flex-shrink-0" aria-hidden="true" />
            <span className="font-mono tracking-wide">
              Ver repositorio en GitHub<span className="sr-only"> de {link.title}</span>
            </span>
            {NEW_TAB}
          </a>
        )}
      </div>
    </div>
  )
}
