import React, { useState } from 'react'

const Musicbar = ({currentTime,duration,onSeek}) => {
  
  return (
    <div className="flex items-center gap-2" >
       <span className="text-xs">{formatTime(currentTime)}</span>
        {/*input range */}
        <input className='w-40 '
         type="range" 
         min="0"
         max={duration || 0}
        value={currentTime}
        onChange={onSeek}
        />
        {/* Duration */}
      <span className="text-xs">{formatTime(duration)}</span>
    </div>
  )
}
// helper to format time mm:ss
function formatTime(time) {
  if (!time || isNaN(time)) return "0:00"
  const minutes = Math.floor(time / 60)
  const seconds = Math.floor(time % 60).toString().padStart(2, "0")
  return `${minutes}:${seconds}`
}

export default Musicbar