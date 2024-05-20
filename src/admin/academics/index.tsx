import { message } from "antd";
import { useEffect, useState } from "react";
import ListData from "src/components/list-data";
import EditModal from "src/components/evc-modal";
import {
  MODAL_TYPE,
  IDropdownItemType,
  LIST_TYPE,
  IEditAddmissionType,
  ICreateAddmissionType,
  CATEGORY_ID,
  IAddmissionDataType,
  IEditType,
  IGetAddmissionType,
  ITabsType,
} from "src/interfaces";
import HomepageService from "src/services/homepage/homepageService";
import TabsItem from "src/components/Tabs/TabsItem";

type DataType = { id: number; title: string; content: string };

const AdminAcademics = () => {
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

  const [data, setData] = useState<IAddmissionDataType[]>([]);

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

  const handleDeleteDataItem = async (id: number) => {
    try {
      const res = await HomepageService.deletePostHomepage(id);
      if (res.message == "success") {
        message.success(`Delete successfully.`);
        getAddmissionList(Number(dropdownValue.key));
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
    title?: string;
    content?: string;
    imgFile: File;
  }) => {
    console.log(value.imgFile);

    if (editTypeValue?.type === MODAL_TYPE.CREATE) {
      const newObj: ICreateAddmissionType = {
        title: value.title ?? "",
        content: value.content ?? "",
        categoryID: dropdownValue.key,
      };

      createAddmission(newObj);

      setOpenModal(false);
    }
    if (editTypeValue?.type === MODAL_TYPE.EDIT) {
      const newDataItem: IEditAddmissionType = {
        title: value.title ?? "",
        content: value.content ?? "",
      };

      editAddmission(editValue.id, newDataItem);
      setOpenModal(false);
    }
  };

  const createAddmission = async (data: ICreateAddmissionType) => {
    try {
      const res = await HomepageService.createAddmissionHomepage(data);
      if (res.message == "success") {
        message.success(`Create addmission successfully.`);
        getAddmissionList(Number(dropdownValue.key));
      }
    } catch (error: any) {
      if (error) {
        console.log(error);
      }
    }
  };

  const editAddmission = async (id: number, data: IEditAddmissionType) => {
    try {
      const res = await HomepageService.editAddmissionHomepage(id, data);
      if (res.message == "success") {
        message.success(`Edit addmission successfully.`);
        getAddmissionList(Number(dropdownValue.key));
      }
    } catch (error: any) {
      if (error) {
        console.log(error);
      }
    }
  };

  const getAddmissionList = async (id: number) => {
    try {
      const payload: IGetAddmissionType = {
        categoryID: id,
      };
      console.log(payload);

      const res = await HomepageService.getAddmissionByCategoryId(payload);
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
      label: "Functional units",
      key: CATEGORY_ID.FUNTIONAL_UNITS.toString(),
      listType: LIST_TYPE.TITLE_CONTENT,
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
      label: "Training program",
      key: CATEGORY_ID.FORMAL_TRAINING.toString(),
      listType: LIST_TYPE.TITLE_CONTENT,
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
    console.log(key);

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
    getAddmissionList(Number(dropdownValue.key));
    console.log(dropdownValue);
  }, [dropdownValue]);

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
export default AdminAcademics;
