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
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/manifest/apple-icon-120x120-dunplab-manifest-33222.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/manifest/favicon-32x32-dunplab-manifest-33222.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/manifest/favicon-16x16-dunplab-manifest-33222.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/manifest/favicon-96x96-dunplab-manifest-33222"
        />
        <link rel="manifest" href="/manifest/manifest.json" />
        <meta name="msapplication-TileColor" content="#0000" />
        <meta name="theme-color" content="#0000" />

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
