import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './home_page_lot.css';

const MainPageLot = (props) => {
    const { lot } = props;
    return (
        <div className="lot">
            <div className="lot-wrapper">
                <div
                    className="lot-image"
                    src=""
                    alt="lot_image"
                />
                <Link
                    className="lot-name"
                    to={`/lots/${lot.id}`}
                >
                    { lot.name }
                </Link>
                <div>
                    <div className="lot-price">
                        $
                        {lot.price}
                    </div>
                    <button
                        type="button"
                        className="buy-button"
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
