/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react';

import styles from './logged_out_view.module.css';
import useStores from '../../../../../models/hooks/use_stores';

const LoggedOutView = observer(() => {
    const { authStore } = useStores();

    if (authStore.isAuthenticated) {
        return null;
    }
    return (
        <div className={styles.navbarWrapperLarge}>
            <Link
                to="/"
                className={`${styles.navbarLink} ${styles.navbarLogo}`}
            >
                MorningWood
            </Link>
            <ul className={styles.navbarItems}>
                <li className={styles.navbarItem}>
                    <Link
                        className={styles.navbarLink}
                        to="/"
                    >
                        home
                    </Link>
                </li>
                <li className={styles.navbarItem}>
                    <Link
                        className={styles.navbarLink}
                        to="/catalog"
                    >
                        shop
                    </Link>
                </li>
                <li className={styles.navbarItem}>
                    <Link
                        className={styles.navbarLink}
                        to="/features"
                    >
                        features
                    </Link>
                </li>
                <li className={styles.navbarItem}>
                    <Link
                        className={styles.navbarLink}
                        to="/contact"
                    >
                        contact
                    </Link>
                </li>
            </ul>
            <ul className={styles.navbarItems}>
                <li className={styles.navbarItem}>
                    <Link
                        className={styles.navbarLink}
                        to="/login"
                    >
                        login
                    </Link>
                </li>
                <li className={styles.navbarItem}>
                    <Link
                        className={styles.navbarLink}
                        to="/register"
                    >
                        signup
                    </Link>
                </li>
            </ul>
        </div>
    );
});

export default LoggedOutView;
