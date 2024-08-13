import { useNavigate } from "react-router-dom";
import styles from "./index.module.scss";

import { Card } from "antd";
import { useState } from "react";
import { IMessage } from "src/interfaces";
import CustomModal from "src/components/custom-modal";

const StudentSupport = () => {
  const [open, setOpen] = useState(false);
  const [modalContent, setModalContent] = useState<IMessage>({
    title: <></>,
    content: <></>,
  });
  const navigate = useNavigate()
  const handleCancel = () => {
    setOpen(false);
  };

  const handleOk = () => {
    setOpen(false);
  };
  const handleOpenCooperationDepartment = () => {
    setOpen(true);
    setModalContent({
      title: (
        <p className="text-2xl">
          Scientific management & International Cooperation Department:
        </p>
      ),
      content: (
        <div className="text-lg">
          <p >
            Contact us to discuss issues related to Training programs and links with international partners, Extracurricular programs and international events, Visa and Passport information,...
          </p>
          <p className="mt-6">
            Address: Rooms 401, 402, 403, 404, Building A, Thanh Hoa University of Culture, Sports and Tourism, No. 561, Quang Trung Street, Dong Ve Ward, Thanh Hoa City.
          </p>
          <p className="mt-6">
            Website: <a href="http://qlkhhtqt.tucst.edu.vn">http://qlkhhtqt.tucst.edu.vn</a>
          </p>
        </div>
      ),
    });
  };
  const handleOpenTrainingDepartment = () => {
    setOpen(true);
    setModalContent({
      title: (
        <p className="text-2xl">
          Training Department
        </p>
      ),
      content: (
        <div className="text-lg">
          <p >
            Contact us to learn about training programs at the School
          </p>
          <p className="mt-6">
            Address: Room 101, Building B, Thanh Hoa University of Culture, Sports and Tourism, No. 561, Quang Trung Street, Dong Ve Ward, Thanh Hoa City.
          </p>
          <p className="mt-6">
            Phone: +(84) 2373 857 421
          </p>
          <p className="mt-6">
            Email: nguyenthiha@dvtdt.edu.vn
          </p>
          <p className="mt-6">
            Website: <a href="http://qldt.tucst.edu.vn">http://qldt.tucst.edu.vn</a>
          </p>
        </div>
      ),
    });
  };
  const handleOpenStudentPolitical = () => {
    setOpen(true);
    setModalContent({
      title: (
        <p className="text-2xl">
          Student Political Affairs Department
        </p>
      ),
      content: (
        <div className="text-lg">
          <p >
            Contact us to discuss issues related to international student management including Dormitories, General regulations, Procedures - Permits for out-of-province visits,...
          </p>
          <p className="mt-6">
            Address: Room 104 - 105 A, Thanh Hoa University of Culture, Sports and Tourism, No. 561, Quang Trung Street, Dong Ve Ward, Thanh Hoa City.

          </p>
          <p className="mt-6">
            Phone: 0911688181
          </p>
          <p className="mt-6">
            Email: lexuanson@dvtdt.edu.vn
          </p>
          <p className="mt-6">
            Website:  <a href="http://ctcthssv.tucst.edu.vn">http://ctcthssv.tucst.edu.vn</a>
          </p>
        </div>
      ),
    });
  };
  const handleOpenExternal = () => {
    setOpen(true);
    setModalContent({
      title: (
        <p className="text-2xl">
          External services
        </p>
      ),
      content: (
        <div className="text-lg">
          Within a radius of 6km, students studying abroad and interning at TUCST can access a full range of amenities outside of school including:
          <ul>
            <li>- Commercial services: Vincom Plaza Commercial Center (located at Tran Phu Street, Lam Son Ward, Thanh Hoa City)</li>
            <li>- Medical services: Thanh Hoa City General Hospital (located at 181 Hai Thuong Lan Ong, Thanh Hoa City)</li>
            <li>- Entertainment services: Lam Son Square (located at RQ7C+475, Phan Chu Trinh Street, Dong Tho Ward); The shopping and coffee street is located on Le Hoan Street</li>
            <li>- Academic services: Viet Ly Bookstore, Tien Tho Bookstore, Tien Phong Bookstore</li>
          </ul>
        </div>
      ),
    });
  };
  const handleOpenDorm = () => {
    setOpen(true);
    setModalContent({
      title: (
        <p className="text-2xl">
          Dormitory
        </p>
      ),
      content: (
        <div className="text-lg">
          The 200-seat dormitory has been invested in, built, and handed over by Hua Phan province (Laos) located on the campus of Hong Duc University (right next to TUCST), serving Lao students studying abroad, practicing in Thanh Hoa province. The dormitory has 4 floors, and 40 rooms, and can accommodate 200 Lao officials and students studying in Thanh Hoa province. The dormitory for Lao international students is a special project, clearly demonstrating the friendly relationship between Thanh Hoa Province and Hua Phan Province.
        </div>
      ),
    });
  };

  const DATA_RECRUITMENT = [
    {
      id: "rec_1",
      title: "THE SIGNING CEREMONY OF A MEMORANDUM OF COOPERATION ON TRAINING AND SUPPLYING TOURISM HUMAN RESOURCES BETWEEN THANH HOA UNIVERSITY OF CULTURE, SPORTS AND TOURISM AND MELIÃ VINPEARL THANH HOA HOTEL",
      subtitle: "With the aim of strengthening cooperation in training and supplying human resources for tourism industry of Thanh Hoa province in particular and the whole country in general, on June 13, 2023, TUCST has signed a cooperation agreement with Meliã Vinpearl Thanh Hoa Hotel. This event has a very important meaning in further promoting the ability to create the training cooperation between educational institution and businesses, in accordance with the general trend of the times and the social needs.",
      thumbnail: "/img/ssp1.png",
    },
    {
      id: "rec_2",
      title: "THE SIGNING CEREMONY OF COOPERATION FOR HUMAN RESOURCE DEVELOPMENT BETWEEN THANH HOA UNIVERSITY OF CULTURE, SPORTS & TOURISM AND SUN GROUP",
      subtitle: "Following the 'Human Resource Development Cooperation Signing Ceremony' of Sun Group - Department of Labor, War Invalids & Social Affairs and Training institutions of tourism human resource in Thanh Hoa province, Thanh Hoa University of Culture, Sports & Tourism (TUCST) and Sun Group has signed a human resource development cooperation agreement on July 29, 2022, at Ballroom 1, 6th floor, Vinpearl Hotel Thanh Hoa.",
      thumbnail: "/img/ssp5.jpg",
    },
  ];

  return (
    <div className={styles.container}>
      <div>
        <img src="/img/student_support.png" alt="Student Support" />
      </div>

      <section className="bg-gray-100 w-full px-4 lg:px-24 py-6">
        <div className="w-full flex justify-center mt-6 mb-10 border-b-4">
          <p className="text-5xl text-orange-500 ">International Student Guidebook</p>
        </div>

        <div className="flex text-orange-500 font-bold items-center">
          <p className="text-xl border-b-4">SUPPORT DEPARTMENTS</p>
        </div>
        <div className="flex flex-col lg:grid lg:grid-cols-3 gap-4 w-full">
          <div className="m-10 relative flex items-center justify-center cursor-pointer" onClick={handleOpenCooperationDepartment}>
            <img
              className="object-cover w-full h-full rounded-lg filter brightness-50"
              src="/img/ssp3.jpg"
              alt=""
            />
            <div className="absolute flex text-center font-bold m-8 text-2xl">
              Scientific management & International Cooperation Department
            </div>
          </div>

          <div className="m-10 relative flex items-center justify-center cursor-pointer" onClick={handleOpenTrainingDepartment}>
            <img
              className="object-cover w-full h-full rounded-lg filter brightness-50"
              src="/img/school3.jpg"
              alt=""
            />
            <div className="absolute flex text-center font-bold m-8 text-2xl">
              Training Department
            </div>
          </div>

          <div className="m-10 relative flex items-center justify-center cursor-pointer" onClick={handleOpenStudentPolitical}>
            <img
              className="object-cover w-full h-full rounded-lg filter brightness-50"
              src="/img/ssp41.jpg"
              alt=""
            />
            <div className="absolute flex text-center font-bold m-8 text-2xl">
              Student Political Affairs Department
            </div>
          </div>


        </div>
      </section>

      <section className="bg-gray-100 w-full px-4 lg:px-24 py-6">
        <div className="flex text-orange-500 font-bold items-center mb-6">
          <p className="text-xl border-b-4">STUDENT SERVICES</p>
        </div>
        <div className="flex flex-col lg:flex-row gap-4 w-full">
          <div
            className="lg:mx-10 relative flex items-center justify-center w-full h-80"
            onClick={handleOpenDorm}
          >
            <img
              className="w-full rounded-lg filter brightness-50 h-full"
              src="/img/Dormitory.png"
              alt=""
            />
            <div className="absolute flex text-center font-bold m-8 text-2xl">
              Dormitory
            </div>
          </div>
          <div
            className="lg:mx-10 relative flex items-center justify-center w-full h-80"
            onClick={handleOpenExternal}
          >
            <img
              className="w-full rounded-lg filter brightness-50 h-full"
              src="/img/ex-service.png"
              alt=""
            />
            <div className="absolute flex text-center font-bold m-8 text-2xl">
              External services
            </div>
          </div>

        </div>
      </section>

      <section className="bg-gray-100 w-full px-4 lg:px-24 py-8">
        <div className="flex text-orange-500 font-bold mb-6 justify-between items-center">
          <p className="text-xl border-b-4">RECRUITMENT</p>
        </div>
        <div className="lg:mx-10">
          {DATA_RECRUITMENT.map((item) => {
            return (
              <Card key={item.id} className="my-4 shadow-lg">
                <div className="flex flex-row cursor-pointer" onClick={() => navigate(`/news/${item.id}`)}>
                  <img
                    src={item.thumbnail}
                    className="w-1/4 rounded mr-6 object-cover translate-z-5"
                    alt=""
                  />
                  <div className="flex flex-col items-start">
                    <p className="text-xl font-bold">{item.title}</p>
                    <p className="text-base font-medium">{item.subtitle}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </section>
      <CustomModal
        message={modalContent}
        type=""
        onCancel={handleCancel}
        onOk={handleOk}
        show={open}
      />
    </div>
  );
};

export default StudentSupport;
