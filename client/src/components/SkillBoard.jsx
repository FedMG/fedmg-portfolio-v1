import { useCardEffectRef } from '@/hooks/useCardEffect'
import { Card } from './Card'
import { IconSVG } from './utils/IconSVG'

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
        {data.map(({ id, path, title }) => (
          <SkillCard key={id}>
            <IconSVG data={path} />
            <span className='card-span'>{title}</span>
          </SkillCard>
        ))}
      </div>
    </div>
  )
}
