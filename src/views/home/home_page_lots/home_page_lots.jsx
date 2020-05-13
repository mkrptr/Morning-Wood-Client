import React, { useState, useEffect } from 'react';

import { API_URL } from '../../config';
import Lot from '../../../common_components/lot/lot';


const HomePageLots = () => {
    const [lots, setLots] = useState([]);
    useEffect(() => {
        const fetchLots = async () => {
            try {
                const lots = await fetch('${API_URL}/lots');
                setLots(await lots.json());
            } catch (e) {
                console.error('Couldn\'t load lots');
            }
        };
        fetchLots();
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
