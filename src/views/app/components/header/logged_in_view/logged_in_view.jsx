/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './logged_in_view.module.css';

const LoggedInView = (props) => {
    const { isAuthenticated } = props;
    if (!isAuthenticated) {
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
                        to="/account"
                    >
                        account
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default LoggedInView;
