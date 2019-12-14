import React, { useState, useEffect } from 'react'
import HangmanImage from './HangmanImage'
import img1 from '../images/1.jpg'
import img2 from '../images/2.jpg'
import img3 from '../images/3.jpg'
import img4 from '../images/4.jpg'
import img5 from '../images/5.jpg'
import img6 from '../images/6.jpg'
import KeyContext from '../contexts/App'
import AnswerString from './AnswerString'
import KeyBoard from './KeyBoard'
import { useAppData } from '../hooks/App'

const Hangman: React.FC = () => {
  const images = [img1, img2, img3, img4, img5, img6]
  const {key, setKey, random, answer, setAnswer}= useAppData()

  return (
    <KeyContext.Provider value={{ key, setKey }}>
      <HangmanImage images={images}/>
      <AnswerString random={random} answer={answer} setAnswer={setAnswer}/>
      <KeyBoard />
    </KeyContext.Provider>
  )
}

export default Hangman
