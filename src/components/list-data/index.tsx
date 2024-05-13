import React, { useState } from "react";
import { EditOutlined, DeleteOutlined, EyeOutlined } from "@ant-design/icons";
import { Button, List } from "antd";
import { IMessage, IPostDataType, LIST_TYPE } from "src/interfaces";
import CustomModal from "../custom-modal";

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
  const [open, setOpen] = useState(false);
  const [modalContent, setModalContent] = useState<IMessage>({
    title: <></>,
    content: <></>,
  });
  const [currentItem, setCurrentItem] = useState();

  const hanleDelete = (id: any) => {
    setOpen(true);
    setCurrentItem(id);
    setModalContent({
      title: <p className="text-xl">Confirm</p>,
      content: <div>Do you want delete this ?</div>,
    });
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const handleOk = () => {
    action({ id: currentItem, type: "delete" });
    setOpen(false);
  };

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
                      onClick={() => hanleDelete(item.id)}
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
                      onClick={() => hanleDelete(item.id)}
                    />,
                  ]
            }
          >
            <div className="w-full">
              <List.Item.Meta
                title={
                  <p className="text-xl">
                    {type !== LIST_TYPE.IMAGE ? item.title : ""}
                  </p>
                }
                description={
                  <p>
                    {type === LIST_TYPE.IMAGE_TITLE_CONTENT ||
                    type === LIST_TYPE.TITLE_CONTENT
                      ? item.brief
                      : ""}
                  </p>
                }
                className="mb-3"
              />
              <img
                width={272}
                alt="logo"
                src={`${import.meta.env.VITE_API_URL}${item.path}`}
              />
            </div>
          </List.Item>
        )}
      />
      <CustomModal
        message={modalContent}
        type="confirm"
        onCancel={handleCancel}
        onOk={handleOk}
        show={open}
      />
    </div>
  );
};

export default ListData;
