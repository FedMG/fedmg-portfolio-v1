import { Typography } from '@/components/utils/Typography'
import { SkillBoard } from '@/components/SkillBoard'
import { Shape } from '@/components/utils/Shape'
import { triangle } from './refs/shapes'
import { skills } from './refs/skills'

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
