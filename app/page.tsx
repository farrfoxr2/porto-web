import { Header } from "@/components/header"
import { CvSection } from "@/components/cv-section"
import { type Item, SectionList } from "@/components/section-list"
import { LinksSection } from "@/components/links-section"

const workItems: Item[] = [
  {
    title: "PT Soluix Finteknologi Indonesia",
    role: "AI Engineer Intern",
    period: "2025 - present",
    description: "Built an AI bug-reporting system and an AI meeting minutes generator, both used by staff today. Received a bonus for the meeting minutes generator, which Soluix valued at about IDR 70 million in saved staff work hours. Led 1 of 6 groups in an AI-Driven Development Life Cycle (AI-DLC) workshop with Kiro, an AI coding tool, for about 65 staff.",
  },
  {
    title: "2nd Place Winner – Codefest.id Hackathon 14",
    role: "ONO",
    period: "May 2025 - June 2025",
    description: "Built ONO, a Web3-powered study companion with on-chain file storage and a private AI assistant to help students learn directly from their materials.",
    href: "https://drive.google.com/file/d/17xaEB4cc5f3zJLoFJN9X-PsgeN0buSC8/view?usp=sharing",
  },
  {
    title: "Samsung Innovation Campus Stage 4 Participant (Batch 6)",
    role: "Smart Trash Bin",
    period: "Dec 2024 - May 2025",
    description: "Reached quarter-finals in this AI & IoT-focused hackathon, building smart solutions as part of Samsung’s global innovation and upskilling program.",
    href: "https://drive.google.com/file/d/1ZMpptaSgbvzWYrCdmgjAKGKOKJO0GMC_/view",
  },
  {
    title: "BNEC Alam Sutera (BINUS English Club)",
    role: "TOEFL Tutor",
    period: "May 2024 - Feb 2025",
    description: "Taught TOEFL preparation professionally, focusing on core TOEFL materials such as academic English skills and clear communication.",
    href: "https://recruitment.mybnec.org/",
  },
]

const projectItems = [
  {
    title: "Soluix – AI Bug-Reporting System",
    description: "An AI agent that turns WhatsApp complaints into complete MantisBT bug tickets, with human approval. Led from a one-line brief; shipped the MVP in under 2 weeks for a live client project.",
    href: "https://youtu.be/FJQQsH9ioxU",
  },
  {
    title: "Divi – Branching AI Chat",
    description: "A live AI chat app for non-linear thinking: branch off any message into a side discussion, then return to the main thread where you left it.",
    href: "https://trydivi.app",
  },
]

export default function HomePage() {
  return (
    <>
      <Header />
      <CvSection />
      <SectionList title="experience" items={workItems} />
      <SectionList title="projects" items={projectItems} viewAllHref="/projects" viewAllText="all projects" />
      <LinksSection />
    </>
  )
}
