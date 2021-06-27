import React from 'react'
import './Cartpage.css'
import { Link } from "react-router-dom";


function Cartpage() {
  return (
    <div className="title">
      <h1 className="topiccartpage">ตระกร้าสินค้า</h1>
       
       <div className="row">
         <div className="col-8">
           <div className="row">
             <div className="col-3">สินค้า</div>
             <div className="col-3">ราคา</div>
             <div className="col-3">จำนวน</div>
             <div className="col-3">ยอดรวม</div>
           </div>
           <hr></hr>
           <div className="row">
           <div className="col-3">
           <div className="row productspace">
             <img class="popupitempicture" src="./shirtpic.jpg" alt="image" />
           <p className="productname">ชื่อสินค้า</p>
             </div>
           </div>
             <div className="col-3 fonttomiddle">THB 499.00</div>
             <div className="col-3 fonttomiddle">2</div>
             <div className="col-3 fonttomiddle">THB 898.00</div>
           </div>
           <hr></hr>
           <div className="row">
           <button type="button" class="btn-outline-dark cartbutton">ซื้อสินค้าต่อ</button>
           <button type="button" class="btn-dark cartbutton">ล้างตระกร้าสินค้า</button>

           </div>


         </div>
         
         
         <div className="col-4 totalnote">
           <div className="paddingnote">

          
             <h4>
               สรุปคำสั่งซื้อ
             </h4>
             <div className="row paddingtopnote">
               <div className="col-6">
                 ยอดรวม
               </div>
               <div className="col-6">
                 THB 898.00
               </div>
             </div>
             <div className="row paddingtopnote">
               <div className="col-6">
                 ค่าส่ง
               </div>
               <div className="col-6">
                 THB 102.00
               </div>
             </div>
             <hr></hr>

             <div className="row paddingtopnote">
               <div className="col-6">
                 สรุป
               </div>
               <div className="col-6">
                 THB 1000.00
               </div>
             </div>
             <div className="paddingtopnote">
               <Link to="/paypage">
               <button class="notesubmitbutton btn-primary" type="button">ไปชำระเงิน</button>
               </Link>
             </div>
            


           </div>
         </div> 
         </div>
    </div>
  );
}

export default Cartpage;
