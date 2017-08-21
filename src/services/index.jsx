import React from 'react';
import './services.css';

const Services = () => {
  return (
      <section className="container services">
        <div className="innerColumn">
          <header><h2>All Services</h2></header>
          <ul className="listing">
            <li className="service">Art Direction</li>
            <li className="service">Brand Identities</li>
            <li className="service">Campaigns</li>
            <li className="service">Creative Direction</li>
            <li className="service">Content Creation</li>
            <li className="service">Graphic Design</li>
            <li className="service">Wordpress</li>
            <li className="service">Typography</li>
            <li className="service">UX/UI Design</li>
            <li className="service">Website/App Design</li>
            <li className="service">Audio/Video Production</li>
            <li className="service">Photography</li>
          </ul>
        </div>
      </section>
  )
}

export default Services;
