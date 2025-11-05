import { ScrambleText } from "@/components/scramble-text"
import { ProjectCard } from "@/components/project-card"
import type { Metadata } from "next"


const projects = [
{
    title: "Think Fast: Math",
    description: [
      "Deployed a full-stack, real-time multiplayer math game (Next.js, Node.js) with a live backend on Render.com.",
      "Implemented WebSockets (Socket.IO) for persistent, low-latency client-server communication and a live scoreboard.",
      "Engineered a pre-generated question pipeline to ensure data availability and prevent race conditions.",
      "Designed and implemented server-authoritative scoring to maintain data integrity and prevent client-side manipulation.",
      "Managed Git branching strategies and handled production deployments for the backend service."
    ],
    role: "Solo Project",
    period: "2024",
    technologies: ["Next.js", "Node.js", "Socket.IO", "TypeScript", "Render.com", "Git"],
    images: [
      "/tfm1.webp",
      "/tfm2.webp",
      "/tfm3.webp",
    ],
    href: "https://thinkfastmath.vercel.app"
  },
  {
    title: "Guitar Chorder",
    description: [
      "Recorded my own dataset of over 1,000 audio samples (maj, min, maj7, min7 chords) over 2 months.",
      "Engineered features by converting WAV data into Mel Spectrograms, Chroma, and CQT to train a CNN.",
      "Achieved 70% accuracy on the custom dataset and 40% on complex real-world benchmarks (e.g., GuitarSet, IDMT-SMT).",
      "Built a full-stack web app for real-time chord prediction from microphone input (approx. 2-second latency)."
    ],
    role: "Solo Project",
    period: "2024",
    technologies: ["Python", "TensorFlow", "Next.js", "Audio Processing"],
    images: [
      "/GuitarChorde1.webp",
      "/GuitarChorde2.webp",
    ],
    href: "https://github.com/farrfoxr/guitar-chorde"
  },
  {
    title: "ono – Web3 Study Companion",
    description: [
      "Won 2nd place and a 6 Million IDR prize in the Codefest.id team hackathon.",
      "Integrated an LLM API to power the web app's core chatbot tutor feature.",
      "Implemented Web3 user-specific wallets for decentralized, on-chain storage of notes and documents."
    ],
    role: "Full-Stack Developer",
    period: "2023",
    technologies: ["React", "Web3", "LLM API", "Blockchain"],
    images: [
      "/ono2.webp",
      "/ono1.webp",
    ],
    href: "https://github.com/farrfoxr/ono"
  },
  {
    title: "Smart Trash Bin",
    description: [
      "Designed the end-to-end IoT flow for my team: ESP32 captures images, sends to a REST API, and receives servo commands based on model-processed data.",
      "Increased model accuracy by 30% by web-crawling and augmenting a custom image dataset.",
      "Developed a Flask (Python) API to wrap and serve the team's custom CNN model for inference."
    ],
    role: "ML Engineer",
    period: "2023",
    technologies: ["ESP32", "Python", "Flask", "TensorFlow", "IoT"],
    images: [
      "/smartbin1.webp",
      "/smartbin2.webp",
      "/smartbin3.webp",
    ],
    href: "https://github.com/farrfoxr/ShijinForge-stage4"
  },
  {
    title: "Airon",
    description: [
      "Trained a Random Forest regression model on pollutant data (PM2.5, PM10, O3) to predict AQI scores, achieving 90% accuracy on test data.",
      "Developed a full-stack webapp that fetches live pollutant data for any city (via OpenWeather API) and feeds it to the model for real-time AQI prediction."
    ],
    role: "Solo Project",
    period: "2023",
    technologies: ["Python", "Scikit-learn", "React", "OpenWeather API"],
    images: [
      "/Airon1.webp",
      "/Airon2.webp",
      "/Airon3.webp",
    ],
    href: "https://farrfoxr.github.io/Airon/"
  }
];

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
