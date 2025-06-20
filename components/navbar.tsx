"use client"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect, useState, useCallback } from "react"
import { useTheme } from "./theme-provider"
import { ScrambleText } from "./scramble-text"

export function Navbar() {
  const router = useRouter()
  const { cycleTheme } = useTheme()
  const [isRevealed, setIsRevealed] = useState(false)
  const [shouldScramble, setShouldScramble] = useState(false)

  useEffect(() => {
    // Check if the palette text has been revealed before
    const revealed = localStorage.getItem("palette-text-revealed")
    if (revealed === "true") {
      setIsRevealed(true)
    }
  }, [])

  const handleCycleTheme = useCallback(() => {
    if (!isRevealed) {
      // First time clicking - reveal the text with scramble effect
      setShouldScramble(true)
      setIsRevealed(true)
      localStorage.setItem("palette-text-revealed", "true")
      // Also cycle the theme on first click
      cycleTheme()
    } else {
      // Subsequent clicks - just cycle the theme
      cycleTheme()
    }
  }, [isRevealed, cycleTheme])

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      // Don't trigger if any input elements are focused or if event target is an input
      if (
        document.activeElement?.tagName === "INPUT" ||
        document.activeElement?.tagName === "TEXTAREA" ||
        event.target instanceof HTMLInputElement
      ) {
        return
      }

      switch (event.key.toLowerCase()) {
        case "h":
          router.push("/")
          break
        case "p":
          router.push("/projects")
          break
        case "c":
          handleCycleTheme()
          break
      }
    }

    window.addEventListener("keydown", handleKeyPress)
    return () => window.removeEventListener("keydown", handleKeyPress)
  }, [router, handleCycleTheme])

  return (
    <nav className="flex items-center justify-between mb-12 text-sm">
      <div className="flex space-x-4">
        <Link href="/" className="text-primary hover:text-accent transition-colors duration-200">
          [h] home
        </Link>
        <Link href="/projects" className="text-primary hover:text-accent transition-colors duration-200">
          [p] projects
        </Link>
        <button
          className="text-primary hover:text-accent transition-colors duration-200 cursor-pointer"
          onClick={handleCycleTheme}
        >
          [c] {isRevealed ? shouldScramble ? <ScrambleText text="cycle palette" /> : "cycle palette" : "???"}
        </button>
      </div>
    </nav>
  )
}
