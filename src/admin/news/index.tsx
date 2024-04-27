import { MenuProps, message } from "antd";
import { useEffect, useState } from "react";
import DropdownItem from "src/components/dropdown/dropdown-item";
import ListData from "src/components/list-data";
import EditModal from "src/components/evc-modal";
import {
  MODAL_TYPE,
  LIST_TYPE,
  IDropdownItemType,
  IPostDataType,
  ICreatePostType,
  IEditPostType,
} from "src/interfaces";
import HomepageService from "src/services/homepage/homepageService";

enum ITEM_DROPDOWN {
  HOT_NEWS = "hotnews",
  SCHOOL_ACTIVITIES = "schoolactivities",
  CAMPUS_LIFE = "campuslife",
  INTERNATIONAL_COOPERATION = "intercoop",
}

type IEditType = {
  id?: string;
  type: string;
};

type DataType = { id: string; title: string; content: string };

const AdminNews = () => {
  const [dropdownValue, setDropdownValue] = useState<IDropdownItemType>({
    label: "Section",
    key: "",
  });

  const [editValue, setEditValue] = useState<DataType>({
    id: "0",
    title: "",
    content: "",
  });

  const [openModal, setOpenModal] = useState(false);
  const [modalType, setModalType] = useState("");
  const [editTypeValue, setEditTypeValue] = useState<IEditType>();

  const arrayOfObjects = [
    {
      title: "First Object",
      id: "1",
      content: "This is the content of the first object.",
    },
    {
      title: "Second Object",
      id: "2",
      content: "This is the content of the second object.",
    },
    {
      title: "Third Object",
      id: "3",
      content: "This is the content of the third object.",
    },
  ];

  const [data, setData] = useState<IPostDataType[]>([]);

  useEffect(() => {
    if (editTypeValue?.type === MODAL_TYPE.EDIT) {
      setOpenModal(true);
      setModalType(MODAL_TYPE.EDIT);
      const choosenValue = arrayOfObjects.find(
        (item) => item.id === editTypeValue.id
      );
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
  }, [editTypeValue]);

  const handleEditType = ({ id, type }: IEditType) => {
    setEditTypeValue({ id, type });
  };

  const dropdownData: IDropdownItemType[] = [
    {
      label: "Hot news",
      key: ITEM_DROPDOWN.HOT_NEWS,
      listType: LIST_TYPE.IMAGE,
    },
    {
      label: "School activities",
      key: ITEM_DROPDOWN.SCHOOL_ACTIVITIES,
      listType: LIST_TYPE.IMAGE,
    },
    {
      label: "International cooperation",
      key: ITEM_DROPDOWN.INTERNATIONAL_COOPERATION,
      listType: LIST_TYPE.IMAGE,
    },
    {
      label: "Campus life",
      key: ITEM_DROPDOWN.CAMPUS_LIFE,
      listType: LIST_TYPE.IMAGE,
    },
  ];

  const dropdownItems: MenuProps["items"] = dropdownData;

  const onClick: MenuProps["onClick"] = ({ key }) => {
    dropdownData.map((item) => {
      if (item.key === key) {
        setDropdownValue({ label: item.label, key: key });
      }
    });
  };

  const handleCancel = () => {
    setOpenModal(false);
  };

  const handleOk = (value: any) => {
    console.log(value);
    setData([]);
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
        message.success(`Create post successfully.`);
        getPostList();
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
        getPostList();
      }
    } catch (error: any) {
      if (error) {
        console.log(error);
      }
    }
  };

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
export default AdminNews;
