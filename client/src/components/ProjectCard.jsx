import { useContext } from 'react'
import { DataContext } from './BoardProjects'

import { Figure } from './Figure'
import { Links } from './Links'

export const ProjectCard = () => {
  const board = useContext(DataContext)

  return board.map(({ id }, index) => (
    <div key={id} className='project-cards'>
      <Figure idx={index} />
      <Links idx={index} />
    </div>
  ))
}
