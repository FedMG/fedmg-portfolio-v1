import { Fragment } from 'react'

import { Button } from './utils/Button'
import { Shape } from './utils/Shape'

export const Buttons = ({ data, style }) => {
  return (
    <>
      {data.map(({ id, name, link, icon }) => (
        <Fragment key={id}>
          <Button style={style} href={link}>
            <span className='flex-center button-content'>
              {name}
              {icon && <Shape data={icon} />}
            </span>
          </Button>
          <div className='container-visibility'>
            <div className='flex-center'>
              <a className='anchor-svg-styles' href={link} target='_blank' rel='noreferrer'>
                {icon && <Shape data={icon} />}
              </a>
            </div>
          </div>
        </Fragment>
      ))}
    </>
  )
}
