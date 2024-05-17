// DropdownItem.tsx
import { TabsProps } from "antd";
import { Tabs } from 'antd';
type TabItem = {
  key: string,
  label: string,
  children: React.ReactNode,
}
type props = {
  tab: TabItem[];
  onChange: (key:string) => void
}

const TabsItem = ({ tab, onChange }: props) => {
  const items: TabsProps['items'] = tab
    
  return <Tabs defaultActiveKey={items[0].key} items={items} onChange={onChange} />
}

export default TabsItem;
