import qwest from 'qwest';
import axios from 'axios';

class Api {
    static get host() {
        const { location: { hostname, protocol } } = window;
        return `${protocol}//${hostname}:8085/api`;
    }

    get host() {
        return this.constructor.host;
    }

    async getHistory(page) {
        const { response } = await qwest.get(`${this.host}/history`, {
            page,
            token: localStorage.secret,
        });

        return JSON.parse(response);
    }

    async getBalance() {
        const { response } = await qwest.get(`${this.host}/balance`, { token: localStorage.secret });
        return JSON.parse(response);
    }

    async addItem(data) {
        return axios.post(`${this.host}/history`, data);
    }

    async removeItem(data) {
        return axios.delete(`${this.host}/history`, data);
    }

    async editItem(data) {
        return axios.put(`${this.host}/history`, data);
    }

    async getStats(data) {
        return axios.get(`${this.host}/stats`, data);
    }
}


export default new Api();
