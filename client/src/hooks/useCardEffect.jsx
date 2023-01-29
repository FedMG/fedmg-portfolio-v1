import { useEffect, useRef, useState } from 'react'

const clickType = {
  [false]: {
    front: 'rotateY(180deg)',
    back: 'rotateY(0deg)'
  },
  [true]: {
    front: 'rotateY(0deg)',
    back: 'rotateY(-180deg)'
  }
}

export const useCardEffectRef = (withClick = false, withButton = false) => {
  const cardRef = useRef(null)
  const [click, setClick] = useState(false)

  const serveProps = () => {
    if (!withButton) {
      return {
        card: cardRef.current,
        front: cardRef.current.children[0].style,
        back: cardRef.current.children[1].style
      }
    }

    if (withButton) {
      return {
        card: cardRef.current.children[0],
        front: cardRef.current.children[1].style,
        back: cardRef.current.children[2].style
      }
    }
  }

  const applyEnter = () => {
    const { front, back } = serveProps()

    if (withClick) {
      front.transform = clickType[click].front
      back.transform = clickType[click].back

      if (click) {
        return setClick(false)
      } else {
        return setClick(true)
      }
    }

    front.transform = clickType.false.front
    back.transform = clickType.false.back

    setTimeout(() => {
      front.transform = clickType.true.front
      back.transform = clickType.true.back
    }, 1500)
  }

  useEffect(() => {
    const { card } = serveProps()

    if (withClick) {
      card.addEventListener('click', applyEnter)
      return () => card.removeEventListener('click', applyEnter)
    } else {
      card.addEventListener('mouseenter', applyEnter)
      return () => card.removeEventListener('mouseenter', applyEnter)
    }
  }, [click])

  return cardRef
}
