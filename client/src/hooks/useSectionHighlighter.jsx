import { useEffect, useState } from 'react'
import { routeNames } from '@/routes/structure/Header'

const PRE_OFFSET_TOP = 30

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
        (pageSection.offsetTop - PRE_OFFSET_TOP) <= currentPosition &&
        (pageSection.offsetTop - PRE_OFFSET_TOP) + pageSection.offsetHeight > currentPosition
      ) {
        // window.location.hash = name
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
