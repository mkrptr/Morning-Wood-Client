import { observable, action } from 'mobx';
import { useLocalStore } from 'mobx-react';

import ApiService from '../../services/api.service';
import JwtService from '../../services/jwt.service';
import UserStore from './user_store';

export function createAuthStore() {
    return {
        errors: [],
        inProgress: false,
        isAuthenticated: !!JwtService.getToken(),
        async login(login, password) {
            this.inProgress = true;
            this.errors = [];

            try {
                const { user, token } = await ApiService.post('login', {
			user: login,
                    pass: password,
                });
                UserStore.setUser(user);
                JwtService.saveToken(token);
            } catch (e) {
                this.errors.push({ body: 'Incorrect login or password' });
            } finally {
                this.inProgress = false;
            }
        },
    };
}

class AuthStore {
    @observable errors = [];

    @observable inProgress = false;

    @observable isAuthenticated = false;

    @action async login(login, password) {
        this.inProgress = true;
        this.errors = [];

        await new Promise((resolve) => setTimeout(resolve, 5000));
        const success = login === 'admin' && password === '1234';
        if (success) {
            this.errors = [];
            this.isAuthenticated = true;
        } else {
            this.errors.push({ body: 'Incorrect login or password' });
        }
        this.inProgress = false;
        try {
            const { user, token } = await ApiService.post('/login', {
                login,
                password,
            });
            UserStore.setUser(user);
            JwtService.saveToken(token);
        } catch (e) {
            this.errors.push({ body: 'Incorrect login or password' });
        } finally {
            this.inProgress = false;
        }
    }

    @action
    async register(login, password, passwordConfirm) {
        if (password !== passwordConfirm) {
            this.errors.push({ body: 'Password don\'t match' });
        }
        this.inProgress = true;
        try {
            const newUser = await ApiService.post('/register', {
                login,
                password,
                passwordConfirm,
            });
            this.isAuthenticated = true;
        } catch (e) {
            this.errors.push('');
        } finally {
            this.inProgress = false;
        }
    }

    @action
    logout() {
        UserStore.purgeUser();
        JwtService.purgeToken();
        this.isAuthenticated = false;
    }
}

export default AuthStore;
