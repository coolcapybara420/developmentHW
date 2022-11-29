import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import BakeryItem from './components/BakeryItem';

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
    // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [totalPrice, setTotalPrice] = useState(0);
  const [cartMap, setCartMap] = useState({});
  const [breadFilter, setBreadFilter] = useState(false);
  const [pastryFilter, setPastryFilter] = useState(false);
  const [currentItems, setCurrentItems] = useState(bakeryData);
  function setCart(index) {
    let newCart = cartMap;
    if (index in cartMap) {
      newCart[index] += 1;
    } else {
      newCart[index] = 1;
    }
    setCartMap(newCart);
  }

  const pastryChange = (event) => {
    setPastryFilter(event.target.checked);
    const filteredData = bakeryData.filter(matchesFilterType);
    console.log(filteredData);
    setCurrentItems(filteredData);
  };

  const breadChange = (event) => {
    setBreadFilter(event.target.checked);
  }

  const matchesFilterType = item => {
    if (!pastryFilter) {
      if (item.type == "pastry") {
        return true;
      } else {
        return false;
      }
    } else {
      return true;
    }
  }

  return (
    <div className="App">
      <h1>My Bakery</h1> {/* TODO: personalize your bakery (if you want) */}

      
      <FormControlLabel control={<Checkbox onChange={pastryChange}/>} label="Pastry" />
      <FormControlLabel control={<Checkbox onChange={breadChange}/>} label="Bread" />
      
      {currentItems.map((item, index) => {
        return (<BakeryItem setCart={setCart} setTotalPrice={setTotalPrice} item={item} index={index} currPrice={totalPrice}/>)})
        }

      <div>
        <h2>Cart</h2>
        {Object.keys(cartMap).map((key) =>{
        return(
          <div>
            {cartMap[key] + "x " + bakeryData[key].name}
          </div>
        )})}
        {/* TODO: render a list of items in the cart */}
        <p>{"Total Cost: " + totalPrice.toFixed(2)}</p>
      </div>
    </div>
  );
}

function selectFilterType() {

}

function matchesFilterType() {

}

export default App;
