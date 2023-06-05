// eslint-disable-next-line import/no-unresolved
import styled from 'styled-components'

export const SpeechToTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 10px;
  width: 70%;

  @media (min-width: 768px) {
    max-width: 200px;
  }
`

export const Button = styled.button`
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`

export const MicrophoneIcon = styled.i`
  margin-right: 5px;
`
