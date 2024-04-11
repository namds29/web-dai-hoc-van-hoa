import Banner from "src/components/banner";
import styles from "./index.module.scss";
import CustomModal from "src/components/custom-modal";
import { useState } from "react";
import { IMessage } from "src/interfaces";

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
            <div className="bg-subColor h-full p-4 rounded">
              <a href="" aria-label="">
                News
              </a>
            </div>
            <div className="bg-subColor p-4 rounded">
              <a href="" aria-label="">
                News
              </a>
            </div>
            <div className="bg-subColor p-4 rounded">
              <a href="" aria-label="">
                News
              </a>
            </div>
            <div className="bg-subColor p-4 rounded">
              <a href="" aria-label="">
                News
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className=" bg-gray-100 w-full text-black font-bold  justify-between items-center px-20 py-8">
        <div className="flex gap-8 mt-4">
          <div className={styles.card}>
            <div className={styles.card_title}>SCHOOL ACTIVITIES</div>
            <div className="h-[95%] overflow-y-auto px-4 py-1">
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
          <div className={styles.card}>
            <div className={styles.card_title}>CAMPUS LIFE</div>
            <div className="h-[95%] overflow-y-auto px-4 py-1">
              <div className={styles.card_content_news}>
                News
              </div>
              <div className={styles.card_content_news}>
                News
              </div>
              <div className={styles.card_content_news}>
                News
              </div>
            </div>

          </div>
          <div className={styles.card}>
            <div className={styles.card_title}>INTERNATIONAL COOPERATION </div>
            <div className="h-[95%] overflow-y-auto px-4 py-1">
              <div className={styles.card_content_news}>
                TUCST TAKES PART IN THE 2024 ADMISSION CONSULTATION – CAREER GUIDANCE DAY OF TUOI TRE NEWSPAPER
              </div>
              <div className={styles.card_content_news}>
                MR LE DUC GIANG, VICE CHAIRMAN OF THE PEOPLE'S COMMITTEE OF THANH HOA PROVINCE, HAS A WORKING VISIT TO TUCST
              </div>
              <div className={styles.card_content_news}>
                THANH HOA UNIVERSITY OF CULTURE, SPORTS, AND TOURISM ATTENDS THE OPENING CEREMONY OF THANH HOA-DIEN BIEN TOURISM AND CULTURE WEEK 2024
              </div>
              <div className={styles.card_content_news}>
                THANH HOA UNIVERSITY OF CULTURE, SPORTS, AND TOURISM ATTENDS THE OPENING CEREMONY OF THANH HOA-DIEN BIEN TOURISM AND CULTURE WEEK 2024
              </div>
              <div className={styles.card_content_news}>
                THANH HOA UNIVERSITY OF CULTURE, SPORTS, AND TOURISM ATTENDS THE OPENING CEREMONY OF THANH HOA-DIEN BIEN TOURISM AND CULTURE WEEK 2024
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="flex justify-center text-xl bold text-center gap-16 bg-gray-200 w-full text-black  font-bold px-20 py-8">
        <div onClick={handleOpenModalHistory} className="w-[28rem] h-[28rem] p-4 rounded-lg bg-orange-300 flex items-center justify-center cursor-pointer" >
          <img className="rounded-lg" src="/img/history_img.png" alt="" />
        </div>
        <div onClick={handleOpenModalMission} className="w-[28rem] h-[28rem] p-4 rounded-lg bg-orange-300 flex items-center justify-center cursor-pointer">
          <img className="rounded-lg" src="/img/mission_img.png" alt="" />
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
