import { useEffect, useState } from 'react'
import { routeNames } from '@/routes/structure/Header'

const PRE_OFFSET_TOP = 2
const PRE_OFFSET_BOTTOM = 3

function checkSectionHighlight (userPosition, highlightSection) {
  routeNames.every(({ name }) => {
    const pageSection = document.getElementById(name)
    if (!pageSection) return false

    const sectionHeight = pageSection.offsetHeight
    const sectionStart = pageSection.offsetTop
    const sectionEnd = sectionHeight + sectionStart

    if (userPosition >= sectionStart - sectionHeight / PRE_OFFSET_TOP && userPosition <= sectionEnd - sectionHeight / PRE_OFFSET_BOTTOM) {
      highlightSection = name
      return false
    }

    return true
  })

  return Promise.resolve(highlightSection)
}

export const useSectionHighlighter = () => {
  const [activeSection, setActiveSection] = useState('')

  const handleScrollEvent = () => {
    const userPosition = window.scrollY
    const highlightSection = activeSection

    checkSectionHighlight(userPosition, highlightSection).then(
      (highlight) => setActiveSection(highlight)
    ).catch(() => new Error('HandleScrollEvent: something is wrong in useSectionHighlighter'))
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScrollEvent)
    return () => window.removeEventListener('scroll', handleScrollEvent)
  }, [])

  return activeSection
}
