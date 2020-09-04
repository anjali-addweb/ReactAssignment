import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import './home.css';
import logo from '../img/logo.png';

class Navbar extends Component {
	state={
		isOpen:false

	}
	handleClick=()=>{
		this.setState({
			isOpen:!this.state.isOpen,
		})
	}
	closeNavbar = ()=>{
		this.setState({
			isOpen:false
		})
	}
	render(){
		return(
			<div className="head">
			<h1>WEBSITE</h1>
			</div>,
		<nav>

			<div className="logoBtn">
			
				<Link to="/"><img src={logo} height="70" width="70" /></Link>
				<h2>COFFEE-DAY</h2>
			
		
			<div className="btn" onClick={this.handleClick}>
				<div className="bar"></div>
				<div className="bar"></div>
				<div className="bar"></div>	
			</div>
		</div>
		
		<ul className={this.state.isOpen ? 'showNav':'undefined'}>
			<li><Link to="/" onClick={this.closeNavbar}>Home</Link></li>
			<li><Link to="/about"  onClick={this.closeNavbar}>About Us</Link></li>
			<li><Link to="/service"  onClick={this.closeNavbar}>Service</Link></li>
			<li><Link to="/contact"  onClick={this.closeNavbar}>Contact Us</Link></li>

		</ul>

		</nav>

		);
	}
}

export default Navbar;

