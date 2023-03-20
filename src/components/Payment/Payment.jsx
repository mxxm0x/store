import React from 'react';
import './Payment.css';
import Input from './Input';
import Button from './Button';
function Payment(props) {
	return (
		<div className="container">
			<h1 className="headerText">Let's Make Payment</h1>
			<p className="call-to-card">
				To start your subscription, input your card details to make payment. You
				will be redirected to your banks authorization page .{' '}
			</p>

			<label className="lholder-name">Cartholder's name</label>
			<Input place={'PAULINA CHIMAROKE'} className={'Pinput'} />

			<label className="lcard-number">Card Number</label>
			<Input place={'9870 3456 7890 6473'} className={'card-number'} />

			<label className="lexpiration-date">Expiration Date</label>
			<Input place={'03/30'} className={'expire-date'} />

			<label className="lcvc">CVC</label>
			<Input place={'654'} className={'card-cvc'} />

			<label className="lcoupoun">Coupon</label>
			<span className="apply">Apply</span>
			<Input place={'CHIKAMSO-20-OFF'} className={'card-coupon'} />
			<Button />
		</div>
	);
}

export default Payment;
