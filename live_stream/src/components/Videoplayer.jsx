import React, {useRef, useEffect} from 'react'
import {CloseRounded} from "@mui/icons-material";
import { Link } from 'react-router-dom';

const Videoplayer = ({videoId,setVideoId}) => {
    const videoRef = useRef(null)

    useEffect(()=>{
        if(videoRef.current){
            videoRef.current.pause()
            videoRef.current.removeAttribute('src')
            videoRef.current.load()
        }
    })
    console.log(videoId);
  return (
    <div className='w-full flex items-center justify-center mt-9'>
    <video ref={videoRef} width='1080' height='240' controls autoPlay>
        <source src={`http://localhost:3000/videos/${videoId}`} type='video/mp4'></source>
        Your browser does not support the video tag.
    </video>
    <Link to='/'>
    <CloseRounded onClick={()=>setVideoId(null)} className=' text-white absolute right-11 top-20'/>
    </Link>
    </div>
  )
}

export default Videoplayer