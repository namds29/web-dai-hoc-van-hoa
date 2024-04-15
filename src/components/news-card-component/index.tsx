import { useNavigate } from "react-router-dom";
import styles from "./index.module.scss";
import { CalendarOutlined } from "@ant-design/icons";

type Props = {
    id: string,
    imgUrl: string,
    date: string,
    cardTitle: string,
    cardDescription: string
}

const NewsCardComponent = ({ id, imgUrl, date, cardTitle, cardDescription }: Props) => {
    const navigate = useNavigate()
    return (
        <>
            <div className={styles.news} onClick={() => navigate(`/news/${id}`)}>
                <div className={styles.news_img}>
                    <img  className="w-full h-full translate-z-1" src={imgUrl} alt="" />
                </div>
                <div className="text-gray-500 flex items-center gap-2 mt-3">
                    <CalendarOutlined />
                    <span className="italic">{date}</span>
                </div>
                <div className={styles.news_title}>
                    {cardTitle}
                </div>
                <div className={styles.news_description}>
                    {cardDescription}
                </div>
            </div>
        </>
    );
};
export default NewsCardComponent;
