import { Container } from './styled'
import React from 'react'

export const MessageFloat: React.FC<{
  Text: string
  blnShowMessage: boolean
}> = ({ Text, blnShowMessage }) => {
  return <Container show={blnShowMessage}>{Text}</Container>
}
