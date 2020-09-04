import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import './home.css';
import Navbar from './navbar';
import Main from './home'; 
import About from './about';
import Contact from './contact';
import Service from './service';

function Home(){
  return(
  	<Router>
  		<div className="main">
    	<Navbar/>
    	<Switch>
    		<Route exact path="/" component={Main} />
    		<Route exact path="/about" component={About} />
    		<Route exact path="/contact" component={Contact} />
        <Route exact path="/service" component={Service} />

    	</Switch>
    	</div>
  	</Router>
    
  );

}

export default Home;


