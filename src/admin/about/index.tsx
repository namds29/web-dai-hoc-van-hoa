import { MenuProps, message } from "antd";
import { useEffect, useState } from "react";
import DropdownItem from "src/components/dropdown/dropdown-item";
import ListData from "src/components/list-data";
import EditModal from "src/components/evc-modal";
import {
  MODAL_TYPE,
  IDropdownItemType,
  LIST_TYPE,
  IPostDataType,
  ICreatePostType,
  DataType,
  IEditType,
  IEditPostType,
  ITabsType,
} from "src/interfaces";
import HomepageService from "src/services/homepage/homepageService";
import TabsItem from "src/components/Tabs/TabsItem";

enum ITEM_DROPDOWN {
  PRESIDENT_MESSAGE = "president-msg",
  BOARD_OF_DIRECTORS = "board-of-director",
  ABOUT_TUCST = "about",
  FOUR_ELEMENT = "four-element",
}

const AdminAbout = () => {
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
    if (editTypeValue?.type === MODAL_TYPE.EDIT) {
      setOpenModal(true);
      setModalType(MODAL_TYPE.EDIT);
      const choosenValue = data.find((item) => item.id === editTypeValue.id);
      if (choosenValue) {
        setEditValue(choosenValue);
      }
    }
    if (editTypeValue?.type === MODAL_TYPE.CREATE) {
      setOpenModal(true);
      setModalType(MODAL_TYPE.CREATE);
    }
    if (editTypeValue?.type === MODAL_TYPE.VIEW) {
      setOpenModal(true);
      setModalType(MODAL_TYPE.VIEW);
    }
    if (editTypeValue?.type === "delete") {
      handleDeleteDataItem(editTypeValue.id ?? 0);
    }
  }, [editTypeValue]);

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

  const handleEditType = ({ id, type }: IEditType) => {
    setEditTypeValue({ id, type });
  };


  const handleCancel = () => {
    setOpenModal(false);
  };

  const handleOk = (value: {
    title: string;
    content: string;
    imgFile: File;
  }) => {
    if (editTypeValue?.type === MODAL_TYPE.CREATE) {
      const newObj: ICreatePostType = {
        title: value.title,
        content: value.content,
        thumpnailImage: value.imgFile,
        brief: "",
        typeID: 0,
        categoryID: "",
      };
      createPost(newObj);
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
        if (newDataItem) {
          editPost(editValue.id, newDataItem);
        }
      }
      setOpenModal(false);
    }
  };

  const createPost = async (data: ICreatePostType) => {
    try {
      const res = await HomepageService.createPostHomepage(data);
      if (res.message == "success") {
        message.success(`Create successfully.`);
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
      console.log(res);
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

  const tabsItem: ITabsType[] = [
    {
      label: "Four element",
      key: ITEM_DROPDOWN.FOUR_ELEMENT,
      listType: LIST_TYPE.IMAGE_TITLE_CONTENT,
      children: (
        <ListData
          section={dropdownValue.label}
          data={data.filter(
            (item) => item.categoryID === ITEM_DROPDOWN.FOUR_ELEMENT
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
export default AdminAbout;
