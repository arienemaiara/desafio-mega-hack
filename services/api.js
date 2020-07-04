import axios from 'axios';

import config from '../constants/config'

const api = axios.create({
    baseURL: config.api_url1
})

export const api2 = axios.create({
    baseURL: config.api_url2
})

export default api;