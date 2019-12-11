import React, { useState } from 'react'
import styled, { css } from 'styled-components'

const Word = styled.p`
  margin-top: 10px;
`

interface KeyProps {
  word: string
}

interface ButtonState {
  clickable: boolean
}

const initialState: ButtonState = {
  clickable: true
}

const Key: React.FC<KeyProps> = ({ word }) => {
  const [state, setState] = useState(initialState)
  const Container = styled.div`
    cursor: pointer;
    width: 40px;
    height: 40px;
    color: #ffffff;
    margin-top: 10px;
    margin-right: 10px;
    border-radius: 5px;
    
    
    ${state.clickable ? css`
      background-color: #ecc000;
    ` : css`
      background-color: #cccccc;
    `}
  `
  const handleClick = (e: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => {
    e.preventDefault()
    setState({clickable: false})
  }

  return (
    <Container onClick={handleClick}>
      <Word>{word}</Word>
    </Container>
  )
}

export default Key
