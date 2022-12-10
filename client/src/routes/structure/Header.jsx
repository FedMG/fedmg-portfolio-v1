import Top from '@/components/header/Top'
import { List } from '@/components/header/List'
import { header } from '@/routes/refs/list'

const Header = () => {
  return (
    <>
      <header className='header'>
        <Top title='DiDeploy' />
      </header>
      <nav className='navbar flex-center'>
        <List
          list={header.routeNames}
          classes={header.styles}
        />
      </nav>
    </>
  )
}

export default Header