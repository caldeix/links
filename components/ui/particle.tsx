import type { ParticleProps } from "@/types"

export function Particle({ index }: ParticleProps) {
  return (
    <div
      className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-30 animate-pulse"
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 3}s`,
        animationDuration: `${2 + Math.random() * 2}s`,
      }}
    />
  )
}
