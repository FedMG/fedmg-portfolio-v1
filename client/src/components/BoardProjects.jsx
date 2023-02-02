import { useState } from 'react'

import { Buttons } from './Buttons'
import { Modal } from './Modal'

const Figure = ({ data: { caption, srcSet, source } }) => {
  return (
    <figure className='project-figure'>
      <div className='figure-aspect-ratio-box'>
        <img
          src={source}
          alt={caption + ' image'}
          className='figure-aspect-ratio'
          srcSet={srcSet}
          sizes='(max-width: 767px) 450px, (min-width: 768px) and (max-width: 1023px) 1000px, 1500px'
        />
      </div>
      <figcaption className='project-figcaption' translate='no'>
        <span className='project-span-caption'>{caption}</span>
      </figcaption>
    </figure>
  )
}

const Project = ({ children, data }) => {
  const [isModal, setModal] = useState(false)
  return (
    <div className='project-form'>
      <Modal setClose={() => setModal(false)} isOpen={isModal} data={data}>
        {data.description}
      </Modal>

      <div className='project-card'>
        <button
          onClick={() => setModal(true)}
          className='project-modal-button modal-open button'
        >
          <img
            className='project-modal-icon-button modal-open-icon container'
            src='/arrow-expand.svg'
            alt='expand modal icon'
            draggable={false}
          />
        </button>
        {children}
      </div>
    </div>
  )
}

export const BoardProjects = ({ data }) => {
  return data.map(({ id, board }) => (
    <div key={id} className='board-projects'>
      {board.map(({ id, buttons, description, badges, ...props }) => (
        <Project key={id} data={{ buttons, description, badges, ...props }}>
          <>
            <Figure data={props} />
            <div className='project-btn-container grid anchor-svg-container'>
              <Buttons
                data={buttons}
                style={[
                  'button-visibility anchors',
                  'button project-btn-dimensions project-button'
                ]}
              />
            </div>
          </>
        </Project>
      ))}
    </div>
  ))
}
