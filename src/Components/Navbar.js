import React from 'react'
import './Navbar.css'
import { Link } from "react-router-dom";
import Popup from './Popup';
import { useState } from "react";
import useVisiblityToggler from "./useVisiblityToggler";


function Navbar() {
  const [ContactCardComponent, toggleCardVisiblity] = useVisiblityToggler(
    <Popup />,false);
  const [buttonPopup, setButtonPopup] = useState(false);
  return (
    <div className="App">
      <nav class="navbar-expand-lg navbar-light bg-light navbarspace">
  <Link to="/"> <a class="navbar-brand navbartitle" href="#">Book</a>
  </Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <a class="nav-link">สินค้าใหม่</a>
      </li>
      <li class="nav-item">
        <a class="nav-link">สินค้าขายดี</a>
      </li>
      <li class="nav-item">
        <a class="nav-link">สินค้าลดราคา</a>
      </li>
      <li class="nav-item">
        <a class="nav-link">สินค้าแนะนำ</a>
      </li>

      
    </ul>
    <div class="form-inline my-2 my-lg-0">
    <img
      className="iconpic"
      src="./findicon.jpeg"
      alt="Find icon"
    />
       <img onClick={toggleCardVisiblity}
      className=" iconpic"
      src="./cart.png"
      alt="Cart icon"
    />

        <img
      className="iconpic"
      src="./profile.png"
      alt="Profile icon"
    />


    </div>
  </div>
</nav>

        {/* <nav class="navbar navbar-light bg-light">
            <a class="navbar-brand" >Book</a>
            <a class="navbar-brand" >สินค้าใหม่</a>
            <a class="navbar-brand" >สินค้าขายดี</a>
            <a class="navbar-brand" >สินค้าลดราคา</a>
            <a class="navbar-brand" >สินค้าแนะนำ</a>

            

        </nav> */}

{ContactCardComponent}
        {/* <Popup trigger={buttonPopup}>
          </Popup> */}

{/* <div className="popup">
  <div className="upperpopup">
      <strong>รายการสินค้า</strong>
  <p>2 สินค้าในตระกร้า</p>
  <button type="button" class="btn btn-outline-primary">แก้ไขตะกร้าสินค้า</button>
  </div>
  <hr></hr>

  <div className="upperpopup">
    <div className="row">
    <img class="popupitempicture" src="./shirtpic.jpg" alt="image" />
    <p className="fontpopup">X 2 ชิ้น</p>

    </div>
  </div>

  <hr></hr>

<div className="upperpopup">
<p>ยอดรวม: THB898.00</p>
<button type="button" class="btn btn-primary">ไปชำระเงิน</button>
</div>



</div> */}
        
    </div>
  );
}

export default Navbar;