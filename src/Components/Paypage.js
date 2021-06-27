import React from 'react'
import './Cartpage.css'
import { Link } from "react-router-dom";


function Paypage() {
  return (
          <div className="title">
      <h1 className="topiccartpage">ชำระเงิน</h1>
       
       <div className="row">
         <div className="col-8 paypagepadding">
           <div>
             <b>ที่อยู่ในการจัดส่ง</b>
             <hr></hr>

             <div className="row">
               <div className="col-6">
                 ชื่อ
               </div>
               <div className="col-6">
                 นามสกุล
               </div>
             </div>
             <div className="row">
               <div className="col-6">
                 <input className="inputpay"></input>
               </div>
               <div className="col-6">
               <input className="inputpay"></input>
               </div>
             </div>

             <div className="row country">
               ประเทศ
             </div>
             <div className="row">
             <input className="inputpay longboxmargin "></input>
             </div>

             <div className="row place">
               ที่อยู่
             </div>
             <div className="row">
             <input className="inputpay longboxmargin"></input>
             </div>

             <div className="row">
               <div className="col-6">
                 แขวง
               </div>
               <div className="col-6">
                 ตำบล
               </div>
             </div>
             <div className="row">
               <div className="col-6">
                 <input className="inputpay"></input>
               </div>
               <div className="col-6">
               <input className="inputpay"></input>
               </div>
             </div>


             <div className="row">
               <div className="col-6">
                 จังหวัด
               </div>
               <div className="col-6">
                 รหัสไปรษณีย์
               </div>
             </div>
             <div className="row">
               <div className="col-6">
                 <input className="inputpay"></input>
               </div>
               <div className="col-6">
               <input className="inputpay"></input>
               </div>
             </div>


             <div className="row place">
               เบอร์ติดต่อ
             </div>
             <div className="row">
             <input className="inputpay longboxmargin"></input>
             </div>

           </div>

           <div>
            <b>เลือกขนส่ง</b>
             <hr></hr>
                <div className="form-check paycheckbox">
                  <div className="row">
                  <div className="col-8">
                    <input className="" type="radio" value="" id="flexCheckIndeterminate"></input>
                    <img className="kerrylogo" src="./kerrylogo.png" />
                  </div>
                  <div className="col-4">
                    <label className=" kerrymoneypadding"> THB 40.00</label>
                  </div>
                  </div>
                </div>

                <div className="form-check paycheckbox">
                  <div className="row">
                  <div className="col-8">
                    <input className="" type="radio" value="" id="flexCheckIndeterminate"></input>
                    <label className="checkboxspace" for="flexCheckIndeterminate">Free Shipping</label>
                  </div>
                  <div className="col-4">
                    <label className=""> THB 0.00</label>
                  </div>
                  </div>

                
                </div>

           </div>

           <div>
            <b>ชำระเงินผ่าน</b>
             <hr></hr>

             <div className="form-check paycheckbox">
                <input className="" type="radio" value="" id="flexCheckIndeterminate"></input>
                <label className="checkboxspace" for="flexCheckIndeterminate">Cash</label>
                </div>
                <div className="form-check paycheckbox">
                <input className="" type="radio" value="" id="flexCheckIndeterminate"></input>
                <label className="checkboxspace" for="flexCheckIndeterminate">Credit Card</label>
                </div>

             

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

export default Paypage;
