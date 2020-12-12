import styled,{createGlobalStyle} from 'styled-components'


//Estilos globales
export const GlobalStyle=createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }
  body {
    background: #f3f3f4;
    font-family: 'Roboto', sans-serif;
  }
  :root{
    --bg-primary-blue:#3578E5;
    --bg-primary-tomato:tomato;
    --bg-primary-verde:green;
  }
  button{
    outline:none !important;
    }
`
export const Container=styled.div`
   
`