import { MenuProps, message } from "antd";
import { useEffect, useState } from "react";
import DropdownItem from "src/components/dropdown/dropdown-item";
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
  ITEM_HOMEPAGE
} from "src/interfaces";
import HomepageService from "src/services/homepage/homepageService";



type DataType = { id: number; title: string; content: string };

const AdminHomePage = () => {
  const [dropdownValue, setDropdownValue] = useState<IDropdownItemType>({
    label: "Section",
    key: "",
    listType: 0,
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
  }, [editTypeValue]);

  const handleEditType = ({ id, type }: IEditType) => {
    setEditTypeValue({ id, type });
  };

  const handleDeleteDataItem = async (id: number) => {
    try {
      const res = await HomepageService.deletePostHomepage(id);
      if (res.message == "success") {
        message.success(`Delete successfully.`);
        getPostList();
      }
    } catch (error: any) {
      if (error) {
        console.log(error);
      }
    }
  };

  const dropdownData: IDropdownItemType[] = [
    {
      label: "Banner image",
      key: ITEM_HOMEPAGE.BANNER_IMG,
      listType: LIST_TYPE.IMAGE,
    },
    {
      label: "Highlights",
      key: ITEM_HOMEPAGE.HIGHLIGHT,
      listType: LIST_TYPE.IMAGE_TITLE_CONTENT,
    },
    {
      label: "Announcement",
      key: ITEM_HOMEPAGE.ANNOUNCEMENT,
      listType: LIST_TYPE.IMAGE_TITLE,
    },
    {
      label: "Faculties",
      key: ITEM_HOMEPAGE.FACULTIES,
      listType: LIST_TYPE.IMAGE,
    },
    {
      label: "MVV",
      key: ITEM_HOMEPAGE.MVV,
      listType: LIST_TYPE.IMAGE_TITLE_CONTENT,
    },
    {
      label: "Image library",
      key: ITEM_HOMEPAGE.IMG_LIB,
      listType: LIST_TYPE.IMAGE,
    },
  ];

  const dropdownItems: MenuProps["items"] = dropdownData;

  const onClick: MenuProps["onClick"] = ({ key }) => {
    dropdownData.map((item) => {
      if (item.key === key) {
        setDropdownValue({
          label: item.label,
          key: key,
          listType: item.listType,
        });
      }
    });
  };

  const handleCancel = () => {
    setOpenModal(false);
  };

  const handleOk = (value: {
    title?: string;
    content?: string;
    imgFile: File;
  }) => {
    console.log(value.imgFile);

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
        name: value.imgFile.name,
        categoryID: dropdownValue.key,
      };

      if (newObj && dropdownValue.listType != LIST_TYPE.IMAGE) {
        createPost(newObj);
      }

      if (newBanner && dropdownValue.listType == LIST_TYPE.IMAGE) {
        createBanner(newBanner);
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

        if (newDataItem && dropdownValue.listType != LIST_TYPE.IMAGE) {
          editPost(editValue.id, newDataItem);
        }

        if (newBannerData && dropdownValue.listType == LIST_TYPE.IMAGE) {
          editBanner(editValue.id, newBannerData);
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
        getPostList();
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
        getPostList();
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

  const getPostList = async () => {
    try {
      const res = await HomepageService.listPostHomepage();
      if (res?.data) {
        setData(res?.data);
      }
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
      }
    } catch (error: any) {
      if (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    if (dropdownValue.listType === LIST_TYPE.IMAGE) {
      getBannerList();
    } else {
      getPostList();
    }
  }, [dropdownValue]);

  return (
    <div>
      <div>
        <DropdownItem
          items={dropdownItems}
          onClick={onClick}
          label={dropdownValue.label}
        />
      </div>

      <div className="mt-10">
        {dropdownValue.key ? (
          <ListData
            section={dropdownValue.label}
            data={data.filter((item) => item.categoryID === dropdownValue.key)}
            action={handleEditType}
            type={dropdownValue.listType}
          ></ListData>
        ) : (
          <div>Please select dropdown to edit section</div>
        )}
      </div>
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
