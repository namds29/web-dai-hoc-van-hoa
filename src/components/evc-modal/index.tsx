import {
  AutoComplete,
  Button,
  Modal,
  Upload,
  UploadProps,
  message,
} from "antd";
import { MouseEventHandler, useEffect, useRef, useState } from "react";

import { MODAL_TYPE } from "src/interfaces";
import TextEditor from "../text-editor";
import {
  InboxOutlined,
  PlusCircleOutlined,
  SaveOutlined,
} from "@ant-design/icons";

type IProps = {
  type: string;
  data: any;
  show?: boolean;
  onCancel?: MouseEventHandler<HTMLElement>;
  onOk: any;
};

type MessageText = {
  title: string;
  okText?: string;
  cancelText?: string;
};

enum MODAL_TITLE {
  EDIT = "Edit",
  CREATE = "Create",
  VIEW = "View",
}

enum BUTTON_TEXT {
  SAVE = "Save",
  CREATE = "Create",
  CANCEL = "Cancel",
}

const { Dragger } = Upload;

function EvcModal({
  type,
  data,
  show,
  onCancel,
  onOk,
}: Readonly<IProps>): JSX.Element {
  console.log(data);

  const [contentState, setContentState] = useState(data.content);
  const [titleState, setTitleState] = useState(data.title);
  const buttonOkRef = useRef<HTMLButtonElement>(null);

  const messageText = (type: string): MessageText => {
    switch (type) {
      case MODAL_TYPE.EDIT:
        return {
          title: MODAL_TITLE.EDIT,
          okText: BUTTON_TEXT.SAVE,
          cancelText: BUTTON_TEXT.CANCEL,
        };
      case MODAL_TYPE.CREATE:
        return {
          title: MODAL_TITLE.CREATE,
          okText: BUTTON_TEXT.CREATE,
          cancelText: BUTTON_TEXT.CANCEL,
        };
      case MODAL_TYPE.VIEW:
        return {
          title: MODAL_TITLE.VIEW,
        };
      default:
        return { title: "", okText: "", cancelText: "" };
    }
  };

  useEffect(() => {
    setContentState(data.content);
    setTitleState(data.title);
    if (type === MODAL_TYPE.CREATE) {
      setContentState("");
      setTitleState("");
    }
  }, [data, type]);

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

  const editContentState = (value: any) => {
    setContentState(value);
  };

  const onChangeTitle = (data: string) => {
    setTitleState(data);
  };

  const handleClickOk = () => {
    const value = {
      id: data.id,
      title: titleState,
      content: contentState,
    };

    onOk(value);
  };

  return (
    <Modal
      className="custom-modal"
      title={messageText(type).title}
      centered
      open={show}
      onCancel={onCancel}
      width={900}
      footer={
        type !== MODAL_TYPE.VIEW
          ? [
              <Button
                icon={
                  type === MODAL_TYPE.CREATE ? (
                    <PlusCircleOutlined />
                  ) : (
                    <SaveOutlined />
                  )
                }
                className="confirm-btn"
                key="ok"
                onClick={handleClickOk}
                ref={buttonOkRef}
              >
                {messageText(type).okText}
              </Button>,
              <Button className="confirm-btn" key="cancel" onClick={onCancel} type="text">
                {messageText(type).cancelText}
              </Button>,
            ]
          : []
      }
    >
      <div className="w-full">
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
    </Modal>
  );
}

export default EvcModal;
