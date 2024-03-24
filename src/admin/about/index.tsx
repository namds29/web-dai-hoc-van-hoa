import { MenuProps } from "antd";
import { useRef, useState } from "react";
import DropdownItem from "src/components/dropdown/dropdown-item";
import TextEditor from "src/components/texteditor";

type IItemType = {
  label: string;
  key: string;
};

enum ITEM_DROPDOWN {
  BANNER_IMG = "bannerimg",
  PRESIDENT_MSG = "presidentmsg",
}

const AdminAbout = () => {

  const [dropdownValue, setDropdownValue] = useState<IItemType>({
    label: "Section",
    key: "",
  });

  const dropdownData: IItemType[] = [
    { label: "Banner image", key: ITEM_DROPDOWN.BANNER_IMG },
    { label: "President’s message", key: ITEM_DROPDOWN.PRESIDENT_MSG },
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

  return (
    <div>
      <div>
        <DropdownItem
          items={dropdownItems}
          onClick={onClick}
          label={dropdownValue.label}
        />
      </div>
      {dropdownValue.key === ITEM_DROPDOWN.BANNER_IMG ? (
        <div>Image Edit</div>
      ) : (
        <></>
      )}
      {dropdownValue.key === ITEM_DROPDOWN.PRESIDENT_MSG ? (
        <div>
          <TextEditor></TextEditor>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};
export default AdminAbout;
