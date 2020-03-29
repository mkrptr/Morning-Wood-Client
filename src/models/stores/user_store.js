/* eslint-disable no-undef */
import { observable, action } from 'mobx';

class UserStore {
    @observable user = null;

    @action
    setUser(user) {
        this.user = user;
    }

    @action
    purgeUser() {
        this.user = null;
    }
}
export default UserStore;
