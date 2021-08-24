import React, { Component } from 'react';
import './CartItem.css'

function CartItem({OnAddToCart, id, image, cName, amount, price})
{
		return (
			<div className = "cart_item">
				<div className = "image_holder">
					{image && <img src={image} alt=" This is an image of {cName}"/>}
				</div>							
					<p><b>{cName}</b></p>
					<p>$ {round(price, 2)}</p>
					<div className = "cartAmount">
						{
							OnAddToCart&&
							<button onClick = {()=>OnAddToCart(id,-1)}>-</button>
						}
						<p>{amount}</p>
						{
							OnAddToCart&&
							<button onClick = {()=>OnAddToCart(id,1)}>+</button>
						}
					</div>
					
			</div>
		);
}

function round(number, places)
{
  return Math.round(number * Math.pow(10, places)) / Math.pow(10,places);
}

export default CartItem;
