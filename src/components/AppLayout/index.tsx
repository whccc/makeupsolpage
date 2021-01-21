import React, { Fragment } from 'react'
import { Container } from './styles'
import { Navigation } from '../Navigation'
import { Footer } from '../Footer'
export const Layout: React.FC = ({ children }) => {
  return (
    <Fragment>
      <Navigation />
      <Container>{children}</Container>
      <Footer />
    </Fragment>
  )
}
