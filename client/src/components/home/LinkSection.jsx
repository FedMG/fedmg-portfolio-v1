import { Buttons } from './Buttons.jsx'
import { data } from '@/routes/refs/buttons.js'

export const LinkSection = () => {
  return (
    <div className='container'>
      <div className='home-button-container flex'>
        <Buttons data={data} style={['button-visibility anchors', 'button home-button-dimensions']} />
      </div>
    </div>
  )
}
