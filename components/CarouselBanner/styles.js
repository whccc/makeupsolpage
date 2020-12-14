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
            
            font-size:13px;
        
          }
      }
  }
`

export const Item=styled.div`
    width:100%; 
    & img{
        width:100%;
        height:100%;
        object-fit:cover;
        max-height:250px;
    }
    @media (min-width:1024px){
        & img{
            max-height:400px;
        }
    }
    @media (min-width:1424px){
        & img{
            max-height:500px;
        }
    }
`