import type { ParticleProps } from "@/types"

/* Deterministic pseudo-random to avoid SSR/client hydration mismatch */
function seeded(seed: number): number {
  const x = Math.sin(seed + 1) * 10000
  return x - Math.floor(x)
}

const COLORS = ["var(--app-gold)", "var(--app-violet)", "rgba(255,255,255,0.6)"]

export function Particle({ index }: ParticleProps) {
  return (
    <div
      className="absolute w-1 h-1 rounded-full opacity-30 animate-pulse"
      style={{
        left:              `${seeded(index * 3.1) * 100}%`,
        top:               `${seeded(index * 7.3) * 100}%`,
        animationDelay:    `${seeded(index * 5.2) * 3}s`,
        animationDuration: `${2 + seeded(index * 2.7) * 2}s`,
        background:        COLORS[index % COLORS.length],
      }}
    />
  )
}
