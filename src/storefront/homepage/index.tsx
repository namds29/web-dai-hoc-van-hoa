import styles from "./index.module.scss";
import {
  CalendarOutlined,
  LeftOutlined,
  RightOutlined,
  CaretRightOutlined,
} from "@ant-design/icons";

import { Carousel } from "antd";

const contentStyle: React.CSSProperties = {
  margin: 0,
  width: "100%",
  height: "400px",
  lineHeight: "160px",
  textAlign: "center",
  background: "rgb(254 202 202)",
  objectFit: "cover",
};
const SlickButtonFix = ({
  currentSlide,
  slideCount,
  children,
  ...props
}: any) => <div {...props}>{children}</div>;
const Homepage = () => {
  const settings = {
    arrows: true,
    centerMode: true,
    infinite: true,
    centerPadding: "30px",
    slidesToShow: 3,

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
      <div className="w-full">
        <Carousel>
          <div>
            <img style={contentStyle} src="src/assets/img/banner1.png" alt="" />
          </div>
          <div>
            <img style={contentStyle} src="src/assets/img/banner2.png" alt="" />
          </div>
          <div>
            <img style={contentStyle} src="src/assets/img/banner3.png" alt="" />
          </div>
        </Carousel>
      </div>
      <section className="w-full">
        <div className="flex justify-center">
          <div className={styles.card}>
            <img
              className={styles.card_img}
              src="src/assets/img/img1.png"
              alt=""
            />
            <div className={styles.card_text}>Training Program</div>
          </div>
          <div className={styles.card}>
            <img
              className={styles.card_img}
              src="src/assets/img/img1.png"
              alt=""
            />
            <div className={styles.card_text}>Partner List</div>
          </div>
          <div className={styles.card}>
            <img
              className={styles.card_img}
              src="src/assets/img/img1.png"
              alt=""
            />
            <div className={styles.card_text}>Student Guidebook</div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 w-full px-24 py-8">
        <div className="flex text-orange-500 font-bold mb-6 justify-between items-center">
          <p className="text-xl border-b-4">HIGHLIGHTS & ANNOUNCEMENTS</p>
          <button className="border border-orange-400 hover:bg-orange-100 px-4 rounded py-2">
            See more
          </button>
        </div>
        <div className={styles.newest_new}>
          <div className={styles.news}>
            <div className={styles.news_img}>
              <img
                className="w-full h-full"
                src="src/assets/img/img1.png"
                alt=""
              />
            </div>
            <div className="text-gray-500 flex items-center gap-2 mt-3">
              <CalendarOutlined />
              <span className="italic">01/09/2024</span>
            </div>
            <div className={styles.news_title}>
              Công bố Biên bản ghi nhớ (MOU) giữa Trường Đại học CMC với Trường
              Đại học Korea Nazarene (Hàn Quốc)
            </div>
            <div className={styles.news_description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac
              elit a mauris auctor lacinia. Proin dui orci, auctor vitae rutrum
              a, condimentum at elit. Praesent odio nibh, elementum vitae metus
              nec, aliquet sollicitudin libero. Morbi tellus eros, dignissim
              eget lobortis vitae, porttitor a dolor. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Duis ac elit a mauris auctor
              lacinia.
            </div>
          </div>

          <div className={styles.news}>
            <div className={styles.news_img}>
              <img
                className="w-full h-full"
                src="src/assets/img/img1.png"
                alt=""
              />
            </div>
            <div className="text-gray-500 flex items-center gap-2 mt-3">
              <CalendarOutlined />
              <span className="italic">01/09/2024</span>
            </div>
            <div className={styles.news_title}>
              Công bố Biên bản ghi nhớ (MOU) giữa Trường Đại học CMC với Trường
              Đại học Korea Nazarene (Hàn Quốc)
            </div>
            <div className={styles.news_description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac
              elit a mauris auctor lacinia. Proin dui orci, auctor vitae rutrum
              a, condimentum at elit. Praesent odio nibh, elementum vitae metus
              nec, aliquet sollicitudin libero. Morbi tellus eros, dignissim
              eget lobortis vitae, porttitor a dolor. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Duis ac elit a mauris auctor
              lacinia. Proin dui orci, auctor vitae rutrum a, condimentum at
              elit. Praesent odio nibh, elementum vitae metus nec, aliquet
              sollicitudin libero. Morbi tellus eros, dignissim eget lobortis
              vitae, porttitor a dolor.
            </div>
          </div>
        </div>

        <div className={styles.sub_news}>
          <div className={styles.sub_news_box}>
            <div className={styles.sub_news__img}>
              <img src="src/assets/img/img1.png" alt="" />
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
              <div className="text-gray-500  absolute bottom-0 right-4 flex items-center gap-2 mt-1">
                <CalendarOutlined />
                <span className="italic text-sm">01/09/2024</span>
              </div>
            </div>
          </div>
          <div className={styles.sub_news_box}>
            <div className={styles.sub_news__img}>
              <img src="src/assets/img/img1.png" alt="" />
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
              <div className="text-gray-500  absolute bottom-0 right-4 flex items-center gap-2 mt-4">
                <CalendarOutlined />
                <span className="italic text-sm">01/09/2024</span>
              </div>
            </div>
          </div>
          <div className={styles.sub_news_box}>
            <div className={styles.sub_news__img}>
              <img src="src/assets/img/img1.png" alt="" />
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
              <div className="text-gray-500  absolute bottom-0 right-4 flex items-center gap-2 mt-4">
                <CalendarOutlined />
                <span className="italic text-sm">01/09/2024</span>
              </div>
            </div>
          </div>
          <div className={styles.sub_news_box}>
            <div className={styles.sub_news__img}>
              <img src="src/assets/img/img1.png" alt="" />
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
              <div className="text-gray-500  absolute bottom-0 right-4 flex items-center gap-2 mt-4">
                <CalendarOutlined />
                <span className="italic text-sm">01/09/2024</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-red-300 to-red-200 w-full px-24 py-8">
        <div className="flex justify-center text-orange-700 font-bold mb-6">
          <p className="text-2xl border-b-4">FACULTIES</p>
        </div>
        <Carousel {...settings}>
          <div>
            <img src="src/assets/img/faculties.png" alt="" />
          </div>
          <div>
            <img src="src/assets/img/faculties.png" alt="" />
          </div>
          <div>
            <img src="src/assets/img/faculties.png" alt="" />
          </div>
          <div>
            <img src="src/assets/img/faculties.png" alt="" />
          </div>
          <div>
            <img src="src/assets/img/faculties.png" alt="" />
          </div>
        </Carousel>
        <div className="text-center ">
          <button
            className={`${styles.btn_see_more} text-black border-double border-4 hover:bg-orange-300 border-orange-700`}
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
              <img src="src/assets/img/img1.png" alt="" />
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
              <img src="src/assets/img/img1.png" alt="" />
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
              <img src="src/assets/img/img1.png" alt="" />
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
              <img src="src/assets/img/img1.png" alt="" />
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

      <section className="bg-gradient-to-r from-red-300 to-red-200 w-full px-24 py-8">
        <div className="flex justify-center text-orange-700 font-bold mb-6">
          <p className="text-2xl border-b-4">MVV OF TUCST</p>
        </div>
        <div className={styles.small_card}>
          <div className={styles.news}>
            <div className={styles.news_img}>
              <img
                className="w-full h-full"
                src="src/assets/img/img1.png"
                alt=""
              />
            </div>

            <div className={styles.news_title}>Mission</div>
          </div>
          <div className={styles.news}>
            <div className={styles.news_img}>
              <img
                className="w-full h-full"
                src="src/assets/img/img1.png"
                alt=""
              />
            </div>

            <div className={styles.news_title}>Vision</div>
          </div>
          <div className={styles.news}>
            <div className={styles.news_img}>
              <img
                className="w-full h-full"
                src="src/assets/img/img1.png"
                alt=""
              />
            </div>

            <div className={styles.news_title}>Value</div>
          </div>
        </div>
      </section>

      <section className="bg-orange-400 text-white font-bold text-2xl   text-center gap-64 w-full  py-8">
        <p>
          "Nuôi dưỡng đam mê - Khuyến khích sáng tạo - Tôn trọng khác biệt - Hợp
          tác phát triển"
        </p>
        <div className="flex justify-center  gap-64 mt-12">
          <p>
            28 <br />
            Chuyên ngành
          </p>
          <p>
            60 <br />
            Năm phát triển
          </p>
          <p>
            {">"} 4000 <br />
            Học viên
          </p>
        </div>
        <div className="flex items-center justify-center mt-8 pb-8 relative">
          <div className={styles.animate_btn}>
            <CaretRightOutlined />
          </div>
        </div>
      </section>

      <section className="bg-gray-100 w-full px-24 py-8">
        <div className="flex text-orange-500 font-bold mb-6 justify-center items-center">
          <p className="text-xl border-b-4">IMAGE LIBRARY</p>
        </div>
        <div className="flex justify-center  flex-wrap">
          <div className={styles.card}></div>
          <div className={styles.card}></div>
          <div className={styles.card}></div>
          <div className={styles.card}></div>
          <div className={styles.card}></div>
          <div className={styles.card}></div>
        </div>
      </section>

      <section className="bg-orange-300 w-full px-24 py-8 text-black">
        <div className="flex justify-between">
          <div className="text-sm">
            <p className="font-bold text-lg">CONNECT WITH TUCST</p>
            <p>Address: No. 561 Quang Trung 3, Dong Ve Ward, City. Thanh Hoa</p>
            <p>
              Phone: +(84) 2373. 953 388 <br /> +(84) 2373. 857 421
            </p>
            <p>Email: dvtdt@dvtdt.edu.vn</p>
            <p>Website: http://www.dvtdt.edu.vn</p>
          </div>

          <p className="font-bold text-lg">Social Media </p>
          <p className="font-bold text-lg">Hotline</p>
          <p className="font-bold text-lg">Email</p>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
