import './App.css';
import Checkout from './components/Checkout/Checkout';
import Payment from './components/Payment/Payment.jsx';

function App() {
	return (
		<div className="App">
			<div className="left">
				<Payment />
			</div>

			<div className="right">
				<Checkout />
			</div>
			
			
		</div>
	);
}

export default App;
