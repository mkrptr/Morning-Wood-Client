/* eslint-disable react/prop-types */
import React from 'react';
import { inject, observer } from 'mobx-react';
import { observable, extendObservable } from 'mobx';
import { withRouter } from 'react-router-dom';

import LoginErrors from './components/login_errors/login_errors';
import LoadingBar from './components/loading_bar/loading_bar';
import styles from './login.module.css';


@inject('authStore')
@withRouter
@observer
class Login extends React.Component {
    @observable credentials = {
        login: '',
        password: '',
    };

    constructor(props) {
        super(props);
        extendObservable(this, {
            login: '',
            password: '',
        });
        this.authenticate = this.authenticate.bind(this);
        this.inputChange = this.inputChange.bind(this);
    }

    async authenticate(event) {
        if (event) {
            event.preventDefault();
        }
        const { authStore, history } = this.props;
        const res = await authStore.login(
            this.credentials.login,
            this.credentials.password,
        );
        if (res) {
            history.replace('/');
        }
    }

    inputChange(event) {
        event.persist();
        this.credentials = {
            [event.target.name]: event.target.value,
            ...this.credentials,
        };
    }

    render() {
        const { authStore } = this.props;
        const { errors, inProgress } = authStore;

        return (
            <div className={styles.loginWrapper}>
                <form
                    className={styles.loginBlock}
                    onSubmit={this.authenticate}
                >
                    <h1 className={styles.welcomeText}>Welcome</h1>
                    <img
                        className={styles.userIcon}
                        src={`${process.env.IMAGE_PATH}/images/small-log-icon.png`}
                        alt="user"
                    />
                    <LoginErrors errors={errors} />
                    <LoadingBar inProgress={inProgress} />
                    <div className={styles.loginMainBox}>
                        <div className={styles.fieldWrapper}>
                            <p className={styles.labelText}>Login</p>
                            <input
                                type="text"
                                className={styles.inputField}
                                name="login"
                                placeholder="Login"
                                value={this.credentials.login}
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
                                value={this.credentials.password}
                                onChange={this.inputChange}
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
    }
}


export default Login;
