import React from 'react';
import './latestWork.css';

const LatestWork = () => {
  return (
    <section className="container latest">
      <div className="innerColumn">
        <header>
          <p>
            Big, small, online, offline, local or international.Size doesn 't matter. We work on diverse projects for top brands as well as for cool startups. Check out some of our favorites.
          </p>
          <h2>Latest Work</h2>
        </header>
        <ul className="projectList">
          <li className="projectsSection">
          <a>
            <figure>
              <img src="images/360modernlatest.png"/>
            </figure>
            <h3>Attractions</h3>
            <p>Brand identity / web design</p>
          </a>
          </li>
          <li className="projectsSection">
            <figure>
              <img src="images/attractions1.png"/>
            </figure>
            <h3>Attractions</h3>
            <p>Brand identity / web design</p>
          </li>
          <li className="projectsSection">
            <figure>
              <img src="https://placehold.it/1600x900"/>
            </figure>
            <h3>Attractions</h3>
            <p>Brand identity / web design</p>
          </li>
          <li className="projectsSection">
            <figure>
              <img src="images/caustic.png"/>
            </figure>
            <h3>Attractions</h3>
            <p>Brand identity / web design</p>
          </li>
        </ul>
        <footer>
          <a className="button">View All Work</a>
        </footer>
      </div>
    </section>
  );
}

export default LatestWork;









{/* <img src="images/AppIcon.Attractions-logo.png" alt="360modernport" title="360modernport" />
<img src="images/CausticAcrostic.png"  />
<img src="images/CausticAcrostic.png"  />
<img src="images/CausticAcrostic.png"  /> */}
