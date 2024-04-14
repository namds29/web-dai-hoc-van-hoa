import React, { useState } from "react";
import {
  EditOutlined,
  DeleteOutlined,
  InboxOutlined,
  SaveOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";
import { AutoComplete, Button, List, Upload, message } from "antd";
import type { UploadProps } from "antd";
import TextEditor from "../texteditor";
import { ReactJSXElement } from "node_modules/@emotion/react/types/jsx-namespace";

const { Dragger } = Upload;

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

const TextImageUpload = ({
  dataValue,
  haveContent,
  editSection,
  editValue,
}: {
  dataValue?: any;
  haveContent: boolean;
  editSection: string;
  editValue?: any;
}) => {
  const [editFlg, setEditFlg] = useState(false);
  const [openAdd, setOpenAdd] = useState(false);
  const [contentState, setContentState] = useState("");
  const [titleState, setTitleState] = useState("");
  const [currentId, setCurrentId] = useState(null);
  // const [imgState, setImgState] = useState("");

  const editContentState = (value: any) => {
    setContentState(value);
  };

  const props: UploadProps = {
    name: "file",
    multiple: true,
    action: "https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188",
    onChange(info) {
      const { status } = info.file;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
  };

  const onChangeTitle = (data: string) => {
    setTitleState(data);
  };

  const editRender = (haveContent: boolean): ReactJSXElement => {
    if (haveContent) {
      return (
        <div className="mb-14">
          <h4 className="font-semibold px-5 py-3 border-2 border-slate-400 w-fit rounded-lg">
            {editFlg ? "Edit" : "Add new"}
          </h4>
          <div className="grid grid-cols-2 gap-x-20 mt-6 w-9/12">
            <div className="h-44">
              <AutoComplete
                value={titleState}
                placeholder="Title"
                className="w-full mb-3"
                onChange={onChangeTitle}
              />
              <TextEditor
                content={contentState}
                editContent={editContentState}
              ></TextEditor>
            </div>
            <div className="h-44">
              <Dragger {...props}>
                <p className="ant-upload-drag-icon">
                  <InboxOutlined />
                </p>
                <p className="ant-upload-text">
                  Click or drag file to this area to upload
                </p>
                <p className="ant-upload-hint">
                  Support for a single or bulk upload. Strictly prohibited from
                  uploading company data or other banned files.
                </p>
              </Dragger>
            </div>
          </div>
          <div className="flex flex-row-reverse mt-5 w-9/12">
            <Button
              onClick={() => {
                setOpenAdd(false);
              }}
            >
              Cancel
            </Button>
            {editFlg ? (
              <Button
                icon={<SaveOutlined />}
                type="primary"
                className="bg-[#4096ff] mr-3"
                onClick={() => {
                  const state = {
                    id: currentId,
                    title: titleState,
                    content: contentState,
                    img: {},
                    type: "edit",
                  };
                  editValue(state);
                }}
              >
                Save
              </Button>
            ) : (
              <Button
                icon={<PlusCircleOutlined />}
                type="primary"
                className="bg-[#4096ff] mr-3"
                onClick={() => {
                  const state = {
                    
                    title: titleState,
                    content: contentState,
                    img: {},
                    type: "create",
                  };
                  editValue(state);
                }}
              >
                Create
              </Button>
            )}
          </div>
        </div>
      );
    }

    return (
      <div className="mb-14">
        <h4 className="font-semibold px-5 py-3 border-2 border-slate-400 w-fit rounded-lg">
          Add new
        </h4>
        <div className="grid grid-cols-2 gap-x-20 mt-6 w-9/12">
          <div className="h-44">
            <AutoComplete
              value={titleState}
              placeholder="Title"
              className="w-full"
              onChange={onChangeTitle}
            />
          </div>
          <div className="h-44">
            <Dragger {...props}>
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">
                Click or drag file to this area to upload
              </p>
              <p className="ant-upload-hint">
                Support for a single or bulk upload. Strictly prohibited from
                uploading company data or other banned files.
              </p>
            </Dragger>
          </div>
        </div>
        <div className="flex flex-row-reverse mt-5 w-9/12">
          <Button
            onClick={() => {
              setOpenAdd(false);
            }}
          >
            Cancel
          </Button>
          <Button
            icon={<SaveOutlined />}
            type="primary"
            className="bg-black mr-3"
            onClick={() => {
              setOpenAdd(true);
            }}
          >
            Save
          </Button>
        </div>
      </div>
    );
  };

  return (
    <>
      {!openAdd ? <></> : editRender(haveContent)}
      <List
        header={
          <div className="text-white font-semibold text-2xl">
            List of {editSection}
          </div>
        }
        footer={
          <div>
            <Button
              type="primary"
              className="bg-black"
              onClick={() => {
                setContentState("");
                setTitleState("");
                setOpenAdd(true);
                setEditFlg(false);
                
              }}
            >
              Add new
            </Button>
          </div>
        }
        bordered
        dataSource={dataValue}
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
                icon={EditOutlined}
                text="Edit"
                danger={false}
                onClick={() => {
                  setCurrentId(item.id);
                  setContentState(item.content);
                  setTitleState(item.title);
                  setOpenAdd(true);
                  setEditFlg(true);
                }}
              />,
              <IconText
                key={item.id}
                icon={DeleteOutlined}
                text="Delete"
                danger={true}
                onClick={() => {
                  setOpenAdd(false);
                }}
              />,
            ]}
          >
            <List.Item.Meta title={<p className="text-xl">{item.title}</p>} />
            {item.content}
          </List.Item>
        )}
      />
    </>
  );
};

export default TextImageUpload;
