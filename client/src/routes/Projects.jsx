import { Typography } from '@/components/utils/Typography'
import { Slider } from '@/components/Slider'
import { BoardProjects } from '@/components/BoardProjects'
import { projects } from './refs/projects'
// id='projects'
const Projects = () => {
  return (
    <div className='section'>
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
    </div>
  )
}

export default Projects
