import React from 'react';
import { Link } from 'react-router-dom';

const LoggedOutView = (props) => {
    if (props.isAuthenticated) {
        return null;
    }
    return (
        <ul className="navbar-items">
            <li className="navbar-items">
                <Link className="navbar-link"
                      to="/"
                >
                    home
                </Link>
            </li>
            <li className="navbar-items">
                <Link className="navbar-link"
                      to="/shop"
                >
                    shop
                </Link>
            </li>
            <li className="navbar-items">
                <Link className="navbar-link"
                      to="/features"
                >
                    features
                </Link>
            </li>
            <li className="navbar-items">
                <Link className="navbar-link"
                      to="/contact"
                >
                    contact
                </Link>
            </li>
            <ul className="navbar-items">
                <li className="navbar-item">
                    <Link className="navbar-link"
                          to="/login"
                    >
                        login
                    </Link>
                </li>
                <li className="navbar-item">
                    <Link className="navbar-link"
                          to="/signup"
                    >
                        signup
                    </Link>
                </li>
            </ul>
        </ul>
    );
};

class Header extends React.Component {
    render() {
        return (
            <nav className="navbar">
                <div className="wrapper-large">
                    <Link to="/" 
                          className="navbar-link navbar-logo"
                    >
                    MorningWood
                    </Link>
                    <LoggedOutView isAuthenticated="{this.props.isAuthenticated"></LoggedOutView>
                </div>
            </nav>
        );
        
    }
}

export default Header;