/* eslint-disable no-undef */
import { API_URL } from '../config';

const ApiService = {
    async get(resource) {
        const rawData = await fetch(`${API_URL}/${resource}`);
        return rawData.json();
    },
    async post(resource, data) {
        await fetch(`${API_URL}/${resource}`, {
            method: 'POST',
            body: JSON.stringify(data),
        });
    },
};

export default ApiService;
