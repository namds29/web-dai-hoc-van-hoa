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
        url: url,
    };
    const res = await axiosInstance.request(config);
    return res
}
export const apiPost = async (url: string, params?: any) => {
    const config = {
        method: METHOD_API.POST,
        url: url,
        data: qs.stringify(params),
    };

    const res = await axiosInstance.request(config);
    return res;
}
export const apiCreate = async (url: string, params?: any) => {
    const config = {
        method: METHOD_API.POST,
        url: url,
        data: qs.stringify(params),
    };

    const res = await axiosInstance.request(config);
    return res;
}
export const apiUpdate = async (url: string, params?: any) => {
    const config = {
        method: METHOD_API.PUT,
        url: url,
        data: qs.stringify(params),
    };

    const res = await axiosInstance.request(config);
    return res;
}
