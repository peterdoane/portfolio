import React from 'react';


const ContactPage = () => {
  return (
    <div>
      <section className="container splash interior">
        <div className="innerColumn">
          <h1 className="splashText">
            Give us a call or send us an email.<br/>peterdoane@gmail.com
          </h1>
        </div>
      </section>
      <section className="container contacts">
        <div className="innerColumn">
          <ul className="contactTypeList">
            <li className="contactType">
              <h2>Title</h2>
              <ul className="socialTypeList">
                <li className="socialType">
                  <a className="link">Contact Links</a>
                </li>
                <li className="socialType">
                  <a className="link">Contact Links</a>
                </li>
                <li className="socialType">
                  <a className="link">Contact Links</a>
                </li>
                <li className="socialType">
                  <a className="link">Contact Links</a>
                </li>
                <li className="socialType">
                  <a className="link">Contact Links</a>
                </li>
              </ul>
            </li>
            <li className="contactType">
              <h2>Title</h2>
              <ul className="socialTypeList">
                <li className="socialType">
                  <a className="link">Contact Links</a>
                </li>
                <li className="socialType">
                  <a className="link">Contact Links</a>
                </li>
                <li className="socialType">
                  <a className="link">Contact Links</a>
                </li>
                <li className="socialType">
                  <a className="link">Contact Links</a>
                </li>
                <li className="socialType">
                  <a className="link">Contact Links</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}

export default ContactPage;
