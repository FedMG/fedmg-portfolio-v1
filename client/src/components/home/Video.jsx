import { memo } from 'react'
import intro from '@/assets/programming.webm'

const Video = () => {
  return (
    <div className='intro-gif-container'>
      <video src={intro} className='intro-gif container' autoPlay loop muted />
    </div>
  )
}

export default memo(Video)
