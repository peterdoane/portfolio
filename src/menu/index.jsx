import React from 'react';
import {Link} from 'react-router-dom';
import './menu.css';

const Menu = () => {
  return (
    <header className="container siteHeader">
      <div className="innerColumn">
        <a className="link">
          <Link className="link active logoColor" to="/profile">
            <h1 className="logo" >PETE</h1>
          </Link>
        </a>
        <nav>
          <ul>
            <li>
              <Link className="link active" to="/profile">Profile</Link>
            </li>
            <li>
              <Link className="link" to="/work">Work</Link>
            </li>
            <li>
              <Link className="link" to="/contact">Contact</Link>
            </li>
          </ul>
          <img src="images/ic_menu_white.png" className="hamburgerMenu" alt="360modernport" title="360modernport"/>
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
