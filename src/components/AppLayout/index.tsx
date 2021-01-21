import React, { Fragment } from 'react'
import { Container } from './styles'
import { Navigation } from '../Navigation'
import Head from 'next/head'
import { Footer } from '../Footer'
export const Layout: React.FC = ({ children }) => {
  return (
    <Fragment>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        <title>Makessup</title>
      </Head>
      <Navigation />
      <Container>{children}</Container>
      <Footer />
    </Fragment>
  )
}
