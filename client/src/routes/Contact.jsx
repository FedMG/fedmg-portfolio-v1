import { Typography } from '../components/Typography.jsx'
import { MailTo } from '../components/contact/MailTo.jsx'
import { Shape } from '../components/Shape.jsx'
import { triangle } from './refs/shapes.js'

const Contact = () => {
  return (
    <div id='Contact' className='section'>
      <div className='section-content'>
        <Typography as='h2' style='subtitle-section'>
          <Typography style='span-subtitle'>Contact</Typography> me
        </Typography>
        <div className='contact__content flex-center'>
          <div className='contact__mailto-bk container'>
            <MailTo />
          </div>
        </div>
      </div>
      <Shape data={triangle.contact} />
    </div>
  )
}

export default Contact
