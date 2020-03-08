import React from 'react';
import PropTypes from 'prop-types';

import './header.css';
import LoggedOutView from './logged_out_view/logged_out_view';

const Header = (props) => {
    const { isAuthenticated } = props;
    return (
        <nav className="navbar">
            <LoggedOutView
                isAuthenticated={isAuthenticated}
            />
        </nav>
    );
};

Header.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
};

export default Header;
