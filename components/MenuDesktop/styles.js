import styled,{keyframes} from 'styled-components'
import {ContainerCarousel} from '../Carousel/styles'
export const ContainerMenu= styled.div`
            position: absolute;
            height:0px;
            background-color:#fff;
            top:65px;
            left:150px;
            z-index:0;
           width:0px;
           opacity:0;
           overflow:hidden;
            transition:width,opacity ease-in-out .1s;
            & a{
                display:flex;
                padding:3px;
                &:hover{
                    color:var(--bg-primary);
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
            width:0px;
            height:350px;
            border:1px solid #ddd;
            top:-1px;
            opacity:0;
            z-index:${props=>props.Active ? '3':'0'};
            transition:width,opacity ease-in-out .3s;
           
`
export const ContainerEncabezadoMenu=styled.li`
            display:block;
            &:hover + div{
                z-index:3;
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
                color:var(--bg-primary);
            }
            svg{
                top:3px;
                position:relative;
            }
            cursor: pointer;
        } 
        &:hover > div{
            width:200px;
            height:350px;
            padding:10px;
            overflow:visible;
            border:1px solid #ddd;
            z-index:2;
            opacity:1;
            & div{
                width:200px;
                height:350px;
                padding:10px;
                overflow:auto;  
                opacity:1;
            }
        } 
       
    }         
`

