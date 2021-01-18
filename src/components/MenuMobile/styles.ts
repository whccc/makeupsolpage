import styled, { css } from 'styled-components'
export const MenuFlotante = styled.li`
  z-index: 1;
  position: absolute;
  left: 0px;
  padding: 15px;
  z-index: 2;
  top: ${props => (props.ShowNav ? '90px' : '-400px')};
  background-color: #fff;
  transition: all ease-in-out 0.5s;
  box-shadow: inset 0 0 0 1px #eaeaea, 0 5px 20px rgba(0, 0, 0, 0.15) !important;
  width: calc(100%);
`

export const ContainerMenu = styled.ul`
  padding: 0px;
  position: relative;
  a {
    display: block;
    text-decoration: none;
    color: #000;
    padding: 10px;
  }
  li {
    position: relative;
  }
  svg {
    position: absolute;
    top: 5px;
    right: 0px;
    cursor: pointer;
  }
`
export const SubMenu = styled.ul`
  padding-left: 8px;
  max-height: 0px;
  ${props =>
    props.ShowSubMenu &&
    css`
      max-height: 200px;
      border: 1px solid #ddd;
      background-color: #ddd;
    `}
  overflow: auto;
  transition: all ease-in-out 0.5s;
`
