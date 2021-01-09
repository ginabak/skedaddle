/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import Slider from "react-slick";
import { MediaCard } from '@shopify/polaris';
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
      const storesExclude = ["https://kotn.com/", "https://www.hazlewoodcompany.com/", "https://www.mightygoodbasics.com/", "https://us.organicbasics.com/", "https://communitythriftandvintage.com/", "https://teamtimbuktu.com/", "https://aliceandwhittles.com/"];
      const stores = [
            "https://readytowearagain.com/",
            "https://www.urbanoutfitters.com/en-ca/brands/urban-renewal",
            "https://communitythriftandvintage.com/",
            "https://wornwear.patagonia.com/",
            "https://www.hazlewoodcompany.com/",
      ];
      const storeNames = [
            "Ready To Wear Again",
            "Urban Renewal",
            "Community Thrift and Vintage",
            "Worn Wear Patagonia",
            "Hazlewood",
            ""
      ]

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
                        {stores.map((url,index) => {
                              return (
                                    <MediaCard
                                          title={storeNames[index]}
                                          primaryAction={{
                                                content: 'Shop',
                                                onAction: (url) => {},
                                          }}                                    >
                                                
                                    </MediaCard>
                              );
                        })}

                  </Slider>

            </div>);
}

export default Carousel;
