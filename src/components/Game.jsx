import React from 'react'
import Grid from '../components/grid'

export default function game() {
  return (
    <div className="container">
      <div className="row">
        <h1 className="game__title">
          The Match Game
        </h1>

        <Grid />

        <div className="game__stats">
          <div className="game__stat">
            <h4 className="game__stat-num">0</h4>
            <p className="game__stat-name">Score</p>
          </div>
          <div className="game__stat">
            <h4 className="game__stat-num">0</h4>
            <p className="game__stat-name">Moves</p>
          </div>
          <div className="game__stat">
            <h4 className="game__stat-num">0</h4>
            <p className="game__stat-name">Misses</p>
          </div>
          <div className="game__stat">
            <h4 className="game__stat-num">0%</h4>
            <p className="game__stat-name">Accuracy</p>
          </div>
          <div className="game__stat">
            <h4 className="game__stat-num">0</h4>
            <p className="game__stat-name">Games Played</p>
          </div>
          <button >random</button>


        </div>
      </div>
    </div>

  )
}
