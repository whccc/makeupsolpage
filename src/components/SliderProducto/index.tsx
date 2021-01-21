/* eslint-disable react/display-name */
import { ContainerCarousel, Item } from './styles'
import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

interface IArrayImages {
  ArrayImages: Array<string>
}
export const SliderProducto: React.FC<IArrayImages> = ({ ArrayImages }) => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000
  }
  return (
    <ContainerCarousel>
      <Slider {...settings}>
        {ArrayImages.map((Element, Index) => {
          return (
            <Item key={Index}>
              <img src={Element} alt="makeupsol" />
            </Item>
          )
        })}
      </Slider>
    </ContainerCarousel>
  )
}
