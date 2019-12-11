import React from 'react'
import styled from 'styled-components'

interface PanelProps {
  char: string
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

const Panel: React.FC<PanelProps> = ({ char }) => {
  return (
    <Container>
      <Word>{char}</Word>
    </Container>
  )
}

export default Panel
