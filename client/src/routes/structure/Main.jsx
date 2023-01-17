import { lazy, Suspense } from 'react'
import { Loader } from '@/components/utils/Loader'

const Home = lazy(() => import('@/routes/Home'))
const About = lazy(() => import('@/routes/About'))
const Projects = lazy(() => import('@/routes/Projects'))
const Skills = lazy(() => import('@/routes/Skills'))

const Main = () => {
  return (
    <main className='Main'>
      <Suspense fallback={<Loader />}>
        <Home />
        <About />
        <Projects />
        <Skills />
      </Suspense>
    </main>
  )
}

export default Main
