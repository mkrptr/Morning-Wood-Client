import React from 'react';
import PropTypes from 'prop-types';

import styles from './loading_bar.module.css';

const LoadingBar = (props) => {
    const { inProgress } = props;

    if (!inProgress) {
        return (<div />);
    }
    return (
        <div className={styles.loadingBar}>
            <div />
            <div />
            <div />
        </div>
    );
};

LoadingBar.propTypes = {
    inProgress: PropTypes.bool.isRequired,
};

export default LoadingBar;
