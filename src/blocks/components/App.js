import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import Header from './Header';
// import Footer from './Footer';
// import Main from './Main';


export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
      </div>
    );
  }
}
        // <Main content={<Blog />}/>
        // <Footer />