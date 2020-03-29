import React from 'react';
import AuthStore from '../stores/auth_store';
import UserStore from '../stores/user_store';

const storesContext = React.createContext({
    authStore: new AuthStore(),
    userStore: new UserStore(),
});

export default storesContext;
