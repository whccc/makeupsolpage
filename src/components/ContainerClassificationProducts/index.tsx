import React, { Fragment } from 'react'
import { Category } from './styles'
import { IArrayCategory, IArraySubCategory } from '../../Interfaces'
import Link from 'next/link'
export const ContainerClasificationProduct: React.FC<
  IArrayCategory | IArraySubCategory
> = ({ Data }) => {
  return (
    <Fragment>
      {Data.map((Element, Index) => {
        return (
          <Link
            key={Index}
            href={
              Data[0].strNameCategory
                ? `/Productos/${Element.strName}/${Element._id}`
                : `${Element.strName}/${Element._id}`
            }
          >
            <Category>
              <div>
                <p>
                  <strong>{Element.strName}</strong>
                </p>
              </div>
            </Category>
          </Link>
        )
      })}
    </Fragment>
  )
}
