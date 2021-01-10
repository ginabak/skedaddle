import React from 'react';
import Slider from "react-slick";
import { MediaCard } from '../MediaCard';
import { Container } from '@material-ui/core';
import './Carousel.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import communityThrift from './images/community-thrift.png';
import pennyArcade from './images/penny-arcade.png';
import readyToWearAgain from './images/ready-to-wear-again.png';
import urbanOutfitters from './images/urban-outfitters.png';
import wornWear from './images/worn-wear.png';

export function Carousel() {
  // const storesExclude = ["https://kotn.com/", "https://www.hazlewoodcompany.com/", "https://www.mightygoodbasics.com/", "https://us.organicbasics.com/", "https://communitythriftandvintage.com/", "https://teamtimbuktu.com/", "https://aliceandwhittles.com/"];
  // const store = [
  //   "https://readytowearagain.com/",
  //   "https://www.urbanoutfitters.com/en-ca/brands/urban-renewal",
  //   "https://communitythriftandvintage.com/",
  //   "https://pennyarcadevintage.com/collections/denim",
  //   "https://wornwear.patagonia.com/",
  // ];
  const stores = [
    {
      name: "Urban Renewal",
      url: "https://www.urbanoutfitters.com/en-ca/brands/urban-renewal",
      image: urbanOutfitters,
      description: "all about repurposing and reinventing vintage pieces at affordable prices",
    },
    {
      name: "Community Thrift and Vintage",
      url: "https://communitythriftandvintage.com/",
      image: communityThrift,
      description: "(based in Vancouver), sells a tightly curated collection of recycled fashion at a low price point.",
    },
    {
      name: "Penny Arcade",
      url: "https://www.urbanoutfitters.com/en-ca/brands/urban-renewal",
      image: pennyArcade,
      description: "(based in Toronto), sells unique selections for both women and men."
    },
    {
      name: "Worn Wear Patagonia",
      url: "https://www.urbanoutfitters.com/en-ca/brands/urban-renewal",
      image: wornWear,
      description: "sells pre-loved patagonia clothes!"
    },
    {
      name: "Ready To Wear Again",
      url: "https://readytowearagain.com/",
      image: readyToWearAgain,
      description: "a thrift store where you can buy and sell high-quality secondhand clothing and accessories in new or near new condition.",
    },
  ]


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: true,
  };



  return (
    <div>
      <Slider {...settings}>
        {stores.map((store, index) => {
          <Container key={`${index}-container`} maxWidth="md">
            <MediaCard key={index} url={store.url} name={store.name} description={store.description} image={store.image} />
          </Container>
        })}
      </Slider>

    </div>);

}