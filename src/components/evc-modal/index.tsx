import {
  AutoComplete,
  Button,
  Input,
  Modal,
  Upload,
  UploadFile,
  UploadProps,
} from "antd";
import { MouseEventHandler, useEffect, useRef, useState } from "react";

import { LIST_TYPE, MODAL_TYPE } from "src/interfaces";
import TextEditor from "../text-editor";
import {
  InboxOutlined,
  PlusCircleOutlined,
  SaveOutlined,
} from "@ant-design/icons";

import "react-quill/dist/quill.core.css";

type IProps = {
  editType: number;
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
const { TextArea } = Input;

function EvcModal({
  editType,
  type,
  data,
  show,
  onCancel,
  onOk,
}: Readonly<IProps>): JSX.Element {
  console.log(data);
  console.log(type, editType);

  const [contentState, setContentState] = useState(data.content);
  const [titleState, setTitleState] = useState(data.title);
  const [briefState, setBriefState] = useState(data.brief);
  const [imgFile, setImgFile] = useState<UploadFile>();
  const buttonOkRef = useRef<HTMLButtonElement>(null);

  console.log(contentState);
  console.log(data.content);

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
    setBriefState(data.brief);
    if (type === MODAL_TYPE.CREATE) {
      setContentState("");
      setTitleState("");
      setBriefState("");
    }
  }, [data, type]);

  const props: UploadProps = {
    name: "file",
    multiple: true,
    maxCount: 1,
    beforeUpload: () => false,
    onChange(info) {
      setImgFile(info.fileList[0].originFileObj);
    },
  };

  const editContentState = (value: any) => {
    setContentState(value);
  };

  const onChangeTitle = (data: string) => {
    setTitleState(data);
  };

  const onChangeBrief = (event: any) => {
    setBriefState(event.target.value);
  };

  const handleClickOk = () => {
    const value = {
      id: data.id,
      title: titleState,
      content: contentState,
      brief: briefState,
      imgFile: imgFile,
    };

    onOk(value);
  };

  const showImgImport = editType !== LIST_TYPE.TITLE_CONTENT;
  const showTextEditor =
    editType !== LIST_TYPE.IMAGE && editType !== LIST_TYPE.IMAGE_TITLE;
  const showTextArea = showTextEditor && editType !== LIST_TYPE.TITLE_CONTENT;
  const showTitleEdit = editType !== LIST_TYPE.IMAGE;

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
              <Button
                className="confirm-btn"
                key="cancel"
                onClick={onCancel}
                type="text"
              >
                {messageText(type).cancelText}
              </Button>,
            ]
          : []
      }
    >
      {type === MODAL_TYPE.VIEW ? (
        <div
          className="view ql-editor"
          dangerouslySetInnerHTML={{ __html: contentState }}
        ></div>
      ) : (
        <>
          <div className="w-full">
            {showTitleEdit ? (
              <AutoComplete
                value={titleState}
                placeholder="Title"
                className="w-full mb-3"
                onChange={onChangeTitle}
              />
            ) : (
              <></>
            )}
            {showTextArea ? (
              <div className="mb-3">
                <TextArea
                  rows={4}
                  value={briefState}
                  placeholder="Please input brief in here"
                  onChange={onChangeBrief}
                />
              </div>
            ) : (
              <></>
            )}
            {showTextEditor ? (
              <div className="mb-3">
                <TextEditor
                  content={contentState}
                  editContent={editContentState}
                ></TextEditor>
              </div>
            ) : (
              <></>
            )}
          </div>
          {showImgImport ? (
            <div className="h-44 mb-9">
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
          ) : (
            <></>
          )}
        </>
      )}
    </Modal>
  );
}

export default EvcModal;
