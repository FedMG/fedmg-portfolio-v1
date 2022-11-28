import { useEffect, useRef } from 'react'

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

export const useCardEffectRef = () => {
  const cardRef = useRef(null)
  // const [click, setClick] = useState(false)

  const serveProps = () => ({
    card: cardRef.current,
    front: cardRef.current.children[0].style,
    back: cardRef.current.children[1].style
  })

  const applyEnter = () => {
    const { front, back } = serveProps()

    // clicks events
    // front.transform = clickType[click].front
    // back.transform = clickType[click].back

    // if (click) {
    //   return setClick(false)
    // } else {
    //   return setClick(true)
    // }

    front.transform = clickType.false.front
    back.transform = clickType.false.back

    setTimeout(() => {
      front.transform = clickType.true.front
      back.transform = clickType.true.back
    }, 1500)
  }

  useEffect(
    () => {
      const { card } = serveProps()
      card.addEventListener('mouseenter', applyEnter)
      // card.addEventListener('click', applyEnter)

      return () => card.removeEventListener('mouseenter', applyEnter)
      // return () => card.removeEventListener('click', applyEnter)
    },
    [
      /* click */
    ]
  )
  
  return cardRef
}
