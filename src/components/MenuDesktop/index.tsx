import {
  Nav,
  ContainerMenu,
  ContainerSubMenu,
  ContainerEncabezadoMenu
} from './styles'
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from 'react-icons/md'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import useNavegation from '../../hooks/useNavigation'
import { IJsonNavigation } from '../../Interfaces'

const SubMenuNavegation: React.FC<IJsonNavigation> = ({
  strNameCategory,
  ArraySubCategory
}) => {
  const [blnShowSubCategory, setBlnShowSubCategory] = useState(false)

  return (
    <li>
      <ContainerEncabezadoMenu
        onMouseEnter={() => {
          setBlnShowSubCategory(true)
        }}
        onMouseLeave={() => {
          setBlnShowSubCategory(false)
        }}
        style={{
          background: blnShowSubCategory && 'var(--bg-primary)'
        }}
      >
        <strong>
          <a style={{ color: blnShowSubCategory && '#fff' }}>
            {strNameCategory}
            <MdKeyboardArrowRight />
          </a>
        </strong>
      </ContainerEncabezadoMenu>
      <ContainerSubMenu
        Active={blnShowSubCategory}
        onMouseLeave={() => {
          setBlnShowSubCategory(false)
        }}
        onMouseEnter={() => {
          setBlnShowSubCategory(true)
        }}
      >
        <ul>
          <span>
            <strong>{strNameCategory}</strong>{' '}
          </span>
          <hr />
          {ArraySubCategory.map((Element, Index) => {
            return (
              <Link
                key={Index}
                href={`/Productos/${Element.strNameSubCategory}/${Element._idSubCategory}`}
              >
                <li>
                  <a>{Element.strNameSubCategory}</a>
                </li>
              </Link>
            )
          })}
        </ul>
      </ContainerSubMenu>
    </li>
  )
}

export const NavigationDesktop: React.FC = () => {
  const { JsonNavegation, GetDataNavigation } = useNavegation()
  useEffect(() => {
    // Get data navegation
    GetDataNavigation()
  }, [])

  return (
    <Nav>
      <li>
        <a>
          PRODUCTOS <MdKeyboardArrowDown />
        </a>
        <ContainerMenu>
          <ul>
            {JsonNavegation.map((Element, Index) => {
              return <SubMenuNavegation key={Index} {...Element} />
            })}
          </ul>
        </ContainerMenu>
      </li>
    </Nav>
  )
}
