import { useRef, useCallback } from 'react'
import { setNext, setPrevious } from '@/functions/move'

export const useSliderEffect = (speed) => {
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

  return { methods: { previous, next }, ref: slider }
}
