import styled from 'styled-components'
export const Container=styled.div`
    @media (min-width:1024px){
      min-height:calc(100vh - 250px);
      display:flex;
      justify-content:center;
      align-items:center;
    }
`

export const ContainerVistaProducto=styled.section`
    margin-top:10px;
    margin-bottom:20px;
    max-width:1200px;
    text-align:center;
    & h1{
        text-align:center;
        padding:10px;
    }
    @media (min-width:1024px){
            padding-left:100px;
            padding-right:100px;
            box-shadow:0px 0px 5px #000;
       
        & > div > div{
            position:relative;
            display:flex;
            margin:auto;
            flex-direction:row;
            & > div:nth-child(1){
                width:600px;
                display:inline-block;
                padding:20px;
            }
            & > div:nth-child(2){
                width:600px;
                display:inline-block;
                position:relative;
                display:flex;
                align-items:center;
                justify-content:center;
            }
        }
    }
    
`

export const ContainerData=styled.div`
    text-align:center;
    padding:10px;
    h1,p,label{
        margin-bottom:5px;
        display:block;
    }
    input {
        display:block;
        margin-left:auto;
        margin-right:auto;
        margin-bottom:5px;
        width:100px;
        height:30px;
    }
    button{
        height:40px;
        padding:5px;
        background-color:#000;
        color:#fff;
        border:none;
        &:hover{
            opacity:.8;
        }
    }
`