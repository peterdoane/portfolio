import React from 'react';
import './latestWork.css';

const LatestWork = () => {
  return (
    <section className="container latest">
      <div className="innerColumn">
        <header>
          <h2>Latest Work</h2>
          <p>
            Big, small, online, offline, local or international.Size doesn 't matter. We work on diverse projects for top brands as well as for cool startups. Check out some of our favorites.
          </p>
        </header>
        <ul className="projectList">
          <li className="projectsSection">
          <a>
            <figure>
              <img src="images/360modernlatest.png"/>
            </figure>
            <h3>360modern</h3>
            <p>React / Real Esate </p>
          </a>
          </li>
          <li className="projectsSection">
            <figure>
              <img src="images/attractions1.png"/>
            </figure>
            <h3>Attractions</h3>
            <p>React-Native</p>
          </li>
          <li className="projectsSection">
            <figure>
              <img src="images/caustic.png"/>
            </figure>
            <h3>Attractions</h3>
            <p>Acrostic playlist maker</p>
          </li>
          <li className="projectsSection">
            <figure>
              <img src="images/beets.png"/>
            </figure>
            <h3>Attractions</h3>
            <p>Multi-user drum machine</p>
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
