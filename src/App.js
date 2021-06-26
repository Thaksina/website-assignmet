import React from 'react'
import './App.css';
import Card from '././Components/Card';
import Navbar from '././Components/Navbar';
import Slide from './Components/Slide';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Slide />
      <Card 
      topic="สินค้าขายดี"
      name="ชื่อสินค้า"
      starrating="5"
      stock="มีสินค้า"
      picture="./puclic/shirtpic.jpg"       
      />
      <Card 
      topic="สินค้าแนะนำ"
      name="ชื่อสินค้า"
      starrating="5"
      stock="มีสินค้า"
      picture="./puclic/shirtpic.jpg"       
      />
      
    </div>
  );
}

export default App;
