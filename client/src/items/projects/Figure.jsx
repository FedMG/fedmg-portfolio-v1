import { useContext } from 'react'
import { DataContext } from '../../iterators/CreateProject.jsx'

export const Figure = ({ idx }) => {
  const board = useContext(DataContext)
  const { caption, source } = board[idx]
  return (
    <figure className='project-figure'>
      <img src={source} alt={caption + ' image'} className='project-image' />
      <figcaption className='project-figcaption'>{caption}</figcaption>
    </figure>
  )
}
