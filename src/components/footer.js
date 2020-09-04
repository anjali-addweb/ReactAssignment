import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './home.css';
class Footer extends Component{
	render(){
		return(
			<div className="footer">
				<div className="adr">
					<h2>Address</h2>
					<p>56 New Colony Near</p>
					<p>Girish Colddrinks</p>
					<p>C G Road </p>
					<p>Navarngpura-845566</p>
				</div>
				<div className="menu">
					<h2>Menu</h2>
						<p> - Coffee</p>
						<p> - Tea</p>
						<p> - Snacks</p>
						<p> - Coffee</p>

				</div>
				<div className="service">
				<h2>Offers</h2>
					<p>->Good service</p>
					<p>->Free Delivery</p>
					<p>->Festival Offer</p>
					<p>->Festival Offer</p>
				</div>
			</div>
		);
	}
}
export default Footer;