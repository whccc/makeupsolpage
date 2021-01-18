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
  _idCategory,
  strNameCategory,
  ArraySubCategory,
  Index
}) => {
  const [blnShowSubCategory, setBlnShowSubCategory] = useState(Index === 0)
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
        <Link href="/">
          <strong>
            <a style={{ color: blnShowSubCategory && '#fff' }}>
              {strNameCategory}
              <MdKeyboardArrowRight />
            </a>
          </strong>
        </Link>
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
              <li key={Index}>
                <Link href="/">
                  <a>{Element.strNameSubCategory}</a>
                </Link>
              </li>
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
              return (
                <SubMenuNavegation key={Index} Index={Index} {...Element} />
              )
            })}
          </ul>
        </ContainerMenu>
      </li>
    </Nav>
  )
}
