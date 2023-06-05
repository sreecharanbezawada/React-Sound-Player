/* eslint-disable react/button-has-type */
// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react'
import {
  SpeechToTextContainer,
  Input,
  Button,
  MicrophoneIcon,
} from './StyledComponents'

const SpeechToText = () => {
  const [text, setText] = useState('')
  const synthesis = window.speechSynthesis

  const handleInputChange = event => {
    setText(event.target.value)
  }

  const handleButtonClick = () => {
    const utterance = new SpeechSynthesisUtterance(text)
    synthesis.speak(utterance)
  }

  return (
    <SpeechToTextContainer>
      <Input type="text" value={text} onChange={handleInputChange} />
      <Button onClick={handleButtonClick}>
        <MicrophoneIcon className="fa fa-microphone" /> Generate Audio
      </Button>
    </SpeechToTextContainer>
  )
}

export default SpeechToText
