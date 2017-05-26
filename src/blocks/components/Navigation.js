import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

export default class Navigation extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
        isOpen: false,
        activAbout: true,
        activeServices: false,
        activeContacts: false,
        activeTemplates: false
    };

    this.getActiveClass = this.getActiveClass.bind(this);
    this.openMenu = this.openMenu.bind(this);
    this.changeActiveServices = this.changeActiveServices.bind(this);
    this.changeActiveAbout = this.changeActiveAbout.bind(this);
    this.changeActiveContacts = this.changeActiveContacts.bind(this);
    this.changeActiveTemplates = this.changeActiveTemplates.bind(this);
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
      activeContacts: false,
      activeTemplates: false
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
  changeActiveContacts() {
    this.cleanActiveState();

    this.setState({activeContacts: true});

  }
  changeActiveTemplates() {
    this.cleanActiveState();

    this.setState({activeTemplates: true});

  }
   
  render() {

    const { activeAbout, activeServices, activeContacts, activeTemplates } = this.state;

    return (
        <nav className='navigaton'>
          <button id='openMenuButton'
            className='navigation__openMenuButton visible-xs'
            onClick={this.openMenu}>
            <span className='sr-only'> 
              Toggle navigation
            </span>
            <i className='fa fa-bars fa-2x' />
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
            <li className={this.getActiveClass(activeContacts)}>
              <a 
                href='#'
                className='navItem__refer'
                onClick={this.changeActiveContacts}>
                  Контакты
              </a>
            </li>
            <i className="fa fa-circle hidden-xs" aria-hidden="true" />  
            <li className={this.getActiveClass(activeTemplates)}>
              <a 
                href='#'
                className='navItem__refer'
                onClick={this.changeActiveTemplates}>
                  Шаблоны
              </a>
            </li>
          </ul>
        </nav>
    );
  }


  getActiveClass(state) {
    const activeState = {
        'navItem': true,
        'active': true
    };

    if (state)
      return  classNames(activeState);
    else 
      return 'navItem';



    // switch (linkName) {
    //   case 'BLOG':      
    //     return classNames(activeState);
    //   case 'CONTACTS':
    //     return classNames(activeState);
    //   case 'ABOUT':
    //     return classNames(activeState);
    //   case 'ARCHIVE':
    //     return classNames(activeState);
    //   default:
    //     return normalState;
    // }
              // <a 
              //   href='#'
              //   className='navItem__refer'
              //   onClick={this.changeActiveServices}>
              //     Услуги
              // </a>
  }
}

// <li className='navItem active'>
//               <Link 
//                   to='/' 
//                   className='navItem__refer'
//                   onClick={}>Блог</Link>
//             </li>
//             <li className='navItem'>
//               <Link to='/connect' 
//                   className='navItem__refer'
//                   onClick={this.toggleMenu}>Контакты</Link>
//             </li>
//             <li className='navItem'>
//               <a href='http://shining-present.tw1.ru' 
//                  className='navItem__refer not-follow'>
//                  Портфолио
//               </a>
//             </li>
//             <li className='navItem'>
//               <Link to='/about' 
//                   className='navItem__refer'
//                   onClick={this.toggleMenu}>Обо мне</Link>
//             </li>
//             <li className='navItem'>
//               <Link to='/archive' 
//                   className='navItem__refer'
//                   onClick={this.toggleMenu}>Архив</Link>
//             </li>
//             <a 
              //   href='#'
              //   className='navItem__refer'
              //   onClick={this.changeActiveAbout}>
              //   О нас
              // </a>