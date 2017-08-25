import React, { Component } from 'react';
import './scroll-effect.css';

class ScrollEffect extends Component {

    constructor() {
        super();
        this.state = {
            animated: false,
            is_transitioning: false
        };
        if (window && window.addEventListener) {
            window.addEventListener('scroll', this.handleScroll);
        }
    }

    componentDidMount() {
        this.handleScroll();
    }

    componentWillUnmount() {
        if (window && window.addEventListener) {
            window.removeEventListener('scroll', this.handleScroll);
        }
    }

    posTop() {
        if (typeof window.pageYOffset !== 'undefined') {
            return window.pageYOffset;
        } else if (document.documentElement.scrollTop) {
            return document.documentElement.scrollTop;
        } else if (document.body.scrollTop) {
            return document.body.scrollTop;
        }
        return 0;
    }

    handleScroll = () => {
        const element = this.node;
        const top = this.posTop();
        const elementPositionY = element.getBoundingClientRect().top + top;
        const scrollPositionY = window.scrollY ? window.scrollY : window.pageYOffset;
        const windowHeight = window.innerHeight;
        if (scrollPositionY + windowHeight >= elementPositionY) {
            this.setState({
              animated: true,
              is_transitioning: true
            });
        }
    }

    render() {
        const {is_transitioning} = this.state;
        const style = {
            transform: is_transitioning ? "translateY(0)" : "translateY(4%)",
            opacity: is_transitioning ? "1" : "0",
            ...this.props.style
        };
        return (
            <div
                className="scroll-effect"
                style={style}
                ref={(node) => { this.node = node; }}
            >
                {this.props.children}
            </div>
        );
    }

}

export default ScrollEffect;
