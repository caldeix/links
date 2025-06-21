import type { ReactNode } from "react"

interface MainContainerProps {
  children: ReactNode
}

export function MainContainer({ children }: MainContainerProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <div className="relative z-10 max-w-md mx-auto px-4 py-8">{children}</div>
    </div>
  )
}
