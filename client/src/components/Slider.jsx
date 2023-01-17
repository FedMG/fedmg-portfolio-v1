import { useSliderEffect } from '@/hooks/useSliderEffect'

import { Button } from './utils/Button'

export const classes = [
  'slider-buttons-bk',
  'slider-buttons',
  'slider-icon-button'
]

export const Slider = ({ children, speed = '500' }) => {
  const { methods: { previous, next }, ref: slider } = useSliderEffect(speed)
  const empty = [...classes, 'empty-slider']

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
