
import styles from "./index.module.scss";
import { CalendarOutlined, LeftOutlined, RightOutlined } from "@ant-design/icons";

import { Carousel } from 'antd';

const contentStyle: React.CSSProperties = {
    margin: 0,
    width: '100%',
    height: '410px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
    objectFit: 'contain',

};

const Homepage = () => {
    const onChange = (currentslide: number) => {
        console.log(currentslide);
    };
    return (
        <div className={styles.container}>
            <div className="w-full">
                    <Carousel arrows={true} prevArrow={<LeftOutlined />} nextArrow={<RightOutlined />}  afterChange={onChange}>
                        <div>
                            <img style={contentStyle} src="src/assets/img/banner1.png" alt="" />
                        </div>
                        <div>
                            <img style={contentStyle} src="src/assets/img/banner2.png" alt="" />
                        </div>
                        <div>
                            <img style={contentStyle} src="src/assets/img/banner3.png" alt="" />
                        </div>
                    </Carousel>
            </div>
            <section className="w-full">
                <div className="flex justify-center">
                    <div className={styles.card}>
                        <img className={styles.card_img} src="src/assets/img/img1.png" alt="" />
                        <div className={styles.card_text}>Training Program</div>
                    </div>
                    <div className={styles.card}>
                        <img className={styles.card_img} src="src/assets/img/img1.png" alt="" />
                        <div className={styles.card_text}>Partner List</div>
                    </div>
                    <div className={styles.card}>
                        <img className={styles.card_img} src="src/assets/img/img1.png" alt="" />
                        <div className={styles.card_text}>Student Guidebook</div>
                    </div>
                </div>
            </section>

            <section className="bg-gray-100 w-full px-24 py-8">
                <div className="flex text-orange-500 font-bold mb-6 justify-between items-center">
                    <p className="text-xl border-b-4">HIGHLIGHTS & ANNOUNCEMENTS</p>
                    <button className="border border-orange-400 hover:bg-orange-100 px-4 rounded py-2">See more</button>
                </div>
                <div className={styles.newest_new}>
                    <div className={styles.news}>
                        <div className={styles.news_img}>
                            <img className="w-full h-full" src="src/assets/img/img1.png" alt="" />
                        </div>
                        <div className="text-gray-500 flex items-center gap-2 mt-3">
                            <CalendarOutlined />
                            <span className="italic">01/09/2024</span>
                        </div>
                        <div className={styles.news_title}>Công bố Biên bản ghi nhớ (MOU) giữa Trường Đại học CMC với Trường Đại học Korea Nazarene (Hàn Quốc)</div>
                        <div className={styles.news_description}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac elit a mauris auctor lacinia. Proin dui orci, auctor vitae rutrum a, condimentum at elit. Praesent odio nibh, elementum vitae metus nec, aliquet sollicitudin libero. Morbi tellus eros, dignissim eget lobortis vitae, porttitor a dolor.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac elit a mauris auctor lacinia. Proin dui orci, auctor vitae rutrum a, condimentum at elit. Praesent odio nibh, elementum vitae metus nec, aliquet sollicitudin libero. Morbi tellus eros, dignissim eget lobortis vitae, porttitor a dolor.
                        </div>
                    </div>

                    <div className={styles.news}>
                        <div className={styles.news_img}><img className="w-full h-full" src="src/assets/img/img1.png" alt="" /></div>
                        <div className="text-gray-500 flex items-center gap-2 mt-3">
                            <CalendarOutlined />
                            <span className="italic">01/09/2024</span>
                        </div>
                        <div className={styles.news_title}>Công bố Biên bản ghi nhớ (MOU) giữa Trường Đại học CMC với Trường Đại học Korea Nazarene (Hàn Quốc)</div>
                        <div className={styles.news_description}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac elit a mauris auctor lacinia. Proin dui orci, auctor vitae rutrum a, condimentum at elit. Praesent odio nibh, elementum vitae metus nec, aliquet sollicitudin libero. Morbi tellus eros, dignissim eget lobortis vitae, porttitor a dolor.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac elit a mauris auctor lacinia. Proin dui orci, auctor vitae rutrum a, condimentum at elit. Praesent odio nibh, elementum vitae metus nec, aliquet sollicitudin libero. Morbi tellus eros, dignissim eget lobortis vitae, porttitor a dolor.
                        </div>
                    </div>
                </div>

                <div className={styles.sub_news}>
                    <div className={styles.sub_news_box}>
                        <div className={styles.sub_news__img}>
                            <img src="src/assets/img/img1.png" alt="" />
                        </div>
                        <div className={styles.sub_news__content}>
                            <div className={styles.sub_news__title}>
                                <a href="" title="Hơn 600 đầu sách được Trường Đại học CMC tiếp nhận từ Trường Quốc tế Hàn Quốc tại Hà Nội">
                                Hơn 600 đầu sách được Trường Đại học CMC tiếp nhận từ Trường Quốc tế Hàn Quốc tại Hà Nội
                                </a>
                            </div>
                            <div className="text-gray-500  absolute bottom-0 right-4 flex items-center gap-2 mt-1">
                                <CalendarOutlined />
                                <span  className="italic">01/09/2024</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.sub_news_box}>
                        <div className={styles.sub_news__img}>
                            <img src="src/assets/img/img1.png" alt="" />
                        </div>
                        <div className={styles.sub_news__content}>
                            <div className={styles.sub_news__title}>
                                <a href="" title="Hơn 600 đầu sách được Trường Đại học CMC tiếp nhận từ Trường Quốc tế Hàn Quốc tại Hà Nội">
                                Hơn 600 đầu sách được Trường Đại học CMC tiếp nhận từ Trường Quốc tế Hàn Quốc tại Hà Nội
                                </a>
                            </div>
                            <div className="text-gray-500  absolute bottom-0 right-4 flex items-center gap-2 mt-1">
                                <CalendarOutlined />
                                <span  className="italic">01/09/2024</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.sub_news_box}>
                        <div className={styles.sub_news__img}>
                            <img src="src/assets/img/img1.png" alt="" />
                        </div>
                        <div className={styles.sub_news__content}>
                            <div className={styles.sub_news__title}>
                                <a href="" title="Hơn 600 đầu sách được Trường Đại học CMC tiếp nhận từ Trường Quốc tế Hàn Quốc tại Hà Nội">
                                Hơn 600 đầu sách được Trường Đại học CMC tiếp nhận từ Trường Quốc tế Hàn Quốc tại Hà Nội
                                </a>
                            </div>
                            <div className="text-gray-500  absolute bottom-0 right-4 flex items-center gap-2 mt-1">
                                <CalendarOutlined />
                                <span  className="italic">01/09/2024</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.sub_news_box}>
                        <div className={styles.sub_news__img}>
                            <img src="src/assets/img/img1.png" alt="" />
                        </div>
                        <div className={styles.sub_news__content}>
                            <div className={styles.sub_news__title}>
                                <a href="" title="Hơn 600 đầu sách được Trường Đại học CMC tiếp nhận từ Trường Quốc tế Hàn Quốc tại Hà Nội">
                                Hơn 600 đầu sách được Trường Đại học CMC tiếp nhận từ Trường Quốc tế Hàn Quốc tại Hà Nội
                                </a>
                            </div>
                            <div className="text-gray-500  absolute bottom-0 right-4 flex items-center gap-2 mt-1">
                                <CalendarOutlined />
                                <span  className="italic">01/09/2024</span>
                            </div>
                        </div>
                    </div>
                    

                

                </div>
            </section>
        </div>
    );
};

export default Homepage;
