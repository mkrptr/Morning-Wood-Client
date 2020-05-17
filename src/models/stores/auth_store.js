import { observable, action } from 'mobx';

import ApiService from '../../services/api.service';
import JwtService from '../../services/jwt.service';

class AuthStore {
    @observable errors = [];

    @observable inProgress = false;

    @observable isAuthenticated = false;

    constructor(rootStore) {
        this.rootStore = rootStore;
    }

    @action
    async login(login, password) {
        this.inProgress = true;
        this.errors = [];

        try {
            const response = await ApiService.post('login', {
                user: login,
                pass: password,
            });
            const data = await response.json();
            console.log(data);
            this.userStore.setUser(data.user);
            JwtService.saveToken(data.user.token);
        } catch (e) {
            this.errors.push({ body: 'Incorrect login or password' });
        } finally {
            this.inProgress = false;
        }
    }

    @action
    async register(login, password, passwordConfirm) {
        if (password !== passwordConfirm) {
            this.errors.push({ body: 'Passwords don\'t match' });
        }
        this.inProgress = true;
        try {
            const response = await ApiService.post('register', {
                user: login,
                pass: password,
            });
            const data = await response.json();
	    console.log(data);
            this.isAuthenticated = true;
        } catch (e) {
            this.errors.push('Couldn\'t register');
        } finally {
            this.inProgress = false;
        }
    }

    @action
    logout() {
        this.rootStore.userStore.purgeUser();
        JwtService.purgeToken();
        this.isAuthenticated = false;
    }
}

export default AuthStore;
