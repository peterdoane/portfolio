
 import React, { Component } from 'react';
 import './loader.css';

 class Loader extends Component {
     constructor() {
       super();
       this.state = {
         show_loader: true,
         is_transitioning: false
       }

     }

     componentDidMount() {
       setTimeout(this.hideLoader, 1000);
     }

     hideLoader = () => {
       this.setState({
            show_loader: true,
            is_transitioning: true
        });
        setTimeout(function() {
          this.setState({
              show_loader: false,
              is_transitioning: false
          });
       }.bind(this), 200);
     }

    render() {
      const {show_loader=false, is_transitioning=false} = this.state;

      if (show_loader && is_transitioning) {
            return (
               <div>
                  <div className="container loader transition">

                  </div>
                  <button  className="loaderButton"> Loading </button>
                  </div>
              );
       } else if (show_loader) {
          return (
            <div>
              <div className="container loader">
              </div>
              <button  className="loaderButton"> Loading </button>
              </div>
          );
      }
      return null;

     }
  }

export default Loader
