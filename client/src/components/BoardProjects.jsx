import { createContext } from 'react'
import { ProjectCard } from './ProjectCard'

export const DataContext = createContext()

export const BoardProjects = ({ data }) => {
  return data.map(({ id, board }) => (
    <div key={id} className='project-board'>
      <DataContext.Provider value={board}>
        <ProjectCard />
      </DataContext.Provider>
    </div>
  ))
}
