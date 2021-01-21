import React, { useRef, useState, useContext, useEffect } from 'react'
import { Layout } from '../../components/AppLayout'
import { SliderProducto } from '../../components/SliderProducto'
import {
  ContainerVistaProducto,
  ContainerData,
  Container
} from '../../styles/vistaproducto'
import { URL_API } from '../../VariablesDeEntorno'
import { IArrayProduct, IJsonProduct } from '../../Interfaces'
import { NextPageContext } from 'next'
import { ErrorPage } from '../../components/ErrorPage'
import { FormateoNumber, RegExpAloneNumber } from '../../helpers'
import { MessageFloat } from '../../components/MessageFloat'
import { Message } from '../../components/Message'
import LocalStorageCartContext from '../../context/LocalStorageCartContext'

const DataProducto: React.FC<any> = ({
  _id,
  strName,
  strDescription,
  strPrice,
  ArrayImages,
  AddProductsLocalStorage
}) => {
  const [intQuantity, setintQuantity] = useState<string>('1')
  const [JsonMessage, setJsonMessage] = useState({
    blnShow: false,
    Text: '',
    Type: ''
  })
  const inputCantidad = useRef(null)

  const [blnShowMessage, setBlnShowMessage] = useState(false)
  const ValidateData = () => {
    if (intQuantity.trim() === '') {
      inputCantidad.current.focus()
      FCMessage('Danger', true, 'Digite una cantidad.')
      return false
    }
    if (!RegExpAloneNumber(intQuantity)) {
      inputCantidad.current.focus()
      FCMessage('Danger', true, 'Digite una cantidad.')
      return false
    }
    if (intQuantity.trim() === '0') {
      inputCantidad.current.focus()
      FCMessage('Danger', true, 'Digite una cantidad.')
      return false
    }
    return true
  }

  const FCMessage = (Type, blnShow, Text) => {
    setJsonMessage({
      blnShow,
      Type,
      Text
    })
  }

  const AddProduct = () => {
    if (!ValidateData()) {
      return
    }
    AddProductsLocalStorage({
      _id,
      strName,
      intQuantity,
      strPrice,
      ArrayImages
    })
    setBlnShowMessage(true)
    RemovedMessageFloat()
  }
  const RemovedMessageFloat = () => {
    setTimeout(() => {
      setBlnShowMessage(false)
    }, 4000)
  }
  return (
    <ContainerData>
      <div>
        <div>
          <h1>{strName}</h1>
          <p>{strDescription}</p>
          <label>$ {FormateoNumber(strPrice)}</label>
        </div>
        <div>
          <input
            type="number"
            min="1"
            value={intQuantity}
            ref={inputCantidad}
            onChange={e => setintQuantity(e.target.value.trim())}
          />{' '}
          <Message {...JsonMessage} setFcBlnShow={setJsonMessage} />
          <button onClick={AddProduct}>AGREGAR A LA BOLSA</button>
        </div>
      </div>

      <MessageFloat
        blnShowMessage={blnShowMessage}
        Text={'Producto agregado con éxito.'}
      />
    </ContainerData>
  )
}

const Index: React.FC<{ Data: IJsonProduct }> = ({ Data }) => {
  const {
    JsonLocalStorageCart,
    AddProductsLocalStorage,
    ValidateProductLocalStorage
  } = useContext<any>(LocalStorageCartContext)
  const [blnProductInCart, setBlnProductIntCart] = useState(false)
  useEffect(() => {
    setBlnProductIntCart(ValidateProductLocalStorage(Data))
  }, [JsonLocalStorageCart])

  if (Data.length === 0) {
    return (
      <Layout>
        <ErrorPage Text={'Producto no encontrado.'} />
      </Layout>
    )
  }
  return (
    <Layout>
      <Container>
        <ContainerVistaProducto>
          <div>
            <h1>PRODUCTO {Data.strName}</h1>
            {blnProductInCart ? (
              <h2>El producto se agrego al carrito de compras</h2>
            ) : (
              <h2>Agrega el producto</h2>
            )}
            <div>
              <SliderProducto ArrayImages={Data.ArrayImages} />
              <DataProducto
                {...Data}
                AddProductsLocalStorage={AddProductsLocalStorage}
              />
            </div>
          </div>
        </ContainerVistaProducto>
      </Container>
    </Layout>
  )
}

export async function getServerSideProps(
  Context: NextPageContext
): Promise<{ props: { Data: IArrayProduct } }> {
  let DataInitialProduct
  const Result = await fetch(`${URL_API}/product/ById/${Context.query.id}`)
  if (Result.status === 200) {
    DataInitialProduct = await Result.json()
    DataInitialProduct = DataInitialProduct.Result
  } else {
    DataInitialProduct = []
  }
  return {
    props: {
      Data: DataInitialProduct
    }
  }
}
export default Index
