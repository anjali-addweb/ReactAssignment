import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './home.css';
import {Jumbotron} from './jumbotron';
import Footer from './footer';
import axios from 'axios';
class Contact extends Component{
  constructor(props){
    super(props);
    this.onChangeName=this.onChangeName.bind(this);
    this.onChangeEmail=this.onChangeEmail.bind(this);
    this.onChangeContact=this.onChangeContact.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state={
      name:'',
      email:'',
      contact:''
    }
  }

  onChangeName(e){
    this.setState({
      name:e.target.value
    });
  }
  onChangeEmail(e){
    this.setState({
      email:e.target.value
    });
  }
  onChangeContact(e){
    this.setState({
      contact:e.target.value
    });
  }
  onSubmit(e){
    e.preventDefault();

    const obj={
      name:this.state.name,
      email:this.state.email,
      contact:this.state.contact

    };
    axios.post('http://localhost/reactdb/insert.php',obj)
    .then(res => console.log(res.data));
    //console.log(obj)
    this.setState({
      name:'',
      email:'',
      contact:''
    })
  }
	render(){
		return(
      <>
		<Jumbotron/>
		<form onSubmit={this.onSubmit}>
		<div className="for">
        <p>Enter your name:</p>
        <input
          type="text"
          size="25"
          value={this.state.name}
          onChange={this.onChangeName}
        />
        <p>Enter your email:</p>
        <input
          type="text" 
          size="25"
          value={this.state.email}
          onChange={this.onChangeEmail}
        />
        <p>Enter your contact no:</p>
        <input
          type="text" 
          size="25"
          value={this.state.contact}
          onChange={this.onChangeContact}
        />
        <p className="sub">
        <input
          type="submit" 
          
        />
        </p> 
        </div>
         <Footer />
      </form>
     </>
      
		);
	}
}
export default Contact;