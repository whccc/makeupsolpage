import React, { useContext } from 'react'
import { Layout } from '../../components/AppLayout'
import { Container } from '../../styles/viewCart'
import { DataUserOrder } from '../../components/DataUserOrder'
import { DetailOrder } from '../../components/DetailOrder'
import LocalStorageCartContext from '../../context/LocalStorageCartContext'
const Carrito: React.FC = () => {
  const {
    JsonLocalStorageCart,
    UpdateQuantityProduct,
    RemovedJsonLocalStorageCart
  } = useContext<any>(LocalStorageCartContext)
  return (
    <Layout>
      <Container>
        <section>
          <h1>Carrito</h1>
          <div>
            <DataUserOrder
              RemovedJsonLocalStorageCart={RemovedJsonLocalStorageCart}
              JsonLocalStorageCart={JsonLocalStorageCart}
            />
            <div>
              <DetailOrder
                JsonLocalStorageCart={JsonLocalStorageCart}
                UpdateQuantityProduct={UpdateQuantityProduct}
              />
            </div>
          </div>
        </section>
      </Container>
    </Layout>
  )
}
export default Carrito
