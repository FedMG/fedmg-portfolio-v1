import { Introduction } from '../items/home/Introduction.jsx'
import { LinkSection } from '../items/home/LinkSection.jsx'
import { Shape } from '../iterators/Shape.jsx'
import { waves } from '../refs/shapes.js'
import intro from '../assets/intro.gif'

export const Home = () => {
  return (
    <div id='Home' className='section'>
      <div className='home__sticky-header' />
      <div className='home__elements-wrapper'>
        <div className='intro-btn-elements'>
          <Introduction />
          <LinkSection />
        </div>
        <div className='intro-gif-container'>
          <img src={intro} className='intro-gif' draggable='false' />
        </div>
      </div>
      <Shape data={waves.upside} />
    </div>
  )
}
