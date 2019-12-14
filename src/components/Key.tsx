import React, { useState, useContext } from 'react'
import KeyContext from '../contexts/App'
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
  const { key, setKey }  = useContext(KeyContext)
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
  const handleClick = (value: string) => {
    setState({clickable: false})
    setKey(value)
  }

  return (
    <Container onClick={() => handleClick(word)}>
      <Word>{word}</Word>
    </Container>
  )
}

export default Key
