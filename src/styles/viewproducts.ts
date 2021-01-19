import styled from 'styled-components'

export const Container = styled.div`
  section {
    text-align: center;
    padding: 10px;
    max-width: 1200px;
    margin: auto;
  }
  h1 {
    padding: 20px;
    font-size: 30px;
  }
`
export const ContainerProducts = styled.div`
  border: 1px solid #ddd;
  display: flex;
  flex-wrap: wrap;
  @media (min-width: 768px) {
    & > div {
      width: 50%;
    }
  }
  @media (min-width: 1024px) {
    & > div {
      width: 33.33%;
    }
  }
  @media (min-width: 1224px) {
    & > div {
      width: 25%;
    }
  }
`
