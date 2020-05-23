import AuthStore from './auth_store';
import UserStore from './user_store';

export default class RootStore {
    constructor() {
        this.authStore = new AuthStore(this);
        this.userStore = new UserStore(this);
    }
}
