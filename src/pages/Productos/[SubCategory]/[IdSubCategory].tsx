import { Layout } from '../../../components/AppLayout'
import React from 'react'
import { URL_API } from '../../../VariablesDeEntorno'
import { IJsonProduct } from '../../../Interfaces'
import { CardProduct } from '../../../components/CardProduct'
import { NextPageContext } from 'next'
import { Container, ContainerProducts } from '../../../styles/viewproducts'
import { ErrorPage } from '../../../components/ErrorPage'
interface IApiServerSideProps {
  Data: IJsonProduct[]
}
const ProductsBySubCategory: React.FC<IApiServerSideProps> = ({ Data }) => {
  if (Data.length === 0) {
    return (
      <Layout>
        <ErrorPage Text={'Productos no encontrados.'} />
      </Layout>
    )
  }
  return (
    <Container>
      <Layout>
        <section>
          <h1>Productos</h1>
          <ContainerProducts>
            {Data.map((Element, Index) => {
              return (
                <CardProduct
                  {...Element}
                  Img={Element.ArrayImages[0]}
                  key={Index}
                />
              )
            })}
          </ContainerProducts>
        </section>
      </Layout>
    </Container>
  )
}

export async function getServerSideProps(
  Context: NextPageContext
): Promise<{
  props: IApiServerSideProps
}> {
  const Result = await fetch(
    `${URL_API}/product/GetBySubCategory/${Context.query.IdSubCategory}`
  )
  const DataInitialProducts = await Result.json()
  return {
    props: {
      Data: DataInitialProducts.Result
    }
  }
}

export default ProductsBySubCategory
