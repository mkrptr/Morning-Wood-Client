/* eslint-disable react/prop-types */
import React from 'react';
import { observer, useLocalStore } from 'mobx-react';
import { useHistory } from 'react-router-dom';

import styles from './signup.module.css';
import useStores from '../../models/hooks/use_stores';

const Signup = observer(() => {
    const { authStore } = useStores();
    const history = useHistory();
    const state = useLocalStore(() => ({
        login: '',
        password: '',
        passwordConfirm: '',
        email: '',
        inputChange(event) {
            event.persist();
            state[event.target.name] = event.target.value;
        },
        async register(event) {
            if (event) {
                event.preventDefault();
            }
            await authStore.register({
                login: state.login,
                password: state.password,
                passwordConfirm: state.passwordConfirm,
            });
            if (authStore.errors.length === 0) {
                history.push('/login');
            }
        },
    }));
    return (
        <div className={styles.registerWrapper}>
            <form
                className={styles.registerBlock}
                onSubmit={state.register}
            >
                <h1 className={styles.createAccountText}>Create account</h1>
                <div className={styles.registerMainBox}>
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
                    <div className={styles.fieldWrapper}>
                        <p className={styles.labelText}>Password</p>
                        <input
                            type="password"
                            className={styles.inputField}
                            name="passwordConfirm"
                            placeholder="Confirm password"
                            value={state.passwordConfirm}
                            onChange={state.inputChange}
                        />
                    </div>
                </div>
                <button
                    type="submit"
                    className={styles.registerSubmitButton}
                >
                    Register
                </button>
            </form>
        </div>
    );
});

export default Signup;
