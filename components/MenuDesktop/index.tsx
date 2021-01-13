import {
  Nav,
  ContainerMenu,
  ContainerSubMenu,
  ContainerEncabezadoMenu
} from './styles'
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from 'react-icons/md'
import Link from 'next/link'
import React from 'react'
export const NavigationDesktop: React.FC = () => {
  return (
    <Nav>
      <li>
        <a>
          Productos <MdKeyboardArrowDown />
        </a>
        <ContainerMenu>
          <ul>
            <li>
              <ContainerEncabezadoMenu>
                <Link href="/">
                  <a>
                    Productos
                    <MdKeyboardArrowRight />
                  </a>
                </Link>
              </ContainerEncabezadoMenu>
              <ContainerSubMenu Active={true}>
                <ul>
                  <li>
                    <Link href="/">
                      <a> Item 1</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a> Item 1</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a> Item 1</a>
                    </Link>
                  </li>
                </ul>
              </ContainerSubMenu>
            </li>
            <li>
              <ContainerEncabezadoMenu>
                <Link href="/">
                  <a>
                    Productos <MdKeyboardArrowRight />
                  </a>
                </Link>
              </ContainerEncabezadoMenu>
              <ContainerSubMenu>
                <ul>
                  <li>
                    <Link href="/">
                      <a> Item 2</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a> Item 2</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a> Item 2</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a> Item 2</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a> Item 2</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a> Item 2</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a> Item 2</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a> Item 2</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a> Item 2</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a> Item 2</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a> Item 2</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a> Item 2</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a> Item 2</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a> Item 2</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a> Item 2</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a> Item 1</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a> Item 1</a>
                    </Link>
                  </li>
                </ul>
              </ContainerSubMenu>
            </li>
            <li>
              <ContainerEncabezadoMenu>
                <Link href="/">
                  <a>
                    Productos <MdKeyboardArrowRight />
                  </a>
                </Link>
              </ContainerEncabezadoMenu>
              <ContainerSubMenu>
                <ul>
                  <li>
                    <Link href="/">
                      <a> Item 2</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a> Item 1</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a> Item 1</a>
                    </Link>
                  </li>
                </ul>
              </ContainerSubMenu>
            </li>
            <li>
              <ContainerEncabezadoMenu>
                <Link href="/">
                  <a>
                    Productos <MdKeyboardArrowRight />
                  </a>
                </Link>
              </ContainerEncabezadoMenu>
              <ContainerSubMenu>
                <ul>
                  <li>
                    <Link href="/">
                      <a> Item 2</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a> Item 1</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a> Item 1</a>
                    </Link>
                  </li>
                </ul>
              </ContainerSubMenu>
            </li>
          </ul>
        </ContainerMenu>
      </li>
    </Nav>
  )
}
