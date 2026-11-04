import type { ParticleProps } from "@/types"

/* Deterministic pseudo-random to avoid SSR/client hydration mismatch */
function seeded(seed: number): number {
  const x = Math.sin(seed + 1) * 10000
  return x - Math.floor(x)
}

// Azules del DS (blue-500, blue-600) y un azul muy claro para los destellos más brillantes
const COLORS = ["rgb(59 130 246)", "rgb(37 99 235)", "rgb(191 219 254)"]

export function Particle({ index }: ParticleProps) {
  const color = COLORS[index % COLORS.length]
  const size = 2 + Math.round(seeded(index * 4.9) * 2) // 2–4 px

  return (
    <div
      className="sparkle absolute rounded-full"
      style={{
        left:              `${seeded(index * 3.1) * 100}%`,
        top:               `${seeded(index * 7.3) * 100}%`,
        width:             size,
        height:            size,
        animationDelay:    `${seeded(index * 5.2) * 4}s`,
        animationDuration: `${3 + seeded(index * 2.7) * 3}s`,
        background:        color,
        boxShadow:         `0 0 ${size * 3}px ${size}px ${color}`,
      }}
    />
  )
}
