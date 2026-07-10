import { useEffect } from 'react'

export default function useMarqueeLoop(trackId: string) {
  useEffect(() => {
    const track = document.getElementById(trackId)
    if (!track) return

    // Prevent double-duplication (React StrictMode can run effects twice in dev)
    if (track.dataset.duplicated === 'true') return
    track.dataset.duplicated = 'true'

    track.innerHTML += track.innerHTML
  }, [trackId])
}

