import { ReactJSXElement } from "node_modules/@emotion/react/types/jsx-namespace";

export type IMessage = {
  title: ReactJSXElement;
  content: ReactJSXElement;
};

export enum MODAL_TYPE {
  EDIT = "edit",
  CREATE = "create",
  VIEW = "view",
  APPROVE = "approve",
}

export enum LIST_TYPE {
  IMAGE = 1,
  IMAGE_TITLE = 2,
  IMAGE_TITLE_CONTENT = 3,
  TITLE_CONTENT = 4,
  TITLE = 5
}

export type IDropdownItemType = {
  label: string;
  key: string;
  listType?: number;
};
export type ITabsType = {
  label: string;
  key: string;
  listType?: number;
  children: any;
};
export type IPostDataType = {
  id: number;
  title: string;
  thumpnailID: number;
  brief: string;
  content: string;
  typeID: number;
  modifiedByUserID?: number;
  createdByUserID?: number;
  isApproved?: number;
  isDeleted?: number;
  createdAt?: string;
  updatedAt?: string;
  ordering?: number;
  categoryID: string;
  name?: string;
  type?: number;
  path?: string;
  displayOnImageLibrary?: number;
  isHighlighted?: number;
};

export type IBannerDataType = {
  id: number;
  name: string;
  timeOut: number;
  mediaFileID: number;
  modifiedByUserID: number;
  createdByUserID: number;
  createdAt: string;
  updatedAt: string;
  ordering: number;
  isDeleted: number;
  categoryID: string;
  fileID: number;
  path: string;
};

export type IAddmissionDataType = {
  id: number;
  title: string;
  mediaFileID: any;
  ordering: number;
  categoryID: number;
  urlToExternalMedia: string;
  modifiedByUserID: number;
  createdByUserID: number;
  createdAt: string;
  updatedAt: string;
  content: string;
};

export type IGetAddmissionType = {
  categoryID: number;
};

export type ICreatePostType = {
  thumpnailImage: File;
  title: string;
  brief: string;
  content: string;
  typeID: number;
  categoryID: string;
};

export type ICreateAddmissionType = {
  title: string;
  content: string;
  mediaFileID?: any;
  ordering?: number;
  categoryID: string;
  urlToExternalMedia?: string;
};

export type ICreateBannerType = {
  thumpnailImage: File;
  name: string;
  timeOut?: number;
  ordering?: number;
  categoryID: string;
};

export type IEditPostType = {
  thumpnailImage?: File;
  title?: string;
  brief?: string;
  content?: string;
  isHighlighted?: number;
};

export type IEditAddmissionType = {
  title: string;
  content: string;
  mediaFileID?: any;
  ordering?: number;
  urlToExternalMedia?: string;
};
export type IEditPositionBanner = {
  orderings: IPositionItem[]
}
export type IEditBannerType = {
  thumpnailImage: File;
};

export type IEditAnnouncementType = {
  title: string;
  postID?: number;
};

export enum PostCategory {
  HIGHLIGHT = "highlight",
  ANNOUNCEMENT = "announcement",
  SCHOOL_ACTIVITIES = "schoolActivities",
  CAMPUS_LIFE = "campusLife",
  INTERNATIONAL_COOPERATION = "interCoop",
  RECRUITMENT = "recruitment",
  SCIENCE_TOPIC = "scienceTopic",
  CONFERENCES = "conferences",
  PUBLISH = "publish",
}

export type DataType = { id: number; title: string; content: string };

export type IPositionItem = {
  id: number,
  ordering: number
}
export type IEditType = {
  id?: number;
  type: string;
};

export enum ITEM_NEWS {
  HOT_NEWS = "hot_news",
  NEWS = "news",
  SCHOOL_ACTIVITIES = "school_activities",
  CAMPUS_LIFE = "campus_life",
  INTERNATIONAL_COOPERATION = "inter_coop",
}

export enum ITEM_HOMEPAGE {
  BANNER_IMG = "homepage_banner",
  HIGHLIGHT = "highlight",
  ANNOUNCEMENT = "announcement",
  FACULTIES = "homepage_faculties",
  MVV = "mvv",
  IMG_LIB = "homepage_imglib",
}

export enum ITEM_RESEARCH {
  JOURNAL = "journal",
  SCIENCE_TOPIC = "science_topic",
  CONFERENCES = "conferences",
  PUBLISH = "publish",
}

export enum CATEGORY_ID {
  FUNTIONAL_UNITS = 2,
  FORMAL_TRAINING = 3,
}
