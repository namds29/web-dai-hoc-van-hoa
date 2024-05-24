import {
  AutoComplete,
  Button,
  Drawer,
  Input,
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
  CLOSE = "Close",
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
  const [contentState, setContentState] = useState(
    data.content !== "" ? data.content : "content"
  );
  const [titleState, setTitleState] = useState(
    data.title !== "" ? data.title : "title"
  );
  const [briefState, setBriefState] = useState(
    data.brief !== "" ? data.brief : "brief"
  );
  const [imgFile, setImgFile] = useState<UploadFile>();
  const buttonOkRef = useRef<HTMLButtonElement>(null);

  const fullWidth = window.innerWidth;

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
          cancelText: BUTTON_TEXT.CLOSE,
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

  const showImgImport =
    editType !== LIST_TYPE.TITLE_CONTENT && editType !== LIST_TYPE.TITLE;
  const showTextEditor =
    editType !== LIST_TYPE.IMAGE &&
    editType !== LIST_TYPE.IMAGE_TITLE &&
    editType !== LIST_TYPE.TITLE;
  const showTextArea = showTextEditor && editType !== LIST_TYPE.TITLE_CONTENT;
  const showTitleEdit = editType !== LIST_TYPE.IMAGE;

  return (
    <Drawer
      title={<p className="text-3xl">{messageText(type).title}</p>}
      open={show}
      closeIcon={false}
      width={fullWidth}
      footer={
        type !== MODAL_TYPE.VIEW ? (
          <div className="float-end">
            <Button
              icon={
                type === MODAL_TYPE.CREATE ? (
                  <PlusCircleOutlined />
                ) : (
                  <SaveOutlined />
                )
              }
              className="confirm-btn mr-2"
              size="large"
              key="ok"
              onClick={handleClickOk}
              ref={buttonOkRef}
            >
              {messageText(type).okText}
            </Button>
            <Button
              className="confirm-btn"
              key="cancel"
              onClick={onCancel}
              size="large"
              type="text"
            >
              {messageText(type).cancelText}
            </Button>
          </div>
        ) : (
          <div className="float-end">
            <Button
              className="confirm-btn"
              key="cancel"
              onClick={onCancel}
              size="large"
              type="text"
            >
              {messageText(type).cancelText}
            </Button>
          </div>
        )
      }
    >
      {type === MODAL_TYPE.VIEW ? (
        <div
          className="view ql-editor"
          dangerouslySetInnerHTML={{ __html: contentState }}
        ></div>
      ) : (
        <div className="w-full grid grid-cols-5 gap-4">
          <div className="col-span-2">
            {showTitleEdit ? (
              <div>
                <div className="font-semibold text-lg">Title</div>
                <div>
                  <AutoComplete
                    value={titleState}
                    placeholder="Title"
                    className="w-full mb-3"
                    onChange={onChangeTitle}
                  />
                </div>
              </div>
            ) : (
              <></>
            )}
            {showTextArea ? (
              <div className="mb-3">
                <div className="font-semibold text-lg">Brief</div>
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
            {showImgImport ? (
              <div>
                <div className="font-semibold text-lg">Thumbnail</div>
                <div className="h-44 w-full mb-9">
                  <Dragger {...props}>
                    <p className="ant-upload-drag-icon">
                      <InboxOutlined />
                    </p>
                    <p className="ant-upload-text">
                      Click or drag image banner here
                    </p>
                    <p className="ant-upload-hint">
                      Support for a single or bulk upload
                    </p>
                  </Dragger>
                </div>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div className="col-span-3">
            {showTextEditor ? (
              <div>
                <div className="font-semibold text-lg">Content</div>
                <div className="w-full mb-3">
                  <TextEditor
                    content={contentState}
                    editContent={editContentState}
                  ></TextEditor>
                </div>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      )}
    </Drawer>
  );
}

export default EvcModal;
