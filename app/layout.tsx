import type React from "react"
import type { Metadata } from "next"
import { Geist_Mono } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import { ThemeProvider } from "@/components/theme-provider"

const geistMono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-mono",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://farrellsuryadi.vercel.app/"),
  title: {
    default: "Farrell Suryadi",
    template: "%s | Farrell Suryadi",
  },
  description: "Curious Coder, maker of things.",
  openGraph: {
    title: "Farrell Suryadi",
    description: "Curious Coder, maker of things.",
    url: "https://farrellsuryadi.vercel.app/",
    siteName: "Farrell Suryadi",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    "max-video-preview": -1,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
  twitter: {
    title: "Farrell Suryadi",
    card: "summary_large_image",
    creator: "@farrbonk",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistMono.variable} antialiased min-h-screen font-mono`}>
        <ThemeProvider>
          <div className="max-w-4xl mx-auto px-4 py-8">
            <Navbar />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
