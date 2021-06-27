import React from 'react'
import './Card.css'
import Card  from "./Card";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";



function CardSlider({title}) {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 5
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 5
        }
      };
  return (
    <div className="title">
        <h2>{title}</h2>
      <Carousel responsive={responsive}>    
      <Link to="/Itempage">
  <div>
  <Card 
      name="ชื่อสินค้า"
      starrating="5"
      stock="มีสินค้า"
      picture="./shirtpic.jpg"
      price="599"       
      />
  </div>
  </Link>

  <div>
  <Card 
      name="ชื่อสินค้า"
      starrating="5"
      stock="มีสินค้า"
      picture="./shirtpic.jpg"
      price="599"       
      />
  </div>
  <div>
  <Card 
      name="ชื่อสินค้า"
      starrating="5"
      stock="มีสินค้า"
      picture="./shirtpic.jpg"
      price="599"       
      />
  </div>
  <div>
  <Card 
      name="ชื่อสินค้า"
      starrating="5"
      stock="มีสินค้า"
      picture="./shirtpic.jpg"
      price="599"       
      />
    </div>
  <div>
  <Card 
      name="ชื่อสินค้า"
      starrating="5"
      stock="มีสินค้า"
      picture="./shirtpic.jpg"
      price="599"       
      />
  </div>
  <div>
  <Card 
      name="ชื่อสินค้า"
      starrating="5"
      stock="มีสินค้า"
      picture="./shirtpic.jpg"
      price="599"       
      />
  </div>
  <div>
  <Card 
      name="ชื่อสินค้า"
      starrating="5"
      stock="มีสินค้า"
      picture="./shirtpic.jpg"
      price="599"       
      />
  </div>
</Carousel>
    </div>
  );
}

export default CardSlider;
