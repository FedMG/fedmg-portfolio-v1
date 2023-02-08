import { lazy, Suspense } from 'react'
import { Loader } from '@/components/utils/Loader'

import { triangle, waves } from '@/routes/refs/shapes'
import { Background } from '@/components/utils/Background'

const Home = lazy(() => import('@/routes/Home'))
const About = lazy(() => import('@/routes/About'))
const Projects = lazy(() => import('@/routes/Projects'))
const Skills = lazy(() => import('@/routes/Skills'))

const Main = () => {
  return (
    <main className='Main'>
      <Suspense fallback={<Loader />}>
        <Background bottom={waves.upside}>
          <Home />
        </ Background>
        
        <Background top={triangle.downside} bottom={triangle.projectBottom}>
          <Projects />
        </ Background>
        
        <Background top={waves.downside} bottom={triangle.upside}>
          <About />
        </ Background>
        
        <Background top={triangle.skillsTopEmpty} bottom={triangle.contact}>
          <Skills />
        </ Background>
      </Suspense>
    </main>
  )
}

export default Main
