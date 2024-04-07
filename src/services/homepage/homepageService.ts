import { API_ADMIN } from "../constant";
import { apiGet } from "../utils-service";

const listPostHomepage = async () => {
    const res = await apiGet(API_ADMIN.HOMEPAGE.POST);
    return res
};

const HomepageService = {
    listPostHomepage
};
export default HomepageService;