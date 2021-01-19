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
  strPrice: bigint
  strIdCategory: string
  strIdSubCategory: string
  strDescription: string
  ArrayImages: Array<string>
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
