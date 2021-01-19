import { ContainerCarousel } from './styles'
import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { CardProduct } from '../CardProduct'
import { ResponsiveCarousel } from '../../helpers'
import { IArrayProduct } from '../../Interfaces'

export const CarouselProducts: React.FC<IArrayProduct> = ({ Data }) => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    responsive: ResponsiveCarousel
  }
  return (
    <ContainerCarousel>
      <Slider {...settings}>
        {Data.map((Element, Index) => {
          return (
            <CardProduct
              Img={Element.ArrayImages[0]}
              key={Index}
              {...Element}
            />
          )
        })}
      </Slider>
    </ContainerCarousel>
  )
}
