import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import styles from './lot.module.css';

const MainPageLot = (props) => {
    const { lot } = props;
    return (
        <div className={styles.lot}>
            <div className={styles.lotWrapper}>
                <img
                    className={styles.lotImage}
                    src={`${process.env.IMAGE_PATH}/images/plywood_placeholder.jpg`}
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
    lot: PropTypes.shape({
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        description: PropTypes.string,
    }).isRequired,
};
export default MainPageLot;
