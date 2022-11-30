import { Typography } from '../Typography.jsx'

export const Introduction = () => {
  return (
    <div className='span-container'>
      <div className='span-container__subcontainer'>
        <Typography style='first-phrase' as='span'>
          Hi, I am{' '}
          <Typography style='first-phrase__span' as='span'>
            Federico
          </Typography>
        </Typography>
        <br />
        <Typography style='second-phrase' as='span'>
          A{' '}
          <Typography style='second-phrase__span' as='span'>
            Fullstack Developer
          </Typography>
        </Typography>
        <br />
        <Typography style='third-phrase' as='span'>
          And a passionate of the{' '}
          <Typography style='third-phrase__span' as='span'>
            Information Technology World
          </Typography>

        </Typography>
        <br />
      </div>
    </div>
  )
}
