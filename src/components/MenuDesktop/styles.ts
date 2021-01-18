import styled from 'styled-components'
export const ContainerMenu = styled.div`
  position: absolute;
  height: 0px;
  background-color: #fff;
  top: 65px;
  left: 150px;
  z-index: 0;
  width: 0px;
  opacity: 0;
  overflow: hidden;
  transition: width, opacity ease-in-out 0.1s;
  & a {
    display: flex;
    position: relative;
    padding: 3px;
    &:hover {
      color: #fff !important;
      background-color: var(--bg-primary);
    }
    svg {
      font-size: 19px;
      flex: 1 1 auto;
      display: flex;
      position: absolute;
      right: 0px;
    }
  }
  & > ul {
    overflow: auto;
    height: auto;
  }
`
export const ContainerSubMenu = styled.div`
  position: absolute;
  flex: 1 1 auto;
  background-color: #fff;
  left: 198px;
  width: 0px;
  border: 1px solid #ddd;
  top: -1px;
  opacity: 0;
  z-index: ${props => (props.Active ? '4' : '0')};
  transition: width, opacity ease-in-out 0.3s;
`
export const ContainerEncabezadoMenu = styled.li`
  display: block;
  padding: 5px;
  &:hover {
    background-color: var(--bg-primary);
  }
`
export const Nav = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  cursor: pointer;

  & > li:nth-child(1) {
    & > a {
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: 600;
      font-size: 20px;
      padding-left: 20px;
      &:hover {
        color: var(--bg-primary);
        & + div ul > li:nth-child(1) {
          background-color: var(--bg-primary);
          & > li {
            & a {
              color: #fff;
            }
          }
          & > div {
            z-index: 4;
          }
        }
      }
      svg {
        top: 3px;
        position: relative;
      }
      cursor: pointer;
    }
    &:hover > div {
      width: 200px;
      height: auto;
      overflow: visible;
      border: 1px solid #ddd;
      z-index: 2;
      opacity: 1;
      & div {
        width: 200px;
        height: calc(100% + 2px);
        padding: 10px;
        overflow: auto;
        opacity: 1;
        span {
          text-align: center;
          display: block;
        }
      }
    }
  }
`
