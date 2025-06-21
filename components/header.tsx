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
        Hi! I&apos;m someone who loves to figure out how things work. I explore topics down to the details and edge cases. I use this trait to explore data science and the challenges it brings, but I&apos;m also open 
        to other fields of topic across tech [softwares, cloud, database, IoT]. I enjoy teaching, sharing what I learn, making complex concepts easy to understand for other people.
      </p>
    </header>
  )
}
