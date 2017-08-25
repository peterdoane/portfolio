import React from 'react';
import './cap.css';
import ScrollEffect from '../scroll-effect';

const Capabilities = () => {
  return (
    <section className="container capabilities">
      <ScrollEffect>
        <div className="innerColumn">
          <header>
            <h2>Capabilities</h2>
          </header>
          <ul className="capabilityList">
            <li>
              <h3>Development</h3>
              <p>No one cares about websites. People care about ideas. We translate ideas into code.
              </p>
            </li>
            <li>
              <h3>Design</h3>
              <p>Web users are often impatient and distracted. We keep it simple and beautiful, fun and functional. The goal is to develop a strong concept supported by clean aesthetic to engage the user.
              </p>
            </li>
            <li>
              <h3>Experience</h3>
              <p>We don't make sites. We create experiences. Sharp, crisp, minimalistic. We are user focused and client driven.
              </p>
            </li>
          </ul>
        </div>
      </ScrollEffect>
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
