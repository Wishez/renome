import React, { Component } from 'react';
import Logo from './Logo';
import Navigation from './Navigation'; 
 
export default class Header extends Component {
  render() {
    return (
        <header className='header' data-aos='fade-down'>
            <div className='container'>
              <Logo />
              <Navigation />
            </div>
        </header>
    );
  }
}