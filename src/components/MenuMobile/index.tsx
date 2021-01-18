import React, { useEffect, useState } from 'react'
import { SubMenu, ContainerMenu, MenuFlotante } from './styles'
import Link from 'next/link'
import { FaCaretSquareDown, FaCaretSquareLeft } from 'react-icons/fa'
import useNavigetion from '../../hooks/useNavigation'
import { IJsonNavigation } from '../../Interfaces'

const SubMenus: React.FC<IJsonNavigation> = ({
  _idCategory,
  strNameCategory,
  ArraySubCategory
}) => {
  const [ShowSubMenu, SetShowSubMenu] = useState(false)
  return (
    <li>
      <Link href="/">
        <a>
          <strong>{strNameCategory}</strong>
        </a>
      </Link>
      {ShowSubMenu ? (
        <FaCaretSquareDown
          onClick={() => {
            SetShowSubMenu(!ShowSubMenu)
          }}
        />
      ) : (
        <FaCaretSquareLeft
          onClick={() => {
            SetShowSubMenu(!ShowSubMenu)
          }}
        />
      )}
      <SubMenu ShowSubMenu={ShowSubMenu}>
        {ArraySubCategory.map((Element, Index) => {
          return (
            <li key={Index}>
              <Link href="/">
                <a>{Element.strNameSubCategory}</a>
              </Link>
            </li>
          )
        })}
      </SubMenu>
    </li>
  )
}
interface Props {
  ShowNav: boolean
}

export const NavigationMobil: React.FC<Props> = ({ ShowNav }) => {
  const { JsonNavegation, GetDataNavigation } = useNavigetion()

  useEffect(() => {
    GetDataNavigation()
  }, [])

  return (
    <MenuFlotante ShowNav={ShowNav}>
      <h2>PRODUCTOS</h2>
      <ContainerMenu>
        {JsonNavegation.map((Element, Index) => {
          return <SubMenus key={Index} {...Element} />
        })}
      </ContainerMenu>
    </MenuFlotante>
  )
}
