import React, { Fragment, useContext, useState } from 'react'
import { MdDehaze, MdAddShoppingCart } from 'react-icons/md'
import { NavigationMobil } from '../MenuMobile'
import { NavigationDesktop } from '../MenuDesktop'
import { Nav, SvgMobil, SvgCart } from './styles'
import Resize from '../../hooks/resize'
import Link from 'next/link'
import LocalStorageCartContext from '../../context/LocalStorageCartContext'

export const Navigation: React.FC = () => {
  const [ShowNav, SetShowNav] = useState(false)
  const ShowResolution = Resize()
  const { JsonLocalStorageCart } = useContext<any>(LocalStorageCartContext)

  return (
    <Fragment>
      <Nav>
        <ul>
          <li>
            <Link href="/">
              <img src="/logo.jpeg" />
            </Link>
          </li>
          {ShowResolution ? (
            <NavigationMobil ShowNav={ShowNav} />
          ) : (
            <NavigationDesktop />
          )}
          <Link href="/Carrito">
            <SvgCart>
              <MdAddShoppingCart />
              <span>{JsonLocalStorageCart.ArrayProducts.length}</span>
            </SvgCart>
          </Link>
          <SvgMobil
            onClick={() => {
              SetShowNav(!ShowNav)
            }}
          >
            <MdDehaze />
          </SvgMobil>
        </ul>
      </Nav>
    </Fragment>
  )
}
