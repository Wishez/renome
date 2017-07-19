import React, { Component } from 'react';
// import Contacts from './Contacts';


export default class Footer extends Component {
  render() {
    return (
        <div className='footer text-center'> 
          <div className='container' data-aos='fade-right'> 
            <h1 className='footer__brand'>RENOME</h1>
            <ul className='contactsStock'>
              <li className='contactsStock__item'>
                <a href='mailto:renome@intrenalmail.ru'>
                  <i className='fa fa-envelope-o fa-1x'></i>
                  <span>shiningfinger@list.ru</span>
                </a>
              </li>
              <li className='contactsStock__item'>
                <a href='skype:shiningfinger_1?chat'
                   className='not-follow'>
                  <i className='fa fa-skype fa-1x'></i>
                  <span>shiningfinger_1</span>
                </a>
              </li>
            </ul>
            <p className='copyright'>
              &copy;&nbsp;2017&nbsp;Renome&thinsp;&mdash;&thinsp;cоздание&thinsp;сайтов&thinsp;на&thinsp;Django
            </p>
          </div>
        </div>
    );
  }
}