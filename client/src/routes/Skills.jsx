import { Typography } from '@/components/utils/Typography'
import { SkillBoard } from '@/components/SkillBoard'
import { skills } from './refs/skills'
// id='skills'
const Skills = () => {
  return (
    <div className='section'>
        <div className='section-content'>
          <Typography as='h2' style='subtitle-section'>
            My<Typography style='span-subtitle'> skills</Typography>
          </Typography>
          <SkillBoard data={skills} />
        </div>
    </div>
  )
}

export default Skills
