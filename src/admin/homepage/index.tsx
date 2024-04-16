import { MenuProps } from "antd";
import { useEffect, useState } from "react";
import DropdownItem from "src/components/dropdown/dropdown-item";
import ListData from "src/components/list-data";
import EditModal from "src/components/evc-modal";
import { LIST_TYPE, MODAL_TYPE } from "src/interfaces";

type IItemType = {
  label: string;
  key: string;
  listType?: number;
};

enum ITEM_DROPDOWN {
  BANNER_IMG = "bannerimg",
  SMALL_BANNER = "smallbanner",
  HIGHLIGHT_ANNOUNCEMENT = "highlight",
  FACULTIES = "faculties",
  CAMPUS_LIFE = "campuslife",
  MVV = "mvv",
}

type IEditType = {
  id?: string;
  type: string;
};

type DataType = { id: string; title: string; content: string };

const AdminHomePage = () => {
  const [dropdownValue, setDropdownValue] = useState<IItemType>({
    label: "Section",
    key: "",
    listType: 0,
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

  const [data, setData] = useState<DataType[]>(arrayOfObjects);

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

  const dropdownData: IItemType[] = [
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
        setDropdownValue({ label: item.label, key: key });
      }
    });
  };

  const handleCancel = () => {
    setOpenModal(false);
  };

  const handleOk = (value: any) => {
    if (editTypeValue?.type === MODAL_TYPE.CREATE) {
      const newObj = {
        id: arrayOfObjects.length.toString(),
        title: value.title,
        content: value.content,
      };
      arrayOfObjects.push(newObj);
      setData(arrayOfObjects);
      setOpenModal(false);
    }
    if (editTypeValue?.type === MODAL_TYPE.EDIT) {
      const newData = arrayOfObjects.map((item) => {
        if (editValue.id && item.id === editValue.id) {
          item = {
            id: value.id,
            title: value.title,
            content: value.content,
          };
        }
        return item;
      });
      setData(newData);
      setOpenModal(false);
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
          ></ListData>
        ) : (
          <div>Please select dropdown to edit section</div>
        )}
      </div>
      <EditModal
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
