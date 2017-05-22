import React, { Component } from 'react'; 
import { Route } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom';
import About from './About';
import Connect  from './Connect';
import NotFound from './NotFound';

export default class Main extends Component {
  render() {
  	const { content } = this.props;
    return (
		<main>         
	  		<Router>
			  	<Route exact path='/' component={About} />
	  		</Router>
	   </main>
   	);
  }
}
		    // <Route exact path='/' component={Blog} />
	     //    <Route path="/connect" component={Connect}/>
	     //    <Route path="/about" component={About}/>
	     //    <Route path="/archive" component={Archive}/>
	  	  //   <Route path="/:article_id" component={Article}/>