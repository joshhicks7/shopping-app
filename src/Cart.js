import React, { Component } from 'react';
import './Cart.css'
import CartItem from './CartItem'

function Cart({OnAddToCart, items})
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
					 	Object.keys(items).map((item, index) =>
							(<CartItem
								OnAddToCart = {OnAddToCart}
								id = {item}
								key = {item}
								image = {items[item].imageURL}
								cName = {items[item].name}
								amount = {items[item].amount}
								price = {items[item].price}
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
			Object.keys(items).forEach(x => 
			{
				sum += items[x].amount * items[x].price;
			})
			return sum;
		}

	  function getItemAmount()
	  {
	    let sum = 0;
	    Object.keys(items).forEach(x=>{sum += items[x].amount});
	    return sum;
	  } 		
}


export default Cart;
