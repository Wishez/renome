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
        activePrices: false,
        activePatterns: false
    };

    this.getActiveClass = this.getActiveClass.bind(this);
    this.openMenu = this.openMenu.bind(this);
    this.changeActiveServices = this.changeActiveServices.bind(this);
    this.changeActiveAbout = this.changeActiveAbout.bind(this);
    this.changeActiveConnect = this.changeActiveConnect.bind(this);
    this.changeActivePrices = this.changeActivePrices.bind(this);
    this.activeNewState = this.activeNewState.bind(this);
    this.changeActivePatterns = this.changeActivePatterns.bind(this);
    
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

  activeNewState(state) {
    this.setState({
      activeAbout: false,
      activeServices: false,
      activeConnect: false,
      activePrices: false,
      activePatterns: false
    });

    this.setState(state);
  }

  changeActiveAbout() {
    this.activeNewState({activeAbout: true});
  }
  changeActiveServices() {
   this.activeNewState({activeServices: true});
  }
  changeActiveConnect() {
    this.activeNewState({activeConnect: true});

  }
  changeActivePrices() {
    this.activeNewState({activePrices: true});

  }
  changeActivePatterns() {
    this.activeNewState({activePatterns: true});

  }

  componentDidMount() {
    this.changeActiveAbout();
  }

   
  render() {

    const { activeAbout, activeServices, activeConnect, activePrices, activePatterns } = this.state;

    return (
        <nav className='navigation'>
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
            <i className="fa fa-circle hidden-xs hidden-sm" aria-hidden="true" />  
            <li className={this.getActiveClass(activeServices)}>
              <Link to='/services'
                className='navItem__refer'
                onClick={this.changeActiveServices}>
                Услуги
              </Link>
            </li>
            <i className="fa fa-circle hidden-xs hidden-sm" aria-hidden="true" />  
            <li className={this.getActiveClass(activeConnect)}>
              <Link to='/connect'
                className='navItem__refer'
                onClick={this.changeActiveConnect}>
                Контакты
              </Link>
            </li>
            <i className="fa fa-circle hidden-xs hidden-sm" aria-hidden="true" />  
            <li className={this.getActiveClass(activePrices)}>
              <Link to='/prices' 
                className='navItem__refer'
                onClick={this.changeActivePrices}>
                Цены
              </Link>
            </li>
            <i className="fa fa-circle hidden-xs hidden-sm" aria-hidden="true" />  
            <li className={this.getActiveClass(activePatterns)}>
              <Link to='/templates' 
                className='navItem__refer'
                onClick={this.changeActivePatterns}>
                Шаблоны
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