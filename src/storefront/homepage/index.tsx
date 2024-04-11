import styles from "./index.module.scss";
import {
  LeftOutlined,
  RightOutlined,
} from "@ant-design/icons";
import SchoolIcon from '@mui/icons-material/School';
import GroupsIcon from '@mui/icons-material/Groups';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import { Carousel } from "antd";

import Announcements from "./announcements";
import Banner from "../../components/banner";
import { useState } from "react";
import { IMessage } from "src/interfaces";
import CustomModal from "src/components/custom-modal";

const SlickButtonFix = ({
  currentSlide,
  slideCount,
  children,
  ...props
}: any) => <div {...props}>{children}</div>;

const AdminHomepage = () => {
  const [open, setOpen] = useState(false);
  const [modalContent, setModalContent] = useState<IMessage>({
    title: <></>,
    content: <></>,
  });
  const settings = {
    className: "center",
    arrows: true,
    centerMode: true,
    infinite: true,
    // centerPadding: "10px",
    dots: false,
    slidesToShow: 3,
    // autoplay: true,
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
  const handleCancel = () => {
    setOpen(false);
  };

  const handleOk = () => {
    setOpen(false);
  };
  const handleOpenModalVision = () => {
    setOpen(true);
    setModalContent({
      title: (
        <p className="text-center text-2xl">
          Vision
        </p>
      ),
      content: (
        <>
          <p className="mt-8 ml-4 mb-4 text-xl">
            By 2045, TUCST will be one of the top prestigious training
            institutions in the whole country in scientific research on social
            sciences in the South Red River region - North Central region and
            training programs of culture - arts, sports and tourism.
          </p>
        </>
      ),
    });
  };
  const handleOpenModalValue = () => {
    setOpen(true);
    setModalContent({
      title: (
        <p className="text-center text-2xl">
          Value
        </p>
      ),
      content: (
        <div className="text-center">
          <p className="mt-8 ml-4 mb-4 text-xl ">
            Quality - Professionalism - Cooperation - Development.
          </p>
        </div>
      ),
    });
  };
  const handleOpenModalMission = () => {
    setOpen(true);
    setModalContent({
      title: (
        <p className="text-center text-2xl">
          MISSION
        </p>
      ),
      content: (
        <>
          <p className="mt-8 ml-4 mb-4 text-xl">
            TUCT has the mission of training high-quality human resources and
            scientific research in social sciences with 3 main areas: Culture -
            Arts, Sports and Tourism; contributing to the socio-economic
            development of Thanh Hoa province, the South Red River region -
            North Central region and the whole country.
          </p>
        </>
      ),
    });
  };
  return (
    <div className={styles.container}>
      <Banner />
      <section className="w-full">
        <div className="flex gap-12 justify-center">
          <div className={styles.card}>
            {/* <img loading="lazy" className={styles.card_img} src="/img/training-icon.png" alt="Training Program" /> */}
            <SchoolIcon className="text-6xl text-orange-500" />
            <p className="text-2xl font-bold ">Training Program</p>
          </div>
          <div className={styles.card}>
            {/* <img loading="lazy" className={styles.card_img} src="/img/partner.png" alt="Partner List" /> */}
            <GroupsIcon className="text-6xl text-orange-500" />
            <p className="text-2xl font-bold ">Partner List</p>
          </div>
          <div className={styles.card}>
            {/* <img loading="lazy" className={styles.card_img} src="/img/guidebook.png" alt="Student Guidebook" /> */}
            <AutoStoriesIcon className="text-6xl text-orange-500" />
            <p className="text-2xl font-bold ">Student Guidebook</p>
          </div>
        </div>
      </section>

      <Announcements />
      <section className={`bg_gradient_blue_to_light w-full px-24 py-8`}>
        <div className="flex justify-center text-white-700 font-bold mb-6">
          <p className={` ${styles.letter_space} text-4xl border-b-4`}>
            FACULTIES
          </p>
        </div>
        <Carousel {...settings}>
          <div className="p-4">
            <img loading="lazy" className={styles.fal_img} src="/img/fal-art.png" alt="Art" />
          </div>
          <div className="p-4">
            <img loading="lazy" className={styles.fal_img} src="/img/fal-cul.png" alt="Cultures" />
          </div>
          <div className="p-4">
            <img loading="lazy" className={styles.fal_img} src="/img/fal-lang.png" alt="Language" />
          </div>
          <div className="p-4">
            <img loading="lazy" className={styles.fal_img} src="/img/fal-law.png" alt="Law" />
          </div>
          <div className="p-4">
            <img loading="lazy" className={styles.fal_img} src="/img/fal-music.png" alt="Music" />
          </div>
          <div className="p-4">
            <img loading="lazy" className={styles.fal_img} src="/img/fal-physic.png" alt="Physic" />
          </div>
          <div className="p-4">
            <img loading="lazy" className={styles.fal_img} src="/img/fal-preschool.png" alt="preschool" />
          </div>
          <div className="p-4">
            <img loading="lazy" className={styles.fal_img} src="/img/fal-tourism.png" alt="Tourism" />
          </div>
        </Carousel>
        <div className="text-center ">
          <button
            className={`${styles.btn_see_more} text-white border-double border-4 hover:opacity-70 border-white`}
          >
            See more
          </button>
        </div>
      </section>

      <section className="bg-gray-100 w-full px-24 py-8 ">
        <div className="text-orange-500 font-bold mb-6 items-center">
          <p className="text-3xl underline">INTRODUCE</p>
        </div>
        <div className="flex justify-center">
          <iframe width="860" height="415" src="https://www.youtube.com/embed/_mQCuzXB2uk?si=gcyWuZ6KuN7N4neT" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
      </section>

      <section className={`bg_gradient_blue_to_light w-full px-24 py-8`}>
        <div className="flex justify-center text-white font-bold mb-6">
          <p className={` ${styles.letter_space} text-4xl border-b-4`}>
            MVV OF TUCST
          </p>
        </div>
        <div className={styles.small_card}>
          <div className={styles.news} onClick={handleOpenModalMission}>
            <div className={styles.news_img}>
              <img loading="lazy" className="w-full h-full" src="/img/Mission.png" alt="" />
            </div>
          </div>
          <div className={styles.news} onClick={handleOpenModalVision}>
            <div className={styles.news_img} >
              <img loading="lazy" className="w-full h-full" src="/img/Vision.png" alt="" />
            </div>
          </div>
          <div className={styles.news} onClick={handleOpenModalValue}>
            <div className={styles.news_img}>
              <img loading="lazy" className="w-full h-full" src="/img/Value.png" alt="" />
            </div>
          </div>
        </div>
      </section>

      <section
        className={`${styles.fixed_bg} bg-orange-400 h-96 text-white font-bold relative text-center gap-64 w-full  py-16 flex justify-center`}
      >
        <div className="absolute brightness-50 bg-black opacity-65 top-0 w-full h-full"></div>
        <div className="absolute">
          <p className="text-lg xl:text-3xl break-words">
            "Nurturing passion - Encouraging creativity - Respecting differences - Cooperating for the development"
          </p>
          <div className="flex justify-center xl:gap-64 mt-12">
            <div>
              <p className="text-6xl block text-orange-500">28</p>
              <div className="text-xl">Majors/specializations</div>
            </div>
            <div>
              <p className="text-6xl block text-orange-500">57</p>
              <div className="text-xl">Developing years</div>
            </div>
            <div>
              <p className="text-6xl block text-orange-500">{">"} 4000</p>
              <div className="text-xl"> Học viên</div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 w-full px-24 py-8">
        <div className="flex text-orange-500 font-bold mb-6 justify-center items-center">
          <p className="text-xl border-b-4">IMAGE LIBRARY</p>
        </div>
        <Carousel {...settings}>
          <div className={styles.lib_card}>
            <img loading="lazy" src="/img/lib_1.jpg" alt="Lib 1" />
          </div>
          <div className={styles.lib_card}>
            <img loading="lazy" src="/img/lib_2.jpg" alt="Lib 2" />
          </div>
          <div className={styles.lib_card}>
            <img loading="lazy" src="/img/lib-3.jpg" alt="Lib 3" />
          </div>
          <div className={styles.lib_card}>
            <img loading="lazy" src="/img/lib-4.jpg" alt="Lib 4" />
          </div>
          <div className={styles.lib_card}>
            <img loading="lazy" src="/img/lib-5.jpg" alt="Lib 5" />
          </div>
          <div className={styles.lib_card}>
            <img loading="lazy" src="/img/lib-6.jpg" alt="Lib 6" />
          </div>
          <div className={styles.lib_card}>
            <img loading="lazy" src="/img/lib-7.jpg" alt="Lib 7" />
          </div>
          <div className={styles.lib_card}>
            <img loading="lazy" src="/img/lib-8.jpg" alt="Lib 8" />
          </div>
          <div className={styles.lib_card}>
            <img loading="lazy" src="/img/lib-9.jpg" alt="Lib 9" />
          </div>
          <div className={styles.lib_card}>
            <img loading="lazy" src="/img/lib-10.jpg" alt="Lib 10" />
          </div>
        </Carousel>

      </section>
      <CustomModal
        message={modalContent}
        type=""
        onCancel={handleCancel}
        onOk={handleOk}
        show={open}
      />
    </div>
  );
};

export default AdminHomepage;
