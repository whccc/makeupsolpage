import React from 'react'
import useLocalStorageCart from '../hooks/useLocalStorageCart'
import LocalStorageCartContext from '../context/LocalStorageCartContext'
import { GlobalStyle } from '../styles/globalStyles'
import Head from 'next/head'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const {
    JsonLocalStorageCart,
    AddProductsLocalStorage,
    ValidateProductLocalStorage,
    UpdateQuantityProduct,
    RemovedJsonLocalStorageCart
  } = useLocalStorageCart()
  return (
    <>
      <GlobalStyle />
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
        <title>MakeupSol</title>
      </Head>
      <LocalStorageCartContext.Provider
        value={{
          JsonLocalStorageCart,
          AddProductsLocalStorage,
          ValidateProductLocalStorage,
          UpdateQuantityProduct,
          RemovedJsonLocalStorageCart
        }}
      >
        <Component {...pageProps} />
      </LocalStorageCartContext.Provider>
    </>
  )
}

export default MyApp
