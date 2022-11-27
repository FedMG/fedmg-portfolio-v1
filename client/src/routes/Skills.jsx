import { Typography } from '../items/Typography.jsx'
import { SkillBoard } from '../iterators/SkillBoard.jsx'
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
        <SkillBoard data={skills} />
      </div>
    </div>
  )
}
