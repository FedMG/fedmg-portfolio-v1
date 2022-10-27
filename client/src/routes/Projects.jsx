import { Typography } from '../items/Typography.jsx'
import { Slider } from '../items/Slider.jsx'
import { CreateProject } from '../iterators/CreateProject.jsx'
import { Shape } from '../iterators/Shape.jsx'
import { projectData } from '../refs/projects.js'
import { triangle } from '../refs/shapes.js'

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
            <CreateProject data={projectData} />
          </Slider>
        </div>
      </div>
      <Shape data={triangle.projectBottom} />
    </div>
  )
}
