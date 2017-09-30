import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Logo extends Component {
  render() {
    return (
      <div className='brand'>
        <Link
           className='brand__refer' 
           to='/'>
          <canvas id='brand'></canvas>
        </Link>
      </div>
    );
  }
}