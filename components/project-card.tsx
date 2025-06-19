import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import Image from "next/image"

interface ProjectCardProps {
  title: string
  description: string
  role: string
  period: string
  technologies: string[]
  images: string[]
  href: string
}

export function ProjectCard({ title, description, role, period, technologies, images, href }: ProjectCardProps) {
  return (
    <div className="border border-gray-800 rounded-lg p-6 hover:border-accent/50 transition-colors duration-200 group">
      <Link href={href} className="block no-underline">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors duration-200 mb-1">
              {title}
            </h3>
            <div className="text-sm text-gray-400 mb-4">
              {role} ({period})
            </div>
          </div>
          <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-accent transition-all duration-200 group-hover:translate-x-1 group-hover:-translate-y-1 flex-shrink-0" />
        </div>

        {/* Image Gallery */}
        <div className="mb-4 h-48 relative overflow-hidden rounded-lg bg-gray-800">
          {/* Main Image - Always Visible */}
          <div className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-0">
            <div className="relative w-full h-full">
              {/* Blurred background */}
              <Image
                src={images[0] || "/placeholder.svg?height=192&width=400"}
                alt=""
                fill
                className="object-cover blur-sm scale-110"
              />
              {/* Main image */}
              <Image
                src={images[0] || "/placeholder.svg?height=192&width=400"}
                alt={`${title} screenshot`}
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Image Grid - Visible on Hover */}
          {images.length > 1 && (
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="grid grid-cols-2 gap-1 h-full">
                {/* First image takes left half */}
                <div className="relative overflow-hidden rounded">
                  {/* Blurred background */}
                  <Image
                    src={images[0] || "/placeholder.svg?height=192&width=200"}
                    alt=""
                    fill
                    className="object-cover blur-sm scale-110"
                  />
                  {/* Main image */}
                  <Image
                    src={images[0] || "/placeholder.svg?height=192&width=200"}
                    alt={`${title} screenshot 1`}
                    fill
                    className="object-contain"
                  />
                </div>

                {/* Right side - stack remaining images */}
                <div className="flex flex-col gap-1">
                  <div className="relative flex-1 overflow-hidden rounded">
                    {/* Blurred background */}
                    <Image
                      src={images[1] || "/placeholder.svg?height=96&width=200"}
                      alt=""
                      fill
                      className="object-cover blur-sm scale-110"
                    />
                    {/* Main image */}
                    <Image
                      src={images[1] || "/placeholder.svg?height=96&width=200"}
                      alt={`${title} screenshot 2`}
                      fill
                      className="object-contain"
                    />
                  </div>
                  {images[2] && (
                    <div className="relative flex-1 overflow-hidden rounded">
                      {/* Blurred background */}
                      <Image
                        src={images[2] || "/placeholder.svg?height=96&width=200"}
                        alt=""
                        fill
                        className="object-cover blur-sm scale-110"
                      />
                      {/* Main image */}
                      <Image
                        src={images[2] || "/placeholder.svg?height=96&width=200"}
                        alt={`${title} screenshot 3`}
                        fill
                        className="object-contain"
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Image Count Indicator */}
          {images.length > 1 && (
            <div className="absolute top-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {images.length} images
            </div>
          )}
        </div>

        <p className="text-gray-400 mb-4 leading-relaxed">{description}</p>

        <div>
          <h4 className="text-sm font-semibold text-white mb-2">technologies</h4>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span key={index} className="px-2 py-1 text-xs bg-gray-800 text-gray-300 rounded border border-gray-700">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </div>
  )
}
