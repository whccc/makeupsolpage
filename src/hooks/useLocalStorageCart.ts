import { useEffect, useState } from 'react'
import { IJsonLocalStorage, IProductCart } from '../Interfaces'
const JsonLocalStorage = {
  strNameUser: '',
  strEmailUser: '',
  strPhoneUser: '',
  ArrayProducts: []
}

const useLocalStorageCart = (): {
  JsonLocalStorageCart: IJsonLocalStorage
  AddProductsLocalStorage: ({
    _id,
    strName,
    intQuantity,
    strPrice,
    ArrayImages
  }: IProductCart) => void
  ValidateProductLocalStorage: ({ _id }) => void
  UpdateQuantityProduct: ({
    _id,
    TypeOperation
  }: {
    _id: string
    TypeOperation: string
  }) => void
  GetJsonLocalStorageCart: () => {
    strEmailUser: string
    strNameUser: string
    strPhoneUser: string
    ArrayProducts: Array<string>
  }
  RemovedJsonLocalStorageCart: () => void
} => {
  const [JsonLocalStorageCart, setJsonLocalStorageCart] = useState(
    JsonLocalStorage
  )
  useEffect(() => {
    CreateLocalStorageCart()
  }, [])
  const CreateLocalStorageCart = () => {
    if (JSON.parse(localStorage.getItem('CartMakeupSol')) === null) {
      localStorage.setItem('CartMakeupSol', JSON.stringify(JsonLocalStorage))
      setJsonLocalStorageCart(JsonLocalStorage)
    } else {
      setJsonLocalStorageCart(JSON.parse(localStorage.getItem('CartMakeupSol')))
    }
  }
  const AddProductsLocalStorage = ({
    _id,
    strName,
    intQuantity,
    strPrice,
    ArrayImages
  }) => {
    const Json = JSON.parse(localStorage.getItem('CartMakeupSol'))
    let blnAddProduct = true
    for (let i = 0; i <= Json.ArrayProducts.length - 1; i++) {
      if (Json.ArrayProducts[i]._id === _id) {
        Json.ArrayProducts[i].intQuantity =
          Number.parseInt(intQuantity) +
          Number.parseInt(Json.ArrayProducts[i].intQuantity)
        blnAddProduct = false
      }
    }
    if (blnAddProduct) {
      Json.ArrayProducts.push({
        _id,
        strName,
        intQuantity,
        strPrice,
        ArrayImages
      })
    }
    localStorage.setItem('CartMakeupSol', JSON.stringify(Json))
    setJsonLocalStorageCart(Json)
  }

  const ValidateProductLocalStorage = ({ _id }) => {
    const Json = JSON.parse(localStorage.getItem('CartMakeupSol'))
    let blnAddProduct = false
    if (Json === null) {
      return false
    }
    for (let i = 0; i <= Json.ArrayProducts.length - 1; i++) {
      if (Json.ArrayProducts[i]._id === _id) {
        blnAddProduct = true
      }
    }
    return blnAddProduct
  }

  const UpdateQuantityProduct = ({ _id, TypeOperation }) => {
    const Json = JSON.parse(localStorage.getItem('CartMakeupSol'))
    for (let i = 0; i <= Json.ArrayProducts.length - 1; i++) {
      if (Json.ArrayProducts[i]._id === _id) {
        if (TypeOperation === 'Sum') {
          Json.ArrayProducts[i].intQuantity =
            Number.parseInt(Json.ArrayProducts[i].intQuantity) +
            Number.parseInt('1')
        } else {
          if (Json.ArrayProducts[i].intQuantity === 1) {
            return
          }
          Json.ArrayProducts[i].intQuantity =
            Number.parseInt(Json.ArrayProducts[i].intQuantity) -
            Number.parseInt('1')
        }
      }
    }
    localStorage.setItem('CartMakeupSol', JSON.stringify(Json))
    setJsonLocalStorageCart(Json)
  }
  const GetJsonLocalStorageCart = () => {
    return JSON.parse(localStorage.getItem('CartMakeupSol'))
  }
  const RemovedJsonLocalStorageCart = () => {
    localStorage.removeItem('CartMakeupSol')
    setJsonLocalStorageCart(JsonLocalStorage)
  }
  return {
    JsonLocalStorageCart,
    AddProductsLocalStorage,
    ValidateProductLocalStorage,
    UpdateQuantityProduct,
    GetJsonLocalStorageCart,
    RemovedJsonLocalStorageCart
  }
}

export default useLocalStorageCart
