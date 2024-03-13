import styles from "../index.module.scss";
import {
  LeftOutlined,
  RightOutlined,
  CaretRightOutlined,
} from "@ant-design/icons";

import { Carousel } from "antd";

const libImgStyle: React.CSSProperties = {
  //   width: "400px",
  height: "300px",

  textAlign: "center",
  background: "rgb(254 202 202)",
  objectFit: "cover",
  cursor: "pointer",
};
const SlickButtonFix = ({
  currentSlide,
  slideCount,
  children,
  ...props
}: any) => <div {...props}>{children}</div>;

const AdminHomepage = () => {
  const settings = {
    className: "center",
    arrows: true,
    centerMode: true,
    infinite: true,
    // centerPadding: "10px",
    dots: false,
    slidesToShow: 3,
    autoplay: true,
    prevArrow: (
      <SlickButtonFix>
        <div className="h-7 w-7 flex justify-center items-center bg-red-900 opacity-60 rounded-3xl">
          <LeftOutlined />
        </div>
      </SlickButtonFix>
    ),
    nextArrow: (
      <SlickButtonFix>
        <div className="h-7 w-7 flex justify-center items-center bg-red-900 opacity-60 rounded-3xl">
          <RightOutlined />
        </div>
      </SlickButtonFix>
    ),
    focusOnSelect: true,
    draggable: true,

    // afterChange: this.nextClick
  };

  return <div></div>;
};

export default AdminHomepage;
