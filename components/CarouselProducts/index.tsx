import { ContainerCarousel } from './styles'
import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { CardProduct } from '../CardProduct'
import { ResponsiveCarousel } from '../../helpers'

export const CarouselProducts: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
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
        <CardProduct Img="/1.jpg" />
        <CardProduct Img="/2.jpg" />
        <CardProduct Img="/3.jpeg" />
        <CardProduct Img="/1.jpg" />
        <CardProduct Img="/2.jpg" />
        <CardProduct Img="/3.jpeg" />
      </Slider>
    </ContainerCarousel>
  )
}
