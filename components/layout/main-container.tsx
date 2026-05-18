import type { ReactNode } from "react"

interface MainContainerProps {
  children: ReactNode
}

export function MainContainer({ children }: MainContainerProps) {
  return (
    <div className="min-h-screen bg-brand-bg text-brand-text">
      <div className="relative z-10 max-w-md mx-auto px-4 py-8">{children}</div>
    </div>
  )
}
