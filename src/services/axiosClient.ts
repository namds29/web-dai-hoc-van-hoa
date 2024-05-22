import axios, { AxiosInstance, AxiosResponse, AxiosError, InternalAxiosRequestConfig } from 'axios';
import { BASE_API_URL } from 'src/utils/constant';
import AuthService from './auth/authServices';

const axiosInstance: AxiosInstance = axios.create({
    baseURL: BASE_API_URL,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
    },
});

axiosInstance.interceptors.request.use((config: InternalAxiosRequestConfig) => {
    const token: string = AuthService.getToken() || null;
    token && (config.headers!.Authorization = `Bearer ${token}`);
    config.maxBodyLength = Infinity
    return config;
}, async (error: AxiosError) => {
    console.log('error: ', error);
    return await Promise.reject(error);
});

axiosInstance.interceptors.response.use((response: AxiosResponse) => {
    return response.data;
}, async (error: AxiosError) => {
    console.log('error: ', error);
    return await Promise.reject(error);
});

export default axiosInstance;