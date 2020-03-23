import React from 'react';
import PropTypes from 'prop-types';

import Lot from '../../../../common_components/lot/lot';


const Lots = (props) => {
    const { lots } = props;

    const lotsList = lots.map((lot) => (
        <Lot lot={lot} key={lot.name} />
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
            name: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            description: PropTypes.string,
        }).isRequired,
    ).isRequired,
};

export default Lots;
