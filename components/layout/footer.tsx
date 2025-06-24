import { Heart } from "lucide-react"

interface FooterProps {
  usingFallback: boolean
  currentYear: number
}

export function Footer({ usingFallback, currentYear }: FooterProps) {
  return (
    <div className="text-center mt-12 pt-8 border-t border-gray-800">
      <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-6 text-sm text-gray-400">
        <span className="flex items-center gap-1 whitespace-nowrap">
          Desarrollado por{" "}
          <a
            href="https://caldeix.github.io/links/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-1"
          >
            Caldeix <Heart className="h-3 w-3 fill-red-500 text-red-500" />
          </a>
        </span>
        <span className="hidden md:block">•</span>
        <span className="whitespace-nowrap">
          © {currentYear} Copyright
        </span>
        <span className="hidden md:block">•</span>
        <span className="text-gray-500 whitespace-nowrap">
          {usingFallback ? "Datos de ejemplo" : "Cargado desde JSON"}
        </span>
      </div>
    </div>
  )
}
