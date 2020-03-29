/* eslint-disable no-undef */
const TOKEN_NAME = 'mw_token';

const JwtService = () => {
    const getToken = () => window.localStorage.getItem(TOKEN_NAME);
    const saveToken = (token) => window.localStorage.setItem(TOKEN_NAME, token);
    const purgeToken = () => window.localStorage.removeItem(TOKEN_NAME);
};

export default JwtService;
