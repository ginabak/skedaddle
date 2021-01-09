import React from 'react';
import Iframe from 'react-iframe';
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function Carousel(){
      const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
          };
    return (
    <div>
          <Slider {...settings}>
      <div>
      <Iframe url="https://directory.goodonyou.eco/"
    width="450px"
    height="450px"
    id="myId"
    className="myClassname"
    display="initial"
    position="relative"/>
      </div>
      <div>
      <Iframe url="https://directory.goodonyou.eco/"
    width="450px"
    height="450px"
    id="myId"
    className="myClassname"
    display="initial"
    position="relative"/>
      </div>
      <div>
      <Iframe url="https://directory.goodonyou.eco/"
    width="450px"
    height="450px"
    id="myId"
    className="myClassname"
    display="initial"
    position="relative"/>
      </div>
      <div>
      <Iframe url="https://directory.goodonyou.eco/"
    width="450px"
    height="450px"
    id="myId"
    className="myClassname"
    display="initial"
    position="relative"/>
      </div>
      <div>
      <Iframe url="https://directory.goodonyou.eco/"
    width="450px"
    height="450px"
    id="myId"
    className="myClassname"
    display="initial"
    position="relative"/>
      </div>
      <div>
      <Iframe url="https://directory.goodonyou.eco/"
    width="450px"
    height="450px"
    id="myId"
    className="myClassname"
    display="initial"
    position="relative"/>
      </div>
    </Slider>
      
      </div>);
}

export default Carousel;
