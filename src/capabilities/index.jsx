import React from 'react';
import './cap.css';

const Capabilities = () => {
  return (
    <section className="container capabilities">
      <div className="innerColumn">
        <header>
          <h2>Capabilities</h2>
        </header>
        <ul className="capabilityList">
          <li>
            <h3>Developement</h3>
            <p>No one cares about websites. People care about ideas. I translate ideas into code.
            </p>
          </li>
          <li>
            <h3>Design</h3>
            <p>Your users are impatient. They're probably distracted too. Keep it simple and beautiful, fun and functional. Clean aesthetics supported by a strong concept is what I stand for.
            </p>
          </li>
          <li>
            <h3>Experience</h3>
            <p>Don’t make ads. Make movies and songs. Don’t talk about yourself. Talk about your user. And don’t oversell.
            </p>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Capabilities

{/* <h1>Capabilites</h1>
  <div className="skills">
    <div className="skill">
      <h2 className="skillTitle">Development</h2>
      <p>No one cares about websites. People care about ideas. I translate ideas into code.
      </p>
    </div>
    <div className="skill">
      <h2 className="skillTitle">Design</h2>
      <p>Your users are impatient. They're probably distracted too. Keep it simple and
        beautiful, fun and functional. Clean aesthetics supported by a strong concept is what I stand for.
      </p>
    </div>
    <div className="skill">
      <h2 className="skillTitle">Experience</h2>
      <p>Don’t make ads. Make movies and songs.
          Don’t talk about yourself. Talk about your user. And don’t oversell.

      </p>
    </div>
  </div> */}
