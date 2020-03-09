import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import styles from './home_page_lot.module.css';

const MainPageLot = (props) => {
    const { lot } = props;
    return (
        <div className={styles.lot}>
            <div className={styles.lotWrapper}>
                <div
                    className={styles.lotImage}
                    src=""
                    alt="lot image"
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
                    <button
                        type="button"
                        className={styles.buyButton}
                    >
                        buy
                    </button>
                </div>
            </div>
        </div>
    );
};

MainPageLot.propTypes = {
    lot: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        description: PropTypes.string,
    }).isRequired,
};
export default MainPageLot;
