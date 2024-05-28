import NewsCardComponent from "src/components/news-card-component";
import styles from "./index.module.scss";
import { useNavigate } from "react-router-dom";
import { CalendarOutlined } from "@ant-design/icons";
import { IPostDataType } from "src/interfaces";
import moment from "moment";

const HIGHTLIGHT_SIZE = 2;
const ANNOUNCEMENT_SIZE = 4;

const Announcements = (input: {
  highlightData: Array<IPostDataType>;
  announcementData: Array<IPostDataType>;
}) => {
  const navigate = useNavigate();
  return (
    <section className="bg-gray-100 w-full px-4 md:px-24 py-8">
      <div className="flex text-orange-500 font-bold mb-6 justify-between items-center">
        <p className="text-sm md:text-xl border-b-4">
          HIGHLIGHTS & ANNOUNCEMENTS
        </p>
      </div>
      <div className={styles.newest_new}>
        {input.highlightData
          .filter((item) => !item.isApproved)
          .slice(0, HIGHTLIGHT_SIZE)
          .map((newsItem, index) => (
            <NewsCardComponent
              id={newsItem.id}
              key={index}
              imgUrl={`${import.meta.env.VITE_API_URL}${newsItem.path}`}
              date={moment(newsItem.createdAt).format("YYYY/MM/DD")}
              cardTitle={newsItem.title}
              cardDescription={newsItem.brief}
            />
          ))}
      </div>
      <div className={styles.sub_news}>
        {input.announcementData
          .slice(0, ANNOUNCEMENT_SIZE)
          .map((newsItem, index) => {
            return (
              <div className={styles.sub_news_box} key={index}>
                <div className="text-orange-500 font-bold flex gap-1 items-center">
                  <CalendarOutlined />{" "}
                  {moment(newsItem.createdAt).format("YYYY/MM/DD")}{" "}
                  <img
                    className="w-[40px] h-[20px] ml-2"
                    src="/img/icon-new.gif"
                    alt="gif new"
                  />
                </div>
                <div className={styles.sub_news_description}>
                  {newsItem.title}
                </div>
              </div>
            );
          })}
      </div>
      <div className="w-full text-center mt-8">
        <button
          className="text-base border text-orange-500 border-orange-400 hover:bg-orange-100 px-6 rounded py-3"
          onClick={() => navigate("/news")}
        >
          See more
        </button>
      </div>
      ˛
    </section>
  );
};
export default Announcements;
