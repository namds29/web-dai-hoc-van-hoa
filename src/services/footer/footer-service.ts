import { API_ADMIN } from "../constant";
import { apiGet } from "../utils-service";

const listPostHomepage = async (): Promise<any> => {
    const res = await apiGet(API_ADMIN.FOOTER + '?type=0');
    return res;
};

export default { listPostHomepage }