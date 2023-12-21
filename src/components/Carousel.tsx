// Carousel.tsx

import React from 'react';

import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface CarouselProps {
  items: React.ReactNode[];
}

const Carousel: React.FC<CarouselProps> = ({ items }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {items.map((element, index) => (
        <div  key={index} ><img style={{height: "300px",width:"100%",marginTop:"25px" ,borderRadius:"10px"}} src={element} alt="" /></div>
      ))}
    </Slider>
  );
};

export default Carousel;
