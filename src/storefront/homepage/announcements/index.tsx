
import NewsCardComponent from "src/components/news-card-component";
import styles from "./index.module.scss";

const Announcements = () => {
    const data = [
        {
            id: "news8",
            imgUrl: "/img/img1.png",
            date: "01/09/2024",
            cardTitle: "JOB EXCHANGE PROGRAM BETWEEN TUCST AND SSGV SINGAPORE JOINT VENTURE COMPANY",
            cardDescription: "On the morning of January 11, 2024, a job career exchange program between TUCST and SkillsSG Ventures, Singapore (SSGV) was held at TUCST. Attending the program were representatives from Singapore including Mr. Cheng Hong Siang - CEO of SSGV and from TUCST including Assoc.Pror. Dr. Nguyen Thi Thuc - Vice President, teaching staff and students..."
        },
        {
            id: "news9",
            imgUrl: "/img/img1.png",
            date: "01/09/2024",
            cardTitle: "TUCST KEY OFFICIAL WORKING VISIT TO TAIWAN",
            cardDescription: "In order to expand international cooperation relationships and further strengthen friendship and cooperation in training and scientific research between Vietnam and Taiwan, from October 27, 2023 to November 1, 2023, the delegation of TUCST’s key officials led by Associate Professor Dr. Le Thanh Ha- TUCST President had a working visit to Taiwan..."
        },
        {
            id: "news3",
            imgUrl: "/img/img1.png",
            date: "01/09/2024",
            cardTitle: "THANH HOA UNIVERSITY OF CULTURE, SPORTS AND TOURISM ATTENDS THE OPENING CEREMONY OF THANH HOA-DIEN BIEN TOURISM AND CULTURE WEEK 2024",
            cardDescription: "Towards celebrating the 70th anniversary of the Dien Bien Phu Victory (May 7, 1954 - May 7, 2024), 115 years of the establishment of Dien Bien province (June 28, 1909 - June 28, 2024) and 75 years of the establishment of Thanh Hoa Provincial Party Committee (October 10, 1949 - October 10, 2024)..."
        }
    ];

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
            <div className="w-full text-center mt-8">
                <button className="text-base border text-orange-500 border-orange-400 hover:bg-orange-100 px-6 rounded py-3">
                    See more
                </button>
            </div>
            ˛
        </section>
    )
}
export default Announcements