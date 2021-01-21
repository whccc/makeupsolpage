import React from 'react'
import { Container } from './styles'

export const Message: React.FC<{
  Text: string
  Type: string
  blnShow: boolean
  setFcBlnShow: React.Dispatch<
    React.SetStateAction<{
      blnShow: boolean
      Type: string
      Text: string
    }>
  >
}> = ({ Text, Type, blnShow, setFcBlnShow }) => {
  if (blnShow) {
    setTimeout(() => {
      setFcBlnShow({ Type: '', Text: '', blnShow: false })
    }, 3000)
  }
  return blnShow ? (
    <Container blnShow={blnShow} Type={Type}>
      {Text}
    </Container>
  ) : null
}
