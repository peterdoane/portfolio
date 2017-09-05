// FIle: src/animated-switch/RouteTransition.js

import React, { cloneElement, createElement, Component } from 'react';
import TransitionMotion from 'react-motion/lib/TransitionMotion';
import PropTypes from 'prop-types';
import spring from 'react-motion/lib/spring';
import './transition.css';

function ensureSpring(styles) {
  const a = Object.keys(styles).reduce((acc, key) => {
    const value = styles[key];
    acc[key] = typeof value === 'number' ? spring(value, {stiffness: 135, damping: 26}) : value;
    return acc;
  }, {});
  console.log(a);
  return a;
};

const identity = val => val;

class RouteTransition extends Component {
  static defaultProps = {
    wrapperComponent: 'div',
    runOnMount: false,
    mapStyles: identity,
  };

  getDefaultStyles() {
    if (!this.props.runOnMount) {
      return null;
    }

    if (!this.props.children) {
      return [];
    }

    return [
      {
        key: this.props.children.key,
        data: this.props.children,
        style: this.props.atEnter,
      },
    ];
  }

  // there's only ever one route mounted at a time,
  // so just return the current match
  getStyles() {
    if (!this.props.children) {
      return [];
    }

    return [
      {
        key: this.props.children.key,
        data: this.props.children,
        style: ensureSpring(this.props.atActive),
      },
    ];
  }

  willEnter = () => {
    return this.props.atEnter;
  };

  willLeave = () => {
    return ensureSpring(this.props.atLeave);
  };

  renderRoute = config => {
    const props = {
      key: config.key,
    };

    const style = this.props.mapStyles(config.style);
    // if (style.top < 0) {
    //   style.top = -1*style.top ;
    // }
    console.log(style);
    style.top = style.top + "%";
    style.display = style.active > 99 ? "none" : "block";

    return (
      <div>
        <div className="transition" style={style}></div>
        {createElement(this.props.wrapperComponent, props, config.data)}
      </div>
    );
  };

  renderRoutes = interpolatedStyles => {
    return (
      <div className={this.props.className}>
        {interpolatedStyles.map(this.renderRoute)}
      </div>
    );
  };

  render() {
    return (
      <TransitionMotion
        defaultStyles={this.getDefaultStyles()}
        styles={this.getStyles()}
        willEnter={this.willEnter}
        willLeave={this.willLeave}
      >
        {this.renderRoutes}
      </TransitionMotion>
    );
  }
}

export default RouteTransition;
