import styled from 'styled-components'

export const ContainerCarousel = styled.div`
  .slick-arrow.slick-prev {
    position: absolute;
    z-index: 1;
    left: -5px;
    &::before {
      font-size: 30px;
      color: var(--bg-primary);
      box-shadow: 0px 0px 5px var(--bg-primary);
      border-radius: 100%;
      background-color: #fff;
      opacity: 1;
    }
  }
  .slick-arrow.slick-next {
    position: absolute;
    right: 5px;
    z-index: 1;
    &::before {
      font-size: 30px;
      color: var(--bg-primary);
      box-shadow: 0px 0px 5px var(--bg-primary);
      border-radius: 100%;
      background-color: #fff;
      opacity: 1;
    }
  }

  .slick-dots {
    & li {
      margin: 0px;
      & button:before {
        font-size: 13px;
      }
    }
  }
`

export const Item = styled.div`
  & img {
    width: 100%;
    height: 100%;
  }
  @media (min-width: 1024px) {
    width: 100%;
    max-height: 550px;
    & img {
      width: 100%;
      height: 100%;
    }
  }
  @media (min-width: 1424px) {
    max-height: 750px;
  }
`
