/* eslint-disable jsx-a11y/iframe-has-title */
import React, {useCallback} from 'react';
import Slider from "react-slick";
import { MediaCard } from '../MediaCard';
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
            "https://pennyarcadevintage.com/collections/denim", 
            "https://wornwear.patagonia.com/",
      ];
      const storeNames = [
            "Ready To Wear Again",
            "Urban Renewal",
            "Community Thrift and Vintage",
            "Penny Arcade",
            "Worn Wear Patagonia",
      ]

      const storeDescriptions = [
            "a thrift store where you can buy and sell high-quality secondhand clothing and accessories in new or near new condition.",
            "(based in Vancouver), sells a tightly curated collection of recycled fashion at a low price point.",
            "all about repurposing and reinventing vintage pieces at affordable prices",
            ""
      ];

      const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />

      };


      const openSite = useCallback((website) => {window.open(website, "_blank")},);

      return (
            <div>
                  <Slider {...settings}>
                        {stores.map((website,index) => {
                              return (
                                    <MediaCard>

                                    </MediaCard>
                              );
                        })}

                  </Slider>

            </div>);

                  }

                  export default Carousel;