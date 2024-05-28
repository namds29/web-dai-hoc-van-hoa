import { message } from "antd";
import { useEffect, useState } from "react";
import ListData from "src/components/list-data";
import EditModal from "src/components/evc-modal";
import {
  LIST_TYPE,
  MODAL_TYPE,
  IDropdownItemType,
  IPostDataType,
  ICreatePostType,
  IEditType,
  IEditPostType,
  IEditBannerType,
  ICreateBannerType,
  ITEM_HOMEPAGE,
  ITabsType,
  IEditAnnouncementType,
} from "src/interfaces";
import HomepageService from "src/services/homepage/homepageService";
import TabsItem from "src/components/Tabs/TabsItem";
import ModalSwapPosition from "src/components/modal-swap-position";

type DataType = { id: number; title: string; content: string };

const AdminHomePage = () => {
  const [dropdownValue, setDropdownValue] = useState<IDropdownItemType>({
    label: "Section",
    key: "",
    listType: 1,
  });

  const [editValue, setEditValue] = useState<DataType>({
    id: 0,
    title: "",
    content: "",
  });

  const [openModal, setOpenModal] = useState(false);
  const [modalType, setModalType] = useState("");
  const [editTypeValue, setEditTypeValue] = useState<IEditType>();
  const [openSwapModal, setOpenSwapModal] = useState(false);
  const [data, setData] = useState<IPostDataType[]>([]);
  const [bannerList, setBannerList] = useState<IPostDataType[]>([]);
  const [announcementData, setAnnouncementData] = useState<any[]>([]);

  const getPostList = async (id: any) => {
    try {
      const res = await HomepageService.listPostHomepageWithCategoryId(id);
      if (res?.data) setData(res.data);
    } catch (error: any) {
      if (error) {
        console.log(error);
      }
    }
  };

  const getBannerList = async () => {
    try {
      const res = await HomepageService.listBannerHomepage();
      if (res?.data) {
        setData(res?.data);
        const bannerList = res?.data.filter(
          (item: any) => item.categoryID === ITEM_HOMEPAGE.BANNER_IMG
        )
        console.log(bannerList)
        setBannerList(bannerList)
      }
    } catch (error: any) {
      if (error) {
        console.log(error);
      }
    }
  };

  const getAnnouncement = async () => {
    try {
      const res = await HomepageService.listAnnouncement();
      if (res?.data) setAnnouncementData(res?.data);
    } catch (error: any) {
      if (error) {
        console.log(error);
      }
    }
  };
  useEffect(() => {
    if (
      editTypeValue?.type === MODAL_TYPE.EDIT ||
      editTypeValue?.type === MODAL_TYPE.VIEW
    ) {
      setOpenModal(true);
      setModalType(editTypeValue?.type);

      let choosenValue;
      if (dropdownValue.listType === LIST_TYPE.TITLE) {
        choosenValue = announcementData.find(
          (item) => item.id === editTypeValue.id
        );
      } else {
        choosenValue = data.find((item) => item.id === editTypeValue.id);
      }
      if (choosenValue) {
        setEditValue(choosenValue);
      }
    }
    if (editTypeValue?.type === MODAL_TYPE.CREATE) {
      setOpenModal(true);
      setModalType(MODAL_TYPE.CREATE);
    }
    if (editTypeValue?.type === "delete") {
      handleDeleteDataItem(editTypeValue.id ?? 0);
    }

    if (editTypeValue?.type === "approve") {
      handleApproveDataItem(editTypeValue.id ?? 0, { isApproved: false });
    }
  }, [editTypeValue]);

  useEffect(() => {
    getList(dropdownValue);
  }, [dropdownValue]);

  const handleEditType = ({ id, type }: IEditType) => {
    if (type === 'swap') {
      setOpenSwapModal(true)
    }
    setEditTypeValue({ id, type });
  };

  const getList = (value: IDropdownItemType) => {
    if (value.listType === LIST_TYPE.IMAGE) {
      getBannerList();
    }
    if (
      value.listType !== LIST_TYPE.IMAGE &&
      value.listType !== LIST_TYPE.TITLE
    ) {
      getPostList(value.key);
    }
    if (value.listType === LIST_TYPE.TITLE) {
      getAnnouncement();
    }
  };

  const handleDeleteDataItem = async (id: number) => {
    try {
      let res;
      if (dropdownValue.listType === LIST_TYPE.IMAGE) {
        res = await HomepageService.deleteBannerHomepage(id);
      }
      if (
        dropdownValue.listType !== LIST_TYPE.IMAGE &&
        dropdownValue.listType !== LIST_TYPE.TITLE
      ) {
        res = await HomepageService.deletePostHomepage(id);
      }
      if (dropdownValue.listType === LIST_TYPE.TITLE) {
        res = await HomepageService.deleteAnnouncement(id);
      }

      if (res.message == "success") {
        message.success(`Delete successfully.`);
        getList(dropdownValue);
      }
    } catch (error: any) {
      if (error) {
        console.log(error);
      }
    }
  };

  const handleApproveDataItem = async (
    id: number,
    data: { isApproved: boolean }
  ) => {
    try {
      const res = await HomepageService.approvePostHomepage(id, data);
      if (res?.message === "success") {
        message.success(`Approve post successfully.`);
        getPostList(dropdownValue.key);
      }
    } catch (error: any) {
      if (error) {
        console.log(error);
      }
    }
  };

  const handleCancel = () => {
    setOpenModal(false);
    setOpenSwapModal(false)
  };
  const handleSaveSwapPosition = () => {
    getBannerList();
  }
  const handleOk = (value: {
    title?: string;
    content?: string;
    imgFile: File;
  }) => {
    if (editTypeValue?.type === MODAL_TYPE.CREATE) {
      const newObj: ICreatePostType = {
        title: value.title ?? "",
        content: value.content ?? "",
        thumpnailImage: value.imgFile,
        brief: "",
        typeID: 0,
        categoryID: dropdownValue.key,
      };

      const newBanner: ICreateBannerType = {
        thumpnailImage: value.imgFile,
        name: value?.imgFile?.name ?? "",
        categoryID: dropdownValue.key,
      };

      const newAnnouncement: IEditAnnouncementType = {
        title: value.title ?? "",
        postID: 0,
      };

      if (newObj && dropdownValue.listType == LIST_TYPE.IMAGE_TITLE_CONTENT) {
        createPost(newObj);
      }

      if (newBanner && dropdownValue.listType == LIST_TYPE.IMAGE) {
        createBanner(newBanner);
      }

      if (newBanner && dropdownValue.listType == LIST_TYPE.TITLE) {
        createAnnouncement(newAnnouncement);
      }

      setOpenModal(false);
    }
    if (editTypeValue?.type === MODAL_TYPE.EDIT) {
      const dataById: IPostDataType | undefined =
        data.find((item) => editValue.id && item.id === editValue.id) ??
        undefined;

      if (dataById) {
        const newDataItem: IEditPostType = {
          brief: dataById.brief,
          thumpnailImage: value.imgFile,
          title: value.title ?? "",
          content: value.content ?? "",
        };

        const newBannerData: IEditBannerType = {
          thumpnailImage: value.imgFile,
        };

        const newAnnouncement: IEditAnnouncementType = {
          title: value.title ?? "",
          postID: 0,
        };

        if (newDataItem && dropdownValue.listType == LIST_TYPE.IMAGE_TITLE_CONTENT) {
          editPost(editValue.id, newDataItem);
        }

        if (newBannerData && dropdownValue.listType == LIST_TYPE.IMAGE) {
          editBanner(editValue.id, newBannerData);
        }

        if (newAnnouncement && dropdownValue.listType == LIST_TYPE.TITLE) {
          editAnnouncement(editValue.id, newAnnouncement);
        }
      }
      setOpenModal(false);
    }
  };

  const createBanner = async (data: ICreateBannerType) => {
    try {
      const res = await HomepageService.createBannerHomepage(data);
      if (res.message == "success") {
        message.success(`Create banner successfully.`);
        getBannerList();
      }
    } catch (error: any) {
      if (error) {
        console.log(error);
      }
    }
  };

  const createPost = async (data: ICreatePostType) => {
    try {
      const res = await HomepageService.createPostHomepage(data);
      if (res.message == "success") {
        message.success(`Create post successfully.`);
        getPostList(dropdownValue.key);
      }
    } catch (error: any) {
      if (error) {
        console.log(error);
      }
    }
  };

  const createAnnouncement = async (data: IEditAnnouncementType) => {
    try {
      const res = await HomepageService.createAnnouncement(data);
      if (res.message == "success") {
        message.success(`Create announcement successfully.`);
        getAnnouncement();
      }
    } catch (error: any) {
      if (error) {
        console.log(error);
      }
    }
  };

  const editPost = async (id: number, data: IEditPostType) => {
    try {
      const res = await HomepageService.editPostHomepage(id, data);
      if (res.message == "success") {
        message.success(`Edit post successfully.`);
        getPostList(dropdownValue.key);
      }
    } catch (error: any) {
      if (error) {
        console.log(error);
      }
    }
  };

  const editAnnouncement = async (id: number, data: IEditAnnouncementType) => {
    try {
      const res = await HomepageService.editAnnouncement(id, data);
      if (res.message == "success") {
        message.success(`Edit announcement successfully.`);
        getAnnouncement();
      }
    } catch (error: any) {
      if (error) {
        console.log(error);
      }
    }
  };

  const editBanner = async (id: number, data: IEditBannerType) => {
    try {
      const res = await HomepageService.editBannerHomepage(id, data);
      if (res.message == "success") {
        message.success(`Create banner successfully.`);
        getBannerList();
      }
    } catch (error: any) {
      if (error) {
        console.log(error);
      }
    }
  };

  const tabsItem: ITabsType[] = [
    {
      label: "Banner image",
      key: ITEM_HOMEPAGE.BANNER_IMG,
      listType: LIST_TYPE.IMAGE,
      children: (
        <ListData
          section={dropdownValue.label}
          data={data.filter(
            (item) => item.categoryID === ITEM_HOMEPAGE.BANNER_IMG
          )}
          action={handleEditType}
          type={dropdownValue.listType}
        />
      ),
    },
    // {
    //   label: "Highlights",
    //   key: ITEM_HOMEPAGE.HIGHLIGHT,
    //   listType: LIST_TYPE.IMAGE_TITLE_CONTENT,
    //   children: (
    //     <ListData
    //       section={dropdownValue.label}
    //       data={data.filter((item) => item.categoryID === ITEM_HOMEPAGE.HIGHLIGHT)}
    //       action={handleEditType}
    //       type={dropdownValue.listType}
    //     />
    //   )
    // },
    {
      label: "Announcement",
      key: ITEM_HOMEPAGE.ANNOUNCEMENT,
      listType: LIST_TYPE.TITLE,
      children: (
        <ListData
          section={dropdownValue.label}
          data={announcementData}
          action={handleEditType}
          type={dropdownValue.listType}
        />
      ),
    },
    {
      label: "Faculties",
      key: ITEM_HOMEPAGE.FACULTIES,
      listType: LIST_TYPE.IMAGE,
      children: (
        <ListData
          section={dropdownValue.label}
          data={data.filter(
            (item) => item.categoryID === ITEM_HOMEPAGE.FACULTIES
          )}
          action={handleEditType}
          type={dropdownValue.listType}
        />
      ),
    },
    {
      label: "MVV",
      key: ITEM_HOMEPAGE.MVV,
      listType: LIST_TYPE.IMAGE_TITLE_CONTENT,
      children: (
        <ListData
          section={dropdownValue.label}
          data={data.filter((item) => item.categoryID === ITEM_HOMEPAGE.MVV)}
          action={handleEditType}
          type={dropdownValue.listType}
        />
      ),
    },
    {
      label: "Image library",
      key: ITEM_HOMEPAGE.IMG_LIB,
      listType: LIST_TYPE.IMAGE,
      children: (
        <ListData
          section={dropdownValue.label}
          data={data.filter(
            (item) => item.categoryID === ITEM_HOMEPAGE.IMG_LIB
          )}
          action={handleEditType}
          type={dropdownValue.listType}
        />
      ),
    },
  ];
  const onChange = (key: string) => {
    tabsItem.map((item) => {
      if (item.key === key) {
        setDropdownValue({
          label: item.label,
          key: key,
          listType: item.listType,
        });
      }
    });
  };

  useEffect(() => {
    setDropdownValue({
      key: tabsItem[0].key,
      label: tabsItem[0].label,
      listType: tabsItem[0].listType,
    });
  }, []);

  return (
    <div>
      <TabsItem tab={tabsItem} onChange={onChange} />
      <ModalSwapPosition
        data={bannerList}
        onCancel={handleCancel}
        onOk={handleSaveSwapPosition}
        show={openSwapModal}
      />
      <EditModal
        editType={dropdownValue.listType ?? 0}
        data={editValue}
        show={openModal}
        type={modalType}
        onCancel={handleCancel}
        onOk={handleOk}
      ></EditModal>
    </div>
  );
};
export default AdminHomePage;
