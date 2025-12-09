import { ScrambleText } from "@/components/scramble-text"
import { ProjectCard } from "@/components/project-card"
import type { Metadata } from "next"


const projects = [
  {
  title: "Real-Time Local Image Captioning System (GPU-Accelerated)",
  description: [
    "Built a real-time image captioning system running fully on a local RTX-3070, streaming live camera input and updating captions every 3 seconds via a Next.js frontend and FastAPI backend.",
    "Selected Hugging Face’s MoonDream (SigLIP + Phi) for fast on-device captioning after researching Ollama, Qwen, and LLaVA-style VL models, achieving consistent sub-2-second inference.",
    "Enabled GPU-accelerated inference under WSL by configuring CUDA-compatible NVIDIA drivers and environment tooling to bypass Windows GPU limitations.",
    "Optimized data transfer with binary multipart uploads (no base64/JSON), returning captions and inference time for real-time performance feedback."
  ],
  role: "AI Engineer / Full-Stack Developer",
  period: "2025",
  technologies: ["Hugging Face Transformers","MoonDream","FastAPI","Next.js","PyTorch","NVIDIA CUDA","WSL2"],
  images: [
    "/images/moondream1.webp",
    "/images/moondream1.webp",
  ],
  href: "https://github.com/farrfoxr/realtime-captioning"
  },
  {
    title: "Pokémon EDA & Imbalanced Classification",
    description: [
      "Conducted in-depth EDA on a Kaggle dataset to uncover insights, such as the correlation between a Pokémon's physical attributes and its combat statistics.",
      "Engineered a classifier to detect legendary Pokémon, solving a classic imbalanced data problem (rare class) that is methodologically similar to financial fraud detection.",
      "Systematically benchmarked 6 models, comparing Random Forest, XGBoost, and hyperparameter-tuned variants against SMOTE-balanced data to optimize for minority class detection.",
      "Built a reusable evaluation pipeline to benchmark models using F1, ROC AUC, and PR AUC. Validated the final model against an unseen 'real-world' test set (newer Pokémon generations) to prove generalization."
    ],
    role: "Solo Project",
    period: "2025",
    technologies: ["Python", "Pandas", "Scikit-learn", "XGBoost", "SMOTE", "Matplotlib", "Seaborn"],
    images: [
      "/images/pokemonMain.webp",
      "/images/pokemon1.webp",
      "/images/pokemon2.webp"
    ],
    href: "https://colab.research.google.com/drive/1hfFfRypTHUcxeAUsPJYKwq4Bc3c1iKTC?usp=sharing" 
  },
  {
    title: "Think Fast: Math",
    description: [
      "Note: Takes 50 Second to load backend for my game to start (I'm on Free Plan, I'm poor). Try it with friends, it's real & fully working!",
      "Deployed a full-stack, real-time multiplayer math game (Next.js, Node.js) with a live backend on Render.com.",
      "Implemented WebSockets (Socket.IO) for persistent, low-latency client-server communication and a live scoreboard.",
      "Engineered a pre-generated question pipeline to ensure data availability and prevent race conditions.",
      "Designed and implemented server-authoritative scoring to maintain data integrity and prevent client-side manipulation.",
      "Managed Git branching strategies and handled production deployments for the backend service."
    ],
    role: "Solo Project",
    period: "2025",
    technologies: ["Next.js", "Node.js", "Socket.IO", "TypeScript", "Render.com", "Git"],
    images: [
      "/images/tfm1.webp",
      "/images/tfm2.webp",
      "/images/tfm3.webp",
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
  {
    title: "Airon",
    description: [
      "Trained a Random Forest regression model on pollutant data (PM2.5, PM10, O3) to predict AQI scores, achieving 90% accuracy on test data.",
      "Developed a full-stack webapp that fetches live pollutant data for any city (via OpenWeather API) and feeds it to the model for real-time AQI prediction."
    ],
    role: "Solo Project",
    period: "2024",
    technologies: ["Python", "Scikit-learn", "React", "OpenWeather API"],
    images: [
      "/images/Airon1.webp",
      "/images/Airon2.webp",
      "/images/Airon3.webp",
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
        Here are some of the projects I&apos;ve worked on. I like exploring new skills/concepts I haven&apos;t touched, especially in the field of Data Science and MLOps.
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
