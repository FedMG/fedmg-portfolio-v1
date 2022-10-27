import { useContext } from 'react'
import { DataContext } from './CreateProject.jsx'
import { Figure } from '../items/projects/Figure.jsx'
import { Links } from '../items/projects/Links.jsx'

export const CreateCards = () => {
  const board = useContext(DataContext)

  return board.map(({ id }, index) => (
    <div key={id} className='project-cards'>
      <Figure idx={index} />
      <Links idx={index} />
    </div>
  ))
}
