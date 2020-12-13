//import Carousel from 'react-elastic-carousel'
import { ContainerCarousel, Item } from './styles'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
export const CompCarousel=()=>{
      const settings = {
        dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 5000
      };
      return (
        <ContainerCarousel>
          <Slider {...settings}>
            <Item>
                <img
                    src="/1.jpg"
                    alt="makeupsol"
                />
            </Item>
            <Item>
                <img
                    src="/2.jpg"
                    alt="makeupsol"
                />
            </Item>
        </Slider>
      </ContainerCarousel>
      );
}