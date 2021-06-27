import React from 'react'
import './App.css';
import Card from '././Components/Card';
import Itempage from '././Components/Itempage'
import CardSlider from '././Components/CardSlider'
import Navbar from '././Components/Navbar';
import Slide from './Components/Slide';
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
