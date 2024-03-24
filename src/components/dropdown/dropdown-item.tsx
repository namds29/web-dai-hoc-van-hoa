// DropdownItem.tsx
import { Space, Dropdown, MenuProps } from "antd";
import { CaretDownOutlined } from "@ant-design/icons";
import { Label } from "@mui/icons-material";
interface DropdownItemProps {
  items: MenuProps["items"]; // You can replace 'any' with the actual type of your items
  onClick: MenuProps["onClick"];
  label: string;
}

const DropdownItem = ({ items, onClick, label }: DropdownItemProps) => (
  <Dropdown className="mr-5" menu={{ items, onClick }}>
    <a
      className="text-sm"
      onClick={(e) => {
        console.log(e);
        e.preventDefault();
      }}
    >
      <Space>
        {label}
        <CaretDownOutlined />
      </Space>
    </a>
  </Dropdown>
);

export default DropdownItem;
