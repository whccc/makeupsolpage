export interface IJsonNavigation {
  _idCategory: string
  strNameCategory: string
  ArraySubCategory: Array<{
    _idSubCategory: string
    strNameSubCategory: string
  }>
}
export interface IJsonProduct {
  _id: string
  strName: string
  strPrice: number
  strIdCategory: string
  strIdSubCategory: string
  strDescription: string
  ArrayImages: Array<string>
  length: number
}
export interface IJsonCategory {
  _id: string
  strName: string
  strIdCategory: string
  strNameCategory: string
}
export interface IJsonSubCategory {
  _id: string
  strName: string
  strIdCategory: string
  strNameCategory: string
}
export interface IResulApi {
  data: {
    Success: boolean
    ArrayProducts: IJsonProduct[]
  }
}
export interface IArrayProduct {
  Data: IJsonProduct[]
}
export interface IArrayCategory {
  Data: IJsonCategory[]
}
export interface IArraySubCategory {
  Data: IJsonSubCategory[]
}
export interface IJsonLocalStorage {
  strNameUser: string
  strEmailUser: string
  strPhoneUser: string
  ArrayProducts: Array<[IProductCart]>
}
export interface IProductCart {
  _id: string
  strName: string
  intQuantity?: number
  strPrice: number
  ArrayImages: []
}
