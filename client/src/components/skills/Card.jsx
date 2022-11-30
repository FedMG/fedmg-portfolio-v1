import { forwardRef } from 'react'

export const Card = forwardRef((props, ref) => {
  const { children } = props

  return (
    <div className='card' ref={ref}>
      <div className='card-side front'>
        <div className='card-content'>{children[0]}</div>
      </div>
      {children[1]}
    </div>
  )
})
