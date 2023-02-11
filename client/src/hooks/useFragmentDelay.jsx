import { useEffect, useState } from 'react'
import { routeNames } from '@/routes/structure/Header'
import { createAndFillIterable } from '@/functions/tools'

const PERCENT = 0.7

function checkSectionVisibility (userPosition, visibility) {
  routeNames.forEach(({ name }, i) => {
    const pageSection = document.getElementById(name)
    if (pageSection) {
      const sectionStartPosition = pageSection.offsetTop
      const heightDevice = window.screen.height
      if (userPosition >= sectionStartPosition - heightDevice * PERCENT) {
        visibility[i] = true
      }
    }
  })
  return Promise.resolve(visibility)
}

export const useFragmentDelay = () => {
  const [delays, setDelay] = useState(createAndFillIterable(routeNames, false))

  const handleScrollEvent = () => {
    const userPosition = window.scrollY
    const fragmentVisibility = [...delays]

    checkSectionVisibility(userPosition, fragmentVisibility).then(
      (visibility) => {
        setDelay(visibility)
      }
    ).catch(() => new Error('HandleScrollError: something is wrong in useFragmentDelay'))
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScrollEvent)
    const initialScroll = setTimeout(() => window.scrollTo(0, 1), 2000)

    return () => {
      clearTimeout(initialScroll)
      window.removeEventListener('scroll', handleScrollEvent)
    }
  }, [])

  return delays
}
