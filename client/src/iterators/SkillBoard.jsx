import { Shape } from './Shape.jsx'
import { SkillCard } from '../items/skills/SkillCard.jsx'

export const SkillBoard = ({ data }) => {
  return (
    <div className='skill-cards-bk'>
      <div className='skill-cards'>
        {data.map(({ id }) => (
          <SkillCard key={id}>
            <Shape data={data[id]} />
          </SkillCard>
        ))}
      </div>
    </div>
  )
}
