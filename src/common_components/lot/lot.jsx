import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import styles from './lot.module.css';

const Lot = () => {
    const { id } = useParams();
    const [lot, setLot] = useState({});

    useEffect(() => {
        const fetchLot = async (lotId) => {
            setLot({ id: 1, name: 'Nigga wood', price: 1488 });
        };
        fetchLot(id);
    }, [setLot, id]);

    return (
        <div>
            <div className={styles.lotWrapper}>
                <div className={styles.lotImageWrapper}>
                    <div className={styles.lotImage} />
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
