import React, { useState } from "react";
import {
  EditOutlined,
  DeleteOutlined,
  EyeOutlined,
  CheckCircleOutlined,
  MoreOutlined,
  CloseCircleOutlined,
  HighlightOutlined,
  StopOutlined,
} from "@ant-design/icons";
import { Button, Dropdown, List, MenuProps, Tag } from "antd";
import { IMessage, IPostDataType, LIST_TYPE } from "src/interfaces";
import CustomModal from "../custom-modal";
import moment from "moment";

const IconText = ({
  icon,
  text,
  danger,
  onClick,
}: {
  icon: React.FC;
  text: string;
  danger: boolean;
  disable?: boolean;
  onClick: () => void;
}) => (
  <a style={danger ? { color: "red" } : {}} onClick={onClick}>
    {React.createElement(icon)}
    <span className="ml-2">{text}</span>
  </a>
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
  const [actionType, setActionType] = useState<string>();

  const hanleDelete = (id: any) => {
    setOpen(true);
    setCurrentItem(id);
    setActionType("delete");
    setModalContent({
      title: <p className="text-xl">Confirm</p>,
      content: <div>Do you want delete this ?</div>,
    });
  };

  const hanleApprove = (item: any) => {
    setOpen(true);
    setCurrentItem(item.id);
    setActionType(item.isApproved ? "disapprove" : "approve");
    setModalContent({
      title: <p className="text-xl">Confirm</p>,
      content: (
        <div>
          Do you want {item.isApproved ? "disapprove" : "approve"} this ?
        </div>
      ),
    });
  };

  const hanleHighlight = (item: any) => {
    setOpen(true);
    setCurrentItem(item.id);
    setActionType(item.isHighlighted ? "unhighlight" : "highlight");
    setModalContent({
      title: <p className="text-xl">Confirm</p>,
      content: (
        <div>
          Do you want {item.isHighlighted ? "unhighlight" : "highlight"} this ?
        </div>
      ),
    });
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const handleOk = () => {
    action({ id: currentItem, type: actionType });
    setOpen(false);
  };

  const onGetItem = (item: any): MenuProps["items"] => {
    const bannerItems: MenuProps["items"] = [
      {
        key: "1",
        label: (
          <IconText
            icon={EditOutlined}
            text="Edit"
            danger={false}
            onClick={() => {
              action({ id: item.id, type: "edit" });
            }}
          />
        ),
      },
      {
        key: "2",
        label: (
          <IconText
            icon={DeleteOutlined}
            text="Delete"
            danger={true}
            onClick={() => hanleDelete(item.id)}
          />
        ),
      },
    ];

    const postItems: MenuProps["items"] = [
      {
        key: "1",
        label: (
          <IconText
            icon={EyeOutlined}
            text="View"
            danger={false}
            onClick={() => {
              action({ id: item.id, type: "view" });
            }}
          />
        ),
      },
      {
        key: "2",
        label: (
          <IconText
            icon={EditOutlined}
            text="Edit"
            danger={false}
            onClick={() => {
              action({ id: item.id, type: "edit" });
            }}
          />
        ),
      },
      {
        key: "3",
        label: (
          <IconText
            icon={!item.isApproved ? CheckCircleOutlined : CloseCircleOutlined}
            text={!item.isApproved ? "Approve" : "Disapprove"}
            danger={false}
            onClick={() => hanleApprove(item)}
          />
        ),
      },
      {
        key: "4",
        label: (
          <IconText
            icon={!item.isHighlighted ? HighlightOutlined : StopOutlined}
            text={!item.isHighlighted ? "Highlight" : "Unhighlight"}
            danger={false}
            onClick={() => hanleHighlight(item)}
          />
        ),
      },
      {
        key: "5",
        label: (
          <IconText
            icon={DeleteOutlined}
            text="Delete"
            danger={true}
            onClick={() => hanleDelete(item.id)}
          />
        ),
      },
    ];

    return type === LIST_TYPE.IMAGE ||
      type === LIST_TYPE.IMAGE_TITLE ||
      type === LIST_TYPE.TITLE
      ? bannerItems
      : postItems;
  };

  return (
    <div>
      <div className="flex justify-end mb-4 gap-3">
        {section === "Banner image" && (
          <Button
            type="primary"
            className="bg-black"
            onClick={() => {
              action({ type: "swap" });
            }}
          >
            Swap position
          </Button>
        )}
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
            actions={[
              <Dropdown
                key="dropdown"
                menu={{ items: onGetItem(item) }}
                placement="bottomLeft"
                arrow
              >
                <Button shape="circle" icon={<MoreOutlined />} />
              </Dropdown>,
            ]}
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
              {type === LIST_TYPE.IMAGE_TITLE_CONTENT ? (
                <div className="mb-3 text-red-700 ">
                  <div className="mb-3">
                    {moment(item.createdAt).format("YYYY/MM/DD")}
                  </div>
                  <div>
                    {item.isApproved ? (
                      <Tag color="green" icon={<CheckCircleOutlined />}>
                        Approved
                      </Tag>
                    ) : (
                      <Tag color="red" icon={<CloseCircleOutlined />}>
                        Disapproved
                      </Tag>
                    )}
                  </div>
                </div>
              ) : (
                <></>
              )}
              {type !== LIST_TYPE.TITLE ? (
                <img
                  width={272}
                  alt="logo"
                  src={`${import.meta.env.VITE_API_URL}${item.path}`}
                />
              ) : (
                <></>
              )}
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
