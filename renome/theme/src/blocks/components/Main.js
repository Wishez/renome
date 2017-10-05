import React, { Component } from 'react'; 
import { Route, Switch } from 'react-router-dom'
import About from './About';
import Connect from './Connect';
import Services from './Services';
import Prices from './Prices';
import Patterns from './Patterns';


export default class Main extends Component {
  render() {
  	const { content } = this.props;
    return (
  		<main>
        <Switch>         
  		  	<Route exact path='/' component={About} />
  		  	<Route path='/services' component={Services} />
  		  	<Route path='/connect' component={Connect} />
  		  	<Route path='/prices' component={Prices} />
          <Route path='/templates' component={Patterns} />
        </Switch>
     	</main>
   	);
  }
}