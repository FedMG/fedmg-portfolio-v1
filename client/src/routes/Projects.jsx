import { Typography } from '@/components/utils/Typography'
import { Slider } from '@/components/Slider'
import { BoardProjects } from '@/components/BoardProjects'
import { Shape } from '@/components/utils/Shape'

import { projects } from './refs/projects'
import { triangle } from './refs/shapes'

const Projects = () => {
  return (
    <div id='projects' className='section'>
      <Shape data={triangle.downside} />
      <div className='section-content'>
        <Typography as='h2' style='subtitle-section'>
          My<Typography style='span-subtitle'> projects</Typography>
        </Typography>
        <div className='project-slider-bk flex-center'>
          <Slider>
            <BoardProjects data={projects} />
          </Slider>
        </div>
      </div>
      <Shape data={triangle.projectBottom} />
    </div>
  )
}

export default Projects
