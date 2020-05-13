/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react';

import { API_URL } from '../../config';
import styles from './catalog.module.css';
import Filters from './components/filters/filters';
import Lots from './components/lots/lots';

const Catalog = () => {
    const [lots, setLots] = useState([]);
    const [lotsLoaded, setLotsLoaded] = useState(false);

    useEffect(() => {
        const getLots = async () => {
            try {
                const lotsRes = await fetch(`${API_URL}/lots`);
                setLots(await lotsRes.json());
                setLotsLoaded(true);
            } catch (e) {
                console.error('Couldn\'t load lots');
            }
        };
        if (!lotsLoaded) {
            getLots();
        }
    }, [setLots, lotsLoaded, setLotsLoaded, lots]);

    const onLotsUpdate = (newLots) => {
        setLots(newLots);
    };


    return (
        <div className={styles.catalogWrapper}>
            <div className={styles.catalogBanner}>
                <h1 className={styles.bannerTitle}>Our beautiful logs</h1>
            </div>
            <div className={styles.catalogBody}>
                <div className={styles.filter}>
                    <Filters lots={lots} setLots={onLotsUpdate} />
                </div>
                <div className={styles.lots}>
                    <Lots lots={lots} />
                </div>
            </div>

        </div>
    );
};

export default Catalog;
