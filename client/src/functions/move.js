import { setListener, setAnimation } from './tools.js'

const setNext = (speed, serveObject) => {
  const { sliderElem, containerStyle, container } = serveObject()
  const firstElement = sliderElem[0]

  setAnimation(
    containerStyle,
    `${speed}ms ease-out all`,
    `translateX(-${sliderElem[0].offsetWidth}px)`
  )

  const updatePosition = () => {
    setAnimation(containerStyle, 'none', 'translateX(0)')
    container.appendChild(firstElement)
    container.removeEventListener('transitionend', updatePosition)
  }

  setListener(container, 'transitionend', updatePosition)
}

const setPrevious = (serveObject) => {
  const { sliderElem, containerStyle, container } = serveObject()
  const lastElement = sliderElem[sliderElem.length - 1]

  setAnimation(
    containerStyle,
    'none',
    `translateX(-${sliderElem[0].offsetWidth}px)`
  )

  container.insertBefore(lastElement, container.firstChild)

  setTimeout(() => {
    setAnimation(
      containerStyle,
      '600ms cubic-bezier(0,1,.78,.99)',
      'translateX(0)'
    )
  }, 50)
}

export { setNext, setPrevious }
