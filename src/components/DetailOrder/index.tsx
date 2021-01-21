import React from 'react'
import { Container, ContainerItem } from './styles'
export const DetailOrder: React.FC<{
  JsonLocalStorageCart: any
}> = ({ JsonLocalStorageCart }) => {
  return (
    <Container>
      <div>
        {JsonLocalStorageCart.ArrayProducts.map((Element, Index) => {
          return (
            <ContainerItem key={Index}>
              <div>
                <img src={Element.ArrayImages[0]} />
              </div>
              <div>
                <div>
                  <div>
                    <strong>{Element.strName}</strong>
                  </div>
                  <div>
                    <button>-</button>
                    <input type="text" value={Element.intQuantity} />
                    <button>+</button>
                  </div>
                </div>
              </div>
            </ContainerItem>
          )
        })}
      </div>
    </Container>
  )
}
