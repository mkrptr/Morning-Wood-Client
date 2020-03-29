/* eslint-disable react/prop-types */
import React from 'react';
import { inject, observer } from 'mobx-react';

import styles from './header.module.css';
import LoggedOutView from './logged_out_view/logged_out_view';
import LoggedInView from './logged_in_view/logged_in_view';
import useStores from '../../../../models/hooks/use_stores';

const Header = observer((props) => {
    const { authStore } = useStores();
    return (
        <nav className={styles.navbar}>
            <LoggedOutView  />
            <LoggedInView  />
        </nav>
    );
});

export default Header;
