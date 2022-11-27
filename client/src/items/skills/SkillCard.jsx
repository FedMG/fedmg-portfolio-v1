import { Card } from './Card.jsx'
import { useCardEffectRef } from '../../hooks/useCardEffect.jsx'

export const SkillCard = ({ children }) => {
  const cardRef = useCardEffectRef()

  return (
    <Card ref={cardRef}>
      {children}
      <div className='card-side back'>
        <div className='card-content'>
          <div>Example</div>
        </div>
      </div>
    </Card>
  )
}
