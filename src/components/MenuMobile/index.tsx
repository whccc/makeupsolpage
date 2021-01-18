import React, { useEffect, useState } from 'react'
import { SubMenu, ContainerMenu, MenuFlotante } from './styles'
import Link from 'next/link'
import { MdKeyboardArrowDown, MdKeyboardArrowLeft } from 'react-icons/md'
import { FaCaretSquareDown, FaCaretSquareLeft } from 'react-icons/fa'
import useNavigetion from '../../hooks/useNavigation'

interface INFSubMenu {
  _idCategory: string
  strNameCategory: string
  ArraySubCategory: Array<{
    _idSubCategory: string
    strNameSubCategory: string
  }>
}

const SubMenus: React.FC<INFSubMenu> = ({
  _idCategory,
  strNameCategory,
  ArraySubCategory
}) => {
  const [ShowSubMenu, SetShowSubMenu] = useState(false)
  return (
    <li>
      <Link href="/">
        <a>{strNameCategory}</a>
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
      <h3>Navegación</h3>
      <ContainerMenu>
        {JsonNavegation.map((Element, Index) => {
          return <SubMenus key={Index} {...Element} />
        })}
      </ContainerMenu>
    </MenuFlotante>
  )
}
