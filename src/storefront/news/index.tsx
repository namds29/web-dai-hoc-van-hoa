import Banner from "src/components/banner";
import styles from "./index.module.scss";
import NewsCardComponent from "src/components/news-card-component";
import { useNavigate } from "react-router-dom";
import HomepageService from "src/services/homepage/homepageService";
import { useEffect, useState } from "react";
import { IPostDataType, ITEM_NEWS } from "src/interfaces";
import moment from "moment";

const NEWS_SIZE = 2;
const CATE_SIZE = 3;

const News = () => {
  const [newsData, setNewsData] = useState<IPostDataType[]>([]);
  const [schoolActData, setSchoolActData] = useState<IPostDataType[]>([]);
  const [campusLifeData, setCampusLifeData] = useState<IPostDataType[]>([]);
  const [interCoopData, setInterCoopData] = useState<IPostDataType[]>([]);

  const url = import.meta.env.VITE_API_URL;

  const getPostList = async (id: any) => {
    try {
      const res = await HomepageService.listPostHomepageWithCategoryId(id);
      if (res?.data) {
        switch (id) {
          case ITEM_NEWS.NEWS:
            setNewsData(res?.data);
            break;
          case ITEM_NEWS.SCHOOL_ACTIVITIES:
            setSchoolActData(res?.data);
            break;
          case ITEM_NEWS.CAMPUS_LIFE:
            setCampusLifeData(res?.data);
            break;
          case ITEM_NEWS.INTERNATIONAL_COOPERATION:
            setInterCoopData(res?.data);
            break;

          default:
            break;
        }
      }
    } catch (error: any) {
      if (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    getPostList(ITEM_NEWS.NEWS);
    getPostList(ITEM_NEWS.SCHOOL_ACTIVITIES);
    getPostList(ITEM_NEWS.CAMPUS_LIFE);
    getPostList(ITEM_NEWS.INTERNATIONAL_COOPERATION);
  }, []);

  const navigate = useNavigate();
  return (
    <section className="w-full">
      <Banner />
      <section className="flex gap-5 w-full text-orange-500 font-bold flex-wrap xl:flex-nowrap  justify-between px-4 xl:px-16 py-8">
        <div className="w-full xl:w-2/3">
          <p className="text-xl border-b-4 mb-8">HOT NEWS</p>
          <div className="overflow-hidden w-full h-[21.7rem] flex  justify-center items-center relative rounded">
            <img className={styles.hot_new_pic} src="/img/ban3.png" alt="" />
            <p className="absolute text-2xl text-white cursor-pointer">
              Student of TUCST won high prize
            </p>
          </div>
        </div>
        <div className="w-full xl:w-1/3 h-full ">
          <p className="text-xl border-b-4 mb-8">NEWS</p>

          <div className="flex flex-col h-[19.925rem] xl:pr-4 gap-2 w-full text-white">
            {newsData.slice(0, NEWS_SIZE).map((item) => (
              <div
                key={item.id}
                className="bg-subColor w-full h-40 text-white rounded flex gap-6 p-3 mb-5 "
              >
                <div
                  className="w-52 h-full rounded cursor-pointer"
                  onClick={() => navigate(`/news/${item.id}`)}
                >
                  <img
                    className="w-52 h-full rounded object-cover"
                    src={`${url}${item.path}`}
                    alt=""
                  />
                </div>
                <div className={styles.card_science}>
                  <p className="title truncate font-bold letter tracking-wider">
                    {item.title}
                  </p>
                  <p className={styles.card_science_description}>
                    {item.brief}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-gray-100 w-full px-4 xl:px-24 py-8">
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
          {schoolActData.slice(0, CATE_SIZE).map((newsItem) => (
            <NewsCardComponent
              id={newsItem.id}
              key={newsItem.id}
              imgUrl={`${url}${newsItem.path}`}
              date={moment(newsItem.createdAt ?? "").format("YYYY/MM/DD")}
              cardTitle={newsItem.title}
              cardDescription={newsItem.brief}
            />
          ))}
        </div>
      </section>

      <section className="bg-gray-100 w-full px-4 xl:px-24 py-8">
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
          {campusLifeData.slice(0, CATE_SIZE).map((newsItem) => (
            <NewsCardComponent
              id={newsItem.id}
              key={newsItem.id}
              imgUrl={`${url}${newsItem.path}`}
              date={moment(newsItem.createdAt ?? "").format("YYYY/MM/DD")}
              cardTitle={newsItem.title}
              cardDescription={newsItem.brief}
            />
          ))}
        </div>
      </section>

      <section className="bg-gray-100 w-full px-4 xl:px-24 py-8">
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
          {interCoopData.slice(0, CATE_SIZE).map((newsItem) => (
            <NewsCardComponent
              id={newsItem.id}
              key={newsItem.id}
              imgUrl={`${url}${newsItem.path}`}
              date={moment(newsItem.createdAt ?? "").format("YYYY/MM/DD")}
              cardTitle={newsItem.title}
              cardDescription={newsItem.brief}
            />
          ))}
        </div>
      </section>
      <section>
        <div className="flex flex-wrap sm:flex-nowrap gap-4 text-white">
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
            <div className="w-full flex items-center h-full">
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
            <div className="w-full flex items-center justify-center h-full">
              <a
                href="https://en-us.thanhhoa.gov.vn/portal/Pages/default.aspx"
                target="_blank"
                rel="noopener noreferrer"
              >
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
