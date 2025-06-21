import type { ProfileSectionProps } from "@/types"
import Image from "next/image"

export function ProfileSection({ profile }: ProfileSectionProps) {
  return (
    <div className="text-center mb-8 animate-fade-in">
      <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-400 to-purple-600 flex items-center justify-center text-4xl shadow-lg shadow-cyan-400/20">
        <Image
          src={profile.emoji}
          alt={profile.name}
          width={100}
          height={100}
          className="cursor-pointer rounded-full"
        />
      </div>
      <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mb-2">
        {profile.name}
      </h1>
      <p className="text-gray-400">{profile.description}</p>
    </div>
  )
}
