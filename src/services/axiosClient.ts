import axios, { AxiosInstance, AxiosResponse, AxiosError, InternalAxiosRequestConfig } from 'axios';
import AuthService from './auth/authServices';

const axiosClient: AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
        Accept: 'application/json', 
        'Content-Type': 'application/json'
    }
});

axiosClient.interceptors.request.use((config: InternalAxiosRequestConfig) => {
    const token: string = AuthService.getToken() || null;
    token && (config.headers!.Authorization = `Bearer ${token}`);
    return config;
}, async (error: AxiosError) => {
    console.log('error: ', error);
    return await Promise.reject(error);
});

axiosClient.interceptors.response.use((response: AxiosResponse) => {
    return response.data;
}, async (error: AxiosError) => {
    console.log('error: ', error);
    return await Promise.reject(error);
});

export default axiosClient;