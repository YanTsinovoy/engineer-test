import axios from 'axios';
import { API_URL, API_KEY } from '../config';

const apiService = axios.create({
    baseURL: API_URL
})

apiService.interceptors.request.use((r) => {
    const params = {
        api_key: API_KEY
    }
    r.params = {...r.params, ...params}
    return r;
})

apiService.interceptors.response.use((r) => r.data)

export const getAsteroid = async (id) => apiService.get(id.toString());

export const getInfo = async (p) => apiService.get("browse", {params: {
    page: p,
    api_key: "DEMO_KEY"
}});