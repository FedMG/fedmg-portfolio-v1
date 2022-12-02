import { Buttons } from './Buttons.jsx'
import { data } from '@/routes/refs/buttons.js'

export const LinkSection = () => {
  return (
    <div className='buttons-container'>
      <div className='buttons-container__subcontainer'>
        <Buttons data={data} style='button btn-dimensions btn-visibility' />
      </div>
    </div>
  )
}
