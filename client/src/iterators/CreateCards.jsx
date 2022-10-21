import { useContext } from 'react'
import { DataContext } from './CreateProject.jsx'
import { Figure } from '../items/projects/Figure.jsx'
import { Links } from '../items/projects/Links.jsx'

export const CreateCards = () => {
  const { captions } = useContext(DataContext)
  return captions.map((caption, index) => (
    <div key={caption} className='project-cards'>
      <Figure idx={index} cap={caption} />
      <Links idx={index} />
    </div>
  ))
}
