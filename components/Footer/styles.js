import styled from 'styled-components'


export const Container=styled.footer`
    text-align:center;
    margin-top:30px;
    background-color:#eee;
    padding:10px;
    position: absolute;
    bottom:-150px;
    width:100%;
    & p{
        margin:5px;
    }
    & div{
        display:flex;
        flex-direction:row;
        justify-content:center;
        span{
            padding:5px;
            border-radius:100%;
            width:28px;
            height:28px;
            margin:5px;
            display:flex;
            justify-content:center;
            align-items:center;
            border:1px solid #000;
        }
    }
`
export const SvgInstagram=styled.span`
    svg{
        top:2px;
        position: relative;
    }
`