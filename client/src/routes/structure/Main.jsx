import { Home } from '../Home.jsx'
import { About } from '../About.jsx'
import { Projects } from '../Projects.jsx'
import { Skills } from '../Skills.jsx'
import { Contact } from '../Contact.jsx'

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
