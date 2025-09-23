import { ScrambleText } from "@/components/scramble-text"
import { ProjectCard } from "@/components/project-card"
import type { Metadata } from "next"

const projects = [
{
    title: "Think Fast: Math",
    description:
      "Built and deployed a real-time multiplayer math-quiz web app (Next.js frontend, Node.js + Socket.IO backend) on Render.com; implemented server-authoritative scoring, pre-generated question pipeline to avoid race conditions, and a live scoreboard. Managed Git branching and production deployments.",
    role: "Solo Project",
    period: "Aug 2025 -  Sept 2025",
    technologies: ["Next.js", "Node.js", "Express", "Socket.IO", "Render.com", "Git", ".env"],
    images: [
      "/tfm1.webp",
      "/tfm2.webp",
      "/tfm3.webp",
    ],
    href: "https://thinkfastmath.vercel.app",
  },
  {
    title: "Guitar Chorder",
    description:
      "Real-time guitar chord predictor that can recognize major, minor, and 7th chords across 12 root notes using a custom CNN model.",
    role: "Solo — from recording data to frontend",
    period: "Jan 2025 - June 2025",
    technologies: ["TensorFlow", "Python", "Librosa", "Pandas", "Matplotlib", "Next.js", "Tailwind", "JavaScript (JSX)"],
    images: [
      "/GuitarChorde1.webp",
      "/GuitarChorde2.webp",
    ],
    href: "https://github.com/farrfoxr/guitar-chorde",
  },
  {
    title: "ono – Web3 Study Companion",
    description:
      "A Web3-powered study app with a private AI assistant and blockchain-based file storage, built during a hackathon.",
    role: "Secondary Frontend dev, helped out on backend",
    period: "May 2025 - June 2025",
    technologies: ["React.js", "Tailwind", "Motoko", "DFX", "ICP (Internet Computer Protocol)"],
    images: [
      "/ono2.webp",
      "/ono1.webp",
    ],
    href: "https://github.com/farrfoxr/ono",
  },
  {
    title: "Leaf Notes",
    description:
      "A cute, student-friendly chatbot UI that lets you switch between multiple AI models just by adding your own API keys. Chats can be organized into folders, making it perfect for research or studying across different topics and AI tools.",
    role: "Solo Project",
    period: "April 2025 - May 2025",
    technologies: ["Next.js", "Tailwind", "AI APIs"],
    images: [
      "/LeafNotes1.webp",
      "/LeafNotes2.webp",
    ],
    href: "https://leafnotes.vercel.app/",
  },
  {
    title: "Smart Trash Bin",
    description:
      "Team project for a Samsung hackathon; created a smart trash bin that classifies and sorts waste using a CNN and IoT (ESP32) components.",
    role: "Backend engineer",
    period: "Dec 2024 - May 2025",
    technologies: ["Flask (Python)", "TensorFlow", "Keras", "Streamlit", "ESP32", "Micropython", "MQTT", "C (Arduino)"],
    images: [
      "/smartbin1.webp",
      "/smartbin2.webp",
      "/smartbin3.webp",
    ],
    href: "https://github.com/farrfoxr/ShijinForge-stage4",
  },
  {
    title: "Airon",
    description:
      "A real-time air quality predictor that takes any country as input and shows live AQI predictions using machine learning and data from OpenWeather APIs.",
    role: "Solo Project",
    period: "Jan 2024 -  June 2024",
    technologies: ["React", "TypeScript", "Flask", "Python", "Scikit-learn", "Pandas", "Postman",  "Matplotlib"],
    images: [
      "/Airon1.webp",
      "/Airon2.webp",
      "/Airon3.webp",
    ],
    href: "https://farrfoxr.github.io/Airon/",
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
