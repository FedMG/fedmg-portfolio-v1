import { useEffect, useState, lazy } from 'react'
import { Loader } from '@/components/Loader'

const Header = lazy(() => import('@/routes/structure/Header'))
const Main = lazy(() => import('@/routes/structure/Main'))
const Footer = lazy(() => import('@/routes/structure/Footer'))

function App () {
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(false)
  }, [])

  if (isLoading) return <Loader />

  return (
    <div className='App'>
      <Header />
      <Main />
      <Footer />
    </div>
  )
}
export default App
