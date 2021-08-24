import React, { Component } from 'react';
import ShopItem from './ShopItem';
import './Shop.css'

function Shop ({OnAddToCart, items})
{
	return (
		<div className = "shop">
		{
			Object.keys(items).map((item)=>
			{
				return <ShopItem
				OnAddToCart = {OnAddToCart}
				key = {item}
				id = {item}
				name = {items[item].name}
				price = {items[item].price}
				imageURL = {items[item].imageURL}/>
				
			})
		}
		</div>
	);
}

export default Shop
