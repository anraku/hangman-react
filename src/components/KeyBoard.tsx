import React from 'react'
import styled from 'styled-components'
import Key from './Key'

const Container = styled.div`
  margin-right: 0px;
  display: flex;
  justify-content: space-between;
  flex-flow: row wrap;
  width: 400px;
  margin: auto;
  margin-top: 200px;
`

const words = "abcdefghijklmnopqrstuvwxyz".split('')

const KeyBoard: React.FC = () => {
  return (
    <Container>
      {words.map((word, index) =>
        <Key key={index} word={word} />
      )}
    </Container>
  )
}

export default KeyBoard
