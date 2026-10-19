import Link from "next/link"
import { Download } from "lucide-react"

const CONFIG = {
    cvPath: "/docs/cv.pdf",
}

export function CvSection() {
    return (
        <section className="mb-16 animate-fade-in-up">
            <div className="flex items-center mb-6">
                <h2 className="text-2xl font-bold flex items-center text-primary">
                    <span className="text-accent mr-2">*</span> download my cv
                </h2>
            </div>

            <div className="flex flex-wrap gap-4">
                <Link
                    href={CONFIG.cvPath}
                    target="_blank" // Opens in new tab
                    className="group flex-1 min-w-[200px] max-w-xs border border-secondary rounded-lg p-4 
                       bg-tertiary hover:border-accent transition-all duration-300"
                >
                    <div className="flex items-center justify-between">
                        <span className="font-semibold text-primary group-hover:text-accent transition-colors duration-300">
                            Get PDF
                        </span>
                        <Download className="w-5 h-5 text-secondary group-hover:text-accent transition-colors duration-300" />
                    </div>
                </Link>
            </div>
        </section>
    )
}
