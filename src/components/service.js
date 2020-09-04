import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Jumbotron} from './jumbotron';
import More from './more-service';
import './home.css';

class Service extends Component{
	state={
		showInfo:false	
	}
	toggleHandler = () => {
    const doesShow = this.state.showInfo;
    this.setState( { showInfo: !doesShow } );
  }
	render(){
		let info=null;
		if(this.state.showInfo){
			info = (
				<More />
			)
		}
		return(
			<>
			<Jumbotron/>
			<div className="good-service">
				<h1>For Services:</h1>
				<p>Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
				 <p>It has roots in a piece of classical Latin literature from 45 BC</p>
				 <p>There are many variations of passages of Lorem Ipsum available,
				  but the majority have suffered alteration in some form</p>
				  <button onClick={this.toggleHandler}>For More</button>
				  {info}
			</div>
			</>
		);
	}
}
export default Service;