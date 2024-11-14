import React, { useEffect, useState } from 'react'
import Grid from '../components/grid'
import Apple from '../assets/apple.webp'
import Banana from '../assets/banana.png'
import Cherry from '../assets/cherry.png'
import Grape from '../assets/grape.webp'
import Kiwi from '../assets/kiwi.png'
import Mango from '../assets/mango.png'
import Pear from '../assets/pear.png'
import Watermelon from '../assets/watermelon.png'
import Stats from './Stats'
import Message from './Message'

export default function game() {

  const [boxArray, setBoxArray] = useState([
    { num: 1, src: Apple, selected: "" },
    { num: 1, src: Apple, selected: "" },
    { num: 2, src: Banana, selected: "" },
    { num: 2, src: Banana, selected: "" },
    { num: 3, src: Cherry, selected: "" },
    { num: 3, src: Cherry, selected: "" },
    { num: 4, src: Grape, selected: "" },
    { num: 4, src: Grape, selected: "" },
    { num: 5, src: Kiwi, selected: "" },
    { num: 5, src: Kiwi, selected: "" },
    { num: 6, src: Mango, selected: "" },
    { num: 6, src: Mango, selected: "" },
    { num: 7, src: Pear, selected: "" },
    { num: 7, src: Pear, selected: "" },
    { num: 8, src: Watermelon, selected: "" },
    { num: 8, src: Watermelon, selected: "" },
  ])

  const [score, setScore] = useState(parseInt(localStorage.getItem('score')) || 0);
  const [moves, setMoves] = useState(parseInt(localStorage.getItem('moves')) || 0);
  const [misses, setMisses] = useState(parseInt(localStorage.getItem('misses')) || 0);
  const [accuracy, setAccuracy] = useState(parseFloat(localStorage.getItem('accuracy')) || 0);
  const [gamesPlayed, setGamesPlayed] = useState(parseInt(localStorage.getItem('gamesPlayed')) || 0);
  const [gameMessage, setGameMessage] = useState("")

  useEffect(() => {
    localStorage.setItem('score', score);
    localStorage.setItem('moves', moves);
    localStorage.setItem('misses', misses);
    localStorage.setItem('accuracy', accuracy);
    localStorage.setItem('gamesPlayed', gamesPlayed);
  }, [score, moves, misses, accuracy, gamesPlayed]);

  useEffect(() => {
    randomizeBoxes()
  }, [])

  useEffect(() => {
    const newGamesPlayed = gamesPlayed + 1;
    setGamesPlayed(newGamesPlayed);
    localStorage.setItem('gamesPlayed', newGamesPlayed);
  }, []);

  const randomizeBoxes = () => {
    let newBoxArray = [...boxArray].sort(() => Math.random() - 0.5)
    setBoxArray(newBoxArray)

    // setBoxArray(boxArray.sort(() => Math.random() - 0.5))
    // console.log(boxArray);
  }


  return (
    <div className="container">
      <div className="row">
        <h1 className="game__title">
          The Matching Game
        </h1>

        <Message gameMessage={gameMessage}/>

        <Grid
          boxArray={boxArray}
          setBoxArray={setBoxArray}
          score={score} setScore={setScore}
          moves={moves} setMoves={setMoves}
          misses={misses} setMisses={setMisses}
          accuracy={accuracy} setAccuracy={setAccuracy}
          gamesPlayed={gamesPlayed} setGamesPlayed={setGamesPlayed}
          setGameMessage={setGameMessage}
        />

        <Stats
          randomizeBoxes={randomizeBoxes}
          score={score}
          moves={moves}
          misses={misses}
          accuracy={accuracy}
          gamesPlayed={gamesPlayed}
        />

        

      </div>
    </div>

  )
}
