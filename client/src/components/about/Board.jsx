import { useRef } from 'react'
import { Typography } from '../Typography.jsx'
import { applyEffect, removeEffect } from '../../functions/board-effect'

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
    <div className='about-board-container grid-center'>
      <div
        className='about-board'
        onMouseMove={getEvent}
        onMouseLeave={() => removeEffect(references)}
        ref={board}
      >
        <div className='about-card bk-drop'>
          <Typography as='p' style='about-text'>
            I am passionate about the IT world who loves to learn new things
            every day.
            <br />
            <br />
            I am a self-taught Software Engineering and Data science student.
            <br />
            <br />I love to get along with people where the passion for
            technological progress, curiosity and learning allows us to grow and
            improve.
            <br />
            <br />
            Some of my hobbies are studying a new language, like Japanese,
            and spending time with my family.
          </Typography>
          <div className='background-effect container' />
        </div>
      </div>
    </div>
  )
}
