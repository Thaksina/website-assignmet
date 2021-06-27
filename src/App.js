import React from 'react'
import './App.css';
import Card from '././Components/Card';
import Itempage from '././Components/Itempage'
import CardSlider from '././Components/CardSlider'
import Navbar from '././Components/Navbar';
import Slide from './Components/Slide';
import Cartpage from '././Components/Cartpage';
import Paypage from '././Components/Paypage';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch,Route } from "react-router-dom";

function App() {
  return (
<Router>
    <div className="App">
      <Navbar />
      <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/itempage" component={Itempage}/>
      <Route path="/cart" component={Cartpage}/>
      <Route path="/paypage" component={Paypage}/>
      </Switch>
    </div>
  </Router>
  );
}

const Home = () =>(
  <div>
      <Slide />
      <CardSlider 
      title="สินค้าขายดี"/>
      <CardSlider 
      title="สินค้าแนะนำ"/>


  </div>

);

export default App;
