import React from 'react'
import styled from 'styled-components'
import Panel from './Panel'

interface AnswerStringProps {
  answer: string
}

const AnswerArea = styled.div`
`

const AnswerString: React.FC<AnswerStringProps> = props => {
  const { answer } = props
  return (
    <>
      <p>answer is {answer}</p>
      <AnswerArea>
        {answer.split('').map((char, index) => 
          <Panel key={index} char={char} />
        )}
      </AnswerArea>
    </>
  )
}

export default AnswerString
