import React from 'react'

export default function Message( {gameMessage}) {
  return (
    <div className='message__container'>
      <h3 className={`message ${gameMessage === "Nice! Keep Going!" ? 'green' : "red"}`}>
        {gameMessage}
        </h3>
    </div>
  )
}
