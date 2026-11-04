import type { ProfileSectionProps } from "@/types"
import Image from "next/image"

// next/image con unoptimized:true NO añade basePath al src automáticamente.
// Lo añadimos manualmente usando NEXT_PUBLIC_BASE_PATH.
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? ""

export function ProfileSection({ profile }: ProfileSectionProps) {
  const isImagePath = profile.emoji.startsWith("/")

  return (
    <div className="text-center mb-8 animate-fade-in">
      <div
        className="w-24 h-24 mx-auto mb-4 rounded-full flex items-center justify-center text-4xl overflow-hidden"
        style={{
          background: "var(--app-gradient)",
          padding: "2px",
          boxShadow: "var(--app-glow-blue)",
        }}
      >
        {isImagePath ? (
          <Image
            src={`${BASE_PATH}${profile.emoji}`}
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

      <h1 className="font-title text-4xl leading-tight font-semibold mb-2 bg-radial-blue bg-clip-text text-transparent text-balance">
        {profile.name}
      </h1>
      {profile.jobTitle && (
        <p className="text-brand-text text-sm font-medium tracking-wide mb-1">{profile.jobTitle}</p>
      )}
      <p className="text-brand-muted text-sm">{profile.description}</p>
    </div>
  )
}
