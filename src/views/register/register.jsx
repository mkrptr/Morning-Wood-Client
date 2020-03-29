/* eslint-disable react/prop-types */
import React from 'react';
import { inject, observer } from 'mobx-react';
import { observable, extendObservable } from 'mobx';
import { withRouter } from 'react-router-dom';

import styles from './register.module.css';

@inject('authStore')
@withRouter
@observer
class Register extends React.PureComponent {
    @observable userData = {
        login: '',
        password: '',
        passwordConfirm: '',
        email: '',
    };

    constructor() {
        super();
        extendObservable(this, {
            login: '',
            password: '',
            passwordConfirm: '',
            email: '',
        });
        this.inputChange = this.inputChange.bind(this);
    }

    inputChange(event) {
        event.persist();
        this.userData = {
            ...this.userData,
            [event.target.name]: event.target.value,
        };
    }

    async register(event) {
        if (event) {
            event.preventDefault();
        }
        const { authStore, history } = this.props;
        const res = await authStore.register(this.userData);
        if (res) {
            history.replace('/login');
        }
    }

    render() {
        return (
            <div className={styles.registerWrapper}>
                <form
                    className={styles.registerBlock}
                    onSubmit={this.register}
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
                                value={this.userData.login}
                                onChange={this.inputChange}
                            />
                        </div>
                        <div className={styles.fieldWrapper}>
                            <p className={styles.labelText}>Password</p>
                            <input
                                type="password"
                                className={styles.inputField}
                                name="password"
                                placeholder="Password"
                                value={this.userData.password}
                                onChange={this.inputChange}
                            />
                        </div>
                        <div className={styles.fieldWrapper}>
                            <p className={styles.labelText}>Password</p>
                            <input
                                type="password"
                                className={styles.inputField}
                                name="passwordConfirm"
                                placeholder="Confirm password"
                                value={this.userData.passwordConfirm}
                                onChange={this.inputChange}
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
    }
}

export default Register;
