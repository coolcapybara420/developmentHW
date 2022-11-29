import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import BakeryItem from './components/BakeryItem';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

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
  let currBread = breadFilter;
  let currPastry = pastryFilter;
  const [sort, setSort] = useState("price");
  function setCart(index) {
    let newCart = cartMap;
    if (index in cartMap) {
      newCart[index] += 1;
    } else {
      newCart[index] = 1;
    }
    setCartMap(newCart);
    console.log(newCart);
  }

  function removeFromCart(index) {
    let newCart = cartMap;
    if (newCart[index] > 1) {
      newCart[index] -= 1;
    } else {
      delete newCart[index];
    }
    setCartMap(newCart);
    console.log(newCart);
  }

  const pastryChange = (event) => {
    setPastryFilter(event.target.checked);
    currPastry = event.target.checked;
    const filteredData = bakeryData.filter(matchesFilterType);
    setCurrentItems(filteredData);
  };

  const breadChange = (event) => {
    setBreadFilter(event.target.checked);
    currBread = event.target.checked;
    const filteredData = bakeryData.filter(matchesFilterType);
    setCurrentItems(filteredData);
  }

  const matchesFilterType = item => {
    if (currPastry && !currBread) {
      if (item.type == "pastry") {
        return true;
      } else {
        return false;
      }
    } else if (!currPastry && currBread) {
      if (item.type == "bread") {
        return true;
      } else {
        return false;
      }
    } else if (currBread && currPastry) {
      if (item.type == "bread" && item.type == "pastry") {
        return true;
      } else {
        return false;
      }
    } else {
      return true;
    }
  }

  const sortChange = (event) => {
    setSort(event.target.value);
  }

  if (sort == "price") {
    currentItems.sort((a,b) => a.price - b.price);
  }

  return (
    <div className="App">
      <h1>My Bakery</h1> {/* TODO: personalize your bakery (if you want) */}

      
      <FormControlLabel control={<Checkbox onChange={pastryChange}/>} label="Pastry" />
      <FormControlLabel control={<Checkbox onChange={breadChange}/>} label="Bread" />

      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
        <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="price"
        name="radio-buttons-group"
        onChange={sortChange}
        >
        <FormControlLabel value="price" control={<Radio />} label="Price" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
        </RadioGroup>
      </FormControl>
      
      {currentItems.map((item, index) => {
        return (<BakeryItem cartMap={cartMap} setCart={setCart} setTotalPrice={setTotalPrice} item={item} 
          index={index} currPrice={totalPrice} removeFromCart={removeFromCart}/>)})
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
        <p>{"Total Cost: " + Math.abs(totalPrice).toFixed(2)}</p>
      </div>
    </div>
  );
}

export default App;
