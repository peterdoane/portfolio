import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Home from './home';
import ContactPage from './contactPage';


const App = () => {
  return (
    <div>
      <Link to="">Profile</Link>
      <Link to="/work">Work</Link>
      <Link to="/contact">Contact</Link>
    </div>
  );
};

const Profile = () => {
  return (
    <div>
      <Home />
    </div>
  )
}

const Work = () => {
  return (
    <div>
      This is the Work page
    </div>
  )
}

const Contact = () => {
  return (
    <div>
      <ContactPage />
    </div>
  )
}

const NoMatch = () => {
  return (
    <div>
      This is the 404 page
    </div>
  )
}

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/profile" component={Profile}/>
      <Route path="/work" component={Work}/>
      <Route path="/contact" component={Contact}/>
      <Route component={NoMatch}/>
    </Switch>
  );
};

export default Routes;
