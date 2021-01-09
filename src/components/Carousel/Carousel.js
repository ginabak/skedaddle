/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import Slider from "react-slick";
import './Carousel.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function Carousel() {

      function SampleNextArrow(props) {
            const { className, style, onClick } = props;
            return (
              <div
                className={className}
                style={{ ...style, display: "block", background: "red" }}
                onClick={onClick}
              />
            );
          }
          
          function SamplePrevArrow(props) {
            const { className, style, onClick } = props;
            return (
              <div
                className={className}
                style={{ ...style, display: "block", background: "blue" }}
                onClick={onClick}
              />
            );
          }
      const storesExclude = ["https://us.organicbasics.com/", "https://communitythriftandvintage.com/", "https://teamtimbuktu.com/", "https://aliceandwhittles.com/"];
      const stores = ["https://kotn.com/", "https://www.hazlewoodcompany.com/", "https://www.mightygoodbasics.com/"];
      const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 1,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />

      };

      return (
            <div>
                  <Slider {...settings}>
                        {stores.map((url) => {
                              return (
                                    <div>
                                          <iframe src={url} width="700" height="500" frameBorder="0" />
                                    </div>
                              );
                        })}

                  </Slider>

            </div>);
}

export default Carousel;
