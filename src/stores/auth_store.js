import { observable, action } from 'mobx';
import ApiService from '../services/api.service';

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
        return success;
        try {
            await ApiService.post('/login', {
                login,
                password,
            });
        } catch (e) {
            this.errors.push({ body: 'Incorrect login or password' });
        } finally {
            this.inProgress = false;
        }
    }
}

export default new AuthStore();
