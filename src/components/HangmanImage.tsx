import React from 'react'

interface Images {
  images: any[]
}

const HangmanImage: React.FC<Images> = props => {
  return (
    <>
      <img src={props.images[0]} alt="Hangman"/>
    </>
  )
}

export default HangmanImage
