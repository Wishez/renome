import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <div className='navContent__logo logo navbar-header'>
        <a id='logo' 
           className='navbar-brand' 
           href="#">
          <h1 className='logo__name'>  
            RENOME
          </h1>
        </a>
      </div>
    );
  }
}