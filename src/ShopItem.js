import React, { Component } from 'react';
import './ShopItem.css';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { IconButton} from '@material-ui/core';

function ShopItem({OnAddToCart, id, name, imageURL, price})
{
		return(
			<div className = "shop_item">
				<img src={imageURL} alt=""/>				
				<div className="shop_item_bottom">
					<h2>{name}</h2>
					<p>${price}</p>
					<button onClick = {()=>OnAddToCart(id)}>
						<p>ADD TO CART</p>
						<AddShoppingCartIcon/>
					</button>				
				</div>
				
			</div>
		);
}

export default ShopItem
