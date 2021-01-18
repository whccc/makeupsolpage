import { useState } from 'react'
import { URL_API } from '../VariablesDeEntorno'
import axios from 'axios'
import { IJsonNavigation } from '../../Interfaces'

const useNavigation = (): {
  JsonNavegation: IJsonNavigation[]
  GetDataNavigation: () => Promise<void>
} => {
  const [JsonNavegation, setJsonNavegation] = useState<IJsonNavigation[]>([])

  const GetDataNavigation = async () => {
    const Data = await axios.get(
      `${URL_API}/subcategories/navegation/GetCategoriesWithSubCategories`
    )
    if (Data.data.Success) {
      setJsonNavegation(Data.data.Categories)
    }
  }

  return { JsonNavegation, GetDataNavigation }
}

export default useNavigation
