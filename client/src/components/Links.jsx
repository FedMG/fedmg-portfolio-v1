import { useContext } from 'react'
import { DataContext } from './BoardProjects'
import { Buttons } from './Buttons'

export const Links = ({ idx }) => {
  const board = useContext(DataContext)
  const { buttons } = board[idx]

  return (
    <div className='project-btn-container grid anchor-svg-container'>
      <Buttons data={buttons} style={['button-visibility anchors', 'button project-btn-dimensions']} />
    </div>
  )
}
