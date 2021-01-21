import {
  ContainerProduct,
  ContainerImg,
  ContainerDescription,
  ContainerActions,
  Button
} from './styles'
import Link from 'next/link'
import React from 'react'

const Buttons = ({ Text, IdProduct }) => {
  return (
    <Link href={`/producto/${IdProduct}`}>
      <Button>
        <a>{Text}</a>
      </Button>
    </Link>
  )
}
interface Product {
  Img: string
  _id: string
  strName: string
  strPrice: bigint
  strDescription: string
}

export const CardProduct: React.FC<Product> = ({
  Img,
  _id,
  strName,
  strPrice,
  strDescription
}) => {
  return (
    <ContainerProduct>
      <ContainerImg>
        <img src={Img} />
      </ContainerImg>

      <ContainerDescription>
        <h4>{strName}</h4>
        <p>{strDescription}</p>
        <label>$ {new Intl.NumberFormat('en-IN').format(strPrice)}</label>
      </ContainerDescription>

      <ContainerActions>
        <Buttons Text="AGREGAR A LA BOLSA" IdProduct={_id} />
      </ContainerActions>
    </ContainerProduct>
  )
}
