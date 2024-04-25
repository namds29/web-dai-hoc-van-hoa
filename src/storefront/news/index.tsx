import Banner from "src/components/banner";
import styles from "./index.module.scss";
import NewsCardComponent from "src/components/news-card-component";
import {
  DATA_CAMPUS_LIFE,
  DATA_INTERNATIONAL_COOPERATION,
  DATA_SCHOOL_ACTIVITIES,
} from "src/data/data";
import { useNavigate } from "react-router-dom";

const NEWS = [
  {
    id: "news8",
    imgUrl: "/img/ic9.JPG",
    date: "01/09/2024",
    cardTitle: "JOB EXCHANGE PROGRAM BETWEEN TUCST AND SSGV SINGAPORE JOINT VENTURE COMPANY",
    cardDescription: "On the morning of January 11, 2024, a job career exchange program between TUCST and SkillsSG Ventures, Singapore (SSGV) was held at TUCST. Attending the program were representatives from Singapore including Mr. Cheng Hong Siang - CEO of SSGV and from TUCST including Assoc.Pror. Dr. Nguyen Thi Thuc - Vice President, teaching staff and students..."
  },
  {
    id: "news9",
    imgUrl: "/img/icop5.jpg",
    date: "01/09/2024",
    cardTitle: "TUCST KEY OFFICIAL WORKING VISIT TO TAIWAN",
    cardDescription: "In order to expand international cooperation relationships and further strengthen friendship and cooperation in training and scientific research between Vietnam and Taiwan, from October 27, 2023 to November 1, 2023, the delegation of TUCST’s key officials led by Associate Professor Dr. Le Thanh Ha- TUCST President had a working visit to Taiwan..."
  },
];
const News = () => {
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
            {NEWS.map(item => (<div className="bg-subColor w-full h-40 text-white rounded flex gap-6 p-3 mb-5 ">
              <div className="w-52 h-full rounded cursor-pointer" onClick={()=> navigate(`/news/${item.id}`)}>
                <img
                  className="w-52 h-full rounded object-cover"
                  src={item.imgUrl}
                  alt=""
                />
              </div>
              <div className={styles.card_science}>
                <p className="title truncate font-bold letter tracking-wider">
                  {item.cardTitle}
                </p>
                <p className={styles.card_science_description}>
                  {item.cardDescription}
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
            <div className="w-full flex items-center justify-center h-full">
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
