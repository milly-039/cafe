import React, {useEffect, useRef, useState } from 'react'
import { Play,Pause,Next,Prev } from './IconButton'
import chatpateGaane from '../assets/data/chatpateGaane'
import Musicbar from './Musicbar'
const Musicplayer = () => {
 const [currTrack,setCurrTrack] = useState(0);
 const [isPlaying,setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)

const handlePlayPause =()=>{
  return(
    setIsPlaying(!isPlaying)
  )
}
const handleNext =()=>{
  return(
      setCurrTrack((currTrack+1)%chatpateGaane.length)
  )
}
const handlePrev=()=>{
  return(
   setCurrTrack(currTrack===0? chatpateGaane.length-1 : currTrack-1)
  )
}

useEffect(() => {
  isPlaying? audioRef.current.play() : audioRef.current.pause()

  
}, [isPlaying,currTrack])

const {title,artist,cover,src} =chatpateGaane[currTrack]

const audioRef =useRef(null)

 // Track time updates
  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime)
  }

  const handleLoadedMetadata = () => {
    setDuration(audioRef.current.duration)
  }

  const handleSeek = (e) => {
    const seekTime = e.target.value
    audioRef.current.currentTime = seekTime
    setCurrentTime(seekTime)
  }

  return (
    
    <div className=' flex justify-center w-screen z-50 '>
        <div className='flex bg-[rgba(255, 255, 255, 0.01)] h-28 w-96 border-2 border-slate-950 rounded-2xl rounded-bl-none shadow-[0_4px_30px_rgba(0,0,0,0.2)] backdrop-blur-[2px]'> 
            <div className='bg-transparent w-1/3 h-full rounded-l-2xl'>
            <div className=' h-full w-full  '>
                <img  className='h-full w-full m-3 object-cover border-2  border-slate-950  shadow-[0_4px_30px_rgba(0,0,0,0.2)] backdrop-blur-[2px]' src={cover} alt="" />
            </div>

            

            </div>
            <div className='h-full w-2/3  rounded-r-2xl '>
           <div className='h-2/3 pl-8'>
            <h2>
              {title}
            </h2>
            <p>
              {artist}
            </p>
            <div className='flex justify-start w-full'> 

            
            <Musicbar
             currentTime={currentTime}
              duration={duration}
              onSeek={handleSeek}/>
            
            </div>
           </div>
            <div className='flex  justify-around items-end h-1/3 pb-4'>
            
            <Prev onClick={handlePrev} hei={24} wid={24}/>
            {isPlaying? (<Pause onClick={handlePlayPause} hei={24} wid={24}/>) :  <Play onClick={handlePlayPause} hei={24} wid={24}/> }

            
           
            <Next onClick={handleNext} hei={24} wid={24} />

            </div>
            <audio src={src}
            preload='metadata'
            ref={audioRef}
             onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={handleLoadedMetadata}>
              
            </audio>
             
            </div>

            

        </div>
    </div>
  )
}

export default Musicplayer