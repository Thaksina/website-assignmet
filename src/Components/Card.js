import React from 'react'
import './Card.css'



function Card({topic,name,starrating,stock,picture}) {
  return (
    <div>
      <h3 className="title">{topic}</h3>
    </div>
  );
}

export default Card;
