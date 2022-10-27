import { Typography } from '../Typography.jsx'

export const Greeting = () => {
  return (
    <div className='greeting-container'>
      <Typography style='greeting-container__span' as='span'>
        Hello world!
      </Typography>
    </div>
  )
}
