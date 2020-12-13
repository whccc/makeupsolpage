import styled from 'styled-components'

export const ContainerCarousel=styled.div`
z-index:-1;
.slick-slider{
    position: relative;
}
  .slick-arrow.slick-next,
  .slick-arrow.slick-prev{
      display:none !important;
  }
   
  .slick-dots{
      bottom:2px;
      & li{
          margin:0px;
          & button:before{
            color:var(--bg-primary);
           
            font-size:13px;
        
          }
      }
  }
`

export const Item=styled.div`
    & img{
        width:100%;
        height:100%;
    }
    @media (min-width:1024px){
        width:100%;
        max-height:550px;
        & img{
            width:100%;
            height:100%;
        }
    }
    @media (min-width:1424px){
        max-height:750px;
    }
`