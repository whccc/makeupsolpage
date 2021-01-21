import styled from 'styled-components'

export const Container = styled.div`
  min-height: calc(100vh - 200px);
  & section {
    max-width: 1000px;
    margin: auto;
    @media (min-width: 1024px) {
      & > div {
        display: flex;
        border: 1px solid #ddd;
        & > div {
          flex: 1 1 auto;
        }
      }
    }
  }
  h1 {
    text-align: center;
    padding: 10px;
    font-size: 35px;
  }
`
