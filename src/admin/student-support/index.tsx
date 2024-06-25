import { useEffect, useState } from "react";
import ListData from "src/components/list-data";
import EditModal from "src/components/evc-modal";
import {
  MODAL_TYPE,
  IDropdownItemType,
  LIST_TYPE,
  IPostDataType,
  ITabsType,
} from "src/interfaces";
import TabsItem from "src/components/Tabs/TabsItem";

enum ITEM_DROPDOWN {
  BANNER_IMG = "bannerimg",
  SUPPORT_DEPARTMENTS = "supportdepartments",
  STUDENT_SERVICES = "studentservices",
  RECRUITMENT = "recruitment",
}

type IEditType = {
  id?: string;
  type: string;
};

type DataType = { id: string; title: string; content: string };

const AdminStudentSupport = () => {
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

  const tabsItem: ITabsType[] = [
    {
      label: "Banner image",
      key: ITEM_DROPDOWN.BANNER_IMG,
      listType: LIST_TYPE.IMAGE,
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
      label: "Support departments",
      key: ITEM_DROPDOWN.SUPPORT_DEPARTMENTS,
      listType: LIST_TYPE.IMAGE,
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
      label: "Student services",
      key: ITEM_DROPDOWN.STUDENT_SERVICES,
      listType: LIST_TYPE.IMAGE,
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
      label: "Recruitment",
      key: ITEM_DROPDOWN.RECRUITMENT,
      listType: LIST_TYPE.IMAGE,
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

  const handleCancel = () => {
    setOpenModal(false);
  };

  const handleOk = () => {
    setData([]);
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
export default AdminStudentSupport;
