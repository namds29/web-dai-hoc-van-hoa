import {
  CloseCircleFilled,
  QuestionCircleFilled,
  WarningFilled,
} from "@ant-design/icons";
import { Button, Modal } from "antd";
import { MouseEventHandler, ReactNode, useRef } from "react";

import { IMessage } from "src/interfaces";

type IProps = {
  type: string;
  message: IMessage;
  show?: boolean;
  onCancel?: MouseEventHandler<HTMLElement>;
  onOk?: MouseEventHandler<HTMLElement>;
};

type MessageText = {
  title: string;
  okText: string;
  cancelText: string;
};

export enum MESSAGE_TYPE {
  ERROR = "error",
  WARNING = "warning",
  CONFIRM = "confirm",
  DEFAULT = "",
}

enum MESSAGE_TITLE {
  ERROR = "Error",
  WARNING = "Warning",
  CONFIRM = "Confirm",
  DEFAULT = "",
}

function CustomModal({
  type,
  message,
  show,
  onCancel,
  onOk,
}: IProps): JSX.Element {
  const buttonOkRef = useRef<HTMLButtonElement>(null);
  const cancelText = "Cancel";
  const okText = "Ok";

  const messageText = (type: string): MessageText => {
    switch (type) {
      case MESSAGE_TYPE.ERROR:
        return {
          title: MESSAGE_TITLE.ERROR,
          okText: okText,
          cancelText: cancelText,
        };
      case MESSAGE_TYPE.CONFIRM:
        return {
          title: MESSAGE_TITLE.CONFIRM,
          okText: okText,
          cancelText: cancelText,
        };
      case MESSAGE_TYPE.WARNING:
        return {
          title: MESSAGE_TITLE.WARNING,
          okText: okText,
          cancelText: cancelText,
        };
      default:
        return { title: "", okText: "", cancelText: "" };
    }
  };

  const showIcon = (type: string): ReactNode => {
    switch (type) {
      case MESSAGE_TYPE.ERROR:
        return (
          <CloseCircleFilled style={{ color: "#f40000", fontSize: "2.6em" }}   />
        );
      case MESSAGE_TYPE.WARNING:
        return (
          <WarningFilled style={{ color: "#ffd965", fontSize: "2.6em" }}   />
        );
      case MESSAGE_TYPE.CONFIRM:
        return (
          <QuestionCircleFilled
            style={{ color: "#0033cc", fontSize: "2.6em" }}            />
        );
      default:
        return <></>;
    }
  };

  return (
    <>
      <Modal
        className="custom-modal"
        title={message.title}
        centered
        open={show}
        onCancel={onCancel}
        width={type === MESSAGE_TYPE.DEFAULT ? 800 : ""}
        footer={
          type !== MESSAGE_TYPE.CONFIRM
            ? type === MESSAGE_TYPE.DEFAULT
              ? []
              : [
                <Button
                  className="confirm-btn"
                  key="ok"
                  onClick={onOk}
                  ref={buttonOkRef}
                >
                  {messageText(type).okText}
                </Button>,
              ]
            : [
              <Button
                className="confirm-btn"
                key="ok"
                onClick={onOk}
                ref={buttonOkRef}
              >
                {messageText(type).okText}
              </Button>,
              <Button className="confirm-btn" key="cancel" onClick={onCancel}>
                {messageText(type).cancelText}
              </Button>,
            ]
        }
      >
        <div className="flex items-center">
          <div className="mr-2">{showIcon(type)}</div>
          <span>{message.content}</span>
        </div>
      </Modal>
    </>
  );
}

export default CustomModal;
