import React from 'react';
import './footer.css';


const Footer = (props) => {
  const {is_absolute = false} = props;
  const class_name = "container siteFooter " + (is_absolute ? 'abosoluteClassFooter' : '');
  return (
    <footer className={class_name}>
      <div className="innerColumn">
        <a className="link">
          <h1 className="logo">PETE</h1>
        </a>
        <p>Small Team. Bigger Picture.</p>
      </div>
    </footer>
  );
}

export default Footer;
