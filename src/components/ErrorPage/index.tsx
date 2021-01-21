import { Container } from './styles'
import React from 'react'
export const ErrorPage: React.FC<{ Text: string }> = ({ Text }) => {
  return (
    <Container>
      <h1>{Text}</h1>
    </Container>
  )
}
