import { createContext } from 'react'
import { CreateCards } from './CreateCards.jsx'

export const DataContext = createContext()

export const CreateProject = ({ data }) => {
  return data.map(({ id, board }) => (
    <div key={id} className='project-board'>
      <DataContext.Provider value={board}>
        <CreateCards />
      </DataContext.Provider>
    </div>
  ))
}
