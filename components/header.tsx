import Image from "next/image"
import { ScrambleText } from "@/components/scramble-text"
import { MapPin, Building2, Briefcase } from "lucide-react"

export function Header() {
  return (
    <header className="mb-16 flex flex-col-reverse gap-8 sm:flex-row sm:items-stretch">
      <div className="flex-1 space-y-4">
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
          <div className="flex items-center gap-2">
            <Briefcase className="w-4 h-4" />
            AI Engineer Intern @ Soluix
          </div>
        </div>
        <p className="leading-relaxed animate-fade-in-up text-secondary text-justify">
          Code is cheap now. Knowing what to build is not. I am an <span className="text-primary font-semibold">AI engineer</span> who works like a consultant, the way a <span className="text-primary font-semibold">Forward Deployed Engineer (FDE)</span> does: from a one-sentence brief, I find the people who know the workflow, dig into the real pain point, and ship the solution end to end, built around the tools they already use. I follow new AI closely, apply it only where it gives the business an edge, and keep the core simple and reliable.
        </p>
      </div>
      {/* Photo stretches to the height of the text column, so its top and bottom line up with the name and the last line of the bio. */}
      <div className="relative w-40 aspect-[3/4] sm:aspect-auto sm:w-48 lg:w-56 flex-shrink-0 overflow-hidden rounded-lg border border-secondary animate-fade-in">
        <Image
          src="/images_me/headshot-portrait.webp"
          alt="Farrell Laurensius Suryadi"
          fill
          priority
          unoptimized
          sizes="(min-width: 1024px) 224px, (min-width: 640px) 192px, 160px"
          className="object-cover object-top"
        />
      </div>
    </header>
  )
}
