import React from 'react';
import './Payment.css';
import Input from './Input';
import Button from './Button';
import './style.css'
function Payment(props) {
	return (
		<>
			<h1 className="headerText">Let's Make Payment</h1>
			<p className="call-to-card">
				To start your subscription, input your card details to make payment. You
				will be redirected to your banks authorization page .{' '}
			</p>
      <section className="labels">
        <article>
          <label className="lholder-name">Cartholder's name</label>
			    <Input place={'PAULINA CHIMAROKE'} className={'Pinput'} />
        </article>
			
      <article>
			<label className="lcard-number">Card Number</label>
			<Input place={'9870 3456 7890 6473'} className={'card-number'} />
      </article>
      
      <article>
			<label className="lexpiration-date">Expiration Date</label>
			<Input place={'03/30'} className={'expire-date'} />
      </article>

      <article>
			<label className="lcvc">CVC</label>
			<Input place={'654'} className={'card-cvc'} />
      </article>

			<label className="lcoupoun">Coupon</label>
			<span className="apply">Apply</span>
			<Input place={'CHIKAMSO-20-OFF'} className={'card-coupon'} />
			<Button />
      </section>
      </>
	);
}

export default Payment;
