import { Particle } from "./particle"
import { PARTICLE_COUNT } from "@/constants"

export function ParticleBackground() {
  return (
    <div className="particles fixed inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {Array.from({ length: PARTICLE_COUNT }, (_, i) => (
        <Particle key={i} index={i} />
      ))}
    </div>
  )
}
