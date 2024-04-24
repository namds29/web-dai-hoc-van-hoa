import Banner from "src/components/banner";
import styles from "./index.module.scss";
import NewsCardComponent from "src/components/news-card-component";
import {
  DATA_CAMPUS_LIFE,
  DATA_INTERNATIONAL_COOPERATION,
  DATA_SCHOOL_ACTIVITIES,
} from "src/data/data";
import { useNavigate } from "react-router-dom";

const News = () => {
  const navigate = useNavigate();
  return (
    <section className="w-full">
      <Banner />
      <section className="flex gap-5 w-full text-orange-500 font-bold flex-wrap xl:flex-nowrap  justify-between px-8 xl:px-16 py-8">
        <div className="w-full xl:w-1/2">
          <p className="text-xl border-b-4 mb-8">HOT NEWS</p>
          <div className="overflow-hidden w-full h-[21.7rem] flex  justify-center items-center relative rounded">
            <img className={styles.hot_new_pic} src="/img/thumb1.png" alt="" />
            <p className="absolute text-2xl text-white cursor-pointer">
              Sinh viên TUCST đạt giải cao
            </p>
          </div>
        </div>
        <div className="w-full xl:w-1/2 h-full ">
          <p className="text-xl border-b-4 mb-8">NEWS</p>
          <div className="flex flex-col h-[19.925rem] xl:pr-4 gap-2 w-full text-white">
            <div className="bg-subColor w-full h-40 text-white rounded flex gap-6 p-4 mb-5 ">
              <div className="w-52 h-full rounded">
                <img
                  className="w-52 h-full rounded object-cover"
                  src="/img/img1.png"
                  alt=""
                />
              </div>
              <div className={styles.card_science}>
                <p className="title text-xl font-bold letter tracking-wider">
                  Science Title
                </p>
                <p className={styles.card_science_description}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam rhoncus dignissim risus, et consectetur massa
                  tincidunt sit amet. Nam elementum vulputate metus
                </p>
              </div>
            </div>

            <div className="bg-subColor w-full h-40 text-white rounded flex gap-6 p-4 mb-5">
              <div className="w-52 h-full rounded">
                <img
                  className="w-52 h-full rounded object-cover"
                  src="/img/img1.png"
                  alt=""
                />
              </div>
              <div className={styles.card_science}>
                <p className="title text-xl font-bold letter tracking-wider">
                  Science Title
                </p>
                <p className={styles.card_science_description}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam rhoncus dignissim risus, et consectetur massa
                  tincidunt sit amet. Nam elementum vulputate metus
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-100 w-full px-8 xl:px-24 py-8">
        <div className="flex text-orange-500 font-bold mb-6 justify-between items-center">
          <p className="text-xl border-b-4">SCHOOL ACTIVITIES</p>
          <button
            className="border border-orange-400 hover:bg-orange-100 px-4 rounded py-2"
            onClick={() => {
              navigate("/news-list/school-activities");
            }}
          >
            See more
          </button>
        </div>
        <div className={styles.newest_new}>
          {DATA_SCHOOL_ACTIVITIES.map((newsItem, index) => (
            <NewsCardComponent
              id={newsItem.id}
              key={index}
              imgUrl={newsItem.imgUrl}
              date={newsItem.date}
              cardTitle={newsItem.cardTitle}
              cardDescription={newsItem.cardDescription}
            />
          ))}
        </div>
      </section>

      <section className="bg-gray-100 w-full px-8 xl:px-24 py-8">
        <div className="flex text-orange-500 font-bold mb-6 justify-between items-center">
          <p className="text-xl border-b-4">CAMPUS LIFE</p>
          <button
            className="border border-orange-400 hover:bg-orange-100 px-4 rounded py-2"
            onClick={() => {
              navigate("/news-list/campus-life");
            }}
          >
            See more
          </button>
        </div>
        <div className={styles.newest_new}>
          {DATA_CAMPUS_LIFE.map((newsItem, index) => (
            <NewsCardComponent
              id={newsItem.id}
              key={index}
              imgUrl={newsItem.imgUrl}
              date={newsItem.date}
              cardTitle={newsItem.cardTitle}
              cardDescription={newsItem.cardDescription}
            />
          ))}
        </div>
      </section>

      <section className="bg-gray-100 w-full px-8 xl:px-24 py-8">
        <div className="flex text-orange-500 font-bold mb-6 justify-between items-center">
          <p className="text-xl border-b-4">INTERNATIONAL COOPERATION</p>
          <button
            className="border border-orange-400 hover:bg-orange-100 px-4 rounded py-2"
            onClick={() => {
              navigate("/news-list/international-cooperation");
            }}
          >
            See more
          </button>
        </div>
        <div className={styles.newest_new}>
          {DATA_INTERNATIONAL_COOPERATION.map((newsItem, index) => (
            <NewsCardComponent
              id={newsItem.id}
              key={index}
              imgUrl={newsItem.imgUrl}
              date={newsItem.date}
              cardTitle={newsItem.cardTitle}
              cardDescription={newsItem.cardDescription}
            />
          ))}
        </div>
      </section>
      <section>
        <div className="flex gap-4 text-white">
          <div className="w-full rounded">
            <div className="w-full flex items-center h-full">
              <img
                className="w-full h-full object-contain overflow-hidden rounded"
                src="/img/bvhtt.png"
                alt="Bộ văn hóa thể thao và du lịch"
              />
            </div>
          </div>
          <div className="w-full rounded bg-white">
            <div className="w-full flex items-center h-full" >
              <img
                className="w-full h-[150px] object-contain overflow-hidden rounded"
                src="/img/bogd.jpeg"
                alt="Bộ giáo dục và đào tạo"
              />
            </div>
          </div>
          <div className="w-full rounded">
            <div className="w-full flex items-center h-full">
              <img
                className="w-full h-[200px] object-contain overflow-hidden rounded"
                src="/img/baothanhhoa.png"
                alt="Báo Thanh Hóa"
              />
            </div>
          </div>
          <div className="w-full rounded">
            <div className="w-full flex items-center h-full">
              <a href="https://en-us.thanhhoa.gov.vn/portal/Pages/default.aspx" target="_blank" rel="noopener noreferrer">
                <img
                  className="w-full h-full object-contain overflow-hidden rounded"
                  src="/img/cttdt.jpg"
                  alt="Cổng thông tin điện tử Thanh Hóa"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};
export default News;
