import Link from "next/link"

const links = [
  { title: "email", href: "mailto:your.email@example.com" },
  { title: "x.com", href: "https://x.com/yourhandle" },
  { title: "github", href: "https://github.com/yourusername" },
  { title: "linkedin", href: "https://www.linkedin.com/in/yourlinkedinprofile" },
  { title: "book a call", href: "https://cal.com/yourcalcomlink" },
]

export function LinksSection() {
  return (
    <section className="animate-fade-in-up">
      <h2 className="text-2xl font-bold mb-6 flex items-center text-primary">
        <span className="text-accent mr-2">*</span> links
      </h2>
      <div className="flex flex-wrap gap-4 text-sm">
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className="text-secondary hover:text-accent transition-colors duration-200 no-underline"
          >
            {link.title}
          </Link>
        ))}
      </div>
    </section>
  )
}
