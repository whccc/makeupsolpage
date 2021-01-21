import React from 'react'
import { Container } from './styles'
export const DataUserOrder: React.FC = () => {
  return (
    <Container>
      <small>*Información requerida para el proceso de envio*</small>
      <div>
        <label>Nombre</label>
        <input type="text" placeholder="Nombre" />
        <label>Celular Contacto</label>
        <input type="number" placeholder="Celular" />
        <label>Email</label>
        <input type="text" placeholder="Email" />
        <button>Finalizar Pedido</button>
      </div>
    </Container>
  )
}
