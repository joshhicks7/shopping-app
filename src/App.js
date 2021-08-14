import React, { useState } from 'react';
import './App.css';
import Header from "./Header";
import Shop from './Shop';
import Cart from './Cart';

import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

let items = {};
export default class App extends React.Component
{

  constructor()
  {
    super();
    this.state = {cart:{}}
  }
 

  items = getItems();

    AddItem = (id, amount) =>
    {
      let cart = this.state.cart;
      if(cart[id])
      {
        cart[id].amount += amount;
        console.log("exist");
      }
      else
      {
        cart[id] = this.items[id];
        console.log("not exist");
      }
      this.setState({cart:cart});
      console.log(this.state.cart);
    }
  

  getItemAmount()
  {
    let sum = 0;
    Object.keys(this.state.cart).forEach(x=>{sum += this.state.cart[x].amount});
    return sum;
  }

  render()
  {
    return (
      <div className="App">
        <Router>
          <Header amount = {this.getItemAmount()}/>
          <div className="app_body">
          <Switch>
            <Route exact path = "/">
              <Shop OnAddToCart = {this.AddItem} items={this.items}/>
            </Route>
            <Route exact path = "/cart">
               <Cart items={this.state.cart}/>
            </Route>    
          </Switch>                
          </div>
        </Router>
      </div>
    );
  }
}

function getItems()
{
    let items = {};
    let j = 0;
    let i = new Item(j++, "Butterfly", round(Math.random() * 100,2), "https://png.pngtree.com/png-clipart/20210313/ourlarge/pngtree-pink-butterfly-flying-tail-light-effect-png-image_3060758.jpg",1);
    items[i.id] = i;
    i = new Item(j++, "Airplane", round(Math.random() * 100,2), "https://png.pngtree.com/png-clipart/20190415/ourlarge/pngtree-3d-rendering-of-airplane-png-image_942526.jpg", 1);
    items[i.id] = i;
    i = new Item(j++, "Frosty", round(Math.random() * 100,2), "https://png.pngtree.com/png-vector/20190904/ourlarge/pngtree-winter-ski-snow-ball-santa-claus-christmas-png-image_1724153.jpg", 1);
    items[i.id] = i;
    i = new Item(j++, "Ship", round(Math.random() * 100,2), "https://png.pngtree.com/element_our/20200610/ourlarge/pngtree-sailing-ship-yacht-image_2249188.jpg", 1);
    items[i.id] = i;
    i = new Item(j++, "Fruit", round(Math.random() * 100,2), "https://png.pngtree.com/png-vector/20190403/ourlarge/pngtree-fruits-tropical-png-image_890931.jpg", 1);
    items[i.id] = i;
    i = new Item(j++, "Cat", round(Math.random() * 100,2), "https://png.pngtree.com/png-vector/20201229/ourlarge/pngtree-a-british-short-blue-and-white-cat-png-image_2654518.jpg", 1);
    items[i.id] = i;
    i = new Item(j++, "Shrek", round(Math.random() * 100,2), "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmumUKOWYPP8BxPDJc954EVPscLWBL9oqawA&usqp=CAU", 1);
    items[i.id] = i;
    i = new Item(j++, "House", round(Math.random() * 1500,2), "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf0i2dMjrUDHJ-mTrQOEQn7IrF9jHsMoIBjA&usqp=CAU", 1);
    items[i.id] = i;
    i = new Item(j++, "Shorts", round(Math.random() * 100,2), "https://png.pngtree.com/png-clipart/20210628/ourlarge/pngtree-cartoon-summer-blue-shorts-png-image_3432364.jpg",1);
    items[i.id] = i;

    return items;
    /*i = new Item(j++, "", round(Math.random() * 100,2), "", 1);
    items[i.id] = i;*/
}
function round(number, places)
{
  return Math.round(number * Math.pow(10, places)) / Math.pow(10,places);
}

function Item(id, name, price, imageURL, amount)
{
    this.id = id;
    this.name = name;
    this.price = price;
    this.imageURL = imageURL;
    this.amount = amount;
}


