import { useState, useEffect } from 'react'

export const useTypewriterEffect = (msg, delay = 120, timeout = 900) => {
  const [text, setText] = useState('')
  const [next, setNext] = useState(0)

  useEffect(() => {
    let index = 0

    if (index <= text.length) {
      const interval = setInterval(() => {
        setText(msg[next].substring(0, index))
        index++

        if (index > msg[next].length) {
          clearInterval(interval)
        }
      }, delay)
    }
  }, [next])

  useEffect(() => {
    if (text.length === msg[next].length) {
      const prevRemove = setTimeout(() => {
        let index = text.length

        const interval = setInterval(() => {
          index--
          setText(msg[next].substring(0, index))

          if (index <= 0) {
            setNext(next => next + 1)

            if (next >= msg.length - 1) {
              setNext(0)
            }
            clearInterval(interval)
          }
        }, delay)
      }, timeout)
      return () => clearTimeout(prevRemove)
    }
  }, [text])

  return [text]
}
