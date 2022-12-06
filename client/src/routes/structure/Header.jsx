import Top from '@/components/header/Top'
import { List } from '@/components/header/List'
import { header } from '@/routes/refs/list'

export const Header = () => {
  return (
    <>
      <header className='header'>
        <Top title='Fed' span='MG' />
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
