import React, { useEffect, useRef, useState } from 'react'

export default function SectionTransitionBackground() {
  const holderRef = useRef<HTMLDivElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = holderRef.current?.parentElement
    if (!el) return

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // use isIntersecting to be more permissive (header may overlap)
          const inView = entry.isIntersecting
          setVisible(inView)
          if (inView) el.classList.add('section-inview')
          else el.classList.remove('section-inview')
        })
      },
      // rootMargin pulls the viewport inward to account for the fixed header
      { rootMargin: '-80px 0px -20% 0px', threshold: [0] }
    )

    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <div ref={holderRef} aria-hidden className="absolute inset-0 pointer-events-none -z-0">
      <div
        className={`absolute inset-0 transition-opacity duration-700 ease-out ${visible ? 'opacity-100' : 'opacity-0'}`}
      >
        {/* decorative gradient band */}
        <div className="absolute left-0 top-0 w-full h-48 bg-gradient-to-b from-primary-800/40 to-transparent blur-lg" />
        <div className="absolute right-16 top-8 w-48 h-48 rounded-full bg-primary-900/10 transform rotate-12" />
      </div>
    </div>
  )
}
