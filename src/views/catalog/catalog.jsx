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
            } catch (e) {
                const lotsStub = [
                    {
                        id: 1,
                        name: 'Nigga wood',
                        price: 200,
                        description: '',
                    },
                    {
                        id: 2,
                        name: 'Red wood',
                        price: 1000,
                        description: '',
                    },
                    {
                        id: 3,
                        name: 'Black wood',
                        price: 60,
                        description: '',
                    },
                    {
                        id: 4,
                        name: 'Mystery wood',
                        price: 900,
                        description: '',
                    },
                    {
                        id: 5,
                        name: 'Buff wood',
                        price: 650,
                        description: '',
                    },
                ];
                setLots(lotsStub);
                setLotsLoaded(true);
            }
        };
        if (!lotsLoaded) {
            getLots();
        }
        console.log('catalog: effect');
        console.log(lots);
    }, [setLots, lotsLoaded, setLotsLoaded, lots]);

    const onLotsUpdate = (newLots) => {
        console.log('catalog: update');
        console.log(newLots);
        setLots(newLots);
    };


    return (
        <div className={styles.catalogWrapper}>
            <div className={styles.catalogBanner}>
                <h1 className={styles.bannerTitle}>Our fucking logs</h1>
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
