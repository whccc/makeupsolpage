import React, { useState } from 'react'
import { Container, ContainerItem } from './styles'
import { FormateoNumber } from '../../helpers'
export const DetailOrder: React.FC<{
  JsonLocalStorageCart: {
    strNameUser
    strEmailUser
    strPhoneUser
    ArrayProducts: [
      {
        _id: string
        strName: string
        intQuantity: number
        strPrice: number
        ArrayImages: Array<string>
      }
    ]
  }
  UpdateQuantityProduct: ({
    _id,
    TypeOperation
  }: {
    _id: string
    TypeOperation: string
  }) => void
}> = ({ JsonLocalStorageCart, UpdateQuantityProduct }) => {
  let intTotalPedido = 0
  return (
    <>
      <Container>
        <div>
          {JsonLocalStorageCart.ArrayProducts.map((Element, Index) => {
            intTotalPedido =
              Element.strPrice * Element.intQuantity + intTotalPedido

            return (
              <ContainerItem key={Index}>
                <div>
                  <img src={Element.ArrayImages[0]} />
                </div>
                <div>
                  <div>
                    <div>
                      <strong>{Element.strName}</strong>
                      <br />
                      <strong>
                        Valor unidad:${FormateoNumber(Element.strPrice)}
                      </strong>
                      <br />
                      <strong>
                        Sub Total:$
                        {FormateoNumber(Element.strPrice * Element.intQuantity)}
                      </strong>
                    </div>
                    <div>
                      <button
                        onClick={() => {
                          UpdateQuantityProduct({
                            _id: Element._id,
                            TypeOperation: 'Res'
                          })
                        }}
                      >
                        -
                      </button>
                      <input type="text" value={Element.intQuantity} />
                      <button
                        onClick={() => {
                          UpdateQuantityProduct({
                            _id: Element._id,
                            TypeOperation: 'Sum'
                          })
                        }}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </ContainerItem>
            )
          })}
        </div>
      </Container>
      <div style={{ padding: '10px' }}>
        <strong>Total Pedido:${FormateoNumber(intTotalPedido)}</strong>
      </div>
    </>
  )
}
