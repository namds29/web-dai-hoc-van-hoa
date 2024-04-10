import { MenuProps } from "antd";
import { useEffect, useState } from "react";
import DropdownItem from "src/components/dropdown/dropdown-item";
import FileUpload from "src/components/imageupload";
import TextImageUpload from "src/components/imagetextupload";

type IItemType = {
  label: string;
  key: string;
};

enum ITEM_DROPDOWN {
  BANNER_IMG = "bannerimg",
  SMALL_BANNER = "smallbanner",
  HIGHLIGHT_ANNOUNCEMENT = "highlight",
  FACULTIES = "faculties",
  CAMPUS_LIFE = "campuslife",
  MVV = "mvv",
}

type DataType = { id: number; title: string; content: string; type?: string };

const AdminHomePage = () => {
  const [dropdownValue, setDropdownValue] = useState<IItemType>({
    label: "Section",
    key: "",
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

  const dropdownData: IItemType[] = [
    { label: "Banner image", key: ITEM_DROPDOWN.BANNER_IMG },
    { label: "Small banner", key: ITEM_DROPDOWN.SMALL_BANNER },
    {
      label: "Highlights & Announcement",
      key: ITEM_DROPDOWN.HIGHLIGHT_ANNOUNCEMENT,
    },
    { label: "Faculties", key: ITEM_DROPDOWN.FACULTIES },
    { label: "Campus life", key: ITEM_DROPDOWN.CAMPUS_LIFE },
    { label: "MVV", key: ITEM_DROPDOWN.MVV },
  ];

  const dropdownItems: MenuProps["items"] = dropdownData;

  const onClick: MenuProps["onClick"] = ({ key }) => {
    dropdownData.map((item) => {
      if (item.key === key) {
        setDropdownValue({ label: item.label, key: key });
      }
    });
  };

  const renderDropdownSelect = (dropdownValue: IItemType) => {
    switch (dropdownValue.key) {
      case ITEM_DROPDOWN.BANNER_IMG:
        return (
          <div className="w-1/2 m-auto">
            <FileUpload />
          </div>
        );
      case ITEM_DROPDOWN.SMALL_BANNER:
      case ITEM_DROPDOWN.FACULTIES:
      case ITEM_DROPDOWN.MVV:
        return (
          <div>
            <TextImageUpload
              haveContent={false}
              editSection={dropdownValue.label}
              dataValue={data}
              editValue={handleEditState}
            ></TextImageUpload>
          </div>
        );
      case ITEM_DROPDOWN.HIGHLIGHT_ANNOUNCEMENT:
      case ITEM_DROPDOWN.CAMPUS_LIFE:
        return (
          <div>
            <TextImageUpload
              haveContent={true}
              editSection={dropdownValue.label}
              dataValue={data}
              editValue={handleEditState}
            ></TextImageUpload>
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
export default AdminHomePage;
