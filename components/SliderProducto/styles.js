import styled from 'styled-components'

export const ContainerCarousel=styled.div`
  .slick-arrow.slick-next,
  .slick-arrow.slick-prev{
      display:none !important;
  }
  .slick-dots{
      position:relative;
      bottom:0px;
  } 
  .slick-dots.slick-thumb{
    & li{
        width:50px;
        height:50px;
        overflow:hidden;
    }
    .slick-active{
        & img{
            filter: grayscale(1);
        }
    }
    & img{
        object-fit:cover;
        width:100%;
        height:100%;
        filter: grayscale(0);
        transition:all ease-in-out .5s;
    }
  }
`

export const Item=styled.div`
    width:100%; 
    height:100%;
    & img{
        height:350px;
        width:100%;
        @media (min-width:600px){
            height:500px;
        }
        @media (min-width:1024px){
            height:450px;
        }
    }
   
`