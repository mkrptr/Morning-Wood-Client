import React from 'react';
import storesContext from '../contexts/store_context';
const useStores = () => React.useContext(storesContext);
export default useStores;
