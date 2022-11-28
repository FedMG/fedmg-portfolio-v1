import { Fragment } from 'react'
import { Button } from '../items/Button.jsx'
import { Shape } from '../iterators/Shape.jsx'

export const CreateButtons = ({ data, style }) => {
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
