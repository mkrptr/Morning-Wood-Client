import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './logged_out_view.css';

const LoggedOutView = (props) => {
    const { isAuthenticated } = props;
    if (isAuthenticated) {
        return null;
    }
    return (
        <div className="navbar-wrapper-large">
            <Link
                to="/"
                className="navbar-link navbar-logo"
            >
                MorningWood
            </Link>
            <ul className="navbar-items">
                <li className="navbar-item">
                    <Link
                        className="navbar-link"
                        to="/"
                    >
                        home
                    </Link>
                </li>
                <li className="navbar-item">
                    <Link
                        className="navbar-link"
                        to="/shop"
                    >
                        shop
                    </Link>
                </li>
                <li className="navbar-item">
                    <Link
                        className="navbar-link"
                        to="/features"
                    >
                        features
                    </Link>
                </li>
                <li className="navbar-item">
                    <Link
                        className="navbar-link"
                        to="/contact"
                    >
                        contact
                    </Link>
                </li>
            </ul>
            <ul className="navbar-items">
                <li className="navbar-item">
                    <Link
                        className="navbar-link"
                        to="/login"
                    >
                        login
                    </Link>
                </li>
                <li className="navbar-item">
                    <Link
                        className="navbar-link"
                        to="/signup"
                    >
                        signup
                    </Link>
                </li>
            </ul>
        </div>
    );
};

LoggedOutView.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
};

export default LoggedOutView;
