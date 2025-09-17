import { ScrambleText } from "@/components/scramble-text"
import { MapPin, Building2 } from "lucide-react"

export function Header() {
  return (
    <header className="mb-16 space-y-4">
      <h1 className="text-4xl font-bold mb-4 animate-fade-in text-primary">
        <span className="inline-block">
          <ScrambleText text="Farrell Suryadi" />
        </span>
      </h1>
      <div className="flex flex-col gap-2 text-secondary">
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4" />
          Tangerang, Indonesia
        </div>
        <div className="flex items-center gap-2">
          <Building2 className="w-4 h-4" />
          Computer Science student @ BINUS University
        </div>
      </div>
      <p className="leading-relaxed animate-fade-in-up text-secondary">
        Hi! I&apos;m someone who loves to figure out how things work, exploring topics down to the details and edge cases. I aim to be a <span className="text-primary font-semibold">Data Scientist</span> with strong <span className="text-primary font-semibold">MLOps</span> strengths: helping businesses use raw data to uncover hidden insights, build practical solutions and AI models tailored to their needs, ship models into web and mobile apps, and advise teams on what data to collect from their apps. I enjoy teaching and sharing what I learn, making complex concepts easy to understand for other people.
      </p>
    </header>
  )
}
