import { Button } from './utils/Button'

export const classes = [
  'slider-buttons-bk',
  'slider-buttons',
  'slider-icon-button'
]

export const Slider = ({ children }) => {
  return (
    <div className='slider-bk'>
      <Button
        src='https://img.icons8.com/material/96/000000/chevron-left--v1.png'
        alt='backward'
        style={classes}
      />

      <div className='slider-element-bk'>
        <div
          className='slider-element'
        >
          {children}
        </div>
      </div>

      <Button
        src='https://img.icons8.com/material/96/000000/chevron-right--v1.png'
        alt='forward'
        style={classes}
      />
    </div>
  )
}
