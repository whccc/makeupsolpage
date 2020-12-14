import styled,{createGlobalStyle} from 'styled-components'


//Estilos globales
export const GlobalStyle=createGlobalStyle`
  * {
    scroll-behavior: smooth;
    box-sizing: border-box;
    margin:0;
    padding:0;
  }
  body {
    background: #f3f3f4;
    font-family: 'Roboto', sans-serif; 
    min-height:100vh;
    position: relative;
  }
  :root{
    --bg-primary:#ec3a99;
    --bg-secundary:#ddd;
  }
  h1,h2,h3,h4,h5,h6{
    margin:0px;
  }
  button{
    outline:none !important;
    }
    a{
      text-decoration:none;
      color:#000;
    }
`
export const Container=styled.div`
   
`