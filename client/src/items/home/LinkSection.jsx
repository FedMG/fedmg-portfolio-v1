import { CreateButtons } from '../../iterators/CreateButtons.jsx'
import { data } from '../../refs/buttons.js'

export const LinkSection = () => {
  return (
    <div className='buttons-container'>
      <div className='buttons-container__subcontainer'>
        <CreateButtons data={data} style='button btn-dimensions btn-visibility' />
      </div>
    </div>
  )
}
