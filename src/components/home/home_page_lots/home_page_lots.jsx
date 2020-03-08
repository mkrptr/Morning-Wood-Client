import React, { useState, useEffect } from 'react';

import MainPageLot from './home_page_lot';


const HomePageLots = () => {
    const [lots, setLots] = useState([]);
    useEffect(() => {
        const fetchLotsAjax = async () => {
            setLots([{ id: 1, name: 'wood', price: 1488 }]);
        };
        fetchLotsAjax();
    }, [setLots]);

    const lotsList = lots.map((lot) => (
        <MainPageLot key={lot.id} lot={lot} />
    ));
    return (
        <div className="lots-wrapper">
            {lotsList}
        </div>
    );
};

export default HomePageLots;
