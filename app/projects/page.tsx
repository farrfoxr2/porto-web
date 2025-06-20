import { ScrambleText } from "@/components/scramble-text"
import { ProjectCard } from "@/components/project-card"
import type { Metadata } from "next"

const projects = [
  {
    title: "create-t3-app",
    description:
      "A CLI tool to bootstrap full-stack TypeScript applications with the T3 stack. Simplifies the setup process and includes best practices for modern web development.",
    role: "Creator and Maintainer",
    period: "Jun 2022 - Present",
    technologies: ["TypeScript", "Next.js", "tRPC", "Prisma", "Tailwind CSS", "NextAuth.js"],
    images: [
      "/cat-4.webp",
      "/milk-5.webp",
      "/skarpsill-3.webp",
    ],
    href: "https://github.com/t3-oss/create-t3-app",
  },
  {
    title: "mini-git",
    description:
      "A simplified implementation of Git built from scratch to understand version control internals. Implements core Git commands and demonstrates system programming concepts.",
    role: "Creator",
    period: "Jul 2024",
    technologies: ["Rust", "File Systems", "Cryptography", "CLI Design"],
    images: ["/placeholder.svg?height=192&width=400", "/placeholder.svg?height=192&width=400"],
    href: "https://github.com/yourusername/mini-git",
  },
  {
    title: "ai-code-reviewer",
    description:
      "An intelligent code review assistant that integrates with GitHub to provide automated, context-aware feedback on pull requests using advanced language models.",
    role: "Lead Developer",
    period: "Mar 2024 - Aug 2024",
    technologies: ["Python", "OpenAI API", "GitHub Actions", "Docker", "FastAPI"],
    images: [
      "/placeholder.svg?height=192&width=400",
      "/placeholder.svg?height=192&width=400",
      "/placeholder.svg?height=192&width=400",
    ],
    href: "https://github.com/yourusername/ai-code-reviewer",
  },
]

export default function ProjectsPage() {
  return (
    <main className="animate-fade-in-up">
      <h1 className="text-4xl font-bold mb-8 text-primary">
        <span className="text-accent mr-2">*</span>
        <ScrambleText text="projects" />
      </h1>

      <p className="text-secondary mb-12 leading-relaxed">
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
