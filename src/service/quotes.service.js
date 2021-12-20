import axios from 'axios';

const baseUrl = 'http://localhost:3000';

export default class QuotesService {
    /**
     * getQuotes
     * @returns 
     */
    getQuotes() {
        return axios.get(`${baseUrl}/quotes`);
    }

    /**
     * createQuotes
     * @param {*} payload 
     * @returns 
     */
    createQuotes(payload) {
        return axios.post(`${baseUrl}/quotes`, payload);
    }

    /**
     * getQuotesId
     * @param {*} id 
     * @returns 
     */
    getQuotesId(id) {
        return axios.get(`${baseUrl}/quotes/${id}`);
    }

    /**
     * editQuotes
     * @param {*} id 
     * @param {*} payload 
     * @returns 
     */
    editQuotes(id, payload) {
        return axios.put(`${baseUrl}/quotes/${id}`, payload);
    }

    /**
     * deleteQuotes
     * @param {*} id 
     * @returns 
     */
    deleteQuotes(id) {
        return axios.delete(`${baseUrl}/quotes/${id}`);
    }
}