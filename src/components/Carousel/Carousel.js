import React from 'react';
import Iframe from 'react-iframe';
import Slider from "react-slick";
import './Carousel.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function Carousel() {
      const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
      };

      const stores = ["https://kotn.com/", "https://www.mightygoodbasics.com/", "https://dorsu.org/", "https://us.organicbasics.com/"];
      return (
            <div>
                  <Slider {...settings}>
                        <div>
                              <Iframe url={stores[0]}
                                    width="450px"
                                    height="450px"
                                    id="myId"
                                    className="store"
                                    display="initial"
                                    position="relative" />
                        </div>
                  </Slider>

            </div>);
}

export default Carousel;
