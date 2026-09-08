import { Heart } from "lucide-react"

interface FooterProps {
  currentYear?: number
}

export function Footer({ currentYear = new Date().getFullYear() }: FooterProps) {
  return (
    <div className="text-center mt-12 pt-8 border-t border-brand-card">
      <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-6 text-sm text-brand-muted">
        <span className="flex items-center gap-1 whitespace-nowrap">
          Desarrollado por{" "}
          <a
            href="https://linkedin.com/in/caldeiro-luism"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-gold hover:text-brand-violet transition-colors flex items-center gap-1"
          >
            Caldeix <Heart className="h-3 w-3 fill-red-500 text-red-500" />
          </a>
        </span>
        <span className="hidden md:block text-brand-dim">•</span>
        <span className="whitespace-nowrap">© {currentYear} Copyright</span>
      </div>
    </div>
  )
}
