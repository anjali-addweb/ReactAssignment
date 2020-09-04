import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './home.css';
import {Jumbotron} from './jumbotron';
import Footer from './footer';
class About extends Component{
	render(){
		return(
			<>
			<Jumbotron />
			<div className="about">
			<h1>ABOUT PAGE</h1>
			<div className="content">
			<p>There are many variations of passages of Lorem Ipsum available, 
			but the majority have suffered alteration in some form, by injected humour, 
			or randomised words which dont look even slightly believable. 
			If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt
			anything embarrassing hidden in the middle of text.
			All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary,
			making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, 
			combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.
			The generated Lorem Ipsum is therefore always free 
			from repetition, injected humour, or non-characteristic words etc.</p>
			</div>
			<Footer />
			</div>
			</>
		);
	}
}
export default About;