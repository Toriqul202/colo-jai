import React from 'react';
import { Carousel } from 'react-bootstrap';
import slider1 from '../../images/slider1 (1).jpg';
import slide2 from '../../images/slide(2).jpg';
import slide3 from '../../images/slide(3).jpg' 


const Slider = () => { 
    return (
        <>
          <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={slider1}
      alt="First slide"
      height="600px"
    />
    <Carousel.Caption> 
      <h3>চলো হারাই দূরে কোথাও</h3>
      <p>তুমি কি ঘুরতে পছন্দ করো তাহলে সঠিক জায়গায় এসেছো পাবে টিকেট যেখানে যেতে চাও </p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={slide2}
      alt="Second slide"
      height="600px"
    />

    <Carousel.Caption>
      <h3>ঘুরবোনা তা কি হয় নাকি??</h3> 
      <p>সময় এসেছে দেশের বাহিরে যাওয়ার কি দাদো যাবে নাকি ঘুরতে আমিতো তৈরি</p> 
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={slide3}
      alt="Third slide"
      height="600px"
    />

    <Carousel.Caption>
      <h3>সূর্যের সাথে ছবি না তুললে জীবন বৃথা</h3>
      <p>এভাবে ছবি তুলতে চাইলে টেনশন কিসের আমরা চলো যাই টিম তোমার পাশে আছি একটু ইচ্ছাই পারে জীবনটাকে বৃথা না বানাতে </p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>  
        </>
    );
};

export default Slider;