import { useContext } from 'react'
import { DataContext } from './BoardProjects.jsx'
import { Buttons } from '@/components/home/Buttons.jsx'

export const Links = ({ idx }) => {
  const board = useContext(DataContext)
  const { buttons } = board[idx]

  return (
    <div className='project-btn-container grid'>
      <Buttons data={buttons} style={['button-visibility anchors', 'button project-btn-dimensions']} />
    </div>
  )
}
