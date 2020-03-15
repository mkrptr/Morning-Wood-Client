import React from 'react';

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

export default LoadingBar;
