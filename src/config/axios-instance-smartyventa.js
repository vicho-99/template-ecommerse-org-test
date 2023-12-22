import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: process.env.SMARTY_VENTA_HOST,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + process.env.SMARTY_VENTA_KEY
    },
    withCredentials: true
});

export default axiosInstance;
