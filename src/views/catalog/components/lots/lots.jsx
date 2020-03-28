import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import Lot from '../../../../common_components/lot/lot';


const Lots = (props) => {
    const { lots } = props;
    console.log("lots");
    console.log(lots);
    useEffect(() => {
        console.log('lots rerender');
    }, [lots]);
    const lotsList = lots.map((lot) => (
        <Lot lot={lot} key={lot.id} />
    ));

    return (
        <div>
            {lotsList}
        </div>
    );
};

Lots.propTypes = {
    lots: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            description: PropTypes.string,
        }).isRequired,
    ).isRequired,
};

export default Lots;
