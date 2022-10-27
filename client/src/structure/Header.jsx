import Top from '../items/header/Top.jsx'
import { CreateList } from '../iterators/CreateList.jsx'
import { headerData } from '../refs/headerData.js'

export const Header = () => {
  return (
    <header className='Header'>
      <Top title='Fed' span='MG' />
      <nav className='navbar'>
        <CreateList
          listNames={headerData.routeNames}
          classes={headerData.styles}
        />
      </nav>
    </header>
  )
}
