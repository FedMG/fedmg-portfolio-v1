import { Typography } from '../components/Typography.jsx'
import { Slider } from '../components/projects/Slider.jsx'
import { BoardProjects } from '../components/projects/BoardProjects.jsx'
import { Shape } from '../components/Shape.jsx'
import { projects } from './refs/projects.js'
import { triangle } from './refs/shapes.js'

export const Projects = () => {
  return (
    <div id='Projects' className='section'>
      <Shape data={triangle.downside} />
      <div className='section-content'>
        <Typography as='h2' style='subtitle-section'>
          My<Typography style='span-subtitle'> projects</Typography>
        </Typography>
        <div className='project-slider-bk'>
          <Slider>
            <BoardProjects data={projects} />
          </Slider>
        </div>
      </div>
      <Shape data={triangle.projectBottom} />
    </div>
  )
}
