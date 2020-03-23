import React, { useState, useEffect } from 'react';
import styles from './filters.module.css';
import FilterButton from '../filter_button/filter_button';

const FilterParameter = Object.freeze({
    none: 0,
    color: 1,
    price: 2,
    maker: 3,
});

const Filters = (props) => {
    const { lots, onUpdate } = props;
    const [filtersState, setFiltersState] = useState({
        parameter: FilterParameter.none,
        ascending: true,
    });

    useEffect(() => {
        const filterLots = (old_lots) => {
            switch (filtersState.parameter) {
                case FilterParameter.none:
                    break;
                case FilterParameter.brand:

            }
        };
    }, [lots]);

    const toggle = (state, parameter) => {
        if (state.parameter === parameter) {
            setFiltersState({
                ...state,
                ascending: !state.ascending,
            });
        }
        setFiltersState({
            parameter,
            ascending: !!state.filterState.ascending,
        });
    };

    return (
        <div className={styles.filterWrapper}>
            <div className={styles.parameterSortBlock}>
                <FilterButton
                    name="Brand"
                    toggle={toggle(filtersState, FilterParameter.brand)}
                />
                <div className={styles.parameterSortButton}>
                    <p className={styles.parameterSortName}>Color</p>
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
                <div className={styles.parameterSortButton}>
                    <p className={styles.parameterSortName}>Maker</p>
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
            </div>
            <div className={styles.parameterSortButton}>
                <p className={styles.parameterSortName}>
                    Sort by:
                </p>
            </div>
        </div>
    );
};
export default Filters;
