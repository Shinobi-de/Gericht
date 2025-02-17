import React from 'react';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';
import { meal } from '../../constants';
import './Intro.css';

const Intro = () => {
  const handleVideo = ()=>{
    setPlayVideo((prevPlayVideo)=>!prevPlayVideo)

    if(playVideo){
      vidref.current.pause()
    }
    else{
      vidref.current.play()
    }
  }  
  const[playVideo,  setPlayVideo] = React.useState(false)
  const vidref = React.useRef()
  return(
    <div className='app__video'>
      <video src={meal} 
      ref={vidref}
      type="video/mp4" 
      loop controls={false} 
      muted />

      <div className='app__video-overlay flex__center'>
        <div className='app__video-overlay_circle flex_center' 
        onClick={handleVideo}

        >
          {playVideo 
            ? 
            <BsPauseFill color='#FFF ' fontSize={30}/> : <BsFillPlayFill color='#FFF' fontSize={30}/>
          }
        </div>
      </div>
    
    </div>

  )
 
};

export default Intro;
