import React from 'react';
import './services.css';

const Services = () => {
  return (
      <section className="container services">
        <div className="innerColumn">
          <header><h2>All Services</h2></header>
          <ul className="listing">
            <li className="service">APIs</li>
            <li className="service">CSS</li>
            <li className="service">Debugging</li>
            <li className="service">Javascript</li>
            <li className="service">Typography</li>
            <li className="service">Mobx/Redux</li>
            <li className="service">Node.js</li>
            <li className="service">React/React-Native</li>
            <li className="service">Responsive Design</li>
            <li className="service">UX/UI Design</li>
            <li className="service">Website/App Design</li>
            <li className="service">Wordpress</li>
          </ul>
        </div>
      </section>
  )
}

export default Services;
