import React, { Fragment, useState } from 'react'
import { MdDehaze, MdAddShoppingCart } from 'react-icons/md'
import { NavigationMobil } from '../MenuMobile'
import { NavigationDesktop } from '../MenuDesktop'
import { Nav, SvgMobil, SvgCart } from './styles'
import Resize from '../../hooks/resize'
import Link from 'next/link'
export const Navigation: React.FC = () => {
  const [ShowNav, SetShowNav] = useState(false)
  const ShowResolution = Resize()

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
          <SvgCart>
            <MdAddShoppingCart />
            <span>0</span>
          </SvgCart>
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
