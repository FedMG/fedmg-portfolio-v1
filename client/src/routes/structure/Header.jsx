import Top from '../../components/header/Top.jsx'
import { List } from '../../components/header/List.jsx'
import { header } from '../refs/list.js'

export const Header = () => {
  return (
    <>
      <header className='Header'>
        <Top title='Fed' span='MG' />
      </header>
      <nav className='navbar'>
        <List
          list={header.routeNames}
          classes={header.styles}
        />
      </nav>
    </>
  )
}
