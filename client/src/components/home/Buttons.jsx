import { Fragment } from 'react'

import { Button } from '@/components/Button'
import { Shape } from '@/components/Shape'

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
          <a className='anchor-visibility' href={link} target='_blank' rel='noreferrer'>
            {icon && <Shape data={icon} />}
          </a>
        </Fragment>
      ))}
    </>
  )
}
