import { useState } from 'react'
import { URL_API } from '../VariablesDeEntorno'
import axios from 'axios'

interface JsonNavegation {
  _idCategory: string
  strNameCategory: string
  ArraySubCategory: Array<{
    _idSubCategory: string
    strNameSubCategory: string
  }>
}

const useNavigation = (): {
  JsonNavegation: JsonNavegation[]
  GetDataNavigation: () => Promise<void>
} => {
  const [JsonNavegation, setJsonNavegation] = useState<JsonNavegation[]>([])

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
