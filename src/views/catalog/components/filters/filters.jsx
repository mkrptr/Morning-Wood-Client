import React, { useState } from 'react';
import PropTypes from 'prop-types';

import styles from './filters.module.css';

const FilterParameter = Object.freeze({
    PRICE_ASC: {
        alias: 'price_asc',
        humanReadable: 'price ascending',
    },
    PRICE_DESC: {
        alias: 'price_desc',
        humanReadable: 'price descending',
    },
    NAME: {
        alias: 'name',
        humanReadable: 'name',
    },
});

const Filters = (props) => {
    const { lots, setLots } = props;
    const [filtersState, setFiltersState] = useState({
        parameter: FilterParameter.PRICE_ASC,
    });

    const filterLots = (oldLots, parameter) => {
        switch (parameter.alias) {
        case FilterParameter.PRICE_ASC.alias:
            return oldLots.sort((a, b) => (
                a.price > b.price
            ));
        case FilterParameter.PRICE_DESC.alias:
            return oldLots.sort((a, b) => (
                a.price < b.price
            ));
        case FilterParameter.NAME.alias:
            return oldLots.sort((a, b) => (
                a.name > b.name
            ));
        default:
            console.error('invalid parameter');
            return [];
        }
    };

    const toggle = (event) => {
        const parameter = Object.entries(FilterParameter)
            .filter((parameterEntry) => parameterEntry[1].alias === event.target.value)
            .map((parameterEntry) => parameterEntry[0])[0];
        if (typeof parameter === 'undefined') {
            console.error('Filters/toggle: invalid parameter value');
            return;
        }
        setFiltersState({
            parameter: FilterParameter[parameter],
        });
        setLots(filterLots([...lots], FilterParameter[parameter]));
    };
    const options = Object.entries(FilterParameter)
        .map((entry) => (
            <option
                key={entry[0]}
                value={entry[1].alias}
            >
                {entry[1].humanReadable}
            </option>
        ));
    return (
        <div className={styles.filterWrapper}>
            <div className={styles.parameterSortButton}>
                <p className={styles.parameterSortName}>
                    Sort by:
                </p>
                <select
                    className={styles.parameterSortSelect}
                    value={filtersState.parameter.alias}
                    onChange={toggle}
                >
                    {options}
                </select>
            </div>
        </div>
    );
};

Filters.propTypes = {
    lots: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            description: PropTypes.string,
        }).isRequired,
    ).isRequired,
    setLots: PropTypes.func.isRequired,
};

export default Filters;
