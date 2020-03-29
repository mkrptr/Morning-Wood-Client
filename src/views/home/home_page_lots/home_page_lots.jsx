import React, { useState, useEffect } from 'react';

import Lot from '../../../common_components/lot/lot';


const HomePageLots = () => {
    const [lots, setLots] = useState([]);
    useEffect(() => {
        const fetchLotsAjax = async () => {
            setLots([{ id: 1, name: 'wood', price: 1488 }]);
        };
        fetchLotsAjax();
    }, [setLots]);

    const lotsList = lots.map((lot) => (
        <Lot key={lot.id} lot={lot} />
    ));
    return (
        <div className="lots-wrapper">
            {lotsList}
        </div>
    );
};

export default HomePageLots;
