import React from 'react';
import Iframe from 'react-iframe';
import Slider from "react-slick";
import './Carousel.css';
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
      const storesExclude = ["https://us.organicbasics.com/","https://teamtimbuktu.com/", "https://aliceandwhittles.com/"];
      const stores = ["https://kotn.com/", "https://www.mightygoodbasics.com/"];
      return (
            <div>
                  <Slider {...settings}>
                        {stores.map((url) => {
                              return (
                                    <div>
                                          <Iframe url={url}
                                                width="450px"
                                                height="450px"
                                                className="store"
                                                display="initial"
                                                position="relative" />
                                    </div>
                              );
                        })}

                  </Slider>

            </div>);
}

export default Carousel;
