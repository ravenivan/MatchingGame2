import React, { useState } from 'react'
import Box from '../components/box'
import Apple from '../assets/apple.jpg'
import Banana from '../assets/banana.jpg'
import Cherry from '../assets/cherry.avif'
import Grape from '../assets/grape.webp'
import Kiwi from '../assets/kiwi.avif'
import Mango from '../assets/mango.webp'
import Pear from '../assets/pear.png'
import Watermelon from '../assets/watermelon.avif'

export default function grid() {

  const [firstCardSelected, setFirstCardSelected] = useState()
  const [secondCardSelected, setSecondCardSelected] = useState()


  const boxArray = [
    { num: 1, src: Apple, selected: "" },
    { num: 1, src: Apple, selected: ""} ,
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
  ]

  console.log(dispatch(boxSelected(boxArray[0])));

  const randomizeBoxes = () => {
    for (let i = boxArray.length - 1; i > 0; i--) { 
      const j = Math.floor(Math.random() * (i + 1)); 
      [boxArray[i], boxArray[j]] = [boxArray[j], boxArray[i]]; 
    } 
  }

  const storeCardSelected = (card) => {
    firstCardSelected ? setSecondCardSelected(card) : setFirstCardSelected(card)
  }


  return (
    <div id="game__grid">

      {
        boxArray.map((box, index) => (
          <Box box={box} key={index} />
        ))
      }

    </div>
  )
}
