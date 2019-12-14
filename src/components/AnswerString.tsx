import React, { useState, useEffect, useContext } from 'react'
import App from '../contexts/App'
import styled from 'styled-components'
import Panel from './Panel'

interface AnswerStringProps {
  random: string
  answer: string[]
  setAnswer: React.Dispatch<string[]>
}

const Container = styled.div`
  display: inline-block;
  width: 20px;
  height: 20px;
  margin-right: 10px;
  border-bottom: solid 2px black;
`

const Word = styled.p`
  margin-top: 0px;
  margin-bottom: 10px;
`

const AnswerString: React.FC<AnswerStringProps> = props => {
  const { random, answer } = props
  console.log(answer.length)

  return (
    <>
      <p>answer is {random}</p>
        {answer.map((char, index) => 
          <Container key={index}>
          <Word>{char}</Word>
        </Container>
        )}
    </>
  )
}

export default AnswerString
