import React, { Component } from 'react';
// import { BrowserRouter as Router } from 'react-router-dom'
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
// import { BrowserHistory as Router, browserHistory } from 'react-router-dom';



export default class App extends Component {
  render() {
    return (
    	<div>
        	<Header />
        	<Main />	
        	<Footer />
        </div>
    );
  }
}