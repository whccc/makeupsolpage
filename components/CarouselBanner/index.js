import { ContainerCarousel, Item } from './styles'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Resize from '../../hooks/resize'


export const CarouselBanner=()=>{
      const ShowItems=Resize()? 1:2 ;
      const settings = {
        dots: true,
        infinite: true,
        slidesToShow: ShowItems,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1500,
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
            <Item>
                <img
                    src="/3.jpeg"
                    alt="makeupsol"
                />
            </Item>
        </Slider>
      </ContainerCarousel>
      );
}


