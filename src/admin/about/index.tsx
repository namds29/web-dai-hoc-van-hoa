import { MenuProps } from "antd";
import { useState } from "react";
import DropdownItem from "src/components/dropdown/dropdown-item";
import TextEditor from "src/components/texteditor";
import FileUpload from "src/components/imageupload";
import TextImageUpload from "src/components/imagetextupload";

type IItemType = {
  label: string;
  key: string;
};

enum ITEM_DROPDOWN {
  PRESIDENT_MESSAGE = "president-msg",
  BOARD_OF_DIRECTORS = "board-of-director",
  ABOUT_TUCST = "about",
  FOUR_ELEMENT = "four-element"
}

const AdminAbout = () => {
  const [dropdownValue, setDropdownValue] = useState<IItemType>({
    label: "Section",
    key: "",
  });

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
        return (
          <div>
            <TextImageUpload
              haveContent={false}
              editSection={dropdownValue.label}
            ></TextImageUpload>
          </div>
        );
      case ITEM_DROPDOWN.ABOUT_TUCST:
        return (
          <div>
            <TextImageUpload
              haveContent={true}
              editSection={dropdownValue.label}
            ></TextImageUpload>
          </div>
        );
      case ITEM_DROPDOWN.FOUR_ELEMENT:
        return (
          <div>
            <TextImageUpload
              haveContent={true}
              editSection={dropdownValue.label}
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
export default AdminAbout;
