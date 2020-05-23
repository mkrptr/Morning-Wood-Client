/* eslint-disable react/prop-types */
import React from 'react';
import { observer } from 'mobx-react';

import styles from './header.module.css';
import LoggedOutView from './logged_out_view/logged_out_view';
import LoggedInView from './logged_in_view/logged_in_view';

const Header = observer((props) => {
    return (
        <nav className={styles.navbar}>
            <LoggedOutView />
            <LoggedInView />
        </nav>
    );
});

export default Header;
