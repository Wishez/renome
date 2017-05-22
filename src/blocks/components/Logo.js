import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <div className='brand'>
        <a id='brand' 
           className='brand__refer' 
           href="#">
          <h1 className='brand__name'>  
            RENOME
          </h1>
        </a>
      </div>
    );
  }
}