import axios from 'axios'
import { useState } from 'react'
import { URL_API } from '../VariablesDeEntorno'
import { IJsonProduct, IResulApi } from '../Interfaces'

const useProduct = (): {
  JsonProducts: IJsonProduct[]
  GetProductLimitTen: () => Promise<void>
} => {
  const [JsonProducts, setJsonProducts] = useState([])
  const GetProductLimitTen = async () => {
    const Result: IResulApi = await axios.get(`${URL_API}/product/limit`)
    if (Result.data.Success) {
      setJsonProducts(Result.data.ArrayProducts)
    }
  }
  return { JsonProducts, GetProductLimitTen }
}

export default useProduct
