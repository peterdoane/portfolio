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
        const {delay=0} = this.props;
        setTimeout(this.handleScroll, delay);
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
        const {is_active=true, try_reload=false} = this.props;
        const {animated} =this.state;
        if (is_active && !animated) {
            const element = this.node;
            const top = this.posTop();
            const eleTop = element ? element.getBoundingClientRect().top : 0;
            const elementPositionY = eleTop + top;
            const scrollPositionY = window.scrollY ? window.scrollY : window.pageYOffset;
            const windowHeight = window.innerHeight;
            if (scrollPositionY + windowHeight >= elementPositionY) {
                this.setState({
                  animated: true,
                  is_transitioning: true
                });
            } else {
                try_reload && setTimeout(this.handleScroll, 0);
            }
        }
    }

    render() {
        const {is_transitioning} = this.state;
        const {translateY_initial=4, delay=0} = this.props;
        setTimeout(this.handleScroll, delay);
        const style = {
            transform: is_transitioning ? "translateY(0)" : "translateY(" + translateY_initial + "%)",
            opacity: is_transitioning ? "1" : "0"
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
