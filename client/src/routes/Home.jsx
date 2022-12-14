import { lazy } from 'react'

import { Introduction } from '@/components/home/Introduction.jsx'
import { LinkSection } from '@/components/home/LinkSection.jsx'
import { Shape } from '@/components/Shape.jsx'
import { waves } from './refs/shapes.js'

const Video = lazy(() => import('@/components/home/Video'))

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
