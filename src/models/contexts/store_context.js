import React from 'react';
import AuthStore from '../stores/auth_store';
import UserStore from '../stores/user_store';
import RootStore from '../stores/root_store';

const storesContext = React.createContext(new RootStore());

export default storesContext;
