import { useContext } from 'react'
import { DataContext } from './BoardProjects.jsx'
import { Figure } from './Figure.jsx'
import { Links } from './Links.jsx'

export const ProjectCard = () => {
  const board = useContext(DataContext)

  return board.map(({ id }, index) => (
    <div key={id} className='project-cards'>
      <Figure idx={index} />
      <Links idx={index} />
    </div>
  ))
}
