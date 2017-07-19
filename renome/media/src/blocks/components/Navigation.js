import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { Icon } from 'semantic-ui-react';

export default class Navigation extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
        isOpen: false,
        activAbout: false,
        activeServices: false,
        activeConnect: false,
        activePrices: false
    };

    this.getActiveClass = this.getActiveClass.bind(this);
    this.openMenu = this.openMenu.bind(this);
    this.changeActiveServices = this.changeActiveServices.bind(this);
    this.changeActiveAbout = this.changeActiveAbout.bind(this);
    this.changeActiveConnect = this.changeActiveConnect.bind(this);
    this.changeActivePrices = this.changeActivePrices.bind(this);
    this.cleanActiveState = this.cleanActiveState.bind(this);
  }
  
  openMenu() {
    let $navList = $('#navList');
    
    if (!this.state.isOpen) {
      this.setState({isOpen: true});
      $navList.show('fast');
    } else {
      this.setState({isOpen: false});
      $navList.hide('fast');
    }
  }

  cleanActiveState() {
    this.setState({
      activeAbout: false,
      activeServices: false,
      activeConnect: false,
      activePrices: false
    });

  }

  changeActiveAbout() {
    this.cleanActiveState();

    this.setState({activeAbout: true});
  }
  changeActiveServices() {
    this.cleanActiveState();

    this.setState({activeServices: true});
  }
  changeActiveConnect() {
    this.cleanActiveState();

    this.setState({activeConnect: true});

  }
  changeActivePrices() {
    this.cleanActiveState();

    this.setState({activePrices: true});

  }

  componentDidMount() {
    this.changeActiveAbout();
  }

   
  render() {

    const { activeAbout, activeServices, activeConnect, activePrices } = this.state;

    return (
        <nav className='navigaton'>
          <button id='openMenuButton'
            className='navigation__openMenuButton visible-xs'
            onClick={this.openMenu}>
            <span className='sr-only'> 
              Toggle navigation
            </span>
            <Icon name='bars' size='big' />
          </button>
          <ul className='navList'
              id='navList'>
            
            <li className={this.getActiveClass(activeAbout)}>
              <Link to='/'
                className='navItem__refer'
                onClick={this.changeActiveAbout}>
                О нас
              </Link>
            </li>
            <i className="fa fa-circle hidden-xs" aria-hidden="true" />  
            <li className={this.getActiveClass(activeServices)}>
              <Link to='/services'
                className='navItem__refer'
                onClick={this.changeActiveServices}>
                Услуги
              </Link>
            </li>
            <i className="fa fa-circle hidden-xs" aria-hidden="true" />  
            <li className={this.getActiveClass(activeConnect)}>
              <Link to='/connect'
                className='navItem__refer'
                onClick={this.changeActiveConnect}>
                Контакты
              </Link>
            </li>
            <i className="fa fa-circle hidden-xs" aria-hidden="true" />  
            <li className={this.getActiveClass(activePrices)}>
              <Link to='/prices' 
                className='navItem__refer'
                onClick={this.changeActivePrices}>
                Цены
              </Link>
            </li>
          </ul>
        </nav>
    );
  }


  getActiveClass(state) {
    return  classNames({
      'navItem': true,
      'active': state
    });

  }
}