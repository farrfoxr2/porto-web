"use client"
import { useScramble } from "use-scramble"

interface ScrambleTextProps {
  text: string
}

export function ScrambleText({ text }: ScrambleTextProps) {
  const { ref, replay } = useScramble({
    text,
    speed: 0.6,
    tick: 1,
    step: 1,
    scramble: 4,
    seed: 1,
  })

  return <span ref={ref} onMouseEnter={() => replay()} />
}
