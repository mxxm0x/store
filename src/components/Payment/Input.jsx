import React from 'react';
import './Payment.css';
import './Input.css';
function Input(props) {
	return (
		<div>
			<div className="masterCard"></div>

			<div className="real-input">
				<span className="card-info">
					<input placeholder={props.place} className={props.className} />
				</span>
			</div>
		</div>
	);
}

export default Input;
