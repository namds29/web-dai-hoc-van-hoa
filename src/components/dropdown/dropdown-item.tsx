// DropdownItem.tsx
import { Space, Dropdown, MenuProps, Button } from "antd";
import { CaretDownOutlined } from "@ant-design/icons";
interface DropdownItemProps {
  items: MenuProps["items"]; // You can replace 'any' with the actual type of your items
  onClick: MenuProps["onClick"];
  label: string;
}

const DropdownItem = ({ items, onClick, label }: DropdownItemProps) => (
  <Dropdown className="mr-5" menu={{ items, onClick }}>
    <Button
      className="text-sm bg-black text-white"
      onClick={(e) => {
        console.log(e);
        e.preventDefault();
      }}
    >
      <Space>
        {label}
        <CaretDownOutlined   />
      </Space>
    </Button>
  </Dropdown>
);

export default DropdownItem;
