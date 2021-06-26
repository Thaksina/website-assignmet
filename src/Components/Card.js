import React from 'react'
import './Card.css'



function Card({name,starrating,stock,picture}) {
  return (
    <div className="title">
      <div class="card cardframe">
        <p>มีสินค้า</p>
  <img class="card-img-top" src={picture} alt="Card image cap" />
  <div class="card-body">
  <p class="card-text">{starrating}</p>
    <h5 class="card-title">{name}</h5>
  </div>
</div>
    </div>
  );
}

export default Card;
