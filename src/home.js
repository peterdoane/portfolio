import React from 'react';
import Loader from './loader';
import Splash from './splash/';
import Project from './project1';
import Capabilites from './capabilities';
import Services from './services';
import LatestWork from './latestWork';
import Footer from './footer';


const Home = () => {
  return (
    <div>
      <Loader />
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
