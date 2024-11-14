import React from 'react'

export default function Stats( {randomizeBoxes, score, moves, misses, accuracy, gamesPlayed}) {
  return (
    <div className="game__stats">
      <div className="game__stat">
        <h4 className="game__stat-num">{score}</h4>
        <p className="game__stat-name">Score</p>
      </div>
      <div className="game__stat">
        <h4 className="game__stat-num">{moves}</h4>
        <p className="game__stat-name">Moves</p>
      </div>
      <div className="game__stat">
        <h4 className="game__stat-num">{misses}</h4>
        <p className="game__stat-name">Misses</p>
      </div>
      <div className="game__stat">
        <h4 className="game__stat-num">{accuracy}%</h4>
        <p className="game__stat-name">Accuracy</p>
      </div>
      <div className="game__stat">
        <h4 className="game__stat-num">{gamesPlayed}</h4>
        <p className="game__stat-name">Games Played</p>
      </div>
    </div>
  )
}
