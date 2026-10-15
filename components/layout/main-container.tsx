import type { ReactNode } from "react"

interface MainContainerProps {
  children: ReactNode
}

// Marco de la página: fondo y columna centrada. Los landmarks (<main>, <footer>) los pone app/page.tsx.
export function MainContainer({ children }: MainContainerProps) {
  return (
    <div className="min-h-screen bg-brand-bg text-brand-text">
      <div className="relative max-w-md mx-auto px-4 py-8">{children}</div>
    </div>
  )
}
