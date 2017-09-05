import React from 'react';
import Splash from './splash/';
import Project from './project1';
import Capabilites from './capabilities';
import Services from './services';
import LatestWork from './latestWork';
import Footer from './footer';


const Home = () => {
  return (
    <div>
      <Splash />
      <Project />
      <Capabilites />
      <Services />
      <LatestWork />
      <Footer />
    </div>
  );
};

export default Home;
