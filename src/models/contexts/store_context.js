import React from 'react';
import RootStore from '../stores/root_store';

const storesContext = React.createContext(new RootStore());

export default storesContext;
