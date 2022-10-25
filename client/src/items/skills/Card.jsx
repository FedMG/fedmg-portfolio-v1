import { useEffect, useRef, useState } from 'react'
import { CreateShape } from '../../iterators/CreateShape.jsx'
import { CardSide } from './CardSide.jsx'

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

export const Card = () => {
  const cardRef = useRef(null)
  const [click, setClick] = useState(false)

  const serveProps = () => ({
    front: cardRef.current.children[0].style,
    back: cardRef.current.children[1].style,
    card: cardRef.current
  })

  const applyEnter = () => {
    const { front, back } = serveProps()

    front.transform = clickType[click].front
    back.transform = clickType[click].back

    if (click) {
      return setClick(false)
    } else {
      return setClick(true)
    }
  }

  useEffect(() => {
    const { card } = serveProps()
    card.addEventListener('click', applyEnter)

    return () => card.removeEventListener('click', applyEnter)
  }, [click])

  return (
    <div className='card' ref={cardRef}>
      <CardSide styles={['card-side front', 'card-content']}>
        <CreateShape />
      </CardSide>
      <CardSide styles={['card-side back', 'card-content']} />
    </div>
  )
}
