import { Introduction } from '@/components/Introduction'
import { LinkSection } from '@/components/LinkSection'
import { Shape } from '@/components/utils/Shape'
import { waves } from './refs/shapes'
import Video from '@/components/Video'

const Home = () => {
  return (
    <div className='section'>
      <div className='home__elements-wrapper flex-evenly'>
        <div className='intro-btn-elements'>
          <Introduction />
          <LinkSection />
        </div>
        <Video />
      </div>
      <Shape data={waves.upside} />
    </div>
  )
}

export default Home
