import styled from 'styled-components'

export const Container = styled.div`
  padding: 10px;
  max-height: 400px;
  overflow: auto;
`
export const ContainerItem = styled.div`
  border: 1px solid #ddd;
  display: flex;
  flex-direction: row;
  padding: 10px;
  background-color: #fff;
  & > div:nth-child(2) {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    & > div {
      top: -4px;
      position: relative;
    }
    & button {
      width: 25px;
      height: 25px;
      border: none;
      background-color: var(--bg-primary);
      color: #fff;
    }
    & input {
      border: 1px solid #ddd;
      height: 25px;
      width: 50px;
      text-align: center;
    }
  }
  & img {
    width: 100px;
    border: 1px solid #ddd;
  }
`
