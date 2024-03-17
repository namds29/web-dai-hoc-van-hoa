import { useState } from "react";
import styles from "./index.module.scss";
import { Modal } from "antd";

const About = () => {
  const [isModalInfoOpen, setIsModalInfoOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showInfoModal = () => {
    setIsModalInfoOpen(true);
  };

  const handleInfoCancel = () => {
    setIsModalInfoOpen(false);
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="w-full">
      <div className="w-full h-400">
        <img
          className="w-full h-400 object-cover"
          src="/img/banner3.png"
          alt=""
        />
      </div>
      <section className="bg-gray-100 w-full text-orange-500 font-bold  justify-between items-center px-20 py-8">
        <p className="text-xl border-b-4 ">PRESIDENT’S MESSAGE</p>
        <div className="flex p-4 gap-10">
          <blockquote className={styles.quotes}>
            Chào mừng các bạn đến với Trường Đại học Văn hóa, Thể thao và Du
            lịch Thanh Hóa, cơ sở giáo dục đại học được Chính phủ nâng cấp vào
            năm 2011. Trải qua gần 60 năm xây dựng và phát triển, Trường đã trở
            thành một trong những cơ sở đào tạo đa ngành, đa lĩnh vực quy mô lớn
            và đang dần trở thành một trung tâm nghiên cứu khoa học, đáp ứng yêu
            cầu nguồn nhân lực chất lượng cao phục vụ phát triển kinh tế - xã
            hội của tỉnh Thanh Hóa, khu vực Nam Sông Hồng - Bắc Trung Bộ và cả
            nước.
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Nhà trường kiên trì
            thực hiện các mục tiêu giáo dục dựa trên triết lý của mình là: "Lấy
            chất lượng, thành công của người học, tín nhiệm của xã hội làm thước
            đo phát triển"; Khích lệ cán bộ, giảng viên và người học sống, lao
            động, học tập và cống hiến theo khẩu hiệu: "Nuôi dưỡng đam mê -
            Khuyến khích sáng tạo - Tôn trọng khác biệt - Hợp tác phát triển".
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Hiện nay, Trường
            Đại học Văn hóa, Thể thao và Du lịch Thanh Hóa đào tạo đầy đủ các
            bậc học từ trung cấp năng khiếu nghệ thuật đến đại học, thạc sĩ,
            tiến sĩ và hàng loạt chứng chỉ nghề thuộc các lĩnh vực Văn hóa -
            Nghệ thuật, Thể thao, Du lịch cho địa phương và cả nước. Đội ngũ
            giảng dạy và nghiên cứu có trình độ cao, trẻ trung, năng động, có
            phương pháp làm việc hiện đại, được đào tạo bài bản trong và ngoài
            nước. Nhà trường không ngừng mở rộng quy mô đào tạo, nâng cao cơ sở
            vật chất, mở rộng quan hệ hợp tác trong nước và quốc tế, đổi mới
            chương trình, phương pháp dạy và học để từng bước trở thành trường
            đại học định hướng ứng dụng đa lĩnh vực, hướng đến đại học định
            hướng nghiên cứu.
          </blockquote>
          <div className="grid grid-cols-2 gap-4 w-1/2 text-white">
            <div className="bg-red-300 p-4 rounded">
              <a href="" aria-label="">
                LIÊN KẾT WEBSITE
              </a>
            </div>
            <div className="bg-red-300 p-4 rounded">
              <a href="" aria-label="">
                LIÊN KẾT WEBSITE
              </a>
            </div>
            <div className="bg-red-300 p-4 rounded">
              <a href="" aria-label="">
                LIÊN KẾT WEBSITE
              </a>
            </div>
            <div className="bg-red-300 p-4 rounded">
              <a href="" aria-label="">
                LIÊN KẾT WEBSITE
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className={`bg_gradient_blue_to_light w-full px-24 py-8 `}>
        <div className="flex justify-center text-white font-bold mb-10">
          <p className={`text-4xl border-b-4`}>BOARD OF DIRECTORS</p>
        </div>
        <div className="grid grid-cols-4 gap-4 text-black pb-10 ">
          <div className="h-72 w-72 rounded-t-xl w-full hover:drop-shadow-2xl ">
            <div className="w-full h-full grayscale hover:grayscale-0  duration-500">
              <img
                className="w-full h-full rounded-t-xl object-cover"
                src="/img/ceo.png"
                alt=""
              />
            </div>
            <div className="text-center text-white mt-4">
              Nguyễn Văn A
              <br />
              (President)
            </div>
          </div>
          <div className="h-72 w-72 rounded-t-xl w-full hover:drop-shadow-2xl ">
            <div className="w-full h-full grayscale hover:grayscale-0  duration-500">
              <img
                className="w-full h-full rounded-t-xl object-cover"
                src="/img/ceo.png"
                alt=""
              />
            </div>
            <div className="text-center text-white mt-4">
              Nguyễn Văn A
              <br />
              (Vice president)
            </div>
          </div>
          <div className="h-72 w-72 rounded-t-xl w-full hover:drop-shadow-2xl ">
            <div className="w-full h-full grayscale hover:grayscale-0  duration-500">
              <img
                className="w-full h-full rounded-t-xl object-cover"
                src="/img/ceo.png"
                alt=""
              />
            </div>
            <div className="text-center text-white mt-4">
              Nguyễn Văn A
              <br />
              (Vice president)
            </div>
          </div>
          <div className="h-72 w-72 rounded-t-xl w-full hover:drop-shadow-2xl ">
            <div className="w-full h-full grayscale hover:grayscale-0  duration-500">
              <img
                className="w-full h-full rounded-t-xl object-cover"
                src="/img/ceo.png"
                alt=""
              />
            </div>
            <div className="text-center text-white mt-4">
              Nguyễn Văn A
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
          <div className="w-1/3 bg-red-200 text-black text-center pt-28  h-72 rounded ">
            {/* <img className="rounded" src="" alt="" /> */}
            IMAGE
          </div>
          <div className="w-2/3 bg-yellow-200 rounded text-black text-center pt-28 ">
            Name: Thanh Hoa University of Culture, Sports and Tourism
            (abbreviation: TUCST)
            <br />
            Code: DVD
            <br />
            Type: Public university
          </div>
        </div>
      </section>
      <section className="grid grid-cols-4 text-xl bold text-center gap-4 bg-gray-200 w-full text-black  font-bold px-20 py-8">
        <div
          className="w-full h-64 p-8 rounded bg-orange-300 flex items-center"
          onClick={showInfoModal}
        >
          HISTORY OF FORMATION AND DEVELOPMENT
        </div>
        <div
          className="w-full h-64 p-8 rounded bg-orange-300 flex items-center"
          onClick={showModal}
        >
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
      <Modal
        title={
          <p className="text-2xl">
            TUCST’S HISTORY OF ESTABLISHMENT AND DEVELOPMENT
          </p>
        }
        open={isModalInfoOpen}
        footer={null}
        centered
        onCancel={handleInfoCancel}
      >
        <strong>
          Thanh Hoa University of Culture, Sports and Tourism is a public
          university within the national education system, under the management
          of the People's Committee of Thanh Hoa Province and the professional
          management of the Ministry of Education and Training.
        </strong>
        <p className="ml-4">
          - On March 9, 1967, the Chairman of the People's Committee of Thanh
          Hoa Province signed the Decision on the establishment of the School of
          Culture and Arts under Thanh Hoa Department of Culture and
          Information.
        </p>
        <p className="ml-4">
          - On October 5, 1978, the Minister of University and Professional
          Intermediate Schools (now the Ministry of Education and Training)
          signed the Decision No. 918/THCN-TC upgrading the School of Culture
          and Arts into the Intermediate school of Culture and Arts under Thanh
          Hoa Department of Culture and Information.
        </p>
        <p className="ml-4">
          - On August 25, 2004, the Minister of Education and Training signed
          Decision No.4765/QD-BGD&DT-TCCB on the establishment of Thanh Hoa
          College of Culture and Arts (on the basis of upgrading Thanh Hoa the
          Intermediate School of Culture and Arts)
        </p>
        <p className="ml-4">
          - On July 22, 2011, Deputy Prime Minister Nguyen Thien Nhan signed the
          Decision No. 1221/QD-TTg on the establishment of Thanh Hoa University
          of Culture, Sports and Tourism (on the basis of upgrading Thanh Hoa
          College of Culture and Arts).
        </p>
      </Modal>
      <Modal
        title={
          <p className="text-2xl">
            MISSION - VISION - GOAL - CORE VALUES - SLOGAN - EDUCATIONAL
            PHILOSOPHY
          </p>
        }
        open={isModalOpen}
        footer={null}
        centered
        onCancel={handleCancel}
      >
        <strong>1. Mission</strong>
        <p className="ml-4 mb-4">
          TUCT has the mission of training high-quality human resources and
          scientific research in social sciences with 3 main areas: Culture -
          Arts, Sports and Tourism; contributing to the socio-economic
          development of Thanh Hoa province, the South Red River region - North
          Central region and the whole country.
        </p>
        <strong>2. Vision</strong>
        <p className="ml-4 mb-4">
          By 2045, TUCST will be one of the top prestigious training
          institutions in the whole country in scientific research on social
          sciences in the South Red River region - North Central region and
          training programs of culture - arts, sports and tourism.
        </p>
        <strong>3. Goal</strong>
        <p className="ml-4 mb-4">
          Building TUCST to become a training and scientific research
          institution of Culture - Arts, Sports and Tourism of the South Red
          River - North Central region and the whole country; gradually expand
          scale associated with improving training quality, meeting social
          needs; promote domestic and international cooperation.
        </p>
        <strong>4. Core values</strong>
        <p className="ml-4 mb-4">
          Quality - Professionalism - Cooperation - Development.
        </p>
        <strong>5. Educational philosophy</strong>
        <p className="ml-4 mb-4">
          Nurture passion, Encourage creativity, Respect differences,
          Cooperation and development.
        </p>
      </Modal>
    </section>
  );
};
export default About;
