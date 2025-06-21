import { Header } from "@/components/header"
import { type Item, SectionList } from "@/components/section-list"
import { LinksSection } from "@/components/links-section"

const workItems: Item[] = [
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
    role: "TOELF Tutor",
    period: "May 2024 - Feb 2025",
    description: "Taught TOEFL preparation professionally, focusing on core TOELF materials such as academic English skills and clear communication.",
    href: "https://recruitment.mybnec.org/",
  },
]

const projectItems = [
  {
    title: "Guitar Chorder",
    description: "A cool project that does amazing things.",
    href: "https://github.com/farrfoxr/guitar-chorde",
  },
  {
    title: "ono – Web3 Study Companion",
    description: "A Web3-powered AI study assistant with blockchain-based file storage, built during a hackathon.",
    href: "https://github.com/farrfoxr/ono",
  },
]

export default function HomePage() {
  return (
    <>
      <Header />
      <SectionList title="experience" items={workItems} />
      <SectionList title="projects" items={projectItems} viewAllHref="/projects" viewAllText="all projects" />
      <LinksSection />
    </>
  )
}
