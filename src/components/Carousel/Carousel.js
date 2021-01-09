/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
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
                                         <iframe src={url} width="700" height="500" frameBorder="0"/>
                                    </div>
                              );
                        })}

                  </Slider>

            </div>);
}

export default Carousel;
