import styles from "./index.module.scss";

const AdminNews = () => {
  return (
    <section className="w-full">
      <div className="w-full h-400">
        <img
          className="w-full h-400 object-cover"
          src="/img/banner3.png"
          alt=""
        />
      </div>
      <section className="flex gap-10  w-full text-orange-500 font-bold  justify-between px-20 py-8">
        <div>
          <p className="text-xl border-b-4 mb-8">HOT NEWS</p>
          <div className="overflow-hidden bg-red-300 w-full h-80 flex  justify-center items-center relative rounded">
            <img loading="lazy" className={styles.hot_new_pic} src="/img/thumb1.png" alt="" />
            <p className="absolute text-2xl text-white cursor-pointer">
              Sinh viên TUCST đạt giải cao
            </p>
          </div>
        </div>

        <div className="w-1/3">
          <p className="text-xl border-b-4 mb-8">HOT NEWS</p>
          <div className="flex flex-col gap-4 w-full text-white">
            <div className="bg-red-300 h-full p-4 rounded">
              News
            </div>
            <div className="bg-red-300 p-4 rounded">
              <a  aria-label="">
                News
              </a>
            </div>
            <div className="bg-red-300 p-4 rounded">
              <a  aria-label="">
                News
              </a>
            </div>
            <div className="bg-red-300 p-4 rounded">
              <a  aria-label="">
                News
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className=" bg-gray-100 w-full text-black font-bold  justify-between items-center px-20 py-8">
        <div className="flex gap-8 mt-4">
          <div className={styles.card}>
            <div className={styles.card_title}>SCHOOL NAME</div>
            <div className={styles.card_content_news}>
              {/*<img  loading="lazy" className="rounded" src="" alt="" /> */}
              News
            </div>
            <div className={styles.card_content_news}>
              {/*<img  loading="lazy" className="rounded" src="" alt="" /> */}
              News
            </div>
            <div className={styles.card_content_news}>
              {/*<img  loading="lazy" className="rounded" src="" alt="" /> */}
              News
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.card_title}>CAMPUS LIFE</div>
            <div className={styles.card_content_news}>
              {/*<img  loading="lazy" className="rounded" src="" alt="" /> */}
              News
            </div>
            <div className={styles.card_content_news}>
              {/*<img  loading="lazy" className="rounded" src="" alt="" /> */}
              News
            </div>
            <div className={styles.card_content_news}>
              {/*<img  loading="lazy" className="rounded" src="" alt="" /> */}
              News
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.card_title}>INTERNATIONAL COOPERATION </div>
            <div className={styles.card_content_news}>
              {/*<img  loading="lazy" className="rounded" src="" alt="" /> */}
              News
            </div>
            <div className={styles.card_content_news}>
              {/*<img  loading="lazy" className="rounded" src="" alt="" /> */}
              News
            </div>
            <div className={styles.card_content_news}>
              {/*<img  loading="lazy" className="rounded" src="" alt="" /> */}
              News
            </div>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-4 text-xl bold text-center gap-4 bg-gray-200 w-full text-black  font-bold px-20 py-8">
        <div className="w-full h-64 p-8 rounded bg-orange-300 flex items-center">
          HISTORY OF FORMATION AND DEVELOPMENT
        </div>
        <div className="w-full h-64 p-8 rounded bg-orange-300 flex items-center">
          MISSION - VISION - GOAL - CORE VALUES - SLOGAN - EDUCATIONAL
          PHILOSOPHY
        </div>
        <div className="w-full h-64 p-8 rounded bg-orange-300 flex items-center">
          CONDITIONS FOR ENSURE QUALITY OF EDUCATION
        </div>
        <div className="w-full h-64 p-8 rounded bg-orange-300 flex items-center">
          ACHIEVEMENTS AND HONORS ACHIEVED
        </div>
      </section>
    </section>
  );
};
export default AdminNews;
