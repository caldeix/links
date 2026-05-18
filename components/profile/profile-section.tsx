import type { ProfileSectionProps } from "@/types"
import Image from "next/image"

export function ProfileSection({ profile }: ProfileSectionProps) {
  const isImagePath = profile.emoji.startsWith("/")

  return (
    <div className="text-center mb-8 animate-fade-in">
      <div
        className="w-24 h-24 mx-auto mb-4 rounded-full flex items-center justify-center text-4xl overflow-hidden"
        style={{
          background: "linear-gradient(135deg, var(--app-gold), var(--app-violet))",
          padding: "2px",
          boxShadow: "var(--app-glow-gold)",
        }}
      >
        {isImagePath ? (
          <Image
            src={profile.emoji}
            alt={profile.name}
            width={96}
            height={96}
            className="rounded-full object-cover w-full h-full"
          />
        ) : (
          <div className="w-full h-full rounded-full bg-brand-surface flex items-center justify-center text-4xl">
            {profile.emoji}
          </div>
        )}
      </div>

      <h1
        className="text-2xl font-bold mb-2 bg-clip-text text-transparent"
        style={{ backgroundImage: "linear-gradient(90deg, var(--app-gold), var(--app-violet))" }}
      >
        {profile.name}
      </h1>
      <p className="text-brand-muted text-sm">{profile.description}</p>
    </div>
  )
}
