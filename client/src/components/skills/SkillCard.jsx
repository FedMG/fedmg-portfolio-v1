import { Card } from './Card.jsx'
import { useCardEffectRef } from '../../hooks/useCardEffect.jsx'

export const SkillCard = ({ children }) => {
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
