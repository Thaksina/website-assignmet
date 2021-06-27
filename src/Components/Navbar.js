import React from 'react'
import './Navbar.css'
import { Link } from "react-router-dom";


function Navbar() {
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
        <img
      className="iconpic"
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

        
    </div>
  );
}

export default Navbar;