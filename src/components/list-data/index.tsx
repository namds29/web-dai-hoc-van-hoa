import React from "react";
import { EditOutlined, DeleteOutlined, EyeOutlined } from "@ant-design/icons";
import { Button, List } from "antd";

const IconText = ({
  icon,
  text,
  danger,
  onClick,
}: {
  icon: React.FC;
  text: string;
  danger: boolean;
  onClick: () => void;
}) => (
  <Button icon={React.createElement(icon)} danger={danger} onClick={onClick}>
    {text}
  </Button>
);

const ListData = ({
  data,
  section,
  action,
  type
}: {
  data: any;
  section: string;
  action?: any;
  type?: number;
}) => {

  return (
    <div>
      <div className="flex justify-end mb-4">
        <Button
          type="primary"
          className="bg-black"
          onClick={() => {
            action({ type: "create" });
          }}
        >
          Add new
        </Button>
      </div>
      <List
        header={
          <div className="text-white font-semibold text-2xl">
            List of {section}
          </div>
        }
        bordered
        dataSource={data}
        renderItem={(item: any) => (
          <List.Item
            extra={
              <img
                width={272}
                alt="logo"
                src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
              />
            }
            actions={[
              <IconText
                key={item.id}
                icon={EyeOutlined}
                text="View"
                danger={false}
                onClick={() => {
                  action({ id: item.id, type: "view" });
                }}
              />,
              <IconText
                key={item.id}
                icon={EditOutlined}
                text="Edit"
                danger={false}
                onClick={() => {
                  action({ id: item.id, type: "edit" });
                }}
              />,
              <IconText
                key={item.id}
                icon={DeleteOutlined}
                text="Delete"
                danger={true}
                onClick={() => {
                  action({ id: item.id, type: "delete" });
                }}
              />,
            ]}
          >
            <List.Item.Meta title={<p className="text-xl">{item.title}</p>} />
            {item.content}
          </List.Item>
        )}
      />
    </div>
  );
};

export default ListData;
