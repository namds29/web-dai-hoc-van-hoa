import { MenuProps } from "antd";
import { useEffect, useState } from "react";
import DropdownItem from "src/components/dropdown/dropdown-item";
import ListData from "src/components/list-data";
import EditModal from "src/components/evc-modal";
import { MODAL_TYPE, IDropdownItemType, LIST_TYPE } from "src/interfaces";

enum ITEM_DROPDOWN {
  PRESIDENT_MESSAGE = "president-msg",
  BOARD_OF_DIRECTORS = "board-of-director",
  ABOUT_TUCST = "about",
  FOUR_ELEMENT = "four-element",
}

type IEditType = {
  id?: string;
  type: string;
};

type DataType = { id: string; title: string; content: string };

const AdminAbout = () => {
  const [dropdownValue, setDropdownValue] = useState<IDropdownItemType>({
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

  const dropdownData: IDropdownItemType[] = [
    {
      label: "President's message",
      key: ITEM_DROPDOWN.PRESIDENT_MESSAGE,
      listType: LIST_TYPE.IMAGE,
    },
    {
      label: "Board of directors",
      key: ITEM_DROPDOWN.BOARD_OF_DIRECTORS,
      listType: LIST_TYPE.IMAGE,
    },
    {
      label: "About TUCST",
      key: ITEM_DROPDOWN.ABOUT_TUCST,
      listType: LIST_TYPE.IMAGE,
    },
    {
      label: "Four element",
      key: ITEM_DROPDOWN.FOUR_ELEMENT,
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
export default AdminAbout;
