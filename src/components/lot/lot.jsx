import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import './lot.css';

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
            <div styleName="lot-wrapper">
                <div styleName="lot-image-wrapper">
                    <div styleName="lot-image" />
                </div>
                <div styleName="lot-right-block">
                    <div styleName="lot-name">
                        <h1>{lot.name}</h1>
                    </div>
                    <div styleName="lot-description">
                        <p>{lot.description}</p>
                    </div>
                    <div styleName="lot-buy-block">
                        <div styleName="lot-price">
                            <h1>
                                $
                                {lot.price}
                            </h1>
                        </div>
                        <div styleName="lot-buy-block-spring" />
                        <button
                            styleName="lot-buy-button"
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
