import { Fragment } from 'react'
import { Button } from '../Button.jsx'
import { Shape } from '../Shape.jsx'

export const Buttons = ({ data, style }) => {
  return (
    <>
      {data.map(({ id, name, link, icon }) => (
        <Fragment key={id}>
          <Button style={style} href={link}>
            <span className='button-content'>
              <span className='button-name'>{name}</span>
              {icon && <Shape data={icon} />}
            </span>
          </Button>
          <a className='icon-link' href={link} target='_blank' rel='noreferrer'>
            {icon && <Shape data={icon} />}
          </a>
        </Fragment>
      ))}
    </>
  )
}
