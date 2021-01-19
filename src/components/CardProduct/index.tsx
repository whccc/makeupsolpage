import {
  ContainerProduct,
  ContainerImg,
  ContainerDescription,
  ContainerActions,
  Button
} from './styles'
import Link from 'next/link'
import React from 'react'

const Buttons = ({ Text }) => {
  return (
    <Button>
      <Link href="/producto/2323">
        <a>{Text}</a>
      </Link>
    </Button>
  )
}
interface Product {
  Img: string
  strName: string
  strPrice: bigint
  strDescription: string
}

export const CardProduct: React.FC<Product> = ({
  Img,
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
        <Buttons Text="AGREGAR A LA BOLSA" />
      </ContainerActions>
    </ContainerProduct>
  )
}
