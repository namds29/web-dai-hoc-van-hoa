import { useNavigate } from "react-router-dom";
import styles from "./index.module.scss";

import { Card } from "antd";


const StudentSupport = () => {
  const navigate = useNavigate()
  const departmentData = [
    {
      id: "1",
      label: "Scientific management & International Cooperation Department",
      link: "abc",
    },
    { id: "2", label: "Training Department", link: "abc" },
    { id: "3", label: "Student Political Affairs Department", link: "abc" },
  ];

  const serviceData = [
    {
      id: "1",
      label: "Dormitory",
      link: "abc",
    },
    { id: "2", label: "External services", link: "abc" },
  ];

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

      <section className="bg-gray-100 w-full px-24 py-6">
        <div className="w-full flex justify-center mt-6 mb-10 border-b-4">
          <p className="text-5xl text-orange-500 ">International Student Guidebook</p>
        </div>

        <div className="flex text-orange-500 font-bold items-center">
          <p className="text-xl border-b-4">SUPPORT DEPARTMENTS</p>
        </div>
        <div className="grid grid-cols-3 gap-4 w-full">
          {departmentData.map((item) => {
            return (
              <div
                key={item.id}
                className="m-10 relative flex items-center justify-center"
              >
                <img
                  className="object-cover w-full h-full rounded-lg filter brightness-50"
                  src="/img/img1.png"
                  alt=""
                />
                <div className="absolute flex text-center font-bold m-8 text-2xl">
                  {item.label}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-gray-100 w-full px-24 py-6">
        <div className="flex text-orange-500 font-bold items-center mb-6">
          <p className="text-xl border-b-4">STUDENT SERVICES</p>
        </div>
        <div className="flex gap-4 w-full">
          {serviceData.map((item) => {
            return (
              <div
                key={item.id}
                className="mx-10 relative flex items-center justify-center w-full h-80"
              >
                <img
                  className="w-full object-cover rounded-lg filter brightness-50 h-full"
                  src={"/img/img1.png"}
                  alt=""
                />
                <div className="absolute flex text-center font-bold m-8 text-2xl">
                  {item.label}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-gray-100 w-full px-24 py-8">
        <div className="flex text-orange-500 font-bold mb-6 justify-between items-center">
          <p className="text-xl border-b-4">RECRUITMENT</p>
        </div>
        <div className="mx-10">
          {DATA_RECRUITMENT.map((item) => {
            return (
              <Card key={item.id} className="my-4 shadow-lg">
                <div className="flex flex-row cursor-pointer" onClick={()=> navigate(`/news/${item.id}`)}>
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
    </div>
  );
};

export default StudentSupport;
