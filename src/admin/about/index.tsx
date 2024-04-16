import { MenuProps } from "antd";
import { useEffect, useState } from "react";
import DropdownItem from "src/components/dropdown/dropdown-item";
// import TextEditor from "src/components/texteditor";
import FileUpload from "src/components/image-upload";
import ListData from "src/components/list-data";

type IItemType = {
  label: string;
  key: string;
};

enum ITEM_DROPDOWN {
  PRESIDENT_MESSAGE = "president-msg",
  BOARD_OF_DIRECTORS = "board-of-director",
  ABOUT_TUCST = "about",
  FOUR_ELEMENT = "four-element",
}

type DataType = { id: number; title: string; content: string; type?: string };

const AdminAbout = () => {
  const [dropdownValue, setDropdownValue] = useState<IItemType>({
    label: "President's message",
    key: ITEM_DROPDOWN.PRESIDENT_MESSAGE,
  });

  const [editValue, setEditValue] = useState<DataType>({
    id: 0,
    title: "",
    content: "",
  });

  const arrayOfObjects = [
    {
      title: "First Object",
      id: 1,
      content: "This is the content of the first object.",
    },
    {
      title: "Second Object",
      id: 2,
      content: "This is the content of the second object.",
    },
    {
      title: "Third Object",
      id: 3,
      content: "This is the content of the third object.",
    },
  ];

  const [data, setData] = useState<DataType[]>(arrayOfObjects);

  useEffect(() => {
    if (editValue.type === "create") {
      const newObj = {
        id: arrayOfObjects.length,
        title: editValue.title,
        content: editValue.content,
      };
      arrayOfObjects.push(newObj);
      setData(arrayOfObjects);
    } else {
      const newData = arrayOfObjects.map((item) => {
        if (editValue.id && item.id === editValue.id) {
          item = {
            id: editValue.id,
            title: editValue.title,
            content: editValue.content,
          };
        }
        return item;
      });
      setData(newData);
    }
  }, [editValue]);

  const handleEditState = (value: any) => {
    setEditValue(value);
  };

  const handleEditType = () => {
    console.log("cnaksjdncjk");
    
  };

  const dropdownData: IItemType[] = [
    { label: "President's message", key: ITEM_DROPDOWN.PRESIDENT_MESSAGE },
    { label: "Board of directors", key: ITEM_DROPDOWN.BOARD_OF_DIRECTORS },
    {
      label: "About TUCST",
      key: ITEM_DROPDOWN.ABOUT_TUCST,
    },
    { label: "Four element", key: ITEM_DROPDOWN.FOUR_ELEMENT },
  ];

  const dropdownItems: MenuProps["items"] = dropdownData;

  const onClick: MenuProps["onClick"] = ({ key }) => {
    dropdownData.map((item) => {
      if (item.key === key) {
        setDropdownValue({ label: item.label, key: key });
      }
    });
    console.log(`Click on item ${key}`);
  };

  const renderDropdownSelect = (dropdownValue: IItemType) => {
    switch (dropdownValue.key) {
      case ITEM_DROPDOWN.PRESIDENT_MESSAGE:
        return (
          <div className="w-1/2 m-auto">
            <FileUpload />
          </div>
        );
      case ITEM_DROPDOWN.BOARD_OF_DIRECTORS:
      case ITEM_DROPDOWN.ABOUT_TUCST:
      case ITEM_DROPDOWN.FOUR_ELEMENT:
        return (
          <div>
            <ListData section="" data={data} action={handleEditType}></ListData>
          </div>
        );

      default:
        return <div>Please select dropdown to edit section</div>;
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
      <div className="mt-10">{renderDropdownSelect(dropdownValue)}</div>
    </div>
  );
};
export default AdminAbout;
