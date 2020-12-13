import styled from 'styled-components'

export const ContainerMenu= styled.div`
            position: absolute;
            width:200px;
            height:350px;
            background-color:#fff;
            top:60px;
            left:150px;
            opacity:0;
            transition:all ease-in-out .5s;
            padding:10px;
            border:1px solid #ddd;
            & a{
                display:flex;
                padding:3px;
                &:hover{
                    color:#ec3a99;
                }
                svg{
                    font-size:19px;
                    flex:1 1 auto;
                    display:flex;
                    position:absolute;
                    right:0px;
                }
            }

          
        

`   
export const ContainerSubMenu=styled.div`
            position: absolute;
            flex:1 1 auto;
            background-color:#fff;
            left:200px;
            width:200px;
            height:350px;
            overflow:auto;  
              padding:10px;padding:10px;
            border:1px solid #ddd;
            top:-1px;
            z-index:${props=>props.Active ? '1':'0'};
            transition:all ease-in-out .3s;
           
`
export const ContainerEncabezadoMenu=styled.li`
            display:block;
            &:hover + div{
                z-index:2;
            }
         
`

export const Nav=styled.nav`
    width:100%;  
    display:flex;
    align-items:center;
    flex-direction:row;
    & > li:nth-child(1){
        & > a{
            display:flex;
            justify-content:center;
            align-items:center;
            font-weight:600;
            font-size:20px;
            padding-left:20px;
            &:hover{
                color:#ec3a99;
            }
            svg{
                top:3px;
                position:relative;
            }
            cursor: pointer;
        } 
        &:hover div{
         opacity:1;
        } 
    }         
`