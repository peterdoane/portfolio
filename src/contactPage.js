import React, {Component} from 'react';
import ScrollEffect from './scroll-effect';

class ContactPage extends Component {

    renderContacts() {
        const {loader_loaded=false} = this.props;
        return (
            <section className="container contacts">
                <ScrollEffect is_active={loader_loaded} delay={100} try_reload={true}>
                    <div className="innerColumn">
                        <ul className="contactTypeList">
                            <li className="contactType">
                                <h2>Visit Us</h2>
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
                                <h2>Stalk Us</h2>
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
                </ScrollEffect>
            </section>
        );
    }

    renderContactHeader() {
        const {loader_loaded=false} = this.props;
        return (
            <section className="container splash interior">
                <ScrollEffect is_active={loader_loaded} translateY_initial={-4} delay={100} try_reload={true}>
                    <div className="innerColumn">
                        <h1 className="splashText">
                            Give us a call or send us an email.<br/>peterdoane@gmail.com
                        </h1>
                    </div>
                </ScrollEffect>
            </section>
        );
    }

    render() {
        return (
            <div>
                {this.renderContactHeader()}
                {this.renderContacts()}
            </div>
        );
    }
}
export default ContactPage;
