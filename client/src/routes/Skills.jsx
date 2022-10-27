import { Typography } from '../items/Typography.jsx'
import { CreateSkill } from '../iterators/CreateSkill.jsx'
import { Shape } from '../iterators/Shape.jsx'
import { triangle } from '../refs/shapes.js'
import { skills } from '../refs/skills.js'

export const Skills = () => {
  return (
    <div id='Skills' className='section'>
      <Shape data={triangle.skillsTopEmpty} />
      <div className='section-content'>
        <Typography as='h2' style='subtitle-section'>
          My<Typography style='span-subtitle'> skills</Typography>
        </Typography>
        <div className='skill-cards-bk'>
          <CreateSkill data={skills} />
        </div>
      </div>
    </div>
  )
}
