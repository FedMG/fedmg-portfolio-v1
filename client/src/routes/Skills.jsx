import { Typography } from '../components/Typography.jsx'
import { SkillBoard } from '../components/skills/SkillBoard.jsx'
import { Shape } from '../components/Shape.jsx'
import { triangle } from './refs/shapes.js'
import { skills } from './refs/skills.js'

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
