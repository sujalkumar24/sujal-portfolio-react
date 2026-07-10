import useMarqueeLoop from '../hooks/useMarqueeLoop'

const items = [
  'React',
  'Next.js',
  'Node.js',
  'MongoDB',
  'Express',
  'Tailwind',
  'Framer Motion',
  'TypeScript',
  'Python',
  'Git',
  'Docker',
  'Vercel'
]

export default function Marquee() {
  useMarqueeLoop('marquee')

  return (
    <div className="marquee-wrap">
      <div className="marquee-track" id="marquee">
        {items.map((t) => (
          <span key={t}>{t}</span>
        ))}
      </div>
    </div>
  )
}

