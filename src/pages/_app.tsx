import React from 'react'
import useLocalStorageCart from '../hooks/useLocalStorageCart'
import LocalStorageCartContext from '../context/LocalStorageCartContext'
import { GlobalStyle } from '../styles/globalStyles'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const {
    JsonLocalStorageCart,
    AddProductsLocalStorage,
    ValidateProductLocalStorage
  } = useLocalStorageCart()
  return (
    <LocalStorageCartContext.Provider
      value={{
        JsonLocalStorageCart,
        AddProductsLocalStorage,
        ValidateProductLocalStorage
      }}
    >
      <GlobalStyle />
      <Component {...pageProps} />
    </LocalStorageCartContext.Provider>
  )
}

export default MyApp
