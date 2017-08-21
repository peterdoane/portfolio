import React, { Component } from 'react';
import Splash from './splash/';
import Menu from './menu/';
import Project from './project1';
import Capabilites from './capabilities';
import Services from './services';
import CustomScroll from 'react-custom-scroll';


import './App.css';

class App extends Component {
  render() {
    return (
        <div>
          <Menu />
          <Splash />
          <Project />
          <Capabilites />
          <Services />
        </div>
    );
  }
}

export default App;
