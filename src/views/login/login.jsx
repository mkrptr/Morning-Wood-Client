/* eslint-disable react/prop-types */
import React from 'react';
import { observer, useLocalStore } from 'mobx-react';
import { useHistory } from 'react-router-dom';

import { IMAGE_PATH } from '../../config';
import LoginErrors from './components/login_errors/login_errors';
import LoadingBar from './components/loading_bar/loading_bar';
import styles from './login.module.css';
import useStores from '../../models/hooks/use_stores';

const Login = observer(() => {
    const { authStore } = useStores();
    const history = useHistory();
    const state = useLocalStore(() => ({
        login: '',
        password: '',
        async authenticate(event) {
            if (event) {
                event.preventDefault();
            }
            const res = await authStore.login(
                state.login,
                state.password,
            );
            if (res) {
                history.push('/');
            }
        },
        inputChange(event) {
            event.persist();
            state[event.target.name] = event.target.value;
        },
    }));
    return (
        <div className={styles.loginWrapper}>
            <form
                className={styles.loginBlock}
                onSubmit={state.authenticate}
            >
                <h1 className={styles.welcomeText}>Welcome</h1>
                <img
                    className={styles.userIcon}
                    src={`${IMAGE_PATH}/small-log-icon.png`}
                    alt="user"
                />
                <LoginErrors errors={authStore.errors} />
                <LoadingBar inProgress={authStore.inProgress} />
                <div className={styles.loginMainBox}>
                    <div className={styles.fieldWrapper}>
                        <p className={styles.labelText}>Login</p>
                        <input
                            type="text"
                            className={styles.inputField}
                            name="login"
                            placeholder="Login"
                            value={state.login}
                            onChange={state.inputChange}
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
                            onChange={state.inputChange}
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
});

export default Login;
