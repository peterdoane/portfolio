import React from 'react';
import './project1.css';
import ScrollEffect from '../scroll-effect';

const Project = () => {
  return(
  <section className="container project">
    <ScrollEffect>
        <div className="innerColumn">
            <figure className="imageWrapper">
              <img src="images/360modernport.png" alt="360modernport" title="360modernport" />
            </figure>
        </div>
    </ScrollEffect>
  </section>
  );
}

export default Project;
