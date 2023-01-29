import { Typography } from '@/components/utils/Typography'
import { Board } from '@/components/Board'
import { Shape } from '@/components/utils/Shape'
import { triangle, waves } from './refs/shapes'

const About = () => {
  return (
    <div id='about' className='section'>
      <Shape data={waves.downside} />
      <div className='section-content'>
        <Typography as='h2' style='subtitle-section'>
          <Typography as='span' style='span-subtitle'>
            About{' '}
          </Typography>
          me
        </Typography>
        <Board />
      </div>
      <Shape data={triangle.upside} />
    </div>
  )
}

export default About
