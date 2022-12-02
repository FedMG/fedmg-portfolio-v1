import { Typography } from '@/components/Typography'
import { Slider } from '@/components/projects/Slider'
import { BoardProjects } from '@/components/projects/BoardProjects'
import { Shape } from '@/components/Shape'
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
