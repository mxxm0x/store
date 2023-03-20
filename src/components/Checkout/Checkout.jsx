import React from 'react';
import './Checkout.css';

function Checkout() {
	return (
		<div className="cContainer">
			<div className="background">
				<div className="header">
					<p className="header-text">You're paying,</p>
					<h1 className="header-value">$450.00</h1>
				</div>

				<div className="products">
					<p className="title">Custom Gucci Shoes</p>
					<p className="sub1">Size: m Color: Red</p>
					<p className="title2">Nivea Cream 400ml</p>
					<p className="sub2">Size: m Color: Blue</p>
					<p className="discounts">Discounts & Offers</p>
					<p className="tax">Tax</p>
					<p className="final">Total</p>
				</div>

				<div className="costs">
					<p className="value">$400.00</p>
					<p className="value1">$50.00</p>
					<p className="value2">$0.00</p>
					<p className="value3">$0.00</p>
					<p className="value4">$450.00</p>
				</div>
			</div>
		</div>
	);
}

export default Checkout;
