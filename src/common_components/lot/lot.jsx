import React from 'react';
import { Link } from 'react-router-dom';

import IMAGE_PATH from '../../config';
import Lot from '../../models/prop_types/lot';
import styles from './lot.module.css';

const MainPageLot = (props) => {
    const { lot } = props;
    return (
        <div className={styles.lot}>
            <div className={styles.lotWrapper}>
                <img
                    className={styles.lotImage}
                    src={`${IMAGE_PATH}/${lot.image_path}`}
                    alt="lot"
                />
                <Link
                    className={styles.lotName}
                    to={`/lots/${lot.id}`}
                >
                    { lot.name }
                </Link>
                <div>
                    <div className={styles.lotPrice}>
                        $
                        {lot.price}
                    </div>
                </div>
            </div>
        </div>
    );
};

MainPageLot.propTypes = {
    lot: Lot.isRequired,
};
export default MainPageLot;
