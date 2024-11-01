import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
// Import des images
import ch1 from '../image/ch1.jpg'
import ch2 from '../image/ch2.jpg'
import ch3 from '../image/ch3.jpg'
import ch4 from '../image/ch4.jpg'
import ch5 from '../image/ch5.jpg'
import ch6 from '../image/ch6.jpg'
import ch7 from '../image/ch7.jpg'
import balcon from '../image/balcon.jpg'
import piscine from '../image/piscine.jpg'
import couverture from '../image/couverture.jpg'
import salon2 from '../image/salon2.jpg'
import salonoir from '../image/salonoir.jpg'
import spacesalon from '../image/spacesalon.jpg'
import toiltt from '../image/toiltt.jpg'
import toiltt2 from '../image/toiltt2.jpg'
import chm1 from '../image/chm1.jpg'
import chm2 from '../image/chm2.jpg'
import chm3 from '../image/chm3.jpg'
import chm4 from '../image/chm4.jpg'
import chm5 from '../image/chm5.jpg'


import image1 from '../image/image (1).png';
const ImageCarousel = () => {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
       <Carousel.Item>
        <img
          className="d-block w-100"
          src={image1}
          alt="Hotels"
          style={{ height: '200px', objectFit: 'cover' }}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ch1}
          alt="Hotels"
          style={{ height: '200px', objectFit: 'cover' }}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ch2}
          alt="Hotels"
          style={{ height: '200px', objectFit: 'cover' }}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ch3}
          alt="Hotels"
          style={{ height: '200px', objectFit: 'cover' }}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ch4}
          alt="Hotels"
          style={{ height: '200px', objectFit: 'cover' }}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ch5}
          alt="Hotels"
          style={{ height: '200px', objectFit: 'cover' }}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image1}
          alt="Hotels"
          style={{ height: '200px', objectFit: 'cover' }}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ch6}
          alt="Hotels"
          style={{ height: '200px', objectFit: 'cover' }}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ch7}
          alt="Hotels"
          style={{ height: '200px', objectFit: 'cover' }}
        />
      </Carousel.Item>
    </Carousel>
  );
}
export default ImageCarousel;
