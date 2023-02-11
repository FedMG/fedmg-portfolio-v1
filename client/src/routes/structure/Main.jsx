import { lazy, Suspense } from 'react'
import { Loader } from '@/components/utils/Loader'

import { triangle, waves } from '@/routes/refs/shapes'
import { Background } from '@/components/utils/Background'
import { useFragmentDelay } from '@/hooks/useFragmentDelay'
import { FragmentDelay } from '@/components/utils/FragmentDelay'

const Home = lazy(() => import('@/routes/Home'))
const About = lazy(() => import('@/routes/About'))
const Projects = lazy(() => import('@/routes/Projects'))
const Skills = lazy(() => import('@/routes/Skills'))

const Main = () => {
  const delays = useFragmentDelay()

  return (
    <main className='Main'>
      <Suspense fallback={<Loader />}>
        <Background bottom={waves.upside} id='home'>
          <FragmentDelay isVisible={delays[0]}>
            <Home />
          </FragmentDelay>
        </Background>

        <Background top={triangle.downside} bottom={triangle.projectBottom} id='projects'>
          <FragmentDelay isVisible={delays[1]}>
            <Projects />
          </FragmentDelay>
        </Background>

        <Background top={waves.downside} bottom={triangle.upside} id='about'>
          <FragmentDelay isVisible={delays[2]}>
            <About />
          </FragmentDelay>
        </Background>

        <Background top={triangle.skillsTopEmpty} bottom={triangle.contact} id='skills'>
          <FragmentDelay isVisible={delays[3]}>
            <Skills />
          </FragmentDelay>
        </Background>
      </Suspense>
    </main>
  )
}

export default Main
