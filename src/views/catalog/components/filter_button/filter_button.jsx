/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';

import styles from './filter_button.module.css';

const FilterButton = (props) => {
    const { name, toggle } = props;
    return (
        <div
            role="button"
            onClick={toggle}
            className={styles.parameterSortButton}
            tabIndex={0}
        >
            <p className={styles.parameterSortName}>{name}</p>
            <svg
                className={styles.parameterSortArrow}
                role="presentation"
                viewBox="0 0 21 11"
            >
                <polyline
                    fill="none"
                    stroke="currentColor"
                    points="0.5 0.5 10.5 10.5 20.5 0.5"
                    strokeWidth="1.25"
                />
            </svg>
        </div>
    );
};

FilterButton.propTypes = {
    name: PropTypes.string.isRequired,
    toggle: PropTypes.func.isRequired,
};

export default FilterButton;
