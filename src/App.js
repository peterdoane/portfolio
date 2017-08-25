import React, { Component } from 'react';
import Menu from './menu/';
import Footer from './footer';
import Routes from './routes.js'
import Loader from './loader';


//<Splash />
//<Project />
//<Capabilites />
//<Services />
// <LatestWork />
// <Loader />

import './App.css';

class App extends Component {
  render() {
    return (
        <div>
          <Loader />
          <Menu />
          <Routes />
          <Footer />
        </div>
    );
  }
}

export default App;
