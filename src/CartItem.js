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
					<p>{amount}</p>
			</div>
		);
}

function round(number, places)
{
  return Math.round(number * Math.pow(10, places)) / Math.pow(10,places);
}

export default CartItem;
