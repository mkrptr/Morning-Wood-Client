import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './login.css';

const LoginErrors = (props) => {
    const { errors } = props;
    const errorList = errors.map((error) => (
        <li className="login-error">
            {error.name}
        </li>
    ));
    return (
        <ul className="login-errors">
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
        <div className="login-wrapper">
            <form className="login-block" onSubmit={authenticate}>
                <h1 className="welcome-text">Welcome</h1>
                <img
                    className="user-icon"
                    src="/images/small-log-icon.png"
                    alt="user icon"
                />
                <LoginErrors errors={state.errors} />
                <div className="login-main-box">
                    <div className="field-wrapper">
                        <p className="label-text">Login</p>
                        <input
                            type="text"
                            className="input-field"
                            name="login"
                            placeholder="Login"
                            value={state.login}
                            onChange={inputChange}
                        />
                    </div>
                    <div className="field-wrapper">
                        <p className="label-text">Password</p>
                        <input
                            type="password"
                            className="input-field"
                            name="password"
                            placeholder="Password"
                            value={state.password}
                            onChange={inputChange}
                        />
                    </div>
                </div>
                <button
                    type="submit"
                    className="login-submit-button"
                >
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;
