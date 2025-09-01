import React, { useEffect, useRef, useState } from "react";
import Home from "./Home";
import Musicplayer from "./Musicplayer";
import {Play,Pause} from "./IconButton"

const Background = () => {
   const [isPlaying,setIsPlaying] = useState(false);
  const handlePlayPause =()=>{
  return(
    setIsPlaying(!isPlaying)
  )
}

 const [isPlaying1,setIsPlaying1] = useState(false);
  const handlePlayPause1 =()=>{
  return(
    setIsPlaying1(!isPlaying1)
  )
}

 const [isPlaying2,setIsPlaying2] = useState(false);
  const handlePlayPause2 =()=>{
  return(
    setIsPlaying2(!isPlaying2)
  )
}

 const [isPlaying3,setIsPlaying3] = useState(false);
  const handlePlayPause3 =()=>{
  return(
    setIsPlaying3(!isPlaying3)
  )
}
 const [isPlaying4,setIsPlaying4] = useState(false);
  const handlePlayPause4 =()=>{
  return(
    setIsPlaying4(!isPlaying4)
  )
}


const making = useRef(null)
useEffect(() => {
  isPlaying2? making.current.play() : making.current.pause()


}, [isPlaying2])

const customers = useRef(null)
useEffect(() => {
    isPlaying1? customers.current.play() : customers.current.pause()

  
}, [isPlaying1])

const rainy = useRef(null)
useEffect(() => {
    isPlaying3? rainy.current.play() : rainy.current.pause()

  
}, [isPlaying3])

const sunny = useRef(null)
useEffect(() => {
    isPlaying4? sunny.current.play() : sunny.current.pause()

  
}, [isPlaying4])



  return (
    <div className="relative w-screen h-screen bg-transparent">
      {/* Background video */}
      <audio src="/people.wav"
      loop
      preload='metadata'
      ref={customers}>
      </audio>

      <audio src="/machines.wav"
      loop
      preload='metadata'
      ref={making}>
      </audio>

      
      <audio src="/rainy.wav"
      loop
      preload='metadata'
      ref={rainy}>
      </audio>

      
      <audio src="/sunny.wav"
      loop
      preload='metadata'
      ref={sunny}>
      </audio>



      {/* Foreground content */}
      <div className="relative z-10 grid grid-cols-4 bg-transparent h-screen w-screen">
        {/* Left side */}
        <div className="col-span-1 bg-transparent flex justify-center items-center">
          <div className="w-64 h-96  flex-col flex justify-center items-start gap-6 font-semibold pl-20 pb-5 font-serif capitalize">
            <div className="flex">
              Barista
              <div className="pl-2 ">
               {isPlaying? (<Pause onClick={handlePlayPause} hei={15} wid={15}/>) :  <Play  onClick={handlePlayPause} hei={15} wid={15}/> }
              </div>
            </div>

            <div className="flex">
               Customers
                <div className="pl-2  transition duration-700">
                    {isPlaying1? (<Pause onClick={handlePlayPause1} hei={15} wid={15} />) :  <Play onClick={handlePlayPause1} hei={15} wid={15}/> }
                </div>
            </div>

            <div className="flex"> 
               making coffee  
              <div className="pl-2">
                  {isPlaying2? (<Pause onClick={handlePlayPause2} hei={15} wid={15}/>) :  <Play onClick={handlePlayPause2} hei={15} wid={15}/> }
              </div>
            </div>
           
          </div>
        </div>
        <div className="col-span-2 flex justify-center  items-center h-screen "> 
            <Home/>
            
      
        </div>
         
        {/* Right side */}
        <div className="col-span-1 bg-transparent flex justify-center items-center">
          <div className="w-72 h-[600px]   flex-col flex justify-center items-start gap-6 font-semibold pl-20 pb-5 font-serif capitaliz ">
            <div className="flex">
              Rainy
              <div className="pl-2">
                  {isPlaying3? (<Pause onClick={handlePlayPause3} hei={15} wid={15}/>) :  <Play  onClick={handlePlayPause3} hei={15} wid={15}/> }
              </div>
            </div>
            <div className="flex">
              Sunny
              <div className="pl-2">
                  {isPlaying4? (<Pause onClick={handlePlayPause4} hei={15} wid={15}/>) :  <Play  onClick={handlePlayPause4} hei={15} wid={15}/> }
              </div>
            </div>
          </div>
        </div>
          <div className="absolute bottom-16 ">
        <Musicplayer  />
      </div>
      <div className="absolute top-28 flex justify-center w-screen">
       <h1 className="text-7xl font-test">Elixir</h1> 
      </div>
      </div>
    </div>
  );
};

export default Background;
