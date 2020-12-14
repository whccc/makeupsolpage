import styled from 'styled-components'

export const ContainerProduct=styled.div`
    width:100%;
    transform:scale(.90);
    border-radius:10px;
    transition:all ease-in-out .5s;
    cursor: pointer;
    border:1px solid #ddd;
    &:hover{
        box-shadow: 0 10px 15px 0 rgba(238, 238, 238, 0.93);
        transform:scale(1);
    }
`

export const ContainerImg=styled.div`
    width:100%;
    height:300px;
    padding:5px;
    & img{
        width:100%;
        object-fit:cover;
        height:100%;
        border-top-left-radius:10px;
        border-top-right-radius:10px;
    }
`

export const ContainerDescription=styled.div`
text-align:center;
padding:10px;
h4,p,label{
    margin-bottom:5px;
    font-size:15px;
}
& label{
    font-weight:900;
}
`
export const ContainerActions=styled.div`
    text-align:center;
    padding:10px;
   
`

export const Button=styled.button`
    height:50px;
    margin:auto;
    padding:5px;
    background-color:transparent;
    border:1px solid #000;
    cursor: pointer;
    font-weight:600;
    transition:all ease-in-out .5s;
    &:hover{
        background-color:#000;
        color:#fff;
    }
`