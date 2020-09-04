import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './home.css';
import image from '../img/coffee.jpg';
import teaimage from '../img/tea.jpg';
import juice from '../img/juice.jpg';
import sand from '../img/sand.jpg';
import cake from '../img/pancake.jpg';
import {Jumbotron} from './jumbotron';

import Footer from './footer';
class Main extends Component{
	render(){
		return(
			<>
			<Jumbotron/>
			<div className="head">
			 	<div className="inside">
			 		<div className="grid">
			 			<p>COFFEE</p>
			 			<img src={image} height="150" width="200" />
			 		</div>
			 		<div className="grid2">
			 			<p>TEA</p>
			 			<img src={teaimage} height="150" width="200" />
			 		</div>
			 		<div className="grid3">
			 			<p>FRESH JUICE</p>
			 			<img src={juice} height="150" width="200" />
			 		</div>
			 		<div className="grid4">
			 			<p>SANWICHES</p>
			 			<img src={sand} height="150" width="200" />
			 		</div>
			 		<div className="grid5">
			 			<p>PANCAKES</p>
			 			<img src={cake} height="150" width="200" />
			 		</div>
			 	</div>
			 	<Footer />
			</div>
		</>

		);
	}
}
export default Main;