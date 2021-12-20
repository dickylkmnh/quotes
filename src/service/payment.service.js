import axios from 'axios';

const baseUrl = 'http://localhost:3000';

export default class PaymentService {
    getPayment() {
        return axios.get(`${baseUrl}/payment`);
    }
}