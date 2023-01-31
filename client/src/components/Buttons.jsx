import { Fragment } from 'react'
import { Button } from './utils/Button'
import { IconSVG } from './utils/IconSVG'

export const Buttons = ({ data, style }) => {
  return (
    <>
      {data.map(({ id, name, link, svg }) => (
        <Fragment key={id}>
          <Button style={style} href={link}>
            <span className='flex-center button-content'>
              {name}
              <IconSVG data={svg} />
            </span>
          </Button>
          <div className='container-visibility'>
            <div className='flex-center'>
              <a
                className='anchor-svg-styles'
                href={link}
                target='_blank'
                rel='noreferrer'
              >
                <IconSVG data={svg} />
              </a>
            </div>
          </div>
        </Fragment>
      ))}
    </>
  )
}
