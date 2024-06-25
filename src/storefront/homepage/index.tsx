import styles from "./index.module.scss";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import SchoolIcon from "@mui/icons-material/School";
import GroupsIcon from "@mui/icons-material/Groups";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import { Carousel } from "antd";

import Announcements from "./announcements";
import Banner from "../../components/banner";
import { useEffect, useState } from "react";
import {
  IBannerDataType,
  IMessage,
  IPostDataType,
  ITEM_HOMEPAGE,
} from "src/interfaces";
import CustomModal from "src/components/custom-modal";
import HomepageService from "src/services/homepage/homepageService";
import { Link, useNavigate } from "react-router-dom";

const SIZE = 3;

const SlickButtonFix = ({
  currentSlide,
  slideCount,
  children,
  ...props
}: any) => <div {...props}>{children}</div>;


const Homepage = () => {
  const [open, setOpen] = useState(false);
  const [modalContent, setModalContent] = useState<IMessage>({
    title: <></>,
    content: <></>,
  });
  const [higlightData, setHiglightData] = useState<IPostDataType[]>([]);
  const [announcementData, setAnnouncementData] = useState<IPostDataType[]>([]);
  const [mvvData, setMvvData] = useState<IPostDataType[]>([]);
  const [bannerData, setBannerData] = useState<IBannerDataType[]>([]);
  const navigate = useNavigate();
  const settings = {
    className: "center",
    arrows: true,
    centerMode: true,
    infinite: true,
    centerPadding: "10px",
    dots: false,
    slidesToShow: window.innerWidth < 800 ? 2 : 3,
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
    draggable: true,
    // afterChange: this.nextClick
  };
  const handleCancel = () => {
    setOpen(false);
  };

  const handleOk = () => {
    setOpen(false);
  };

  const handleOpenModalMVV = (title: string, content: string) => {
    setOpen(true);
    setModalContent({
      title: <p className="text-center text-2xl">{title}</p>,
      content: (
        <div
          className="view ql-editor"
          dangerouslySetInnerHTML={{ __html: content }}
        ></div>
      ),
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const results = await Promise.allSettled([
          getPostList('NEWS').then(data => ({ source: 'NEWS', data })),
          getPostList('CAMPUS_LIFE').then(data => ({ source: 'CAMPUS_LIFE', data })),
          getPostList('INTERNATIONAL_COOPERATION').then(data => ({ source: 'INTERNATIONAL_COOPERATION', data })),
          getPostList('SCHOOL_ACTIVITIES').then(data => ({ source: 'SCHOOL_ACTIVITIES', data })),
          getPostList('MVV').then(data => ({ source: 'MVV', data })),
          getBannerList().then(data => ({ source: 'BANNER_LIST', data })),
          getAnnouncement().then(data => ({ source: 'ANNOUNCEMENT', data }))
        ]);
        
        const formattedResults = results.map(result => {
          if (result.status === 'fulfilled') {
            return { source: result.value.source, data: result.value.data };
          } else {
            return { source: 'Unknown', error: result.reason };
          }
        });

        const sortedHighlight = formattedResults[3].data.sort(
          (a: any, b:any) =>
            new Date(b.createdAt ?? "").getTime() -
            new Date(a.createdAt ?? "").getTime()
        );

        setHiglightData(sortedHighlight);
        setAnnouncementData(formattedResults[6].data);
        setBannerData(formattedResults[5].data);
        setMvvData(formattedResults[4].data)
      } catch (error) {
        console.error('Error fetching data', error);
      }
    }
   fetchData()
  }, []);

  const getPostList = async (id: any) => {
    try {
      const res = await HomepageService.listPostHomepageWithCategoryId(id);
      return res.data
    } catch (error: any) {
      if (error) {
        console.log(error);
      }
    }
  };

  const getBannerList = async () => {
    try {
      const res = await HomepageService.listBannerHomepage();
      if (res?.data) {
        return res.data
      }
    } catch (error: any) {
      if (error) {
        console.log(error);
      }
    }
  };

  const getAnnouncement = async () => {
    try {
      const res = await HomepageService.listAnnouncement();
      if (res?.data) {
        return res.data
      }
    } catch (error: any) {
      if (error) {
        console.log(error);
      }
    }
  };

  return (
    
    <div className={styles.container}>
      <Banner />
      <section className="w-full">
        <div className="flex gap-4 xl:gap-12 justify-center">
          <div className={styles.card} onClick={() => navigate("/academics")}>
            <SchoolIcon className="!text-4xl xl:!text-6xl text-orange-500" />
            <p className="text-sm xl:text-2xl font-bold ">Training Program</p>
          </div>
          <div
            className={styles.card}
            onClick={() => navigate("/international-partners")}
          >
            <GroupsIcon className="!text-4xl xl:!text-6xl text-orange-500" />
            <p className="text-sm xl:text-2xl font-bold">Partner List</p>
          </div>
          <div
            className={styles.card}
            onClick={() => navigate("/student-support")}
          >
            <AutoStoriesIcon className="!text-4xl xl:!text-6xl text-orange-500" />
            <p className="text-sm xl:text-2xl font-bold ">Student Guidebook</p>
          </div>
        </div>
      </section>

      <Announcements
        highlightData={higlightData}
        announcementData={announcementData}
      />
      <section className={`bg_gradient_blue_to_light w-full xl:px-24 py-8`}>
        <div className="flex justify-center text-white-700 font-bold mb-6">
          <p className={` ${styles.letter_space} text-4xl border-b-4`}>
            FACULTIES
          </p>
        </div>
        <Carousel {...settings}>
          {bannerData
            .filter((item) => item.categoryID === ITEM_HOMEPAGE.FACULTIES)
            .map((item) => {
              return (
                <div
                  key={item.id}
                  className="p-4 cursor-pointer'"
                  onClick={() => navigate("/faculties")}
                >
                  <img
                    className={styles.fal_img}
                    src={`${import.meta.env.VITE_API_URL}${item.path}`}
                    alt={item.name}
                  />
                </div>
              );
            })}
        </Carousel>
        <div className="text-center ">
          <Link
            to={"/faculties"}
            className={`${styles.btn_see_more} text-white border-double border-4 hover:opacity-70 border-white`}
          >
            See more
          </Link>
        </div>
      </section>

      <section className="bg-gray-100 w-full px-8 xl:px-24 py-8 ">
        <div className="text-orange-500 font-bold mb-6 items-center">
          <p className="text-3xl underline">INTRODUCTION</p>
        </div>
        <div className="flex justify-center">
          <iframe
            width="860"
            height="415"
            src="https://www.youtube.com/embed/OEKQ6fQPJ58?si=K4yhJ1NZjG-Gq33B"
            title="YouTube video player"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      <section
        className={`bg_gradient_blue_to_light w-full px-8 xl:px-24 py-8`}
      >
        <div className="flex justify-center text-white font-bold mb-6">
          <p className={` ${styles.letter_space} text-4xl border-b-4`}>
            MVV OF TUCST
          </p>
        </div>
        <div className={styles.small_card}>
          {mvvData.slice(0, SIZE).map((item) => {
            return (
              <div
                className={styles.news}
                onClick={() => handleOpenModalMVV(item.title, item.content)}
                key={item.id}
              >
                <div className={styles.news_img}>
                  <img
                    className="w-full h-full"
                    src={`${import.meta.env.VITE_API_URL}${item.path}`}
                    alt={item.name}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section
        className={`${styles.fixed_bg} bg-orange-400 h-96 text-white font-bold relative text-center gap-64 w-full  py-16 flex justify-center`}
      >
        <div className="absolute brightness-50 bg-black opacity-65 top-0 w-full h-full"></div>
        <div className="absolute">
          <p className="text-lg xl:text-3xl break-words">
            "Nurturing passion - Encouraging creativity - Respecting differences
            - Cooperating for the development"
          </p>
          <div className="flex justify-center gap-12 xl:gap-64 mt-12 flex-wrap">
            <div>
              <p className="text-3xl xl:text-6xl block text-orange-500">28</p>
              <div className="text-xl">Majors/specializations</div>
            </div>
            <div>
              <p className="text-3xl xl:text-6xl block text-orange-500">57</p>
              <div className="text-xl">Developing years</div>
            </div>
            <div>
              <p className="text-3xl xl:text-6xl block text-orange-500">
                {">"} 4000
              </p>
              <div className="text-xl">Students</div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 w-full xl:px-24 py-8">
        <div className="flex text-orange-500 font-bold mb-6 justify-center items-center">
          <p className="text-xl border-b-4">IMAGE LIBRARY</p>
        </div>
        <Carousel {...settings}>
          {bannerData
            .filter((item) => item.categoryID === ITEM_HOMEPAGE.IMG_LIB)
            .map((item) => {
              return (
                <div className={styles.lib_card} key={item.id}>
                  <img
                    src={`${import.meta.env.VITE_API_URL}${item.path}`}
                    alt={item.name}
                  />
                </div>
              );
            })}
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

export default Homepage;
