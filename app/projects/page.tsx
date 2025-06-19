import { ScrambleText } from "@/components/scramble-text"
import { ProjectCard } from "@/components/project-card"
import type { Metadata } from "next"

const projects = [
  {
    title: "Placeholder Project X",
    description: "A tool to simplify complex tasks in XYZ domain.",
    role: "Creator and Maintainer",
    period: "Jan 20XX - Present",
    achievements: [
      "Grew project to 500+ GitHub stars (placeholder)",
      "Implemented a scalable architecture (placeholder)",
      "Received positive feedback from users (placeholder)",
    ],
    technologies: ["TypeScript", "Next.js", "React", "Tailwind CSS", "Node.js"],
    href: "https://github.com/yourusername/project-x",
  },
  {
    title: "Placeholder Project Y",
    description: "An innovative solution for data visualization.",
    role: "Developer",
    period: "Mar 20XX - Aug 20XX",
    achievements: [
      "Developed interactive dashboards (placeholder)",
      "Improved data loading performance (placeholder)",
      "Contributed to open-source community (placeholder)",
    ],
    technologies: ["Python", "D3.js", "Flask", "PostgreSQL"],
    href: "https://github.com/yourusername/project-y",
  },
  {
    title: "Placeholder Project Z",
    description: "A CLI tool for automating developer workflows.",
    role: "Creator",
    period: "Feb 20XX",
    achievements: [
      "Built a robust command-line interface (placeholder)",
      "Streamlined deployment processes (placeholder)",
      "Published to npm (placeholder)",
    ],
    technologies: ["Rust", "CLI-framework-name", "Shell Scripting"],
    href: "https://github.com/yourusername/project-z",
  },
]

export default function ProjectsPage() {
  return (
    <main className="animate-fade-in-up">
      <h1 className="text-4xl font-bold mb-8 text-white">
        <span className="text-accent mr-2">*</span>
        <ScrambleText text="projects" />
      </h1>

      <p className="text-gray-400 mb-12 leading-relaxed">
        Here are some of the projects I&apos;ve worked on. I enjoy building tools that simplify tasks and exploring new
        technologies.
      </p>

      <div className="space-y-12">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </main>
  )
}

export const metadata: Metadata = {
  title: "Projects",
  description: "Some of the projects I've worked on.",
}
