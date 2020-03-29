import React from 'react';
import PropTypes from 'prop-types';
import LotPropType from '../../../../models/prop_types/lot';
import Lot from '../../../../common_components/lot/lot';


const Lots = (props) => {
    const { lots } = props;

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
        LotPropType,
    ).isRequired,
};

export default Lots;
