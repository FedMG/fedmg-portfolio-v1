import { Typography } from '../Typography.jsx'

export const Introduction = () => {
  return (
    <div className='span-container'>
      <div className='span-container__subcontainer'>
        <Typography style='first-phrase' as='span'>
          My name is{' '}
          <Typography style='first-phrase__span' as='span'>
            Federico
          </Typography>
        </Typography>
        <br />
        <Typography style='second-phrase' as='span'>
          I'm a{' '}
          <Typography style='second-phrase__span' as='span'>
            Fullstack Developer
          </Typography>
        </Typography>
        <br />
        <Typography style='third-phrase' as='span'>
          A passionate of the{' '}
          <Typography style='third-phrase__span' as='span'>
            IT World
          </Typography>

        </Typography>
        <br />
      </div>
    </div>
  )
}
