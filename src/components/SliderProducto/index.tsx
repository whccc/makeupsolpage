/* eslint-disable react/display-name */
import { ContainerCarousel, Item } from './styles'
import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export const SliderProducto: React.FC = () => {
  const settings = {
    customPaging: function () {
      return (
        <a>
          <img style={{ width: '50px' }} src="/1.jpg" />
        </a>
      )
    },
    dots: true,
    dotsClass: 'slick-dots slick-thumb',
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }
  return (
    <ContainerCarousel>
      <Slider {...settings}>
        <Item>
          <img src="/1.jpg" alt="makeupsol" />
        </Item>
        <Item>
          <img src="/2.jpg" alt="makeupsol" />
        </Item>
        <Item>
          <img src="/3.jpeg" alt="makeupsol" />
        </Item>
      </Slider>
    </ContainerCarousel>
  )
}
