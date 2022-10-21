import { useRef } from 'react'
import { Typography } from '../Typography.jsx'
import { applyEffect, removeEffect } from '../../functionals/board-effect'

export const Board = () => {
  const board = useRef(null)

  const references = () => ({
    board: board.current.getBoundingClientRect(),
    card: board.current.children[0].style
  })

  const getEvent = (e) => {
    const props = {
      offsetX: e.nativeEvent.offsetX,
      offsetY: e.nativeEvent.offsetY,
      ...references()
    }

    applyEffect(props)
  }

  return (
    <div className='about-board-container'>
      <div
        className='about-board'
        onMouseMove={getEvent}
        onMouseLeave={() => removeEffect(references)}
        ref={board}
      >
        <div className='about-card'>
          <Typography as='p' style='about-text'>
            I am passionate about the IT world and love to learn new and
            interesting things every day.
            <br />
            <br />
            Student of Computer Science and Software development as self-taught.
            <br />
            <br />I am fascinated by the idea of getting along with people where
            there is mutual learning that allows us to grow, with whom we can
            talk about the latest trends in technological and scientific
            progress. trends of technological and scientific progress.
          </Typography>
          <div className='background-effect' />
        </div>
      </div>
    </div>
  )
}
