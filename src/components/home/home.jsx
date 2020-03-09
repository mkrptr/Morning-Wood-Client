/* eslint-disable react/no-unescaped-entities */
import React from 'react';

import styles from './home.module.css';
import HomePageLots from './home_page_lots/home_page_lots';

const Home = () => (
    <div>
        <div className={styles.backgroundContainer}>
            <div className={styles.slimContainer}>
                <div className={styles.present}>
                    <p className={styles.welcome}>Welcome to Morning Wood</p>
                    <h1 className={styles.logs}>
                        Fucking logs
                    </h1>
                    <p>You don't even need them, nigga</p>
                    <button
                        type="button"
                        className={styles.shopButton}
                    >
                        shop now
                    </button>
                </div>
            </div>
        </div>
        <div className={styles.featuredWrapper}>
            <h1 className={styles.featuredText}>
                Our featured products
            </h1>
            <HomePageLots />
        </div>
    </div>
);

export default Home;
