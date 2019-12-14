import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { ENGLISH_WORDS } from '../utils/words'
import img1 from '../images/1.jpg'
import img2 from '../images/2.jpg'
import img3 from '../images/3.jpg'
import img4 from '../images/4.jpg'
import img5 from '../images/5.jpg'
import img6 from '../images/6.jpg'

const Container = styled.div`
  text-align: center;
`

const GuessString = styled.p`
  padding-left: 1rem;
  letter-spacing: 1rem;
  font-size: 2rem;
`

const KeyBoard = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-flow: row wrap;
  width: 400px;
  margin: auto;
  margin-top: 200px;
`

const Button = styled.button`
  display: inline-block;
  width: 40px;
  height: 40px;
  margin-top: 10px;
  margin-right: 10px;
  color: #ffffff;
  font-size: 20px;
  border-radius: 5px;
  background-color: #ecc000;

  :disabled {
    background-color: #cccccc;
  }
`

const Reset = styled(Button)`
  width: auto;
`

const Hangman: React.FC = () => {
  const images = [img1, img1, img2, img3, img4, img5, img6]
  const [guessed, setGuessed] = useState<string[]>([])
  const [answer, setAnswer] = useState("")
  const [guessedCount, setGuessedCount] = useState(0)
  const guessString = () => answer.split("").map(c => guessed.includes(c) ? c : "_")
  const randomString = () => ENGLISH_WORDS[(Math.floor(Math.random() * ENGLISH_WORDS.length))]
  
  useEffect(() => {
    setAnswer(randomString())
  }, [])

  const handleGuess = (e: any) => {
    e.preventDefault()
    const value = e.target.value
    setGuessed(guessed.concat(value))
    if (!answer.includes(value)) {
      setGuessedCount(prev => prev + 1)
    }
  }

  const handleReset = () => {
    setGuessed([])
    setGuessedCount(0)
    setAnswer(randomString())
  }

  const gameOver = guessedCount > 5
  const isWin = answer === guessString().join('')
  let gameState
  if (gameOver) gameState = `You Lose Answer is ${answer}`
  if (isWin) gameState = 'You Win'
  return (
    <Container>
      <img src={images[guessedCount]} alt="Hangman"/>
      <GuessString>
        {guessString()}
      </GuessString>
      {!isWin && !gameOver ?
        <KeyBoard>
          {"abcdefghijklmnopqrstuvwxyz".split('').map((word, index) =>
            <Button key={index} value={word} onClick={handleGuess} disabled={guessed.includes(word)}>
              {word}
            </Button>
          )}
        </KeyBoard>
        : <p>{gameState}</p>
      }
      <Reset onClick={handleReset}>Reset</Reset>
    </Container>
  )
}

export default Hangman
