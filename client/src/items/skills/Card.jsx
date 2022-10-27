import { CreateShape } from '../../iterators/CreateShape.jsx'
import { CardSide } from './CardSide.jsx'

export const Card = () => {
  return (
    <div className='card'>
      <CardSide styles={['card-side front', 'card-content']}>
        <CreateShape />
      </CardSide>
      <CardSide styles={['card-side back', 'card-content']} />
    </div>
  )
}
