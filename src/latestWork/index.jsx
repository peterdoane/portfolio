import React from 'react';
import './latestWork.css';
import ScrollEffect from '../scroll-effect';

const LatestWork = () => {
  return (
    <section className="container latest">
      <ScrollEffect>
        <div className="innerColumn">
          <header>
            <h2>Latest Work</h2>
            <p>
              Big, small, online, offline, local or international. Size doesn 't matter. We work on diverse projects for top brands as well as for cool startups. Check out some of our favorites.
            </p>
          </header>
          <ul className="projectList">
            <li className="projectsSection">
              <div className="content">
                <a>
                  <figure>
                    <div className="content-overlay"></div>
                    <img className="content-image" src="images/360modernlatest.png"/>
                    <div className="content-details fadeIn">
                      <h3 className="content-title">360modern</h3>
                      <p className="content-text">React / Real Esate
                      </p>
                    </div>
                  </figure>
                </a>
              </div>
            </li>
            <li className="projectsSection">
              <div className="content">
                <a>
                  <figure>
                    <div className="content-overlay"></div>
                    <img className="content-image" src="images/attractions1.png"/>
                    <div className="content-details fadeIn">
                      <h3 className="content-title">Attractions</h3>
                      <p className="content-text">React-Native</p>
                    </div>
                  </figure>
                </a>
              </div>
            </li>
          </ul>
          <footer>
            <a className="button">View All Work</a>
          </footer>
        </div>
      </ScrollEffect>
    </section>
  );
}

export default LatestWork;

{/* <img src="images/AppIcon.Attractions-logo.png" alt="360modernport" title="360modernport" />
<img src="images/CausticAcrostic.png" />
<img src="images/CausticAcrostic.png" />
<img src="images/CausticAcrostic.png" /> */
}
