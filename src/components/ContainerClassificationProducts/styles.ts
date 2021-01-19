import styled from 'styled-components'

export const Category = styled.div`
  width: 50%;
  height: 150px;
  padding: 10px;
  position: relative;
  & div {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    background-color: #000;
    box-shadow: 0px 0px 5px 5px #eee;
    top: 0px;
    transition: all ease-in-out 0.5s;
    cursor: pointer;
    &:hover {
      top: -5px;
      background: var(--bg-primary);
    }
    & p {
      color: #fff;
      display: block;
    }
  }
`
