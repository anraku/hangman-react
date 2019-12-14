import React, {useState, useEffect} from 'react'
import { ENGLISH_WORDS } from '../utils/words'

interface State {
  key: string
  setKey: React.Dispatch<string>
  random: string
  answer: string[]
  setAnswer: React.Dispatch<string[]>
}

export const useAppData = (): State => {
  const [key, setKey] = useState("")
  const [random, setRandom] = useState("")
  const [answer, setAnswer] = useState(Array(random.length).fill(""))

  useEffect(() => {
    setRandom(ENGLISH_WORDS[(Math.floor(Math.random() * ENGLISH_WORDS.length))])
  }, [])

  useEffect(() => {
    setAnswer(Array(random.length).fill(""))
  }, [random])

  useEffect(() => {
    if (random.includes(key)) {
      let newAnswer: string[] = answer
      newAnswer[random.indexOf(key)] = key
      setAnswer(newAnswer)
    }
  }, [key])

  return { key, setKey, random, answer, setAnswer }
}
