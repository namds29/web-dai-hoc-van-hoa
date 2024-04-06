import axiosInstance from "./axiosClient";
import * as qs from 'qs';

enum METHOD_API {
    GET = "get",
    POST = "post",
    PUT = "put",
    DELETE = "delete"
}
export const apiGet = async (url: string) => {
    const config = {
        method: METHOD_API.GET,
        maxBodyLength: Infinity,
        url: url,
    };
    const res = await axiosInstance.request(config);
    return res
}
export const apiPost = async (url: string, params?: any) => {
    const config = {
        method: METHOD_API.POST,
        maxBodyLength: Infinity,
        url: url,
        data: qs.stringify(params),
    };

    const res = await axiosInstance.request(config);
    return res;
}
export const apiCreate = async (url: string, params?: any) => {
    const config = {
        method: METHOD_API.POST,
        maxBodyLength: Infinity,
        url: url,
        data: qs.stringify(params),
    };

    const res = await axiosInstance.request(config);
    return res;
}
export const apiUpdate = async (url: string, params?: any) => {
    const config = {
        method: METHOD_API.PUT,
        maxBodyLength: Infinity,
        url: url,
        data: qs.stringify(params),
    };

    const res = await axiosInstance.request(config);
    return res;
}
