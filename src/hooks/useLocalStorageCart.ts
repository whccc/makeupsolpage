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
} => {
  const [JsonLocalStorageCart, setJsonLocalStorageCart] = useState(
    JsonLocalStorage
  )
  useEffect(() => {
    localStorage.removeItem('CartMakeupSol')
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

  return {
    JsonLocalStorageCart,
    AddProductsLocalStorage,
    ValidateProductLocalStorage
  }
}

export default useLocalStorageCart
