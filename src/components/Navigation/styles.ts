import styled from 'styled-components'
export const Nav = styled.nav`
  background-color: #fff;
  width: 100%;
  position: relative;
  ul {
    list-style: none;
    margin: 0px;
  }
  & > ul {
    padding-left: 0px;
    padding: 5px;
    position: relative;
  }
  & > ul {
    display: flex;
    flex-direction: row;
    & > li:nth-child(1) {
      width: 100%;
      display: flex;
      align-items: center;
      img {
        width: 100px;
        cursor: pointer;
      }
    }
  }
  svg {
    font-size: 32px;
    cursor: pointer;
  }

  @media (min-width: 1024px) {
    & li:nth-child(1) {
      width: auto !important;
      img {
        width: 140px !important;
      }
    }
    & {
      padding-left: 20px;
      padding-right: 20px;
    }
  }
`
export const SvgMobil = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 1024px) {
    display: none !important;
  }
`

export const SvgCart = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  & span {
    border: 1px solid var(--bg-primary);
    padding: 10px;
    border-radius: 50%;
    height: 18px;
    width: 18px;
    bottom: 13px;
    font-size: 15px;
    right: -2px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--bg-primary);
    color: #ffff;
    position: absolute;
    cursor: pointer;

    @media (min-width: 1024px) {
      & {
        bottom: 25px;
      }
    }
  }
`
