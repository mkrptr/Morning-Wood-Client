import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';

import { API_URL } from '../../config';
import styles from './lot.module.css';

const Lot = () => {
    const { id } = useParams();
    const [lot, setLot] = useState({});

    useEffect(() => {
        const fetchLot = async (lotId) => {
            try {
                const lotRes = await fetch(`${API_URL}/lot/${lotId}`);
                setLot(await lotRes.json());
            } catch (e) {
                console.error('Couldn\'t load the lot')
            }
        };
        fetchLot(id);
    }, [setLot, id]);

    return (
        <div>
            <div className={styles.lotWrapper}>
                <div className={styles.lotImageWrapper}>
                    <img
                        className={styles.lotImage}
                        src={lot.imagePath}
                        alt="lot"
                    />
                </div>
                <div className={styles.lotRightBlock}>
                    <div className={styles.lotName}>
                        <h1>{lot.name}</h1>
                    </div>
                    <div className={styles.lotDescription}>
                        <p>{lot.description}</p>
                    </div>
                    <div className={styles.lotBuyBlock}>
                        <div className={styles.lotPrice}>
                            <h1>
                                $
                                {lot.price}
                            </h1>
                        </div>
                        <div className={styles.lotBuyBlockSpring} />
                        <button
                            className={styles.lotBuyButton}
                            type="button"
                        >
                            Add to cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Lot;
