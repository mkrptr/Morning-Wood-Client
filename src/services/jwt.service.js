/* eslint-disable no-undef */
const TOKEN_NAME = 'mw_token';

const JwtService = {
    getToken () {
        return window.localStorage.getItem(TOKEN_NAME);
    },
    saveToken(token) {
        window.localStorage.setItem(TOKEN_NAME, token);
    },
    purgeToken() {
        window.localStorage.removeItem(TOKEN_NAME);
    }
};

export default JwtService;
