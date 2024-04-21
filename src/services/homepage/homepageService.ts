import { ICreatePostType, IPostDataType } from "src/interfaces";
import { API_ADMIN } from "../constant";
import {
  apiGet,
  apiUpdate,
  apiCreateFormData,
  apiDelete,
} from "../utils-service";

const listPostHomepage = async (): Promise<any> => {
  const res = await apiGet(API_ADMIN.HOMEPAGE.POST);
  return res;
};

const editPostHomepage = async (
  id: number,
  params: IPostDataType
): Promise<any> => {
  const res = await apiUpdate(API_ADMIN.HOMEPAGE.POST + "/" + id, params);
  return res;
};

const deletePostHomepage = async (
    id: number,
  ): Promise<any> => {
    const res = await apiDelete(API_ADMIN.HOMEPAGE.POST + "/" + id);
    return res;
  };

const createPostHomepage = async (params: ICreatePostType): Promise<any> => {
  console.log(params, "casjnckasjdnjck");

  const formData = new FormData();
  formData.append("thumpnailImage", params.thumpnailImage);
  formData.append("title", params.title);
  formData.append("brief", params.brief);
  formData.append("content", params.content);
  formData.append("typeID", params.typeID.toString());
  formData.append("categoryID", params.categoryID.toString());

  const res = await apiCreateFormData(API_ADMIN.HOMEPAGE.POST, formData);
  return res;
};

const HomepageService = {
  listPostHomepage,
  editPostHomepage,
  createPostHomepage,
  deletePostHomepage
};
export default HomepageService;
