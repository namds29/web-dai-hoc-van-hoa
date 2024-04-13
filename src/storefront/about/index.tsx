import { useState } from "react";
import styles from "./index.module.scss";
import CustomModal from "../../components/custom-modal";
import { IMessage } from "src/interfaces";
import Banner from "../../components/banner";

const About = () => {
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

  const handleOpenPresident = () => {
    setOpen(true);
    setModalContent({
      title: <p className="text-2xl">President - Assoc. Prof. Le Thanh Ha</p>,
      content: (
        <>
          <p className="ml-4 text-xl">
            - Comprehensively manage TUCST's operations according to the
            functions, tasks, and powers specified in TUCST's Organization and
            Operation Regulations and relevant legal provisions; take full
            responsibility before the People's Committee of Thanh Hoa province
            and the Ministry of Education and Training for all aspects of
            TUCST's operations.
          </p>
          <br />
          <p className="ml-4 text-xl">
            - In charge of all aspects: Political ideology; TUCST’s development
            strategy and planning; Personnel Organization; Science and
            Technology; International Cooperation; Finance; Emulation and
            Reward.
          </p>
          <br />
          <p className="ml-4 text-xl">
            - Monitor and promote the activities of the following units:
            Department of Personnel Organization; Department of Scientific
            Management and International Cooperation; Department of Financial
            Planning; Department of Postgraduate Education; Department of
            Inspection; Department of Testing and Educational Quality Assurance;
            Center for Continuing & Joint Training Center; Center for Foreign
            Languages and Information Technology; Center for Admissions
            Consulting & Job counseling; Center of Information-Library.
          </p>
          <br />
          <p className="ml-4 text-xl">
            - Work as a teacher at the Faculty of Foreign Language; Be a Party
            member of the Party Cell of Personnel Organization and Financial
            Planning.
          </p>
        </>
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
      <section className="bg-gray-100 w-full text-orange-500 font-bold  justify-between items-center px-20 py-8">
        <p className="text-xl border-b-4 ">PRESIDENT’S MESSAGE</p>
        <div className="flex p-4 gap-10">
          <blockquote className={styles.quotes}>
            Welcome to Thanh Hoa University of Culture, Sports and Tourism
            (TUCST), a higher education institution upgraded by the Government
            in 2011. After nearly 60 years of construction and development,
            TUCST has become one of the large-scale multi-disciplinary and
            multi-field training facilities and is gradually becoming a
            scientific research center, meeting the requirements of high-quality
            human resources to serve the socio-economic development in Thanh
            Hoa, from the Southern of Red river to the North Central and the
            whole country.
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TUCST
            persistently implements educational goals based on its philosophy as
            follows: "Taking quality, learner success, and social trust as a
            measure of development"; encourage the staff, lecturers, and
            learners to live, work, study, and contribute according to the
            slogan: "Nurturing passion - Encouraging creativity - Respecting
            differences - Cooperating for the development".
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Currently,
            Thanh Hoa University of Culture, Sports and Tourism provides Thanh
            Hoa and the whole country with a full range of educational levels
            including intermediate level, bachelor, master's, doctorate and
            vocational training certificates of Culture, Art, Sports, and
            Tourism. The teaching staff and scientific researchers are highly
            qualified, young and dynamic. They has modern working methods
            because well-trained at home and abroad. TUCST constantly expands
            its training scale, improves facilities, expands domestic and
            international cooperation, and innovates programs, teaching, and
            learning methods to become a university-oriented university
            gradually. Multi-disciplinary application, oriented towards
            research-oriented universities.
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Thanh Hoa
            University of Culture, Sports and Tourism has a dynamic and creative
            training environment and a place to nurture and promote the
            potential of learners. We are committed to building a diverse and
            quality training system and flexible learning methods to ensure that
            learners have all the knowledge, skills and qualities necessary to
            become successful citizens in society.
            <p className="flex flex-row-reverse mt-3">
              Assoc. Prof. Le Thanh Ha
            </p>
          </blockquote>
          <div className="grid grid-col-1 xl:grid-cols-2 gap-4 w-1/2 text-white">
            <div className="rounded">
              <div className="w-full h-[250px]">
                <img
                  className="w-full h-full object-fill overflow-hidden rounded"
                  src="/img/bvhtt.png"
                  alt=""
                />
              </div>
            </div>
            <div className="rounded">
              <div className="w-full h-[250px]" >
                <img
                  className="w-full h-full object-fill overflow-hidden rounded"
                  src="/img/bogd.jpeg"
                  alt=""
                />
              </div>
            </div>
            <div className=" w-full rounded">
              <div className="w-full h-[250px]">
                <img
                  className="w-full h-full object-fill overflow-hidden rounded"
                  src="/img/baothanhhoa.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={`bg_gradient_blue_to_light w-full px-24 py-8 `}>
        <div className="flex justify-center text-white font-bold mb-10">
          <p className={`text-4xl border-b-4`}>BOARD OF DIRECTORS</p>
        </div>
        <div className="grid grid-cols-3 gap-4 text-black pb-10">
          <div className="h-96 rounded-t-xl w-full hover:drop-shadow-2xl ">
            <div className="w-full h-full grayscale hover:grayscale-0 duration-500  cursor-pointer">
              <img
                className="w-full h-full rounded-t-xl object-cover"
                src="/img/vicepresident3.jpg"
                alt="Assoc. Prof. Nguyen Thi Thuc"
              />
            </div>
            <div className="text-center text-white mt-4 ">
              Assoc. Prof. Nguyen Thi Thuc
              <br />
              (Vice president)
            </div>
          </div>
          <div className="h-96 rounded-t-xl w-full hover:drop-shadow-2xl ">
            <div
              className="w-full h-full grayscale hover:grayscale-0 duration-500 cursor-pointer"
              onClick={handleOpenPresident}
            >
              <img
                className="w-full h-full rounded-t-xl object-cover"
                src="/img/vicepresident2.jpg"
                alt="Assoc. Prof. Le Thanh Ha"
              />
            </div>
            <div className="text-center text-white mt-4">
              Assoc. Prof. Le Thanh Ha
              <br />
              (President)
            </div>
          </div>
          <div className="h-96 rounded-t-xl w-full hover:drop-shadow-2xl ">
            <div className="w-full h-full grayscale hover:grayscale-0 duration-500 bg-slate-500  cursor-pointer">
              <img
                className="w-full h-full rounded-t-xl object-cover"
                src="/img/vicepresident1.jpg"
                alt="Ph.D Do Huong Lan"
              />
            </div>
            <div className="text-center text-white mt-4">
              Ph.D Do Huong Lan
              <br />
              (Vice president)
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white w-full text-orange-500 font-bold  justify-between items-center px-20 py-8">
        <p className="text-xl border-b-4 ">ABOUT TUCST</p>
        <p className="mt-8 text-black">SCHOOL NAME</p>
        <div className="flex gap-8 mt-4">
          <div className="w-1/3 bg-red-200 text-black text-center rounded ">
            <img
              className="w-full h-full object-cover"
              src="/img/schoolpic.png"
              alt=""
            />
          </div>
          <div className="w-2/3 bg-yellow-200 max-h-[33rem] rounded text-black text-center">
            <img
              className="w-full h-full object-cover translate-z-1"
              src="/img/school_name.png"
              alt=""
            />
          </div>
        </div>
      </section>
      <section className="flex justify-center text-xl bold text-center gap-10 bg-gray-200 w-full text-black  font-bold px-20 py-8">
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
export default About;
