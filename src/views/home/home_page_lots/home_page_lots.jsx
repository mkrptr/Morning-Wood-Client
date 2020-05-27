import React, { useState, useEffect } from 'react';

import { API_URL } from '../../../config';
import Lot from '../../../common_components/lot/lot';


const HomePageLots = () => {
    const [lots, setLots] = useState([]);
    useEffect(() => {
        const fetchLots = async () => {
            try {
                // eslint-disable-next-line no-undef
                const lotsResponse = await fetch(`${API_URL}/lots`);
                setLots(await lotsResponse.json());
            } catch (e) {
                console.error('Couldn\'t load lots');
            }
        };
        fetchLots();
    }, [setLots]);

    const lotsList = lots.map((lot) => (
        <Lot key={lot._id} lot={lot} />
    ));
    return (
        <div className="lots-wrapper">
            {lotsList}
        </div>
    );
};

export default HomePageLots;
