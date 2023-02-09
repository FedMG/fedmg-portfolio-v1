import { Typography } from '@/components/utils/Typography'
import { Board } from '@/components/Board'

const About = () => {
  return (
    <div className='section'>
        <div className='section-content'>
          <Typography as='h2' style='subtitle-section'>
            <Typography as='span' style='span-subtitle'>
              About{' '}
            </Typography>
            me
          </Typography>
          <Board />
        </div>
    </div>
  )
}

export default About
