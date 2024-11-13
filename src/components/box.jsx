import React, { useState } from 'react'
import Black from '../assets/black.jpeg'

export default function box({ box, handleChoice }) {

  const [revealed, setRevealed] = useState(true)

  return (
    <>
      <div className={`game__grid-box ${revealed && 'revealed'}`} 
        onClick={() => setRevealed(false)}
      > 
      {
        revealed ? (
          <img src={box.src} className="game__grid-box-img"/>
        ) : (
          <img src={Black} className="game__grid-box-img-cover"/>
        )
      }
        {/* <img src={image} className="game__grid-box-img"/>
        <img src={Black} className="game__grid-box-img-cover"/> */}
      </div>

    </>

  )
}
