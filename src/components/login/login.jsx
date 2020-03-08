import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './login.module.css';

const LoginErrors = (props) => {
    const { errors } = props;
    const errorList = errors.map((error) => (
        <li className={styles.loginError}>
            {error.name}
        </li>
    ));
    return (
        <ul className={styles.loginErrors}>
            {errorList}
        </ul>
    );
};

LoginErrors.propTypes = {
    errors: PropTypes.arrayOf(
        PropTypes.exact({
            name: PropTypes.string.isRequired,
        }),
    ).isRequired,
};

const Login = () => {
    const [state, setCredentials] = useState(
        {
            login: '',
            password: '',
            errors: [],
        },
    );

    const authenticate = (event) => {
        if (event) {
            event.preventDefault();
        }
    };

    const inputChange = (event) => {
        event.persist();
        setCredentials((newCredentials) => ({
            ...newCredentials,
            [event.target.name]: event.target.value,
        }));
    };
    return (
        <div className={styles.loginWrapper}>
            <form
                className={styles.loginBlock}
                onSubmit={authenticate}
            >
                <h1 className={styles.welcomeText}>Welcome</h1>
                <img
                    className={styles.userIcon}
                    src="/images/small-log-icon.png"
                    alt="user icon"
                />
                <LoginErrors errors={state.errors} />
                <div className={styles.loginMainBox}>
                    <div className={styles.fieldWrapper}>
                        <p className={styles.labelText}>Login</p>
                        <input
                            type="text"
                            className={styles.inputField}
                            name="login"
                            placeholder="Login"
                            value={state.login}
                            onChange={inputChange}
                        />
                    </div>
                    <div className={styles.fieldWrapper}>
                        <p className={styles.labelText}>Password</p>
                        <input
                            type="password"
                            className={styles.inputField}
                            name="password"
                            placeholder="Password"
                            value={state.password}
                            onChange={inputChange}
                        />
                    </div>
                </div>
                <button
                    type="submit"
                    className={styles.loginSubmitButton}
                >
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;
