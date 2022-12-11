import { Typography } from '@/components/Typography'
import { SkillBoard } from '@/components/skills/SkillBoard'
import { Shape } from '@/components/Shape'
import { triangle } from './refs/shapes.js'
import { skills } from './refs/skills.js'

const Skills = () => {
  return (
    <div id='Skills' className='section'>
      <Shape data={triangle.skillsTopEmpty} />
      <div className='section-content'>
        <Typography as='h2' style='subtitle-section'>
          My<Typography style='span-subtitle'> skills</Typography>
        </Typography>
        <SkillBoard data={skills} />
      </div>
      <Shape data={triangle.contact} />
    </div>
  )
}

export default Skills
