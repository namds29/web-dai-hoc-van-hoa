import styles from "./index.module.scss";
import {
  LeftOutlined,
  RightOutlined,
  CaretRightOutlined,
} from "@ant-design/icons";

import { Carousel } from "antd";

import Announcements from "./announcements";
import Banner from "./banner";

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

  return (
    <div className={styles.container}>
      <Banner />
      <section className="w-full">
        <div className="flex justify-center">
          <div className={styles.card}>
            <img className={styles.card_img} src="/img/img1.png" alt="" />
            <div className={styles.card_text}>Training Program</div>
          </div>
          <div className={styles.card}>
            <img className={styles.card_img} src="/img/img1.png" alt="" />
            <div className={styles.card_text}>Partner List</div>
          </div>
          <div className={styles.card}>
            <img className={styles.card_img} src="/img/img1.png" alt="" />
            <div className={styles.card_text}>Student Guidebook</div>
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
            <img style={libImgStyle} src="/img/fa1.png" alt="" />
          </div>
          <div className="p-4">
            <img style={libImgStyle} src="/img/fa2.png" alt="" />
          </div>
          <div className="p-4">
            <img style={libImgStyle} src="/img/fa3.png" alt="" />
          </div>
          <div className="p-4">
            <img style={libImgStyle} src="/img/fa4.png" alt="" />
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

      <section className="bg-gray-100 w-full px-24 py-8">
        <div className="flex text-orange-500 font-bold mb-6 justify-between items-center">
          <p className="text-xl border-b-4">CAMPUS LIFE</p>
          <button className="border border-orange-400 hover:bg-orange-100 px-4 rounded py-2">
            See more
          </button>
        </div>
        <div className={styles.sub_news}>
          <div className={styles.sub_news_box}>
            <div className={styles.sub_news__img}>
              <img src="/img/img1.png" alt="" />
            </div>
            <div className={styles.sub_news__content}>
              <div className={styles.sub_news__title}>
                <a
                  href=""
                  title="Hơn 600 đầu sách được Trường Đại học CMC tiếp nhận từ Trường Quốc tế Hàn Quốc tại Hà Nội"
                >
                  Hơn 600 đầu sách được Trường Đại học CMC tiếp nhận từ Trường
                  Quốc tế Hàn Quốc tại Hà Nội
                </a>
              </div>
              <div
                className={`${styles.word_cut} text-gray-500 text-xs items-center gap-2 mt-2 `}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac
                elit a mauris auctor lacinia. Proin dui orci, auctor vitae
                rutrum a, condimentum at elit. Praesent odio nibh, elementum
                vitae metus nec,Proin dui orci, auctor vitae ondimentum at elit.
                Praesent odio nibh, elementum vitae metus nec,Proin dui orci,
                auctor vitae ondimentum at elit. Praesent odio nibh, elementum
                vitae metus nec,Proin dui orci, auctor vitae ondimentum at elit.
                Praesent odio nibh, elementum vitae metus nec,Proin dui orci,
                auctor vitae
              </div>
            </div>
          </div>
          <div className={styles.sub_news_box}>
            <div className={styles.sub_news__img}>
              <img src="/img/img1.png" alt="" />
            </div>
            <div className={styles.sub_news__content}>
              <div className={styles.sub_news__title}>
                <a
                  href=""
                  title="Hơn 600 đầu sách được Trường Đại học CMC tiếp nhận từ Trường Quốc tế Hàn Quốc tại Hà Nội"
                >
                  Hơn 600 đầu sách được Trường Đại học CMC tiếp nhận từ Trường
                  Quốc tế Hàn Quốc tại Hà Nội
                </a>
              </div>
              <div
                className={`${styles.word_cut} text-gray-500 text-xs items-center gap-2 mt-2 `}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac
                elit a mauris auctor lacinia. Proin dui orci, auctor vitae
                rutrum a, condimentum at elit. Praesent odio nibh, elementum
                vitae metus nec,Proin dui orci, auctor vitae ondimentum at elit.
                Praesent odio nibh, elementum vitae metus nec,Proin dui orci,
                auctor vitae ondimentum at elit. Praesent odio nibh, elementum
                vitae metus nec,Proin dui orci, auctor vitae ondimentum at elit.
                Praesent odio nibh, elementum vitae metus nec,Proin dui orci,
                auctor vitae
              </div>
            </div>
          </div>
          <div className={styles.sub_news_box}>
            <div className={styles.sub_news__img}>
              <img src="/img/img1.png" alt="" />
            </div>
            <div className={styles.sub_news__content}>
              <div className={styles.sub_news__title}>
                <a
                  href=""
                  title="Hơn 600 đầu sách được Trường Đại học CMC tiếp nhận từ Trường Quốc tế Hàn Quốc tại Hà Nội"
                >
                  Hơn 600 đầu sách được Trường Đại học CMC tiếp nhận từ Trường
                  Quốc tế Hàn Quốc tại Hà Nội
                </a>
              </div>
              <div
                className={`${styles.word_cut} text-gray-500 text-xs items-center gap-2 mt-2 `}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac
                elit a mauris auctor lacinia. Proin dui orci, auctor vitae
                rutrum a, condimentum at elit. Praesent odio nibh, elementum
                vitae metus nec,Proin dui orci, auctor vitae ondimentum at elit.
                Praesent odio nibh, elementum vitae metus nec,Proin dui orci,
                auctor vitae ondimentum at elit. Praesent odio nibh, elementum
                vitae metus nec,Proin dui orci, auctor vitae ondimentum at elit.
                Praesent odio nibh, elementum vitae metus nec,Proin dui orci,
                auctor vitae
              </div>
            </div>
          </div>
          <div className={styles.sub_news_box}>
            <div className={styles.sub_news__img}>
              <img src="/img/img1.png" alt="" />
            </div>
            <div className={styles.sub_news__content}>
              <div className={styles.sub_news__title}>
                <a
                  href=""
                  title="Hơn 600 đầu sách được Trường Đại học CMC tiếp nhận từ Trường Quốc tế Hàn Quốc tại Hà Nội"
                >
                  Hơn 600 đầu sách được Trường Đại học CMC tiếp nhận từ Trường
                  Quốc tế Hàn Quốc tại Hà Nội
                </a>
              </div>
              <div
                className={`${styles.word_cut} text-gray-500 text-xs items-center gap-2 mt-2 `}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac
                elit a mauris auctor lacinia. Proin dui orci, auctor vitae
                rutrum a, condimentum at elit. Praesent odio nibh, elementum
                vitae metus nec,Proin dui orci, auctor vitae ondimentum at elit.
                Praesent odio nibh, elementum vitae metus nec,Proin dui orci,
                auctor vitae ondimentum at elit. Praesent odio nibh, elementum
                vitae metus nec,Proin dui orci, auctor vitae ondimentum at elit.
                Praesent odio nibh, elementum vitae metus nec,Proin dui orci,
                auctor vitae
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={`bg_gradient_blue_to_light w-full px-24 py-8`}>
        <div className="flex justify-center text-white font-bold mb-6">
          <p className={` ${styles.letter_space} text-4xl border-b-4`}>
            MVV OF TUCST
          </p>
        </div>
        <div className={styles.small_card}>
          <div className={styles.news}>
            <div className={styles.news_img}>
              <img className="w-full h-full" src="/img/Mission.png" alt="" />
            </div>
          </div>
          <div className={styles.news}>
            <div className={styles.news_img}>
              <img className="w-full h-full" src="/img/Vision.png" alt="" />
            </div>
          </div>
          <div className={styles.news}>
            <div className={styles.news_img}>
              <img className="w-full h-full" src="/img/Value.png" alt="" />
            </div>
          </div>
        </div>
      </section>

      <section
        className={`${styles.fixed_bg} bg-orange-400 h-96 text-white font-bold   text-center gap-64 w-full  py-16 flex justify-center`}
      >
        <div className="absolute brightness-50 bg-black opacity-65 top-0 w-full h-full"></div>
        <div className="absolute">
          <p className="text-3xl">
            "Nuôi dưỡng đam mê - Khuyến khích sáng tạo - Tôn trọng khác biệt -
            Hợp tác phát triển"
          </p>
          <div className="flex justify-center gap-64 mt-12">
            <div>
              <p className="text-6xl block text-orange-500">28</p>
              <div className="text-xl">Chuyên ngành</div>
            </div>
            <div>
              <p className="text-6xl block text-orange-500">60</p>
              <div className="text-xl">Năm phát triển</div>
            </div>
            <div>
              <p className="text-6xl block text-orange-500">{">"} 4000</p>
              <div className="text-xl"> Học viên</div>
            </div>
          </div>
          <div className="flex items-center justify-center mt-8 pb-8 relative">
            <div className={styles.animate_btn}>
              <CaretRightOutlined />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 w-full px-24 py-8">
        <div className="flex text-orange-500 font-bold mb-6 justify-center items-center">
          <p className="text-xl border-b-4">IMAGE LIBRARY</p>
        </div>
        <div className="xl:px-32 grid xl:grid-cols-3 sm:grid-cols-2 gap-8 justify-items-center">
          <div className={styles.lib_card}></div>
          <div className={styles.lib_card}></div>
          <div className={styles.lib_card}></div>
          <div className={styles.lib_card}></div>
          <div className={styles.lib_card}></div>
          <div className={styles.lib_card}></div>
        </div>
      </section>
    </div>
  );
};

export default AdminHomepage;
