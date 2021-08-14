import React, { Component } from 'react';
import "./Header.css";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {Avatar, IconButton} from '@material-ui/core';
import {useLocation, Link} from "react-router-dom"
import StorefrontIcon from '@material-ui/icons/Storefront';

function Header({amount})
{
	let location = useLocation();
	return (
			<div className = "header">
				<div className="header_middle">
					<h1>BUY MY PICTURES</h1>
				</div>					
				<div className="header_right">			
					<IconButton>
					{
						location.pathname === '/'?				
							(<Link to = "/cart">
							 <ShoppingCartIcon />
							 <sup>{amount}</sup>
							</Link>)
						:<Link to = "/">
								<StorefrontIcon/>
						</Link>
					}
					</IconButton>

				</div>
			</div>
		);
}		

export default Header;