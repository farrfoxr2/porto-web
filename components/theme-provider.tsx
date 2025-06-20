"use client"
import { createContext, useContext, useEffect, useState } from "react"
import type React from "react"

type Theme = "nord" | "rose-pine-dawn" | "dollar-green" | "paper"

interface ThemeContextType {
  theme: Theme
  cycleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

const themes: Theme[] = ["nord", "rose-pine-dawn", "dollar-green", "paper"]

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("nord")

  useEffect(() => {
    // Load theme from localStorage on mount
    const savedTheme = localStorage.getItem("portfolio-theme") as Theme
    if (savedTheme && themes.includes(savedTheme)) {
      setTheme(savedTheme)
    }
  }, [])

  useEffect(() => {
    // Apply theme to document body
    document.body.setAttribute("data-theme", theme)
    // Save to localStorage
    localStorage.setItem("portfolio-theme", theme)
  }, [theme])

  const cycleTheme = () => {
    const currentIndex = themes.indexOf(theme)
    const nextIndex = (currentIndex + 1) % themes.length
    setTheme(themes[nextIndex])
  }

  return <ThemeContext.Provider value={{ theme, cycleTheme }}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}
