import { useCardEffectRef } from '@/hooks/useCardEffect'
import { Shape } from './utils/Shape'
import { Card } from './Card'

const SkillCard = ({ children }) => {
  const cardRef = useCardEffectRef()

  return (
    <Card ref={cardRef}>
      {children[0]}
      <div className='card-side back'>
        <div className='card-content grid-center'>
          {children[1]}
        </div>
      </div>
    </Card>
  )
}

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
