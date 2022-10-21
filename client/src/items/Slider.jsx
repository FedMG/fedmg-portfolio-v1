import { useRef, useCallback } from 'react'
import { setNext, setPrevious } from '../functionals/move.js'
import { Button } from './Button.jsx'
import { buttonClasses } from '../refs/buttonClasses.js'

export const Slider = ({ children, speed = '500' }) => {
  const slider = useRef(null)

  const serveObject = () => {
    return {
      sliderElem: slider.current.children,
      containerStyle: slider.current.style,
      container: slider.current
    }
  }

  const conditionHandler = (setEvent) => {
    const { sliderElem } = serveObject()
    if (sliderElem.length > 0) {
      setEvent
    }
  }

  const next = useCallback(() => {
    conditionHandler(setNext(speed, serveObject))
  }, [speed])

  const previous = () => {
    conditionHandler(setPrevious(serveObject))
  }

  return (
    <div className='slider-bk'>
      <Button
        onclick={previous}
        src='https://img.icons8.com/material/96/000000/chevron-left--v1.png'
        alt='backward'
        style={buttonClasses}
      />

      <div className='slider-element-bk'>
        <div ref={slider} className='slider-element'>
          {children}
        </div>
      </div>

      <Button
        onclick={next}
        src='https://img.icons8.com/material/96/000000/chevron-right--v1.png'
        alt='forward'
        style={buttonClasses}
      />
    </div>
  )
}
