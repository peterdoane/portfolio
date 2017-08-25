import React, { Component } from 'react';
import './loader.css';

class Menu extends Component {

    constructor() {
        super();
        this.state = {
            show_loader: true,
            is_transitioning: false,
            loader_tranistion: false
        };
    }

    componentDidMount() {
        setTimeout(this.animateLoaderText, 700);
    }

    animateLoaderText = () => {
        const {loader_tranistion} = this.state;
        this.setState({
            loader_tranistion: !loader_tranistion
        });
        setTimeout(this.hideLoader, 1000);
    }

    hideLoader = () => {
        const {is_transitioning} = this.state;
        this.setState({
            is_transitioning: !is_transitioning
        });
    }

    renderLoaderText = () => {
        const {loader_tranistion} = this.state;
        return (
            <div className="loader-logo-wrapper">
                <span className="loader-logo-bg" style={{transform: loader_tranistion ? "translateY(150%)" : "translateY(-150%)"}}></span>
                <span className="loader-logo">Garvit</span>
            </div>
        );
    }

    render() {
        const {show_loader, is_transitioning} = this.state;
        if (show_loader) {
            return (
                <div className="container loader" style={{transform: is_transitioning ? "translateY(150%)" : "translateY(0)"}}>
                    {this.renderLoaderText()}
                </div>
            );
        }
        return null;
    }
}

export default Menu;
