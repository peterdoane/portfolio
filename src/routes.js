import React, {Component} from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import RouteWrapper from './animated-switch';
import ReactTransitionGroup from 'react-addons-transition-group'
import Home from './home';
import ContactPage from './contactPage';
import Footer from './footer';
import TransitionElement from './transition-element'

class Routes extends Component {

  App = () => {
    return (
      <div>
        <Link to="">Profile</Link>
        <Link to="/work">Work</Link>
        <Link to="/contact">Contact</Link>
      </div>
    );
  };

  Home = () => {
    return (
      <div>
        <Home />
      </div>
    );
  }

  Profile = () => {
    return (
      <div>
        <Home />
      </div>
    );
  }

  Work = () => {
    return (
      <div>
        This is the Work page
      </div>
    );
  }

  Contact = () => {
    const {loader_loaded=false} = this.props;
    return (
      <div>
        <ContactPage loader_loaded={loader_loaded}/>
        <Footer is_absolute={true} />
      </div>
    );
  }

  NoMatch = () => {
    return (
      <div>
        This is the 404 page
      </div>
    );
  }

  test = () => {
    console.log('ho gaya');
  }

  render() {
    const {loader_loaded=false} = this.props;
    return (
        <RouteWrapper
          atEnter={{ top: 100, active: 100 }}
          atLeave={{ top: 0, active: 0 }}
          atActive={{ top: 100, active: 100 }}
          mapStyles={(styles) => ({
            top: styles.top,
            active: styles.active
          })}
        >
          <Route
            exact
            path="/"
            render={this.Home}
          />
          <Route
            exact
            path="/profile"
            render={this.Profile}
          />
          <Route
            path="/work"
            exact
            render={this.Work}
          />
          <Route
            path="/contact"
            exact
            render={this.Contact}
          />
          <Route
            render={this.NoMatch()}
          />
        </RouteWrapper>
    );
  }
}

export default Routes;
