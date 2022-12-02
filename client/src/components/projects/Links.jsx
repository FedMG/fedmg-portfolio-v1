import { useContext } from 'react'
import { DataContext } from './BoardProjects.jsx'
import { Buttons } from '@/components/home/Buttons.jsx'

// old classes
// project-buttons-bk
// project-buttons

export const Links = ({ idx }) => {
  const board = useContext(DataContext)
  const { buttons } = board[idx]

  return (
    <div className='project-buttons-bk'>
      <Buttons data={buttons} style='button btn-dimensions btn-visibility' />
    </div>
  )
}
