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
}

export const CardProduct: React.FC<Product> = ({ Img }) => {
  return (
    <ContainerProduct>
      <ContainerImg>
        <img src={Img} />
      </ContainerImg>

      <ContainerDescription>
        <h4>SAMY</h4>
        <p>PALETA SOMBRAS SAMY HAVANA LIGHTS</p>
        <label>$ 14.7000</label>
      </ContainerDescription>

      <ContainerActions>
        <Buttons Text="AGREGAR A LA BOLSA" />
      </ContainerActions>
    </ContainerProduct>
  )
}
