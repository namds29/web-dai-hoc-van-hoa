import { ReactJSXElement } from "node_modules/@emotion/react/types/jsx-namespace";

export type IMessage = {
  title: ReactJSXElement;
  content: ReactJSXElement;
};

export enum MODAL_TYPE {
  EDIT = "edit",
  CREATE = "create",
  VIEW = "view",
}

export enum LIST_TYPE {
  IMAGE = 1,
  IMAGE_TITLE = 2,
  IMAGE_TITLE_CONTENT = 3,
  TITLE_CONTENT = 4
}
