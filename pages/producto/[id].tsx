import React from 'react'
import { Layout } from '../../components/AppLayout'
import { SliderProducto } from '../../components/SliderProducto'
import {
  ContainerVistaProducto,
  ContainerData,
  Container
} from '../../styles/vistaproducto'

const DataProducto = () => {
  return (
    <ContainerData>
      <div>
        <div>
          <h1>SAMY</h1>
          <p>PALETA SOMBRAS SAMY HAVANA LIGHTS</p>
          <label>$ 17,000</label>
        </div>
        <div>
          <input type="number" /> <button>AGREGAR A LA BOLSA</button>
        </div>
      </div>
    </ContainerData>
  )
}

const Index: React.FC = () => {
  return (
    <Layout>
      <Container>
        <ContainerVistaProducto>
          <div>
            <h1>PRODUCTO SAMY</h1>
            <div>
              <SliderProducto />
              <DataProducto />
            </div>
          </div>
        </ContainerVistaProducto>
      </Container>
    </Layout>
  )
}
export default Index
