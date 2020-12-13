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
  }
  :root{
    --bg-primary-blue:#3578E5;
    --bg-primary-tomato:tomato;
    --bg-primary-verde:green;
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