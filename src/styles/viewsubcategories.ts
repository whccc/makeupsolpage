import styled from 'styled-components'

export const Container = styled.div`
  section {
    text-align: center;
    padding: 10px;
    max-width: 1000px;
    margin: auto;
  }
  h1 {
    padding: 20px;
    font-size: 30px;
  }
`
export const ContainerSubCategories = styled.section`
  border: 1px solid #ddd;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  @media (min-width: 1024px) {
    & > div {
      width: 33.33%;
    }
  }
`
