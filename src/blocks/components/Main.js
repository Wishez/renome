import React, { Component } from 'react'; 
import { Route } from 'react-router-dom'
// import { BrowserHistory as Router, browserHistory } from 'react-router-dom';
import About from './About';
import Connect from './Connect';
import NotFound from './NotFound';
import Services from './Services';
import Patterns from './Patterns';

export default class Main extends Component {
  render() {
  	const { content } = this.props;
    return (
		<main>         
		  	<Route exact path='/' component={About} />
		  	<Route path='/services' component={Services} />
		  	<Route path='/connect' component={Connect} />
		  	<Route path='/patterns' component={Patterns} />
   		</main>
   	);
  }
}