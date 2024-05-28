import {
  ICreatePostType,
  IEditPostType,
  IEditBannerType,
  ICreateBannerType,
  IEditAddmissionType,
  ICreateAddmissionType,
  IGetAddmissionType,
  IEditAnnouncementType,
  IPositionItem,
} from "src/interfaces";
import { API_ADMIN } from "../constant";
import {
  apiGet,
  apiUpdate,
  apiCreateFormData,
  apiDelete,
  apiGetData,
  apiUpdateFormData,
  apiPatch,
} from "../utils-service";

const listPostHomepage = async (): Promise<any> => {
  const res = await apiGet(API_ADMIN.HOMEPAGE.POST.INDEX);
  return res;
};

const listAnnouncement = async (): Promise<any> => {
  const res = await apiGet(API_ADMIN.HOMEPAGE.ANNOUNCEMENT);
  return res;
};

const listPostHomepageWithCategoryId = async (id: any): Promise<any> => {
  const res = await apiGet(API_ADMIN.HOMEPAGE.POST.WITH_CATEGORY_ID + id);
  return res;
};

const listBannerHomepage = async (): Promise<any> => {
  const res = await apiGet(API_ADMIN.HOMEPAGE.BANNER);
  return res;
};

const getAddmissionByCategoryId = async (
  params: IGetAddmissionType
): Promise<any> => {
  const res = await apiGetData(API_ADMIN.HOMEPAGE.ADDMISSION, params);
  return res;
};

const getPostById = async (id: number): Promise<any> => {
  const res = await apiGet(`${API_ADMIN.HOMEPAGE.POST.INDEX}/${id}`);
  return res;
}

const editPostHomepage = async (
  id: number,
  params: IEditPostType
): Promise<any> => {
  const formData = new FormData();
  formData.append("thumpnailImage", params.thumpnailImage ?? "");
  formData.append("title", params.title ?? "");
  formData.append("brief", params.brief ?? "");
  formData.append("content", params.content ?? "");
  formData.append("isHighlighted", params.isHighlighted?.toString() ?? "");

  const res = await apiUpdateFormData(
    API_ADMIN.HOMEPAGE.POST.INDEX + "/" + id,
    formData
  );
  return res;
};

const editBannerHomepage = async (
  id: number,
  params: IEditBannerType
): Promise<any> => {
  const formData = new FormData();
  formData.append("thumpnailImage", params.thumpnailImage);

  const res = await apiUpdate(API_ADMIN.HOMEPAGE.BANNER + "/" + id, formData);
  return res;
};

const editAnnouncement = async (
  id: number,
  params: IEditAnnouncementType
): Promise<any> => {
  const res = await apiUpdate(API_ADMIN.HOMEPAGE.ANNOUNCEMENT + "/" + id, params);
  return res;
};

const editAddmissionHomepage = async (
  id: number,
  params: IEditAddmissionType
): Promise<any> => {
  const res = await apiUpdate(API_ADMIN.HOMEPAGE.ADDMISSION + "/" + id, params);
  return res;
};
const editPositionBanner = async (
  params: IPositionItem[]
): Promise<any> => {
  const data = { orderings: JSON.stringify(params)} 
  const res = await apiPatch(API_ADMIN.HOMEPAGE.BANNER, data);
  return res;
};

const approvePostHomepage = async (
  id: number,
  params: { isApproved: boolean }
): Promise<any> => {
  const res = await apiUpdate(API_ADMIN.HOMEPAGE.POST.APPROVE + "/" + id, params);
  return res;
};

const deletePostHomepage = async (id: number): Promise<any> => {
  const res = await apiDelete(API_ADMIN.HOMEPAGE.POST.INDEX + "/" + id);
  return res;
};

const deleteBannerHomepage = async (id: number): Promise<any> => {
  const res = await apiDelete(API_ADMIN.HOMEPAGE.BANNER + "/" + id);
  return res;
};

const deleteAnnouncement = async (id: number): Promise<any> => {
  const res = await apiDelete(API_ADMIN.HOMEPAGE.ANNOUNCEMENT + "/" + id);
  return res;
};

const deleteAddmissionHomepage = async (id: number): Promise<any> => {
  const res = await apiDelete(API_ADMIN.HOMEPAGE.ADDMISSION + "/" + id);
  return res;
};

const createPostHomepage = async (params: ICreatePostType): Promise<any> => {
  const formData = new FormData();
  formData.append("thumpnailImage", params.thumpnailImage);
  formData.append("title", params.title);
  formData.append("brief", params.brief);
  formData.append("content", params.content);
  formData.append("typeID", params.typeID.toString());
  formData.append("categoryID", params.categoryID.toString());

  const res = await apiCreateFormData(API_ADMIN.HOMEPAGE.POST.INDEX, formData);
  return res;
};

const createAnnouncement = async (
  params: IEditAnnouncementType
): Promise<any> => {
  const res = await apiCreateFormData(API_ADMIN.HOMEPAGE.ANNOUNCEMENT, params);
  return res;
};

const createBannerHomepage = async (
  params: ICreateBannerType
): Promise<any> => {
  const formData = new FormData();
  formData.append("thumpnailImage", params.thumpnailImage);
  formData.append("name", params.name);
  formData.append("categoryID", params.categoryID.toString());

  const res = await apiCreateFormData(API_ADMIN.HOMEPAGE.BANNER, formData);
  return res;
};

const createAddmissionHomepage = async (
  params: ICreateAddmissionType
): Promise<any> => {
  const formData = new FormData();
  formData.append("title", params.title);
  formData.append("content", params.content);
  // formData.append("mediaFileID", params.mediaFileID);
  // formData.append("urlToExternalMedia", params.urlToExternalMedia ?? "");
  // formData.append("ordering", params.ordering?.toString() ?? "");
  formData.append("categoryID", params.categoryID.toString());

  const res = await apiCreateFormData(API_ADMIN.HOMEPAGE.ADDMISSION, formData);
  return res;
};

const HomepageService = {
  listPostHomepage,
  listPostHomepageWithCategoryId,
  listAnnouncement,
  listBannerHomepage,
  editPostHomepage,
  editBannerHomepage,
  editAddmissionHomepage,
  editAnnouncement,
  createAnnouncement,
  createPostHomepage,
  createBannerHomepage,
  createAddmissionHomepage,
  deletePostHomepage,
  deleteAnnouncement,
  deleteBannerHomepage,
  deleteAddmissionHomepage,
  getPostById,
  getAddmissionByCategoryId,
  approvePostHomepage,
  editPositionBanner
};
export default HomepageService;
