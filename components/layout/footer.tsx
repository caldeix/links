import { Heart } from "lucide-react"

interface FooterProps {
  currentYear?: number
}

export function Footer({ currentYear = new Date().getFullYear() }: FooterProps) {
  return (
    <footer className="relative z-10 text-center mt-12 pt-8 border-t border-brand-card-hover">
      <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-6 text-sm text-brand-muted">
        <span className="flex items-center gap-1 whitespace-nowrap">
          Desarrollado por{" "}
          <a
            href="https://linkedin.com/in/caldeiro-luism"
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring rounded font-bold text-brand-blue hover:text-white transition-colors flex items-center gap-1"
          >
            Caldeix <Heart className="h-3 w-3 fill-brand-danger text-brand-danger" aria-hidden="true" />
            <span className="sr-only">(se abre en una pestaña nueva)</span>
          </a>
        </span>
        <span className="hidden md:block text-brand-dim" aria-hidden="true">•</span>
        <span className="whitespace-nowrap">© {currentYear} Copyright</span>
      </div>
    </footer>
  )
}
