import { Introduction } from '@/components/Introduction'
import { Shape } from '@/components/utils/Shape'
import { waves } from './refs/shapes'
import Video from '@/components/Video'

import { Buttons } from '@/components/Buttons'
import { data } from './refs/buttons'

const Home = () => {
  return (
    <div className='section'>
      <div className='home__elements-wrapper flex-evenly'>
        <div className='intro-btn-elements'>
          <Introduction />
          <div className='container'>
            <div className='home-button-container flex'>
              <Buttons
                data={data}
                style={[
                  'button-visibility anchors',
                  'button home-button-dimensions home-button'
                ]}
              />
            </div>
          </div>
        </div>
        <Video />
      </div>
      <Shape data={waves.upside} />
    </div>
  )
}

export default Home
