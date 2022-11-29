import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import finalBakeryData from "./assets/bakery-copy.json";
import * as React from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import BakeryItem from "./components/BakeryItem";
import FormHelperText from '@mui/material/FormHelperText';
import FormGroup from '@mui/material/FormGroup';

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
  const [frenchFilter, setFrenchFilter] = useState(false);
  const [asianFilter, setAsianFilter] = useState(false);
  const [usaFilter, setUsaFilter] = useState(false);
  const [italyFilter, setItalyFilter] = useState(false);
  let bakeryList = bakeryData;
  const [currentItems, setCurrentItems] = useState(bakeryList);

  let currBread = breadFilter;
  let currPastry = pastryFilter;
  let france = frenchFilter;
  let asia = asianFilter;
  let usa = usaFilter;
  let italy = italyFilter;

  const [sort, setSort] = useState("price");
  function setCart(index) {
    let newCart = cartMap;
    if (index in cartMap) {
      newCart[index] += 1;
    } else {
      newCart[index] = 1;
    }
    setCartMap(newCart);
  }

  function removeFromCart(index) {
    let newCart = cartMap;
    if (newCart[index] > 1) {
      newCart[index] -= 1;
    } else {
      delete newCart[index];
    }
    setCartMap(newCart);
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

  const usaChange = (event) => {
    setUsaFilter(event.target.checked);
    usa = event.target.checked;
    const filteredData = bakeryData.filter(matchesFilterType);
    setCurrentItems(filteredData);
  }

  const franceChange = (event) => {
    setFrenchFilter(event.target.checked);
    france = event.target.checked;
    const filteredData = bakeryData.filter(matchesFilterType);
    setCurrentItems(filteredData);
  }

  const asiaChange = (event) => {
    setAsianFilter(event.target.checked);
    asia = event.target.checked;
    const filteredData = bakeryData.filter(matchesFilterType);
    setCurrentItems(filteredData);
  }

  const italyChange = (event) => {
    setItalyFilter(event.target.checked);
    italy = event.target.checked;
    const filteredData = bakeryData.filter(matchesFilterType);
    setCurrentItems(filteredData);
  }

  const matchesFilterType = item => {
    if (currPastry && item.type != "pastry") {
      return false;
    }
    if (currBread && item.type != "bread") {
      return false;
    }
    if (france && item.cuisine != "french") {
      return false;
    }
    if (usa && item.cuisine != "american") {
      return false;
    }
    if (asia && item.cuisine != "asian") {
      return false;
    }
    if (italy && item.cuisine != "italian") {
      return false;
    }
    return true;
  }

  const sortChange = (event) => {
    setSort(event.target.value);
  }

  if (sort == "price") {
    currentItems.sort((a,b) => a.price - b.price);
  }

  function handleClick() {
    setBreadFilter(false);
    setPastryFilter(false);
    currBread = false;
    currPastry = false;
    setAsianFilter(false);
    setUsaFilter(false);
    setFrenchFilter(false);
    setItalyFilter(false);
    italy = false;
    usa = false;
    asia = false;
    france = false;
    const filteredData = bakeryData.filter(matchesFilterType);
    setCurrentItems(filteredData);
  }

  return (
    <div className="App">
      <h1>My Bakery</h1> {/* TODO: personalize your bakery (if you want) */}

      <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
      <FormLabel component="legend">Type</FormLabel>
      <FormGroup>
      <FormControlLabel control={<Checkbox checked={pastryFilter} onChange={pastryChange}/>} label="Pastry" />
      <FormControlLabel control={<Checkbox checked={breadFilter} onChange={breadChange}/>} label="Bread" />
      </FormGroup>
      </FormControl>

      <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
      <FormLabel component="legend">Cuisine</FormLabel>
      <FormGroup>
      <FormControlLabel control={<Checkbox checked={usaFilter} onChange={usaChange}/>} label="American" />
      <FormControlLabel control={<Checkbox checked={asianFilter} onChange={asiaChange}/>} label="Asian" />
      <FormControlLabel control={<Checkbox checked={frenchFilter} onChange={franceChange}/>} label="French" />
      <FormControlLabel control={<Checkbox checked={italyFilter} onChange={italyChange}/>} label="Italian" />
      </FormGroup>
      </FormControl>

      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">Sort By</FormLabel>
        <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="price"
        name="radio-buttons-group"
        onChange={sortChange}
        >
        <FormControlLabel value="price" control={<Radio />} label="Price" />
        </RadioGroup>
      </FormControl>

      <Button 
        onClick={() => {
          handleClick()
        }}
        variant="outlined">Reset Filters</Button>
      <div class="bakery-flex">
      {currentItems.map((item) => {
        return (<BakeryItem cartMap={cartMap} setCart={setCart} setTotalPrice={setTotalPrice} item={item} 
          currPrice={totalPrice} removeFromCart={removeFromCart}/>)})
        }
      </div>
      <div>
        <h2>Cart</h2>
        {Object.keys(cartMap).map((key) =>{
        return(
          <div>
            {cartMap[key] + "x " + finalBakeryData[key].name}
          </div>
        )})}
        {/* TODO: render a list of items in the cart */}
        <p>{"Total Cost: " + Math.abs(totalPrice).toFixed(2)}</p>
      </div>
    </div>
  );
}

export default App;
