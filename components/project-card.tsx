import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

interface ProjectCardProps {
  title: string
  description: string
  role: string
  period: string
  achievements: string[]
  technologies: string[]
  href: string
}

export function ProjectCard({ title, description, role, period, achievements, technologies, href }: ProjectCardProps) {
  return (
    <div className="border border-gray-800 rounded-lg p-6 hover:border-accent/50 transition-colors duration-200 group">
      <Link href={href} className="block no-underline">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors duration-200 mb-1">
              {title}
            </h3>
            <div className="text-sm text-gray-400 mb-2">
              {role} ({period})
            </div>
          </div>
          <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-accent transition-all duration-200 group-hover:translate-x-1 group-hover:-translate-y-1 flex-shrink-0" />
        </div>

        <p className="text-gray-400 mb-4 leading-relaxed">{description}</p>

        <div className="mb-4">
          <h4 className="text-sm font-semibold text-white mb-2">achievements</h4>
          <ul className="space-y-1">
            {achievements.map((achievement, index) => (
              <li key={index} className="text-sm text-gray-400 flex items-start">
                <span className="text-accent mr-2">•</span>
                {achievement}
              </li>
            ))}
          </ul>
        </div>

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
