import { memo } from 'react'
import { isArray } from '@/functions/tools'

const iterateSVG = (arr, style) => (
  arr.map(({ id, d }) => (
    <path key={id} d={d} className={style} />
  ))
)

export const IconSVG = memo(({ data: { d, fill, style }, title }) => (
  <svg
    className='svg-dimensions'
    role='img'
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 24'
    fill={fill ?? 'fill'}
  >
    {title && <title>{title}</title>}
    {!isArray(d) ? <path d={d} className={style ?? 'svg-styles'} /> : iterateSVG(d, style)}
  </svg>
))
