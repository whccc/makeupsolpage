import axios from 'axios'
import { URL_API } from '../VariablesDeEntorno'
import useLocalStorageCart from './useLocalStorageCart'
const useOrder = (): {
  SendOrderFinish: (
    strNameUser: string,
    strPhoneUser: string,
    strEmailUser: string
  ) => Promise<boolean>
} => {
  const { GetJsonLocalStorageCart } = useLocalStorageCart()

  const SendOrderFinish = async (strNameUser, strPhoneUser, strEmailUser) => {
    const JsonCart = GetJsonLocalStorageCart()
    JsonCart.strNameUser = strNameUser
    JsonCart.strPhoneUser = strPhoneUser
    JsonCart.strEmailUser = strEmailUser

    const Result = await axios.post(`${URL_API}/order`, JsonCart)

    if (Result.status === 200) {
      return true
    }
    return false
  }
  return { SendOrderFinish }
}

export default useOrder
