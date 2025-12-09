"use client"

import Link from "next/link"
import { Download, Image as ImageIcon, X } from "lucide-react"
import { useState, useEffect } from "react"
import Image from "next/image"

const CONFIG = {
    cvPath: "/docs/cv.pdf",
    images: {
        main: "/images_me/me1.webp",
        grid: [
            "/images_me/me5.webp",
            "/images_me/me2.webp",
            "/images_me/me3.webp",
            "/images_me/me4.webp",
        ]
    }
}

export function CvSection() {
    const [isOpen, setIsOpen] = useState(false)

    // Prevent scrolling when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "unset"
        }
        return () => {
            document.body.style.overflow = "unset"
        }
    }, [isOpen])

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

                <button
                    onClick={() => setIsOpen(true)}
                    className="group flex-1 min-w-[200px] max-w-xs border border-secondary rounded-lg p-4 
                       bg-tertiary hover:border-accent transition-all duration-300 text-left"
                >
                    <div className="flex items-center justify-between">
                        <span className="font-semibold text-primary group-hover:text-accent transition-colors duration-300">
                            See my Picture
                        </span>
                        <ImageIcon className="w-5 h-5 text-secondary group-hover:text-accent transition-colors duration-300" />
                    </div>
                </button>
            </div>

            {/* Modal Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 animate-fade-in"
                    onClick={() => setIsOpen(false)}
                >
                    {/* Modal Content - App Window Style */}
                    <div
                        className="relative bg-primary border border-secondary rounded-lg shadow-2xl w-full max-w-lg overflow-hidden animate-fade-in-up"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Header Bar */}
                        <div className="flex items-center justify-between px-4 py-3 border-b border-secondary bg-tertiary/50">
                            <span className="text-sm font-mono text-secondary">here&apos;s what i look like</span>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-secondary hover:text-accent transition-colors p-1"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Content Area */}
                        <div className="p-6 flex justify-center">
                            <div className="relative w-80 h-80 rounded-lg overflow-hidden bg-secondary group cursor-pointer">
                                {/* Single Image (Default) */}
                                <div className="absolute inset-0 transition-opacity duration-300 opacity-100 group-hover:opacity-0">
                                    <Image
                                        src={CONFIG.images.main}
                                        alt="Me"
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                {/* 4-Image Grid (Hover) */}
                                <div className="absolute inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100 grid grid-cols-2 gap-1 bg-primary">
                                    {CONFIG.images.grid.map((src, index) => (
                                        <div key={index} className="relative w-full h-full">
                                            <Image src={src} alt={`Me ${index + 1}`} fill className="object-cover" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}
