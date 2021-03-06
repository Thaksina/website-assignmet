import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './Slide.css'


function Slide() {
    return (
      <div>
        <Carousel>
  <Carousel.Item className="spacelr">
    <img
      className="d-block w-100"
      src="./slidepic.png"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>End Year Sale</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>



  <Carousel.Item className="spacelr">
    <img
      className="d-block w-100"
      src="./slidepic.png"
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3>End Year Sale</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>


  <Carousel.Item className="spacelr">
    <img
      className="d-block w-100"
      src="./slidepic.png"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>End Year Sale</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>


</Carousel>
      </div>
    );
  }
  
  export default Slide;
  