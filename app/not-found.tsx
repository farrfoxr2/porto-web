import Link from "next/link"
import { ScrambleText } from "@/components/scramble-text"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      <h1 className="text-6xl font-bold mb-4 text-primary">
        <ScrambleText text="404" />
      </h1>
      <h2 className="text-2xl font-bold mb-4 text-secondary">Page Not Found</h2>
      <p className="text-secondary mb-8 max-w-md">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link href="/" className="text-accent hover:underline transition-colors duration-200">
        Return Home
      </Link>
    </div>
  )
}
