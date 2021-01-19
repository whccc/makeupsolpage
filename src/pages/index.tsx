import React from 'react'
import { Layout } from '../components/AppLayout'
import { CarouselBanner } from '../components/CarouselBanner'
import { CarouselProducts } from '../components/CarouselProducts'
import { ContainerClasificationProduct } from '../components/ContainerClassificationProducts'
import { URL_API } from '../VariablesDeEntorno'
import { IJsonCategory, IJsonProduct } from '../Interfaces'
import { ContainerCategories, Container } from '../styles/viewhome'

interface ApiServerSideProps {
  DataProduct: { Success: boolean; ArrayProducts: IJsonProduct[] }
  DataCategories: { Success: boolean; Result: { Categories: IJsonCategory[] } }
}

const Index: React.FC<ApiServerSideProps> = ({
  DataProduct,
  DataCategories
}) => {
  return (
    <Container>
      <Layout>
        <CarouselBanner />
        <section>
          <h1>Categorias</h1>
          <ContainerCategories>
            <ContainerClasificationProduct
              Data={DataCategories.Result.Categories}
            />
          </ContainerCategories>
        </section>
        <section style={{ maxWidth: '1300px' }}>
          <h1>Productos</h1>
          <CarouselProducts Data={DataProduct.ArrayProducts} />
        </section>
      </Layout>
    </Container>
  )
}
export async function getServerSideProps(): Promise<{
  props: ApiServerSideProps
}> {
  let Result = await fetch(`${URL_API}/product/limit`)
  const DataInitial = await Result.json()
  Result = await fetch(`${URL_API}/categories`)
  const DataInitialCategories = await Result.json()
  return {
    props: {
      DataProduct: DataInitial,
      DataCategories: DataInitialCategories
    }
  }
}
export default Index
