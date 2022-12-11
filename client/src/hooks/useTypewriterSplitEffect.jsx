import { useState, useEffect } from 'react'

export const useTypeWriterSplitEffect = (msg, delay = 150) => {
  const [text, setText] = useState('')

  useEffect(() => {
    let index = 0
    const typing = setInterval(() => {
      setText(msg.substring(0, index))
      index++

      if (index > msg.length) {
        clearInterval(typing)
      }
    }, delay)
  }, [])

  return [text]
}
