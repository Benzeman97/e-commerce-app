import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import Navbar from './components/Navbar';
import Cart from './components/Cart';
import Details from './components/Details';
import Default from './components/Default';
import ProductList from './components/ProductList';
import {Switch,Route} from "react-router-dom";


function App() {
  return (
    <React.Fragment>
     <Navbar/>
     <Switch>
       <Route exact path="/" component={ProductList}/>
       <Route path="/details" component={Details}/>
       <Route path="/cart" component={Cart}/>
       <Route component={Default}/>
     </Switch>
    </React.Fragment>
  );
}

export default App;
