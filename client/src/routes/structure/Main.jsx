import { lazy, Suspense } from 'react'
import { Loader } from '@/components/Loader'

const Home = lazy(() => import('@/routes/Home'))
const About = lazy(() => import('@/routes/About'))
const Projects = lazy(() => import('@/routes/Projects'))
const Skills = lazy(() => import('@/routes/Skills'))

// const Contact = lazy(() => import('@/routes/Contact'))

const Main = () => {
  return (
    <main className='Main'>
      <Suspense fallback={<Loader />}>
        <Home />
      </Suspense>

      <Suspense fallback={<Loader />}>
        <About />
      </Suspense>

      <Suspense fallback={<Loader />}>
        <Projects />
      </Suspense>

      <Suspense fallback={<Loader />}>
        <Skills />
      </Suspense>

      {/* <Suspense fallback={<Loader />}>
        <Contact />
      </Suspense> */}
    </main>
  )
}

export default Main
