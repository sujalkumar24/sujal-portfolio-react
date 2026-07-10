import { useEffect } from 'react'

export default function useScrollReveal() {
  useEffect(() => {
    const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches
    if (reduceMotion) {
      document.querySelectorAll<HTMLElement>('.reveal').forEach((el) => {
        el.classList.add('in')
      })
      return
    }

    const revealEls = Array.from(document.querySelectorAll<HTMLElement>('.reveal'))
    if (!revealEls.length) return

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in')
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 }
    )

    revealEls.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
}

