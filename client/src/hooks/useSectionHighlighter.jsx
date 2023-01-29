import { useEffect, useState } from 'react'
import { routeNames } from '@/routes/structure/Header'

export const useSectionHighlighter = () => {
  const [activeSection, setActiveSection] = useState('')

  const handleScrollEvent = () => {
    const currentPosition = window.scrollY
    for (const { name } of routeNames) {
      const pageSection = document.getElementById(name)

      if (!pageSection) {
        continue
      }

      if (
        pageSection.offsetTop <= currentPosition &&
        pageSection.offsetTop + pageSection.offsetHeight > currentPosition
      ) {
        // window.location.hash = `#${name}`;
        setActiveSection(name)
        break
      }
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScrollEvent)
    return () => window.removeEventListener('scroll', handleScrollEvent)
  }, [])

  return activeSection
}
