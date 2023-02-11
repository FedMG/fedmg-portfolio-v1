import { Logo } from '@/components/Logo'
import { setUpperCase } from '@/functions/tools'
import { useSectionHighlighter } from '@/hooks/useSectionHighlighter'

export const routeNames = [
  { name: 'home' },
  { name: 'projects' },
  { name: 'about' },
  { name: 'skills' }
]

const Header = () => {
  const activeSection = useSectionHighlighter()

  return (
    <>
      <header className='header' id='Home'>
        <div className='top flex-center'>
          <h1 className='inline-block' translate='no'>
            <a href='#home' className='top__anchor flex-center'>
              SayDeploy
              <Logo />
            </a>
          </h1>
        </div>
      </header>
      <nav className='navbar flex-center'>
        <ul className='unordered-list'>
          {routeNames.map(({ name }) => (
            <li className='lists' key={name}>
              <a
                href={`#${name === 'home' ? 'Home' : name}`}
                className={`lists__anchor ${
                  activeSection === name ? 'nav-option-active' : ''
                }`}
              >
                {setUpperCase(name)}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}

export default Header
