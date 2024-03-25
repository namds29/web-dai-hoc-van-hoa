
import styles from "./index.module.scss";

import { CalendarOutlined } from "@ant-design/icons";
const Announcements = () => {

    return (

        <section className="bg-gray-100 w-full px-24 py-8">
            <div className="flex text-orange-500 font-bold mb-6 justify-between items-center">
                <p className="text-xl border-b-4">HIGHLIGHTS & ANNOUNCEMENTS</p>
                <button className="border border-orange-400 hover:bg-orange-100 px-4 rounded py-2">
                    See more
                </button>
            </div>
            <div className={styles.newest_new}>
                <div className={styles.news}>
                    <div className={styles.news_img}>
                        <img className="w-full h-full" src="/img/img1.png" alt="" />
                    </div>
                    <div className="text-gray-500 flex items-center gap-2 mt-3">
                        <CalendarOutlined />
                        <span className="italic">01/09/2024</span>
                    </div>
                    <div className={styles.news_title}>
                        Công bố Biên bản ghi nhớ (MOU) giữa Trường Đại học CMC với Trường
                        Đại học Korea Nazarene (Hàn Quốc)
                    </div>
                    <div className={styles.news_description}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac
                        elit a mauris auctor lacinia. Proin dui orci, auctor vitae rutrum
                        a, condimentum at elit. Praesent odio nibh, elementum vitae metus
                        nec, aliquet sollicitudin libero. Morbi tellus eros, dignissim
                        eget lobortis vitae, porttitor a dolor. Lorem ipsum dolor sit
                        amet, consectetur adipiscing elit. Duis ac elit a mauris auctor
                        lacinia.
                    </div>
                </div>

                <div className={styles.news}>
                    <div className={styles.news_img}>
                        <img className="w-full h-full" src="/img/img1.png" alt="" />
                    </div>
                    <div className="text-gray-500 flex items-center gap-2 mt-3">
                        <CalendarOutlined />
                        <span className="italic">01/09/2024</span>
                    </div>
                    <div className={styles.news_title}>
                        Công bố Biên bản ghi nhớ (MOU) giữa Trường Đại học CMC với Trường
                        Đại học Korea Nazarene (Hàn Quốc)
                    </div>
                    <div className={styles.news_description}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac
                        elit a mauris auctor lacinia. Proin dui orci, auctor vitae rutrum
                        a, condimentum at elit. Praesent odio nibh, elementum vitae metus
                        nec, aliquet sollicitudin libero. Morbi tellus eros, dignissim
                        eget lobortis vitae, porttitor a dolor. Lorem ipsum dolor sit
                        amet, consectetur adipiscing elit. Duis ac elit a mauris auctor
                        lacinia. Proin dui orci, auctor vitae rutrum a, condimentum at
                        elit. Praesent odio nibh, elementum vitae metus nec, aliquet
                        sollicitudin libero. Morbi tellus eros, dignissim eget lobortis
                        vitae, porttitor a dolor.
                    </div>
                </div>
            </div>

            <div className={styles.sub_news}>
                <div className={styles.sub_news_box}>
                    <div className={styles.sub_news__img}>
                        <img src="/img/img1.png" alt="" />
                    </div>
                    <div className={styles.sub_news__content}>
                        <div className={styles.sub_news__title}>
                            <a
                                href=""
                                title="Hơn 600 đầu sách được Trường Đại học CMC tiếp nhận từ Trường Quốc tế Hàn Quốc tại Hà Nội"
                            >
                                Hơn 600 đầu sách được Trường Đại học CMC tiếp nhận từ Trường
                                Quốc tế Hàn Quốc tại Hà Nội
                            </a>
                        </div>
                        <div className="text-gray-500  absolute bottom-3 right-4 flex items-center gap-2 mt-4">
                            <CalendarOutlined />
                            <span className="italic text-sm">01/09/2024</span>
                        </div>
                    </div>
                </div>
                <div className={styles.sub_news_box}>
                    <div className={styles.sub_news__img}>
                        <img src="/img/img1.png" alt="" />
                    </div>
                    <div className={styles.sub_news__content}>
                        <div className={styles.sub_news__title}>
                            <a
                                href=""
                                title="Hơn 600 đầu sách được Trường Đại học CMC tiếp nhận từ Trường Quốc tế Hàn Quốc tại Hà Nội"
                            >
                                Hơn 600 đầu sách được Trường Đại học CMC tiếp nhận từ Trường
                                Quốc tế Hàn Quốc tại Hà Nội
                            </a>
                        </div>
                        <div className="text-gray-500  absolute bottom-3 right-4 flex items-center gap-2 mt-4">
                            <CalendarOutlined />
                            <span className="italic text-sm">01/09/2024</span>
                        </div>
                    </div>
                </div>
                <div className={styles.sub_news_box}>
                    <div className={styles.sub_news__img}>
                        <img src="/img/img1.png" alt="" />
                    </div>
                    <div className={styles.sub_news__content}>
                        <div className={styles.sub_news__title}>
                            <a
                                href=""
                                title="Hơn 600 đầu sách được Trường Đại học CMC tiếp nhận từ Trường Quốc tế Hàn Quốc tại Hà Nội"
                            >
                                Hơn 600 đầu sách được Trường Đại học CMC tiếp nhận từ Trường
                                Quốc tế Hàn Quốc tại Hà Nội
                            </a>
                        </div>
                        <div className="text-gray-500  absolute bottom-3 right-4 flex items-center gap-2 mt-4">
                            <CalendarOutlined />
                            <span className="italic text-sm">01/09/2024</span>
                        </div>
                    </div>
                </div>
                <div className={styles.sub_news_box}>
                    <div className={styles.sub_news__img}>
                        <img src="/img/img1.png" alt="" />
                    </div>
                    <div className={styles.sub_news__content}>
                        <div className={styles.sub_news__title}>
                            <a
                                href=""
                                title="Hơn 600 đầu sách được Trường Đại học CMC tiếp nhận từ Trường Quốc tế Hàn Quốc tại Hà Nội"
                            >
                                Hơn 600 đầu sách được Trường Đại học CMC tiếp nhận từ Trường
                                Quốc tế Hàn Quốc tại Hà Nội
                            </a>
                        </div>
                        <div className="text-gray-500  absolute bottom-3 right-4 flex items-center gap-2 mt-4">
                            <CalendarOutlined />
                            <span className="italic text-sm">01/09/2024</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Announcements