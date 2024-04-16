import Banner from "src/components/banner";
import styles from "./index.module.scss";
import CustomModal from "src/components/custom-modal";
import { useState } from "react";
import { IMessage } from "src/interfaces";
import NewsCardComponent from "src/components/news-card-component";
import { DATA_CAMPUS_LIFE, DATA_INTERNATIONAL_COOPERATION, DATA_SCHOOL_ACTIVITIES } from "src/data/data";

const News = () => {
  const [open, setOpen] = useState(false);
  const [modalContent, setModalContent] = useState<IMessage>({
    title: <></>,
    content: <></>,
  });

  const handleOpenModalHistory = () => {
    setOpen(true);
    setModalContent({
      title: (
        <p className="text-2xl">
          TUCST’S HISTORY OF ESTABLISHMENT AND DEVELOPMENT
        </p>
      ),
      content: (
        <div className="text-lg">
          <strong >
            Thanh Hoa University of Culture, Sports and Tourism is a public
            university within the national education system, under the
            management of the People's Committee of Thanh Hoa Province and the
            professional management of the Ministry of Education and Training.
          </strong>
          <p className="ml-4">
            - On March 9, 1967, the Chairman of the People's Committee of Thanh
            Hoa Province signed the Decision on the establishment of the School
            of Culture and Arts under Thanh Hoa Department of Culture and
            Information.
          </p>
          <p className="ml-4">
            - On October 5, 1978, the Minister of University and Professional
            Intermediate Schools (now the Ministry of Education and Training)
            signed the Decision No. 918/THCN-TC upgrading the School of Culture
            and Arts into the Intermediate school of Culture and Arts under
            Thanh Hoa Department of Culture and Information.
          </p>
          <p className="ml-4">
            - On August 25, 2004, the Minister of Education and Training signed
            Decision No.4765/QD-BGD&DT-TCCB on the establishment of Thanh Hoa
            College of Culture and Arts (on the basis of upgrading Thanh Hoa the
            Intermediate School of Culture and Arts)
          </p>
          <p className="ml-4">
            - On July 22, 2011, Deputy Prime Minister Nguyen Thien Nhan signed
            the Decision No. 1221/QD-TTg on the establishment of Thanh Hoa
            University of Culture, Sports and Tourism (on the basis of upgrading
            Thanh Hoa College of Culture and Arts).
          </p>
        </div>
      ),
    });
  };

  const handleOpenModalMission = () => {
    setOpen(true);
    setModalContent({
      title: (
        <p className="text-2xl">
          MISSION - VISION - GOAL - CORE VALUES - SLOGAN - EDUCATIONAL
          PHILOSOPHY
        </p>
      ),
      content: (
        <div className="">
          <strong className="text-lg">1. Mission</strong>
          <p className="ml-4 mb-4">
            TUCT has the mission of training high-quality human resources and
            scientific research in social sciences with 3 main areas: Culture -
            Arts, Sports and Tourism; contributing to the socio-economic
            development of Thanh Hoa province, the South Red River region -
            North Central region and the whole country.
          </p>
          <strong className="text-lg">2. Vision</strong>
          <p className="ml-4 mb-4">
            By 2045, TUCST will be one of the top prestigious training
            institutions in the whole country in scientific research on social
            sciences in the South Red River region - North Central region and
            training programs of culture - arts, sports and tourism.
          </p>
          <strong className="text-lg">3. Goal</strong>
          <p className="ml-4 mb-4">
            Building TUCST to become a training and scientific research
            institution of Culture - Arts, Sports and Tourism of the South Red
            River - North Central region and the whole country; gradually expand
            scale associated with improving training quality, meeting social
            needs; promote domestic and international cooperation.
          </p>
          <strong className="text-lg">4. Core values</strong>
          <p className="ml-4 mb-4">
            Quality - Professionalism - Cooperation - Development.
          </p>
          <strong className="text-lg">5. Educational philosophy</strong>
          <p className="ml-4 mb-4">
            Nurture passion, Encourage creativity, Respect differences,
            Cooperation and development.
          </p>
        </div>
      ),
    });
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const handleOk = () => {
    setOpen(false);
  };
  return (
    <section className="w-full">
      <Banner />
      <section className="flex gap-5 w-full text-orange-500 font-bold  justify-between px-8 xl:px-16 py-8">
        <div className="w-full">
          <p className="text-xl border-b-4 mb-8">HOT NEWS</p>
          <div className="overflow-hidden w-full h-[21.7rem] flex  justify-center items-center relative rounded">
            <img className={styles.hot_new_pic} src="/img/thumb1.png" alt="" />
            <p className="absolute text-2xl text-white cursor-pointer">
              Sinh viên TUCST đạt giải cao
            </p>
          </div>
        </div>
        <div className="w-1/2 h-full ">
          <p className="text-xl border-b-4 mb-8">HOT NEWS</p>
          <div className="flex flex-col h-[19.925rem]  pr-4 gap-2 w-full text-white">
            <div className="bg-subColor w-full h-40 text-white rounded flex gap-6 p-4 mb-5">
              <div className="w-52 h-full rounded">
                <img className="w-52 h-full rounded object-cover" src="/img/img1.png" alt="" />
              </div>
              <div className={styles.card_science}>
                <p className="title text-xl font-bold letter tracking-wider">Science Title</p>
                <p className={styles.card_science_description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam rhoncus dignissim risus, et consectetur massa tincidunt sit amet. Nam elementum vulputate metus</p>
                <a className="text-white hover:text-gray-300 underline" >Link website</a>
              </div>
            </div>

            <div className="bg-subColor w-full h-40 text-white rounded flex gap-6 p-4 mb-5">
              <div className="w-52 h-full rounded">
                <img className="w-52 h-full rounded object-cover" src="/img/img1.png" alt="" />
              </div>
              <div className={styles.card_science}>
                <p className="title text-xl font-bold letter tracking-wider">Science Title</p>
                <p className={styles.card_science_description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam rhoncus dignissim risus, et consectetur massa tincidunt sit amet. Nam elementum vulputate metus</p>
                <a className="text-white hover:text-gray-300 underline" >Link website</a>
              </div>
            </div>

          </div>
        </div>
      </section>
      <section className="px-8 xl:px-16 py-8 bg-gray-200">
        <div className="flex gap-4 text-white">
          <div className="w-full rounded bg-[#1e6bff]">
            <div className="w-full">
              <img
                className="w-full h-full object-cover overflow-hidden rounded"
                src="/img/bvhtt.png"
                alt=""
              />
            </div>
          </div>
          <div className="w-full rounded bg-white">
            <div className="w-full" >
              <img
                className="w-full h-full object-cover overflow-hidden rounded"
                src="/img/bogd.jpeg"
                alt=""
              />
            </div>
          </div>
          <div className="w-full rounded">
            <div className="w-full">
              <img
                className="w-full h-full object-cover overflow-hidden rounded"
                src="/img/baothanhhoa.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-100 w-full px-24 py-8">
        <div className="flex text-orange-500 font-bold mb-6 justify-between items-center">
          <p className="text-xl border-b-4">SCHOOL ACTIVITIES</p>
          <button className="border border-orange-400 hover:bg-orange-100 px-4 rounded py-2">
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

      <section className="bg-gray-100 w-full px-24 py-8">
        <div className="flex text-orange-500 font-bold mb-6 justify-between items-center">
          <p className="text-xl border-b-4">CAMPUS LIFE</p>
          <button className="border border-orange-400 hover:bg-orange-100 px-4 rounded py-2">
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

      <section className="bg-gray-100 w-full px-24 py-8">
        <div className="flex text-orange-500 font-bold mb-6 justify-between items-center">
          <p className="text-xl border-b-4">INTERNATIONAL COOPERATION</p>
          <button className="border border-orange-400 hover:bg-orange-100 px-4 rounded py-2">
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

      <CustomModal
        message={modalContent}
        type=""
        onCancel={handleCancel}
        onOk={handleOk}
        show={open}
      />
    </section>
  );
};
export default News;
