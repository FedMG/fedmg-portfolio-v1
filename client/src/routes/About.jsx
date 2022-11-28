import { Typography } from '../components/Typography.jsx'
import { Board } from '../components/about/Board.jsx'
import { Shape } from '../components/Shape.jsx'
import { triangle, waves } from './refs/shapes.js'

export const About = () => {
  return (
    <div id='About' className='section'>
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
