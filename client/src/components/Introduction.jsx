import { Typography } from './utils/Typography'
import { Typewriter } from './Typewriter'

export const Introduction = () => {
  return (
    <div className='span-container'>
      <div className='flex-column'>
        <Typography style='first-phrase' as='span'>
          Hi &#128075;, I am{' '}
          <Typography style='first-phrase__span' as='span'>
            Federico
          </Typography>
        </Typography>
        <Typography style='second-phrase' as='span'>
          A{' '}
          <Typewriter msg={['Fullstack Developer', 'Software Developer']} timeout={1200} style='second-phrase__span pipe-effect' />
        </Typography>
        <Typography style='third-phrase' as='span'>
          And a passionate of the{' '}
          <Typography style='third-phrase__span' as='span'>
            Information Technology World
          </Typography>
        </Typography>
      </div>
    </div>
  )
}
