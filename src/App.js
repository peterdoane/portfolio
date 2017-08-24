import React, { Component } from 'react';
import Splash from './splash/';
import Menu from './menu/';
import Project from './project1';
import Capabilites from './capabilities';
import Services from './services';
import LatestWork from './latestWork';
import Footer from './footer';
import Loader from './loader';




import './App.css';

class App extends Component {
  render() {
    return (
        <div>
          <Loader />
          <Menu />
          <Splash />
          <Project />
          <Capabilites />
          <Services />
          <LatestWork />
          <Footer />
        </div>
    );
  }
}

export default App;
