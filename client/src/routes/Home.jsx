import { Introduction } from '../items/home/Introduction.jsx'
import { Greeting } from '../items/home/Greeting.jsx'
import { LinkSection } from '../items/home/LinkSection.jsx'
import { CreateShape } from '../iterators/CreateShape.jsx'
import { waves } from '../refs/shapes.js'

export const Home = () => {
  return (
    <div id='Home' className='section'>
      <div className='home-section-content'>
        <Greeting />
        <Introduction />
        <LinkSection />
      </div>
      <CreateShape data={waves.upside} />
    </div>
  )
}
