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
} from "src/interfaces";
import HomepageService from "src/services/homepage/homepageService";

enum ITEM_DROPDOWN {
  BANNER_IMG = "bannerimg",
  SMALL_BANNER = "smallbanner",
  HIGHLIGHT_ANNOUNCEMENT = "highlight",
  FACULTIES = "faculties",
  CAMPUS_LIFE = "campuslife",
  MVV = "mvv",
}

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
      handleDeleteDataItem(editTypeValue.id ?? 0)
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
  } 

  const dropdownData: IDropdownItemType[] = [
    {
      label: "Banner image",
      key: ITEM_DROPDOWN.BANNER_IMG,
      listType: LIST_TYPE.IMAGE,
    },
    {
      label: "Small banner",
      key: ITEM_DROPDOWN.SMALL_BANNER,
      listType: LIST_TYPE.IMAGE_TITLE,
    },
    {
      label: "Highlights & Announcement",
      key: ITEM_DROPDOWN.HIGHLIGHT_ANNOUNCEMENT,
      listType: LIST_TYPE.IMAGE_TITLE_CONTENT,
    },
    {
      label: "Faculties",
      key: ITEM_DROPDOWN.FACULTIES,
      listType: LIST_TYPE.IMAGE_TITLE,
    },
    {
      label: "Campus life",
      key: ITEM_DROPDOWN.CAMPUS_LIFE,
      listType: LIST_TYPE.IMAGE_TITLE,
    },
    { label: "MVV", key: ITEM_DROPDOWN.MVV, listType: LIST_TYPE.IMAGE_TITLE },
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
        categoryID: 0,
      };
      createPost(newObj);
      setOpenModal(false);
    }
    if (editTypeValue?.type === MODAL_TYPE.EDIT) {
      const dataById: IPostDataType | undefined =
        data.find((item) => editValue.id && item.id === editValue.id) ??
        undefined;

      if (dataById) {
        const newDataItem: IPostDataType = {
          ...dataById,
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

  const editPost = async (id: number, data: IPostDataType) => {
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

  useEffect(() => {
    getPostList();
  }, []);

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
            data={data}
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
