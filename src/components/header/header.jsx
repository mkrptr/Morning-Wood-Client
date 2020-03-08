import React from 'react';
import PropTypes from 'prop-types';

import styles from './header.module.css';
import LoggedOutView from './logged_out_view/logged_out_view';

const Header = (props) => {
    const { isAuthenticated } = props;
    return (
        <nav className={styles.navbar}>
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
