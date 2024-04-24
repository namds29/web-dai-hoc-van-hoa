
import NewsCardComponent from "src/components/news-card-component";
import styles from "./index.module.scss";
import { useNavigate } from "react-router-dom";
import { CalendarOutlined } from "@ant-design/icons";

const Announcements = () => {
    const navigate = useNavigate();
    const data = [
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
    const DATA_ANNOUCEMENT = [
        {
            id: "1",
            date: "10/04/2024",
            content: "ANNOUNCEMENT OF THE HOLIDAY SCHEDULE OF HUNG KINGS COMMEMORATION DAY IN 2024"
        },
        {
            id: "2",
            date: "10/04/2024",
            content: "ANNOUNCEMENT OF THE ORGANIZATION OF A DIALOGUE CONFERENCE BETWEEN SCHOOL PRINCIPALS AND STUDENTS 2023 - 2024 SCHOOL YEAR"
        },
        {
            id: "3",
            date: "10/04/2024",
            content: "PLAN OF ORGANIZING THE 2024 STUDENT FOOTBALL TOURNAMENT TO CELEBRATE THE 93rd ANNIVERSARY OF THE ESTABLISHMENT OF THE HO CHI MINH COMMUNIST YOUTH UNION (March 26, 1931 - March 26, 2024)"
        },
        {
            id: "4",
            date: "10/04/2024",
            content: "PLAN OF 'TUCST RUNNING 2024' ORGANIZATION"
        },

    ]

    return (
        <section className="bg-gray-100 w-full px-4 md:px-24 py-8">
            <div className="flex text-orange-500 font-bold mb-6 justify-between items-center">
                <p className="text-sm md:text-xl border-b-4">HIGHLIGHTS & ANNOUNCEMENTS</p>
            </div>
            <div className={styles.newest_new}>
                {data.map((newsItem, index) => (
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
            <div className={styles.sub_news}>
                {DATA_ANNOUCEMENT.map(item => (
                    <div key={item.id} className={styles.sub_news_box}>
                        <div className="text-orange-500 font-bold flex gap-1 items-center">
                            <CalendarOutlined /> {item.date} <img className="w-[40px] h-[20px] ml-2" src="/img/icon-new.gif" alt="gif new" />
                        </div>
                        <div className={styles.sub_news_description}>{item.content}</div>
                    </div>
                ))}
            </div>
            <div className="w-full text-center mt-8">
                <button className="text-base border text-orange-500 border-orange-400 hover:bg-orange-100 px-6 rounded py-3" onClick={() => navigate("/news")}>
                    See more
                </button>
            </div>
            ˛
        </section>
    )
}
export default Announcements