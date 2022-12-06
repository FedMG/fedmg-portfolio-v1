import { Introduction } from '@/components/home/Introduction.jsx'
import { LinkSection } from '@/components/home/LinkSection.jsx'
import { Shape } from '@/components/Shape.jsx'
import { waves } from './refs/shapes.js'
import intro from '@/assets/intro.gif'

export const Home = () => {
  return (
    <div id='Home' className='section'>
      <div className='home__elements-wrapper flex-evenly'>
        <div className='intro-btn-elements'>
          <Introduction />
          <LinkSection />
        </div>
        <div className='intro-gif-container'>
          <img src={intro} className='intro-gif container' draggable='false' />
        </div>
      </div>
      <Shape data={waves.upside} />
    </div>
  )
}
