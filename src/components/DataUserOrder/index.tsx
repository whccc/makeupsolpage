import React, { useRef, useState } from 'react'
import { Container } from './styles'
import useOrder from '../../hooks/useOrder'
export const DataUserOrder: React.FC<{
  RemovedJsonLocalStorageCart: () => void
  JsonLocalStorageCart: {
    ArrayProducts: Array<string>
  }
}> = ({ RemovedJsonLocalStorageCart, JsonLocalStorageCart }) => {
  const [strNames, setStrNames] = useState('')
  const [strPhone, setStrPhone] = useState('')
  const [strEmail, setStrEmail] = useState('')
  const [blnShowMessage, setBlnShowMessage] = useState(false)
  const { SendOrderFinish } = useOrder()
  const InputName = useRef(null)
  const InputPhone = useRef(null)
  const InputEmail = useRef(null)

  const ValidateForm = () => {
    if (strNames.trim() === '') {
      InputName.current.focus()
      return
    }
    if (strPhone.trim() === '') {
      InputPhone.current.focus()
      return
    }
    if (strEmail.trim() === '') {
      InputEmail.current.focus()
      return
    }
    SendOrder()
  }

  const SendOrder = () => {
    const blnResult = SendOrderFinish(strNames, strPhone, strEmail)
    if (blnResult) {
      setStrNames('')
      setStrPhone('')
      setStrEmail('')
      setBlnShowMessage(true)
      RemovedJsonLocalStorageCart()
      return
    }
    alert('Error')
  }

  return (
    <Container>
      <small>*Información requerida para el proceso de envio*</small>
      <div>
        <label>Nombres</label>
        <input
          type="text"
          ref={InputName}
          value={strNames}
          onChange={e => setStrNames(e.target.value)}
          placeholder="Nombres"
        />
        <label>Celular Contacto</label>
        <input
          ref={InputPhone}
          value={strPhone}
          onChange={e => setStrPhone(e.target.value)}
          type="number"
          placeholder="Celular"
        />
        <label>Email</label>
        <input
          ref={InputEmail}
          value={strEmail}
          onChange={e => setStrEmail(e.target.value)}
          type="text"
          placeholder="Email"
        />
        <button
          disabled={JsonLocalStorageCart.ArrayProducts.length === 0}
          onClick={ValidateForm}
        >
          Finalizar Pedido
        </button>
        {blnShowMessage && (
          <>
            <h2>Pedido Procesado Correctamente</h2>
            <small>
              *Pronto se contactarán por Whatsapp para finalizar el proceso del
              pedido *
            </small>
          </>
        )}
      </div>
    </Container>
  )
}
