import { Particle } from "./particle"
import { PARTICLE_COUNT } from "@/constants/fallback-data"

export function ParticleBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: PARTICLE_COUNT }, (_, i) => (
        <Particle key={i} index={i} />
      ))}
    </div>
  )
}
