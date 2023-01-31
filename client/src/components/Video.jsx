import { memo } from 'react'
import intro from '/programming.webm' // eslint-disable-line

const Video = () => {
  return (
    <div className='video-container'>
    <div className='video-container-aspect-ratio'>
      <video src={intro} className='video-aspect-ratio' autoPlay loop muted playsInline />
    </div>
    </div>
  )
}

export default memo(Video)
