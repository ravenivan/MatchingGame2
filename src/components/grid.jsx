import React, { useEffect, useState } from 'react'
import Box from '../components/box'

export default function grid({ boxArray, setBoxArray, score, moves, misses, accuracy, gamesPlayed, setScore, setMoves, setMisses, setAccuracy, setGamesPlayed, setGameMessage }) {

  const [firstCardSelected, setFirstCardSelected] = useState(-1)
  const [selectionInProgress, setSelectionInProgress] = useState(false)


  const storeCardSelected = (index) => {

    if (selectionInProgress || boxArray[index].selected === "active") return
    
    
    if (firstCardSelected === -1) {
      setFirstCardSelected(index)
      
      boxArray[index].selected = "active"
      setBoxArray([...boxArray])
    } else {
      boxArray[index].selected = "active"
      setBoxArray([...boxArray])
      checkMatch(index)
    }
  }

  const checkMatch = (secondIndex) => {
    setSelectionInProgress(true)

    if (boxArray[firstCardSelected].num === boxArray[secondIndex].num) {
      setGameMessage("Nice! Keep Going!")
      
      boxArray[firstCardSelected].selected = "active"
      boxArray[secondIndex].selected = "active"
      setBoxArray([...boxArray])
      setFirstCardSelected(-1)
      updateStats(true)
      setSelectionInProgress(false)
    } else {
      setGameMessage("Wrong! Try Again!")
      updateStats(false)
      
      setTimeout(() => {
        boxArray[firstCardSelected].selected = ""
        boxArray[secondIndex].selected = ""
        setBoxArray([...boxArray])
        setFirstCardSelected(-1)
        setSelectionInProgress(false)
      }, 500)
    }
  }

  const updateStats = (outcome) => {
    setMoves((moves) => moves + 1)
    if (outcome) {
      setScore((score) => {
        const newScore = score + 1;
        setAccuracy((newScore / (newScore + misses)) * 100 || 0); 
        return newScore;
      });
    } else {
      setMisses((misses) => {
        const newMisses = misses + 1;
        const newAccuracy = ((score / (score + newMisses)) * 100) || 0
        const roundedAccuracy = Math.round(newAccuracy* 100) / 100
        setAccuracy(roundedAccuracy)
        return newMisses;
      });
    }
  }


  return (
    <div id="game__grid">

      {
        boxArray.map((box, index) => (
          <Box
            box={box}
            key={index}
            storeCardSelected={() => storeCardSelected(index)}
            selection={selectionInProgress}
          />
        ))
      }

    </div>
  )
}
