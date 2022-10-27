import { createElement } from 'react'

const elements = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  span: 'span',
  p: 'p'
}

export const Typography = ({ as = 'span', style, children }) => {
  return createElement(
    elements[as] || elements.span,
    { className: style },
    children
  )
}
