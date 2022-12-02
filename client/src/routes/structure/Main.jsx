import { Home } from '@/routes/Home.jsx'
import { About } from '@/routes/About'
import { Projects } from '@/routes/Projects'
import { Skills } from '@/routes/Skills'
import { Contact } from '@/routes/Contact'

export const Main = () => {
  return (
    <main className='Main'>
      <Home />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  )
}
