import React from 'react';
import './footer.css';

const Footer = () => (
    <footer className="footer">
        <ul className="footer-columns">
            <li className="column">
                <h3 className="column-title">Our team</h3>
            </li>
            <li className="column">
                <h3 className="column-title">My account</h3>
                <ul className="rows">
                    <li className="row">Lorem</li>
                    <li className="row">Ipsum</li>
                    <li className="row">Dolor</li>
                    <li className="row">Sit</li>
                </ul>
            </li>
            <li className="column">
                <h3 className="column-title">Services</h3>
                <ul className="rows">
                    <li className="row">Support</li>
                    <li className="row">Customer service</li>
                    <li className="row">Returns</li>
                    <li className="row">Dolor</li>
                </ul>
            </li>
            <li className="column">
                <h3 className="column-title">Contact us</h3>
            </li>
        </ul>
    </footer>
);

export default Footer;
