import { message } from "antd";
import { useEffect, useState } from "react";
import ListData from "src/components/list-data";
import EditModal from "src/components/evc-modal";
import {
  MODAL_TYPE,
  LIST_TYPE,
  IDropdownItemType,
  IPostDataType,
  ICreatePostType,
  IEditPostType,
  IEditType,
  ITEM_NEWS,
  ITabsType,
} from "src/interfaces";
import HomepageService from "src/services/homepage/homepageService";
import TabsItem from "src/components/Tabs/TabsItem";

type DataType = { id: number; title: string; content: string };

const AdminNews = () => {
  const [dropdownValue, setDropdownValue] = useState<IDropdownItemType>({
    label: "Section",
    key: "",
  });

  const [editValue, setEditValue] = useState<DataType>({
    id: 0,
    title: "",
    content: "",
  });

  const [openModal, setOpenModal] = useState(false);
  const [modalType, setModalType] = useState("");
  const [editTypeValue, setEditTypeValue] = useState<IEditType>();

  const [data, setData] = useState<IPostDataType[]>([]);

  useEffect(() => {
    if (
      editTypeValue?.type === MODAL_TYPE.EDIT ||
      editTypeValue?.type === MODAL_TYPE.VIEW
    ) {
      setOpenModal(true);
      setModalType(editTypeValue?.type);
      const choosenValue = data.find((item) => item.id === editTypeValue.id);
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

    if (editTypeValue?.type === "approve" || editTypeValue?.type === "disapprove") {
      handleApproveDataItem(editTypeValue.id ?? 0, { isApproved: editTypeValue?.type === "approve" });
    }

    if (editTypeValue?.type === "highlight" || editTypeValue?.type === "unhighlight") {
      const dataById: IPostDataType | undefined =
        data.find((item) => editTypeValue.id && item.id === editTypeValue.id) ??
        undefined;

      if (dataById) {
        const newDataItem: IEditPostType = {
          ...dataById,
          isHighlighted: editTypeValue?.type === "highlight" ? 1 : 0,
        };

        if (newDataItem) {
          editPost(editTypeValue.id ?? 0, newDataItem);
        }
      }
    }
  }, [editTypeValue]);

  const handleEditType = ({ id, type }: IEditType) => {
    setEditTypeValue({ id, type });
  };

  const handleCancel = () => {
    setOpenModal(false);
  };

  const handleOk = (value: {
    title?: string;
    content?: string;
    brief?: string;
    imgFile: File;
  }) => {
    if (editTypeValue?.type === MODAL_TYPE.CREATE) {
      const newObj: ICreatePostType = {
        title: value.title ?? "",
        content: value.content ?? "",
        thumpnailImage: value.imgFile,
        brief: value.brief ?? "",
        typeID: 0,
        categoryID: dropdownValue.key,
      };

      if (newObj) {
        createPost(newObj);
      }

      setOpenModal(false);
    }
    if (editTypeValue?.type === MODAL_TYPE.EDIT) {
      const dataById: IPostDataType | undefined =
        data.find((item) => editValue.id && item.id === editValue.id) ??
        undefined;

      if (dataById) {
        const newDataItem: IEditPostType = {
          brief: value.brief ?? "",
          thumpnailImage: value.imgFile,
          title: value.title ?? "",
          content: value.content ?? "",
        };

        if (newDataItem) {
          editPost(editValue.id, newDataItem);
        }
      }
      setOpenModal(false);
    }
  };

  const getPostList = async (id: any) => {
    try {
      const res = await HomepageService.listPostHomepageWithCategoryId(id);
      if (res?.data) {
        setData(res?.data);
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

  const editPost = async (id: number, data: IEditPostType) => {
    try {
      const res = await HomepageService.editPostHomepage(id, data);
      if (res.message == "success") {
        message.success(`Update post successfully.`);
        getPostList(dropdownValue.key);
      }
    } catch (error: any) {
      if (error) {
        console.log(error);
      }
    }
  };

  const handleDeleteDataItem = async (id: number) => {
    try {
      const res = await HomepageService.deletePostHomepage(id);
      if (res.message == "success") {
        message.success(`Delete successfully.`);
        getPostList(dropdownValue.key);
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

  useEffect(() => {
    getPostList(dropdownValue.key);
  }, [dropdownValue]);

  const tabsItem: ITabsType[] = [
    {
      label: "Hot news",
      key: ITEM_NEWS.HOT_NEWS,
      listType: LIST_TYPE.IMAGE_TITLE,
      children: (
        <ListData
          section={dropdownValue.label}
          data={data}
          action={handleEditType}
          type={dropdownValue.listType}
        />
      ),
    },
    {
      label: "News",
      key: ITEM_NEWS.NEWS,
      listType: LIST_TYPE.IMAGE_TITLE_CONTENT,
      children: (
        <ListData
          section={dropdownValue.label}
          data={data}
          action={handleEditType}
          type={dropdownValue.listType}
        />
      ),
    },
    {
      label: "School activities",
      key: ITEM_NEWS.SCHOOL_ACTIVITIES,
      listType: LIST_TYPE.IMAGE_TITLE_CONTENT,
      children: (
        <ListData
          section={dropdownValue.label}
          data={data}
          action={handleEditType}
          type={dropdownValue.listType}
        />
      ),
    },
    {
      label: "International cooperation",
      key: ITEM_NEWS.INTERNATIONAL_COOPERATION,
      listType: LIST_TYPE.IMAGE_TITLE_CONTENT,
      children: (
        <ListData
          section={dropdownValue.label}
          data={data}
          action={handleEditType}
          type={dropdownValue.listType}
        />
      ),
    },
    {
      label: "Campus life",
      key: ITEM_NEWS.CAMPUS_LIFE,
      listType: LIST_TYPE.IMAGE_TITLE_CONTENT,
      children: (
        <ListData
          section={dropdownValue.label}
          data={data}
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
export default AdminNews;
