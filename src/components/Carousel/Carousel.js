/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useCallback } from 'react';
import Slider from "react-slick";
import { MediaCard } from '../MediaCard';
import './Carousel.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import communityThrift from './images/community-thrift.png';
import pennyArcade from './images/penny-arcade.png';
import readyToWearAgain from './images/ready-to-wear-again.png';
import urbanOutfitters from './images/urban-outfitters.png';
import wornWear from './images/worn-wear.png';

export function Carousel() {
	const storesExclude = ["https://kotn.com/", "https://www.hazlewoodcompany.com/", "https://www.mightygoodbasics.com/", "https://us.organicbasics.com/", "https://communitythriftandvintage.com/", "https://teamtimbuktu.com/", "https://aliceandwhittles.com/"];
	const store = [
		"https://readytowearagain.com/",
		"https://www.urbanoutfitters.com/en-ca/brands/urban-renewal",
		"https://communitythriftandvintage.com/",
		"https://pennyarcadevintage.com/collections/denim",
		"https://wornwear.patagonia.com/",
	];
	const stores = [
		{
			name: "Ready To Wear Again",
			url: "https://readytowearagain.com/",
			image: readyToWearAgain,
			description: "HI"
		},
		{
			name: "Urban Renewal",
			url: "https://www.urbanoutfitters.com/en-ca/brands/urban-renewal",
			image: urbanOutfitters,
			description: "HI"
		}
	]
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
		"bla bla",
		"bla"
	];
	const storeImages = [
		readyToWearAgain,
		urbanOutfitters,
		communityThrift,
		pennyArcade,
		wornWear,
	]

	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	};


	const openSite = useCallback((website) => { window.open(website, "_blank") },);

	return (
		<div>
			<Slider {...settings}>
				{stores.map((store, index) => {
					return (
						<MediaCard key={index} url={store.url} name={store.name} description={store.description} image={storeImages[index]}>
						</MediaCard>
					);
				})}

			</Slider>

		</div>);

}

export default Carousel;