import { useEffect, useState } from "react"

export function useMediaQuery(width: number) {
  const [match, setMatch] = useState<boolean>(window.innerWidth <= width)
  useEffect(() => {
    const listener = () => {
      setMatch(window.innerWidth <= width)
    }
    window.addEventListener("resize", listener)
    return () => window.removeEventListener("resize", listener)
  }, [width])

  return match
}
