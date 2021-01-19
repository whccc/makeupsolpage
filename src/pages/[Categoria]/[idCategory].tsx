import React from 'react'
import { Layout } from '../../components/AppLayout'
import { URL_API } from '../../VariablesDeEntorno'
import { NextPageContext } from 'next'
import { CarouselProducts } from '../../components/CarouselProducts'
import { ContainerClasificationProduct } from '../../components/ContainerClassificationProducts'
import { IJsonSubCategory, IJsonProduct } from '../../Interfaces'
import {
  Container,
  ContainerSubCategories
} from '../../styles/viewsubcategories'
interface IApiServiceSideProps {
  DataSubCategories: { Success: true; Result: IJsonSubCategory[] }
  DataProduct: { Success: boolean; ArrayProducts: IJsonProduct[] }
}

const SubCategoriesByCategory: React.FC<IApiServiceSideProps> = ({
  DataSubCategories,
  DataProduct
}) => {
  return (
    <Container>
      <Layout>
        <section>
          <h1>Sub Categories</h1>
          <ContainerSubCategories>
            <ContainerClasificationProduct Data={DataSubCategories.Result} />
          </ContainerSubCategories>
        </section>

        <section style={{ maxWidth: '1300px' }}>
          <h1>Productos</h1>
          <CarouselProducts Data={DataProduct.ArrayProducts} />
        </section>
      </Layout>
    </Container>
  )
}
export async function getServerSideProps(
  Context: NextPageContext
): Promise<{
  props: IApiServiceSideProps
}> {
  let Result = await fetch(
    `${URL_API}/subcategories/${Context.query.idCategory}`
  )
  const DataInitial = await Result.json()
  Result = await fetch(`${URL_API}/product/limit`)
  const DataInitialProducts = await Result.json()
  return {
    props: {
      DataSubCategories: DataInitial,
      DataProduct: DataInitialProducts
    }
  }
}
export default SubCategoriesByCategory
