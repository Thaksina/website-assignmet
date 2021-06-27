import React from 'react'
import './Card.css'


function Card({name,starrating,stock,picture,price}) {
  return (
    <div className="title">
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
  <p class="card-text">{starrating}</p>
    <p class="cardtitle">{name}</p>
    <p class="cardtitle price">THB{price}.00</p>
    <h5 class="cardtitle pricededuct">THB{price-100}.00</h5>
  </div>
</div>
    </div>
  );
}

export default Card;
