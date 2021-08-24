import React, { Component } from 'react';
import './Cart.css'
import CartItem from './CartItem'

function Cart({OnAddToCart, items, cart})
{
		return (
			<div className = "cart">
				<div className = "cart_header">
					<h1> Cart </h1>
				</div>
				<div className="cart_body">
					<div className="cart_items">
					{console.log(items)}	
					 	{	
					 	Object.keys(cart).map((id, index) =>
							(<CartItem
								OnAddToCart = {OnAddToCart}
								id = {id}
								key = {id}
								image = {items[id].imageURL}
								cName = {items[id].name}
								amount = {cart[id]}
								price = {items[id].price}
								/>
							))}
					 	
					</div>					
				</div>
				<div className="cart_bottom">
					<div className = "cart_totals">
					<h1> Totals </h1>
						<CartItem
					 		amount = {getItemAmount()}
					 		price = {getTotalCosts()}/>
					</div>
				</div>
			</div>
		);

		function getTotalCosts()
		{
			let sum = 0;
			Object.keys(cart).forEach(x => 
			{
				sum += cart[x] * items[x].price;
			})
			return sum;
		}

	  function getItemAmount()
	  {
	    let sum = 0;
	    Object.keys(cart).forEach(x=>{sum += cart[x]});
	    return sum;
	  } 		
}


export default Cart;
