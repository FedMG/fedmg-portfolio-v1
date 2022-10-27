import { useContext } from 'react'
import { DataContext } from '../../iterators/CreateProject.jsx'
import { Button } from '../Button.jsx'

export const Links = ({ idx }) => {
  const board = useContext(DataContext)
  const {
    links: [github, stackblitz]
  } = board[idx]

  return (
    <div className='project-buttons-bk'>
      <Button href={github} style='project-buttons'>
        Github
      </Button>
      <Button href={stackblitz} style='project-buttons'>
        Stackblitz
      </Button>
    </div>
  )
}
