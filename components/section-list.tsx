import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

export interface Item {
  title: string
  role?: string
  period?: string
  description: string
  href: string
}

interface SectionListProps {
  title: string
  items: Item[]
  viewAllHref?: string
  viewAllText?: string
}

export function SectionList({ title, items, viewAllHref, viewAllText }: SectionListProps) {
  return (
    <section className="mb-16 animate-fade-in-up">
      <div className="flex items-center mb-6">
        <h2 className="text-2xl font-bold flex items-center text-primary">
          <span className="text-accent mr-2">*</span> {title}
        </h2>
      </div>
      <div className="space-y-6">
        {items.map((item, index) => (
          <div key={index} className="group">
            <Link href={item.href} className="block no-underline">
              <div className="flex flex-col space-y-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-primary group-hover:text-accent transition-colors duration-200">
                    {item.title}
                  </h3>
                  <ArrowUpRight className="w-4 h-4 text-secondary group-hover:text-accent transition-all duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
                {item.role && item.period && (
                  <div className="text-sm text-secondary">
                    {item.role} ({item.period})
                  </div>
                )}
                <p className="text-secondary text-sm leading-relaxed">{item.description}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
      {viewAllHref && viewAllText && (
        <Link
          href={viewAllHref}
          className="text-sm text-accent hover:underline transition-all duration-200 flex items-center gap-1 group mt-4"
        >
          {viewAllText}
          <ArrowUpRight className="w-3 h-3 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </Link>
      )}
    </section>
  )
}
