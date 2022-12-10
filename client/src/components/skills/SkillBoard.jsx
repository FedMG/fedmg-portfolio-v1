import { Shape } from '@/components/Shape'
import { SkillCard } from './SkillCard'

export const SkillBoard = ({ data }) => {
  return (
    <div className='skill-cards-bk grid-center'>
      <div className='skill-cards grid'>
        {data.map(({ id }) => (
          <SkillCard key={id}>
            <Shape data={data[id]} />
            <span className='card-span'>{data[id].title}</span>
          </SkillCard>
        ))}
      </div>
    </div>
  )
}
