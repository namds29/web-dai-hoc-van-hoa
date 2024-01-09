// DropdownItem.tsx
import { Space, Dropdown } from 'antd';
import { DownOutlined, CaretDownOutlined } from '@ant-design/icons';
interface DropdownItemProps {
    label: string;
    items: any; // You can replace 'any' with the actual type of your items
}

const DropdownItem = ({ label, items }: DropdownItemProps) => (
    <Dropdown className="mr-5" menu={{ items }}>
        <a className='text-sm' onClick={(e) => e.preventDefault()}>
            <Space>
                {label}
                <CaretDownOutlined />
            </Space>
        </a>
    </Dropdown>
);

export default DropdownItem;
