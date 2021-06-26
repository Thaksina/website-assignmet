import React from 'react'
import './App.css';
import Card from '././Components/Card';
import CardSlider from '././Components/CardSlider'
import Navbar from '././Components/Navbar';
import Slide from './Components/Slide';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Slide />

      <CardSlider 
      title="สินค้าขายดี"/>
      <CardSlider 
      title="สินค้าแนะนำ"/>

      
    </div>
  );
}

export default App;
