import { useNavigate, useParams } from "react-router-dom";
import styles from "./index.module.scss";
import { useEffect, useState } from "react";
import {
  DATA_SCHOOL_ACTIVITIES,
  DATA_CAMPUS_LIFE,
  DATA_INTERNATIONAL_COOPERATION,
} from "src/data/data";
import { CalendarOutlined } from "@ant-design/icons";

type DataListItem = {
  id: string;
  imgUrl: string;
  date: string;
  cardTitle: string;
  cardDescription: string;
};

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

const NewsListComponent = () => {
  const { name } = useParams();
  const [data, setData] = useState<DataListItem[] | []>();
  const [dataName, setDataName] = useState<string>("");
  const navigate = useNavigate();
  useEffect(() => {
  
    let dataItem: DataListItem[];
    if (name) {
      switch (name) {
        case DATA_NEWS_LIST_URL.DATA_SCHOOL_ACTIVITIES:
          dataItem = DATA_SCHOOL_ACTIVITIES;
          setData(dataItem);
          setDataName(DATA_NAME.DATA_SCHOOL_ACTIVITIES);
          break;
        case DATA_NEWS_LIST_URL.DATA_CAMPUS_LIFE:
          dataItem = DATA_CAMPUS_LIFE;
          setData(dataItem);
          setDataName(DATA_NAME.DATA_CAMPUS_LIFE);
          break;
        case DATA_NEWS_LIST_URL.DATA_INTERNATIONAL_COOPERATION:
          dataItem = DATA_INTERNATIONAL_COOPERATION;
          setData(dataItem);
          setDataName(DATA_NAME.DATA_INTERNATIONAL_COOPERATION);
          break;
        default:
          break;
      }
    }
    console.log(data)
  }, [name]);

  return (
    <section className="w-full">
      <section className="bg-gray-100 w-full text-orange-500 font-bold  justify-between items-center px-20 py-8">
        <div className="text-center">
          <p className="text-4xl">{dataName}</p>
        </div>
        <section className="mt-8 bg-amber-800 rounded px-8 py-4 text-white">
          <section id="science">
            {data?.map((item) => {
              return (
                <div
                  className="bg-white w-full mt-10 rounded flex gap-6 p-4 mb-5 cursor-pointer"
                  key={item.id} onClick={()=> navigate(`/news/${item.id}`)}
                >
                  <div className="w-52 h-40 rounded">
                    <img
                      className="w-52 h-full rounded object-cover"
                      src={item.imgUrl}
                      alt=""
                    />
                  </div>
                  <div className={styles.card_science}>
                    <p className="title text-xl font-bold">{item.cardTitle}</p>
                    <p className={styles.card_science_description}>
                      {item.cardDescription}
                    </p>
                    <div className="text-gray-500 flex items-center">
                      <CalendarOutlined />
                      <span className="italic">{item.date}</span>
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
