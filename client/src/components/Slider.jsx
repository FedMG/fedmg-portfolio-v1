import { useRef, useCallback } from 'react'

import { setNext, setPrevious } from '@/functions/move'
import { Button } from './utils/Button'

export const classes = [
  'slider-buttons-bk',
  'slider-buttons',
  'slider-icon-button'
]

export const Slider = ({ children, speed = '500' }) => {
  const slider = useRef(null)
  const empty = [...classes, 'empty-slider']

  const serveObject = () => {
    return {
      sliderElem: slider.current.children,
      containerStyle: slider.current.style,
      container: slider.current
    }
  }

  const conditionHandler = (setEvent) => {
    const { sliderElem } = serveObject()
    if (sliderElem.length > 1) {
      return setEvent()
    }
  }

  const next = useCallback(() => {
    conditionHandler(() => setNext(speed, serveObject))
  }, [speed])

  const previous = () => {
    conditionHandler(() => setPrevious(serveObject))
  }

  return (
    <div className='slider-bk'>
      <Button
        onclick={previous}
        src='https://img.icons8.com/material/96/000000/chevron-left--v1.png'
        alt='backward'
        style={empty}
        // style = { classes }
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
        style={empty}
        // style = { classes }

      />
    </div>
  )
}
