import React from 'react'
import Hangman from './components/Hangman'
import styled from 'styled-components'

const Container = styled.div`
  text-align: center;
`

const App: React.FC = () => {
  return (
    <Container>
      <Hangman />
    </Container>
  )
}

export default App;
