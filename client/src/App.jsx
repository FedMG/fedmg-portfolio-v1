import { useEffect, useState } from 'react'
import { Loader } from '@/components/Loader'
import { Header } from '@/routes/structure/Header.jsx'
import { Main } from '@/routes/structure/Main.jsx'

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
    </div>
  )
}
export default App
