import React, { Component } from 'react';
import Contacts from './Contacts';


export default class Footer extends Component {
  render() {
    return (
        <div className='footer text-center'> 
          <div className='container' data-aos='zoom-out'> 
            <h1 className='footer__brand'>RENOME</h1>
            <Contacts />
            <p className='copyright'>
              &copy;&nbsp;2017&nbsp;Renome&thinsp;&mdash;&thinsp;cоздание&thinsp;сайтов&thinsp;на&thinsp;Djano
            </p>
          </div>
        </div>
    );
  }
}