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

export const useCardEffectRef = (event = 'mouseenter') => {
  const cardRef = useRef(null)
  const [click, setClick] = useState(false)

  const serveProps = () => {
    const current = cardRef.current
    const isMouseEnter = [current, current.children[0], current.children[1]]
    const children = event === 'click' ? current.children : isMouseEnter

    return {
      card: children[0],
      front: children[1].style,
      back: children[2].style
    }
  }

  const applyEnter = () => {
    const { front, back } = serveProps()

    if (event === 'click') {
      front.transform = clickType[click].front
      back.transform = clickType[click].back

      if (click) {
        return setClick(false)
      }

      return setClick(true)
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

    card.addEventListener(event, applyEnter)
    return () => card.removeEventListener(event, applyEnter)
  }, [click])

  return cardRef
}
