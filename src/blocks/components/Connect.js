import React, { Component } from 'react';
import Title from './Title';
import ConnectForm from './ConnectForm';

export default class Connect extends Component {
  render() {
    return (
      <section className='connect'>
        <div className='container'>
          <div className='text-center'>
            <Title block='connect' text='Контакты' />
          </div>
          <ul className='connectList text-center'>
            <li className='connectList__item'>
              <a href='mailto:renome@intrenalmail.ru'>
                <i className='center-block fa fa-envelope-o fa-3x'></i>
                <span>shiningfinger@list.ru</span>
              </a>
            </li>
            <li className='connectList__item'>
              <a href='#'
                 className='not-follow'>
                <i className='center-block fa fa-skype fa-3x'></i>
                <span>shiningfinger</span>
              </a>
            </li>
          </ul>
          <div className='connectFormWrapper'>
            <div className='text-center'>
              <Title block='connectFormWrapper' text='Напишите нам' />
            </div>
            <ConnectForm />
          </div>
        </div>
      </section>
    );
  }
}