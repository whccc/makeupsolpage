import styled from 'styled-components'


export const Nav = styled.nav`
    background-color:#fff;
    width:100%;
    position:relative;
    ul{
        list-style:none;
        margin:0px;
    }
    & > ul{
        padding-left:0px;
        padding:5px;
        position: relative;
    }
    & > ul{
        display:flex;
        flex-direction:row;
        & > li:nth-child(1){
            width:100%;
            display:flex;
            align-items:center;
            img{
                width:100px;
            }
        }
       
    }
    svg{
        font-size:28px;
    }

    @media (min-width:1024px){
        &  li:nth-child(1){
            width:auto !important;
            img{
                width:130px !important;
            }
        }
        & {
            padding-left:20px;
            padding-right:20px;
        }
    }
`
export const SvgMobil=styled.li`
    display:flex;
    justify-content:center;
    align-items:center;
    @media (min-width:1024px){
        display:none !important;
    }
`

export const SvgCart=styled.li`
    display:flex;
    justify-content:center;
    align-items:center;
`

    