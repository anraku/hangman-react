import React from 'react'
import styled from 'styled-components'

interface AnswerStringProps {
  random: string
  answer: string[]
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
