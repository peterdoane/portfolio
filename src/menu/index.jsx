import React from 'react';
import './menu.css';

const Menu = () => {
  return (
    <header className="container siteHeader">
      <div className="innerColumn">
        <a className="link">
          <h1 className="logo">PETE</h1>
        </a>
        <nav>
          <ul>
            <li>
              <a className="link">Profile</a>
            </li>
            <li>
              <a className="link">Work</a>
            </li>
            <li>
              <a className="link">Contact</a>
            </li>
          </ul>
          <img src="images/ic_menu_white.png" className="hamburgerMenu" alt="360modernport" title="360modernport" />
        </nav>
      </div>
    </header>
  );
}

export default Menu;

// change to header
{/* <div className="logo">PETE</div> */
}
{/* <div className="menu-options">
  <a className="focus">Profile</a>
  <a>Work</a>
  <a>Contact</a>
</div> */
}
