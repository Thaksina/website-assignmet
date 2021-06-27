import React from 'react'
import './Card.css'
import { Link } from "react-router-dom";


function Card({name,starrating,stock,picture,price}) {
  return (
    <div className="title">
      <Link to="/itempage" params={{ name: "testfail" }}>
      <div class="cardframe">
        
      <div class="stocktitle">
         <img
      className="stockicon"
      src="./check.png"
      alt="check icon"
    />
    <p className="stockname">{stock}</p>
      </div>
  <div>
  <img class="likesticker" src="./like.png" alt="Card image cap" />
  <img class="statisticsticker" src="./statistic.png" alt="Card image cap" />
  </div>
  <img class="card-img-top" src={picture} alt="Card image cap" />

  <button type="button" class="btn-outline-primary addcart">Add Cart</button>
  <div class="card-body">
    <img class="starmock" src="./starmock.png" alt="Card image cap" />
    <p class="cardtitle">{name}</p>
    <p class="cardtitle price">THB{price}.00</p>
    <h5 class="cardtitle pricededuct">THB{price-100}.00</h5>
  </div>
</div>
</Link>
    </div>
  );
}

export default Card;
