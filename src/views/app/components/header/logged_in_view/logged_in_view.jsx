/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

import styles from './logged_in_view.module.css';

const LoggedInView = (props) => {
    const { authStore } = props;
    if (!authStore.isAuthenticated) {
        return null;
    }

    const logout = async () => {
        await authStore.logout();
    };

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
                        to="/account"
                    >
                        account
                    </Link>
                </li>
                <li className={styles.navbarItem}>
                    <button
                        type="button"
                        className={styles.navbarLink}
                        onClick={logout}
                    >
                        logout
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default inject('authStore')(observer(LoggedInView));
