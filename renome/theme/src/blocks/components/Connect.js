import React, { Component } from 'react';
import Title from './Title';
import ConnectForm from './ConnectForm';
import { Icon } from 'semantic-ui-react';

export default class Connect extends Component {
  render() {
    return (
      <section className='connect'>
        <div className='container'>
          <div className='text-center' data-aos="zoom-in">
            <Title block='connect' text='Контакты' />
          </div>
          <ul className='connectList text-center'>
            <li className='connectList__item' data-aos='zoom-out'>
              <a href='mailto:shiningfinger@list.ru'>
                <Icon name='mail' size='big'/>
                <span>shiningfinger@list.ru</span>
              </a>
            </li>
            <li className='connectList__item' data-aos='zoom-out'>
              <a href='skype:shiningfinger_1?chat'
                 className='not-follow'>
                <Icon name='skype' size='big'/>
                <span>shiningfinger_1</span>
              </a>
            </li>
          </ul>
          <div className='connectFormWrapper'>
            <div className='text-center' data-aos="zoom-in">
              <Title block='connectFormWrapper' text='Напишите нам' />
            </div>
            <ConnectForm />
          </div>
        </div>
      </section>
    );
  }
}