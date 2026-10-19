import { ScrambleText } from "@/components/scramble-text"
import { ProjectCard } from "@/components/project-card"
import type { Metadata } from "next"


const projects = [
  {
    title: "Soluix – AI Bug-Reporting System: From WhatsApp Chats to Developer Tickets",
    description: [
      "Led the project from a one-line brief: interviewed 5 support and tech staff, found the root cause was communication, and split one overloaded WhatsApp group into a structured WhatsApp Community before adding AI.",
      "Built an AI agent that turns raw WhatsApp complaints into complete MantisBT bug tickets and guides support through bug reproduction with the tech team's knowledge base, with human approval and personal-data masking.",
      "Shipped the MVP in under 2 weeks; now used by 4-8 staff on a live client project.",
      "Designed and deployed a 7-container Docker Compose stack on a VPS: web console, WhatsApp, personal-data masking, knowledge base and LLM gateway services on an internal network, reached only through SSH tunnels."
    ],
    role: "AI Engineer Intern @ Soluix",
    period: "2026",
    technologies: ["TypeScript", "Next.js", "Python", "FastAPI", "Model Context Protocol (MCP)", "Vercel AI SDK", "MantisBT API", "Docker"],
    images: ["/images/bug-system.webp"],
    href: "https://youtu.be/FJQQsH9ioxU"
  },
  {
    title: "Soluix – AI Meeting Minutes Generator for Long Zoom Meetings",
    description: [
      "Started it without a formal assignment after the Head of HR raised a pain point; shipped in 3 days, now used by 9+ staff, cutting minutes preparation from 100 to 5 minutes per meeting.",
      "Built a pipeline that turns 1-3 hour recordings into structured minutes: in-browser audio compression (ffmpeg.wasm), speech-to-text (OpenAI gpt-4o-transcribe) and Claude Sonnet with schema-validated output, exported to PDF and Word.",
      "Added a transcript review step for misheard names from HR feedback; deployed on the company AWS EKS cluster with Docker and GitHub Actions."
    ],
    role: "AI Engineer Intern @ Soluix",
    period: "2026",
    technologies: ["TypeScript", "Vercel AI SDK", "Claude API", "FFmpeg", "PostgreSQL", "Zod", "GitHub Actions", "Kubernetes", "AWS EKS"],
    images: ["/images/mom-generator.webp"],
    href: "https://youtu.be/iYVVHa_LlZ4"
  },
  {
    title: "Tokodrink – WhatsApp Business Virtual Assistant AI Agent",
    description: [
      "Built a production-ready WhatsApp Business assistant for Tokodrink, a retail drink store with 4 branches, with n8n running the full flow: incoming message, AI agent, tools, and reply through the official Meta WhatsApp Cloud API.",
      "Designed a price lookup sub-agent that searches the store's 413-product pricelist, so the main agent quotes real prices and keeps its context small.",
      "Deployed on a Linux VPS with Docker and Caddy (HTTPS), with guardrails for alcohol sales: 21+ age rule, off-topic refusal, no orders or payments in chat, and orders sent to each branch's WhatsApp."
    ],
    role: "AI Engineer (client project)",
    period: "2026",
    technologies: ["n8n", "OpenRouter", "Meta WhatsApp Cloud API", "Docker", "Caddy", "Ubuntu VPS"],
    images: [
      "/images/tokodrink-chat.webp",
      "/images/tokodrink-n8n.webp",
    ]
  },
  {
    title: "Divi – Branching AI Chat (trydivi.app)",
    description: [
      "Built and launched Divi, a branching AI chat app for non-linear thinking: users branch off any message into a side discussion, each branch keeps the history up to the fork, and the main thread stays untouched. Live at trydivi.app, free during beta.",
      "Chose local-first storage: all topics and messages stay in the browser (IndexedDB via Dexie), and the server is only a stateless AI proxy. Trade-off: fast, private and cheap to run, but chats stay on one device. The one exception is the daily cost budget in Upstash Redis, so users cannot reset it by clearing their browser.",
      "Gave the AI a web search tool (Tavily) with a per-request limit, and rendered answers as Markdown, LaTeX math (KaTeX) and Mermaid diagrams; the diagram engine loads only when a diagram appears.",
      "Built a live graph of every branch with sigma.js (WebGL); click a node to jump into that branch, or search all messages to highlight the matches."
    ],
    role: "Solo Project (live product)",
    period: "2025 - present",
    technologies: ["Next.js", "TypeScript", "Vercel AI SDK", "Dexie (IndexedDB)", "Clerk", "Upstash Redis", "Tavily", "KaTeX", "Mermaid", "sigma.js"],
    images: [
      "/images/divi-landing.webp",
      "/images/divi-branch.webp",
      "/images/divi-graph.webp",
    ],
    href: "https://trydivi.app"
  },
  {
    title: "Self-Hosted AI Agent on WhatsApp, Built From Scratch",
    description: [
      "Built a self-hosted personal AI assistant on WhatsApp, similar to OpenClaw and Hermes Agent but with no agent framework: own tool-calling loop on LiteLLM, so the LLM provider can change at runtime.",
      "Engineered the context window: per-chat memory as a markdown wiki, retrieval-augmented generation (RAG) with keyword search instead of a vector database, and auto-compaction that cut cost per turn from about $0.11 to $0.016.",
      "Designed a modular codebase of 41 tools across a main agent and 4 sub-agents; read-only tool calls run in parallel, and 887 tests run offline."
    ],
    role: "Solo Project",
    period: "2026",
    technologies: ["Python", "FastAPI", "LiteLLM", "OpenRouter", "WAHA (WhatsApp HTTP API)", "SQLite FTS5", "Tavily", "Docker Compose", "pytest"]
  },
  {
  title: "Fully Local VLM Webcam Captioning: Real-Time, No Internet",
  description: [
    "Built a real-time webcam captioning web app with a fully local model, with no internet and no cloud API: the model runs on my own RTX 3070 GPU, and Next.js sends a frame every 3 seconds as a binary upload (no base64) to a local FastAPI backend.",
    "Selected Moondream2, a small vision-language model (VLM) run with Hugging Face Transformers, after considering Ollama, Qwen-VL and LLaVA options that were too large or slow for 8 GB of GPU memory; loaded it once in bfloat16 to stay in GPU memory, with captions in under 2 seconds.",
    "Enabled CUDA GPU inference under WSL2 on Windows by matching NVIDIA driver, CUDA and PyTorch versions, after CPU-only inference was too slow for real-time use."
  ],
  role: "AI Engineer / Full-Stack Developer",
  period: "2025",
  technologies: ["Hugging Face Transformers","MoonDream","FastAPI","Next.js","PyTorch","NVIDIA CUDA","WSL2"],
  images: [
    "/images/captioning-demo.webp",
    "/images/moondream1.webp",
  ],
  href: "https://github.com/farrfoxr/realtime-captioning",
  demo: "https://youtu.be/2xYc9B5lcT0"
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
      "/images/GuitarChorde1.webp",
      "/images/GuitarChorde2.webp",
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
    role: "Full-Stack Developer -  Team Hackathon 2nd Place Winner",
    period: "2025",
    technologies: ["React", "Web3", "LLM API", "Blockchain"],
    images: [
      "/images/ono2.webp",
      "/images/ono1.webp",
    ],
    href: "https://github.com/farrfoxr/ono"
  },
  {
    title: "Smart Trash Bin",
    description: [
      "Designed the end-to-end ML + IoT flow for my team: ESP32 captures images, sends to a REST API, and receives servo commands based on model-processed data.",
      "Increased model accuracy by 30% by web-crawling and augmenting a custom image dataset.",
      "Developed a Flask (Python) API to wrap and serve the team's custom CNN model. Routed live predictions from the API to a Ubidots dashboard, a MongoDB database, and back to the ESP32 for hardware control."
    ],
    role: "ML Engineer - Samsung SIC Competition",
    period: "2025",
    technologies: ["ESP32", "Python", "Flask", "TensorFlow", "MongoDB", "Streamlit", "Ubidots"],
    images: [
      "/images/smartbin1.webp",
      "/images/smartbin2.webp",
      "/images/smartbin3.webp",
    ],
    href: "https://github.com/farrfoxr/ShijinForge-stage4"
  },
];

export default function ProjectsPage() {
  return (
    <main className="animate-fade-in-up">
      <h1 className="text-4xl font-bold mb-8 text-primary">
        <span className="text-accent mr-2">*</span>
        <ScrambleText text="projects" />
      </h1>

      <p className="text-secondary mb-12 leading-relaxed">
        Projects I have built, newest first. Work projects come first. Click a card to open its demo video, live site or code. Cards for private code do not click.
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
