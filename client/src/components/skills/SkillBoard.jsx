import { Shape } from '@/components/Shape'
import { SkillCard } from './SkillCard'

export const SkillBoard = ({ data }) => {
  return (
    <div className='skill-cards-bk'>
      <div className='skill-cards'>
        {data.map(({ id }) => (
          <SkillCard key={id}>
            <Shape data={data[id]} />
            <span>{data[id].title}</span>
          </SkillCard>
        ))}
      </div>
    </div>
  )
}
