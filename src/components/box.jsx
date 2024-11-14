import React, { useState } from 'react'
import Black from '../assets/black.jpeg'

export default function box({ box, index, storeCardSelected, selection }) {


  return (
    <>
      <div className="game__grid-box"
        onClick={() => !selection && storeCardSelected(index)}
      >
        {
          box.selected === "active" ? (
            <img src={box.src} className="game__grid-box-img" />
          ) : (
            <img src={Black} className="game__grid-box-img-cover" />
          )
        }
      </div>

    </>

  )
}
