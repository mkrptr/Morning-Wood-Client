/* eslint-disable quote-props */
/* eslint-disable no-undef */
import { API_URL } from '../config';

const ApiService = {
    async get(resource) {
        return fetch(`${API_URL}/${resource}`);
    },
    async post(resource, data) {
        return fetch(`${API_URL}/${resource}`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
    },
};

export default ApiService;
