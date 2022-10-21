import { useContext } from 'react'
import { DataContext } from '../../iterators/CreateProject.jsx'

export const Figure = ({ idx, cap }) => {
  const { sources } = useContext(DataContext)

  return (
    <figure className='project-figure'>
      <img src={sources[idx]} alt={cap + ' image'} className='project-image' />
      <figcaption className='project-figcaption'>{cap}</figcaption>
    </figure>
  )
}
