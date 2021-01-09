import React from 'react';
import Iframe from 'react-iframe';

export function Carousel(){
    return (
    <div>
      <Iframe url="https://directory.goodonyou.eco/"
    width="450px"
    height="450px"
    id="myId"
    className="myClassname"
    display="initial"
    position="relative"/>
          <Iframe url="https://directory.goodonyou.eco/"
    width="450px"
    height="450px"
    id="myId"
    className="myClassname"
    display="initial"
    position="relative"/>
          <Iframe url="https://directory.goodonyou.eco/"
    width="450px"
    height="450px"
    id="myId"
    className="myClassname"
    display="initial"
    position="relative"/>
      </div>);
}

export default Carousel;
