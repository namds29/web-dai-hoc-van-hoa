import { useNavigate, useParams } from "react-router-dom";
import styles from "./index.module.scss";
import { useEffect, useState } from "react";
import { CalendarOutlined } from "@ant-design/icons";
import HomepageService from "src/services/homepage/homepageService";
import { IPostDataType, ITEM_NEWS } from "src/interfaces";
import moment from "moment";

enum DATA_NEWS_LIST_URL {
  DATA_SCHOOL_ACTIVITIES = "school-activities",
  DATA_CAMPUS_LIFE = "campus-life",
  DATA_INTERNATIONAL_COOPERATION = "international-cooperation",
}

enum DATA_NAME {
  DATA_SCHOOL_ACTIVITIES = "School Activities",
  DATA_CAMPUS_LIFE = "Campus Life",
  DATA_INTERNATIONAL_COOPERATION = "International Cooperation",
}

const url = import.meta.env.VITE_API_URL;

const NewsListComponent = () => {
  const { name } = useParams();
  const [data, setData] = useState<IPostDataType[] | []>();
  const [dataName, setDataName] = useState<string>("");
  const navigate = useNavigate();
  useEffect(() => {
    if (name) {
      switch (name) {
        case DATA_NEWS_LIST_URL.DATA_SCHOOL_ACTIVITIES:
          setDataName(DATA_NAME.DATA_SCHOOL_ACTIVITIES);
          getPostListWithCategoryId(ITEM_NEWS.SCHOOL_ACTIVITIES);
          break;
        case DATA_NEWS_LIST_URL.DATA_CAMPUS_LIFE:
          setDataName(DATA_NAME.DATA_CAMPUS_LIFE);
          getPostListWithCategoryId(ITEM_NEWS.CAMPUS_LIFE);
          break;
        case DATA_NEWS_LIST_URL.DATA_INTERNATIONAL_COOPERATION:
          setDataName(DATA_NAME.DATA_INTERNATIONAL_COOPERATION);
          getPostListWithCategoryId(ITEM_NEWS.INTERNATIONAL_COOPERATION);
          break;
        default:
          break;
      }
    }
  }, [name]);

  const getPostListWithCategoryId = async (id: any) => {
    try {
      const res = await HomepageService.listPostHomepageWithCategoryId(id);
      if (res?.data) {
        setData(res?.data);
      }
    } catch (error: any) {
      if (error) {
        console.log(error);
      }
    }
  };

  return (
    <section className="w-full">
      <section className="bg-gray-100 w-full text-orange-500 font-bold  justify-between items-center px-20 py-8">
        <div className="text-center">
          <p className="text-4xl">{dataName}</p>
        </div>
        <section className="mt-8 bg-amber-800 rounded px-8 py-4 text-white">
          <section id="science">
            {data?.map((item) => {
              console.log(data);

              return (
                <div
                  className="bg-white w-full mt-10 rounded flex gap-6 p-4 mb-5 cursor-pointer"
                  key={item.id}
                  onClick={() => navigate(`/news/${item.id}`)}
                >
                  <div className="w-52 h-40 rounded">
                    <img
                      className="w-52 h-full rounded object-cover"
                      src={`${url}${item.path}`}
                      alt=""
                    />
                  </div>
                  <div className={styles.card_science}>
                    <p className="title text-xl font-bold">{item.title}</p>
                    <p className={styles.card_science_description}>
                      {item.brief}
                    </p>
                    <div className="text-gray-500 flex items-center">
                      <CalendarOutlined />
                      <span className="italic">
                        {moment(item.createdAt ?? "").format("YYYY/MM/DD")}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </section>
        </section>
      </section>
    </section>
  );
};
export default NewsListComponent;
