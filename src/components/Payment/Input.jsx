import React from 'react';
import './Payment.css';
function Input(props) {
	return (
		<div className="card-info">
			<div className="masterCard"></div>

			<div>
				<input placeholder={props.place} className={props.className} />
			</div>
		</div>
	);
}

export default Input;
