import React from 'react'
import { IJsonLocalStorage, IProductCart } from '../Interfaces'
const JsonLocalStorage = {
  JsonLocalStorageCart: {
    strNameUser: 'string',
    strEmailUser: 'string',
    strPhoneUser: 'string',
    ArrayProducts: []
  }
}
interface IJsonLocalStorageCart {
  JsonLocalStorageCart: IJsonLocalStorage
}
interface IAddProductsLocalStorage {
  AddProductsLocalStorage: ({
    _id,
    strName,
    intQuantity,
    strPrice
  }: IProductCart) => void
  ValidateProductLocalStorage: ({ _id }) => void
  UpdateQuantityProduct: ({ _id }) => void
  RemovedJsonLocalStorageCart: () => void
}

const LocalStorageCartContext = React.createContext<
  IJsonLocalStorageCart | IAddProductsLocalStorage
>(JsonLocalStorage)
export default LocalStorageCartContext
