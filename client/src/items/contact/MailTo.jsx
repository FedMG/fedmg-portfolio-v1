import { useState } from 'react'
import { Button } from '../Button.jsx'
import { Typography } from '../Typography.jsx'
import { Mail } from './Mail.jsx'
import { structure } from '../../refs/message-structure.js'

export const MailTo = () => {
  const [message, setMessage] = useState(structure)

  const getForm = (e) => {
    e.preventDefault()

    if (!message.subject && !message.body) {
      return setMessage({
        ...message,
        status: '-error',
        errors: 'Please, complete all fields!'
      })
    }

    if (!message.subject) {
      setMessage({
        ...message,
        status: '-error',
        errors: ['Please, complete the subject line', message.errors[1]]
      })
    }

    if (!message.body) {
      setMessage({
        ...message,
        status: '-error',
        errors: [message.errors[0], 'Please, complete the body line']
      })
    }
  }

  const getSubject = (e) => {
    setMessage({ ...message, subject: e.target.value, status: '', errors: [] })
  }

  const getBody = (e) => {
    setMessage({ ...message, body: e.target.value, status: '', errors: [] })
  }

  return (
    <form className='form' onSubmit={getForm}>
      <label htmlFor='subject' />
      <input
        className={'form__input ' + (message.errors[0] ? 'error' : '')}
        id='subject'
        type='text'
        onChange={getSubject}
        placeholder='Subject'
        title='e.i: inquery for services'
      />
      <label htmlFor='body' />
      <textarea
        className={'form__textarea ' + (message.errors[1] ? 'error' : '')}
        id='body'
        onChange={getBody}
        placeholder='Type a mail'
      />
      <div className='form__control-bk'>
        <div className={'form__msg-bk form__msg-bk' + (message.status ?? null)}>
          <Typography>{message.errors ?? null}</Typography>
        </div>
        <Mail
          email='federico.mgonzalia@gmail.com'
          subject={message.subject}
          body={message.body}
        >
          <Button style='button btn-dimensions over-styles'>Submit</Button>
        </Mail>
      </div>
    </form>
  )
}
