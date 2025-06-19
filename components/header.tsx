import { ScrambleText } from "@/components/scramble-text"
import { MapPin, Building2 } from "lucide-react"

export function Header() {
  return (
    <header className="mb-16 space-y-4">
      <h1 className="text-4xl font-bold mb-4 animate-fade-in text-white">
        <span className="inline-block">
          <ScrambleText text="your full name" />
        </span>
      </h1>
      <div className="flex flex-col gap-2 text-gray-400">
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4" />
          your city, your country
        </div>
        <div className="flex items-center gap-2">
          <Building2 className="w-4 h-4" />
          your current role @ your company/university
        </div>
      </div>
      <p className="leading-relaxed animate-fade-in-up">
        I&apos;m a [your age] y/o [your study/profession] student/professional. I love building things and solving
        problems. I enjoy [your interests, e.g., language design, theoretical computer science] and I live on the
        terminal. If I&apos;m not coding, I&apos;m probably [your hobbies, e.g., doing cardistry, watching movies or
        obsessing over mechanical keyboards].
      </p>
    </header>
  )
}
