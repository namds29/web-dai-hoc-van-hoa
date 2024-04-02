import axiosInstance from "./axiosClient"

export const commonGetApi = async (url: string, params?: any) => {
    const res = await axiosInstance.get(url, {
        params: params
    })
    console.log(res)
    return res
}