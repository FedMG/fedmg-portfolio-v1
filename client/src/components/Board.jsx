import { removeEffect } from '@/functions/board-effect'
import { useBoardEffect } from '@/hooks/useBoardEffect'

import { Typography } from './utils/Typography'

export const Board = () => {
  const {
    methods: { getEvent, getTouchEvent },
    object: references,
    ref: board
  } = useBoardEffect()

  return (
    <div className='about-board-container grid-center'>
      <div
        className='about-board'
        onMouseMove={getEvent}
        onMouseLeave={() => removeEffect(references)}
        onTouchStart={getTouchEvent}
        onTouchMove={getTouchEvent}
        onTouchEnd={() => removeEffect(references)}
        ref={board}
      >
        <div className='about-card bk-drop'>
          <Typography as='p' style='about-text'>
            I am a self-taught student of Software Engineering &#128187;, and a
            student at UBA of Data science degree &#128202;
            <br />
            <br />I like to get along with people where the passion for
            technological progress, curiosity and learning allows us to grow and
            improve.
            <br />
            <br />
            &#127793; Some of my hobbies are studying a new language like
            Japanese, and spending time with my family.
            <span className='hr' />
            <strong>Grow mindset</strong>
            <br />
            I like to think big, how to make something better, how to go further.
            <br />
            <br />
            <strong>Work ethic</strong>
            <br />
            I love to keep learning new things and keep improving to give the best result.
            <br />
            <br />
            <strong>Team player attitude</strong>
            <br />
            I love to work side by side and help whoever needs it to achieve a common goal.
          </Typography>
          <div className='background-effect container' />
        </div>
      </div>
    </div>
  )
}
