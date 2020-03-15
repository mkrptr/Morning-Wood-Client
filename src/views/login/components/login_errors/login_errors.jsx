/* eslint-disable react/prop-types */
import React from 'react';
import styles from './login_errors.module.css';

function hashCode(s) {
    let h;
    for (let i = 0; i < s.length; i += 1) {
        h = Math.imul(31, h) + s.charCodeAt(i) | 0;
    }

    return h;
}

const LoginErrors = (props) => {
    const { errors } = props;
    const errorList = errors.map((error) => (
        <li
            className={styles.loginError}
            key={hashCode(error.body)}
        >
            {error.body}
        </li>
    ));
    return (
        <ul className={styles.loginErrors}>
            {errorList}
        </ul>
    );
};

export default LoginErrors;
