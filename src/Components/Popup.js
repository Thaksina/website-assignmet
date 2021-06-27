import React from 'react'
import './Navbar.css'
import { Link } from "react-router-dom";



function Popup() {
  return (
    <div className="App">
<div className="popup">
  <div className="upperpopup">
      <strong>รายการสินค้า</strong>
  <p>2 สินค้าในตระกร้า</p>
  <Link to="/cart">
  <button type="button" class="btn btn-outline-primary">แก้ไขตะกร้าสินค้า</button>
  </Link>
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
<Link to="/paypage">

<button type="button" class="btn btn-primary">ไปชำระเงิน</button>
</Link>
</div>



</div>
</div>

  );
}

export default Popup;