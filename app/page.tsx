import { Header } from "@/components/header"
import { type Item, SectionList } from "@/components/section-list"
import { LinksSection } from "@/components/links-section"

const workItems: Item[] = [
  {
    title: "Placeholder Company A",
    role: "Software Engineer",
    period: "Jan 20XX - Present",
    description: "Building innovative software solutions for global clients.",
    href: "https://www.placeholder-company-a.com",
  },
  {
    title: "Placeholder Company B",
    role: "Junior Developer",
    period: "Jul 20XX - Dec 20XX",
    description: "Assisted in front-end development of web applications.",
    href: "https://www.placeholder-company-b.com",
  },
]

const projectItems = [
  {
    title: "My Awesome Project One",
    role: "Creator",
    description: "A cool project that does amazing things.",
    href: "https://github.com/yourusername/my-awesome-project-one",
  },
  {
    title: "Another Fun Project",
    role: "Contributor",
    description: "Collaborated on a project to solve a challenging problem.",
    href: "https://github.com/yourusername/another-fun-project",
  },
]

export default function HomePage() {
  return (
    <>
      <Header />
      <SectionList title="work" items={workItems} />
      <SectionList title="projects" items={projectItems} viewAllHref="/projects" viewAllText="all projects" />
      <LinksSection />
    </>
  )
}
