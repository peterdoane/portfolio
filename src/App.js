import React, { Component } from 'react';
import Menu from './menu/';
import Footer from './footer';
import Routes from './routes.js'


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
          <Menu />
          <Routes />
          <Footer />
        </div>
    );
  }
}

export default App;
