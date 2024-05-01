import React from "react";
import { EditOutlined, DeleteOutlined, EyeOutlined } from "@ant-design/icons";
import { Button, List } from "antd";
import { IPostDataType, LIST_TYPE } from "src/interfaces";

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
  type,
}: {
  data: any;
  section: string;
  action?: any;
  type?: number;
}) => {
  console.log(data);
  console.log(type);

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
        renderItem={(item: IPostDataType) => (
          <List.Item
            extra={
              <img
                width={272}
                alt="logo"
                src={`${import.meta.env.VITE_API_URL}${item.path}`}
              />
            }
            actions={
              type === LIST_TYPE.IMAGE || type === LIST_TYPE.IMAGE_TITLE
                ? [
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
                  ]
                : [
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
                  ]
            }
          >
            <List.Item.Meta
              title={
                <p className="text-xl">
                  {type !== LIST_TYPE.IMAGE ? item.title : ""}
                </p>
              }
            />
            {type === LIST_TYPE.IMAGE_TITLE_CONTENT ||
            type === LIST_TYPE.TITLE_CONTENT
              ? item.brief
              : ""}
          </List.Item>
        )}
      />
    </div>
  );
};

export default ListData;
