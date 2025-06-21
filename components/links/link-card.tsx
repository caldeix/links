import type { LinkCardProps } from "@/types"

export function LinkCard({ link, index }: LinkCardProps) {
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block group animate-slide-up"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="relative bg-gradient-to-r from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-4 transition-all duration-300 hover:scale-[1.02] hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-400/10 overflow-hidden">
        {/* Efecto de brillo al hover */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />

        <div className="relative flex items-center gap-4">
          <div className="text-2xl flex-shrink-0">{link.emoji}</div>
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-white group-hover:text-cyan-400 transition-colors">{link.title}</h3>
            <p className="text-sm text-gray-400 truncate">{link.description}</p>
          </div>
          <div className="text-cyan-400 group-hover:translate-x-1 transition-transform">→</div>
        </div>
      </div>
    </a>
  )
}
