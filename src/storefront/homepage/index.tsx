import styles from "./index.module.scss";
import {
  LeftOutlined,
  RightOutlined,
  CaretRightOutlined,
} from "@ant-design/icons";

import { Carousel } from "antd";

import Announcements from "./announcements";
import Banner from "./banner";

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

  return (
    <div className={styles.container}>
      <Banner />
      <section className="w-full">
        <div className="flex justify-center">
          <div className={styles.card}>
            <img loading="lazy" className={styles.card_img} src="/img/training.png" alt="Training Program" />
          </div>
          <div className={styles.card}>
            <img loading="lazy" className={styles.card_img} src="/img/partner.png" alt="Partner List" />
          </div>
          <div className={styles.card}>
            <img loading="lazy" className={styles.card_img} src="/img/guidebook.png" alt="Student Guidebook" />
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
              <img loading="lazy" src="/img/img1.png" alt="" />
            </div>
            <div className={styles.sub_news__content}>
              <div className={styles.sub_news__title}>
                <a
                  href=""
                  title="TUCST TAKES PART IN THE 2024 ADMISSION CONSULTATION - CAREER GUIDANCE DAY OF TUOI TRE NEWSPAPER"
                >
                  TUCST TAKES PART IN THE 2024 ADMISSION CONSULTATION - CAREER GUIDANCE DAY OF TUOI TRE NEWSPAPER
                </a>
              </div>
              <div
                className={`${styles.word_cut} text-gray-500 text-lg items-center gap-2 mt-2 `}
              >
                On the morning of January 14, the 2024 Admission Consultation-Career Guidance Day of Tuoi Tre Newspaper officially took place at Hong Duc University with the attendance of many big training institutions across the country. Attending this event was Dr. Vu Van Tuyen - Chairman of TUCST’s Council.
                The 2024 Admission Consultation-Career Guidance Day is organized by the coordination of Tuoi Tre Newspaper, the Department of Higher Education (Ministry of Education and Training), the General Department of Vocational Education (Ministry of Labor, War Invalids and Social Affairs ), Thanh Hoa Department of Education and Training, Hong Duc University and Vingroup.
                On the 2024 Admission Consultation-Career Guidance Day, hundreds of admission consulting booths from training institutions such as Hanoi National University, Hanoi Polytechnic University, and National Economics University... were present. Among them, TUCST school's booth is carefully prepared with an outstanding space, combining cultural and artistic activities to attract students. TUCST's booth received great attention from a large number of students.
                Here, TUCST's staff presented TUCST's training programs, the 2024 admission project, and the values and opportunities of becoming a TUCST student. In addition, TUCST staff will answer all questions for students and parents about admission information, admission methods, tests to assess students’ ability and thinking, and advice on choosing a training program.
                With the participation of thousands of students from many high schools in Thanh Hoa City and neighboring districts, the successful organization of activities at the 2024 Admission Consultation-Career Guidance Day will not only be a bridge between students in the province and TUCST but also create promising opportunities for the university enrollment in the 2024-2025 academic year.

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
              <img loading="lazy" className="w-full h-full" src="/img/Mission.png" alt="" />
            </div>
          </div>
          <div className={styles.news}>
            <div className={styles.news_img}>
              <img loading="lazy" className="w-full h-full" src="/img/Vision.png" alt="" />
            </div>
          </div>
          <div className={styles.news}>
            <div className={styles.news_img}>
              <img loading="lazy" className="w-full h-full" src="/img/Value.png" alt="" />
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
    </div>
  );
};

export default AdminHomepage;
