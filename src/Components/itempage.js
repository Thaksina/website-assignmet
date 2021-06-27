import React, { Component } from 'react';
import "react-multi-carousel/lib/styles.css";
import "./Itempage.css";
import CardSlider from './CardSlider'



class Itempage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0,
      show: true
    };
  }

  IncrementItem = () => {
    this.setState({ clicks: this.state.clicks + 1 });
  }
  DecreaseItem = () => {
    this.setState({ clicks: this.state.clicks - 1 });
  }

  render() {
  return (
    <div>
    <div className="title">
      <div class="container">
  <div class="row">
    <div class="col-6">
      <img className="itempictue" src="./shirtpic.jpg"/>
    </div>
    <div class="col-6">
      <h4>ชื่อสินค้า</h4>
      <p>ผู้เขียน : ทักษิณา</p>
      <p>ผู้เขียน : ทักษิณา</p>
      <h4>ราคา THB499.00</h4>
      <div className="row buttonframe">
      { this.state.show ? <h2>{ this.state.clicks }</h2> : '' }
      <div className="col">
        <div className="row">
        <button className="incrementbutton" onClick={this.IncrementItem}>Up</button>

        </div>
        <div className="row">
        <button className="decrementbutton" onClick={this.DecreaseItem}>Down</button>

</div>
      </div>

        <button type="button" class="addcartbutton  btn-primary ">Add Cart</button>
        <button type="button" class="addcartbutton  btn-warning">Wishlist</button>
      </div>


    </div>
  </div>
</div>

<div className="itemnavbar">
<nav class="nav itemnavbarborder">
  <a class="nav-link active" aria-current="page" href="#">เกี่ยวกับสินค้า</a>
  <a class="nav-link" href="#">รายละเอียดสินค้า</a>

</nav>
<p>เป็นเครื่องสวมกายท่อนบน คือ เครื่องนุ่งห่มร่างกายมนุษย์ตั้งแต่คอถึง สะโพก แต่บางทีอาจสั้นเพียงกลางลำตัว หรืออาจยาวถึงเข่าก็ได้</p>
</div>
    </div>
    
          <CardSlider 
          title="สินค้าขายดี"/></div>
  );
}
}


export default Itempage;
