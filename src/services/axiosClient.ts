import axios, { AxiosInstance, AxiosResponse, AxiosError, InternalAxiosRequestConfig } from 'axios';

const axiosInstance: AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
        Accept: 'application/json', 
        'Content-Type': 'application/json'
    }
});

axiosInstance.interceptors.request.use((config: InternalAxiosRequestConfig) => {
    console.log(config)
    // const token: string = AuthService.getToken() || null;
    // token && (config.headers!.Authorization = `Bearer ${token}`);
    return config;
}, async (error: AxiosError) => {
    console.log('error: ', error);
    return await Promise.reject(error);
});

axiosInstance.interceptors.response.use((response: AxiosResponse) => {
    console.log('res', response)
    return response.data;
}, async (error: AxiosError) => {
    console.log('error: ', error);
    return await Promise.reject(error);
});

export default axiosInstance;