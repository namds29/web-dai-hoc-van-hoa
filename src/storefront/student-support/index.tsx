import styles from "./index.module.scss";

import { Card } from "antd";
import Banner from "./banner";

const StudentSupport = () => {
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

  const recruitmentData = [
    {
      id: "1",
      title: "Title",
      subtitle: "Subtitle",
      link: "abc",
    },
    {
      id: "2",
      title: "Title",
      subtitle: "Subtitle",
      link: "abc",
    },
    {
      id: "3",
      title: "Title",
      subtitle: "Subtitle",
      link: "abc",
    },
    {
      id: "4",
      title: "Title",
      subtitle: "Subtitle",
      link: "abc",
    },
    {
      id: "5",
      title: "Title",
      subtitle: "Subtitle",
      link: "abc",
    },
  ];

  return (
    <div className={styles.container}>
      <Banner />

      <section className="bg-gray-100 w-full px-24 py-6">
        <div className="w-full flex justify-center mt-6 mb-10">
          <p className="text-5xl text-black">International Student Guidebook</p>
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
                  className="object-cover w-full h-full rounded-lg"
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

      <Banner />

      <section className="bg-gray-100 w-full px-24 py-6">
        <div className="flex text-orange-500 font-bold items-center">
          <p className="text-xl border-b-4">STUDENT SERVICES</p>
        </div>
        <div className="grid grid-cols-2 gap-4 w-full">
          {serviceData.map((item) => {
            return (
              <div
                key={item.id}
                className="mx-10 relative flex items-center justify-center"
              >
                <img
                  className="object-cover w-full h-4/6 rounded-lg "
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

      <section className="bg-gray-100 w-full px-24 py-8">
        <div className="flex text-black font-bold mb-6 justify-between items-center">
          <p className="text-4xl border-b-4">RECRUITMENT</p>
        </div>
        <div className="mx-10">

        {recruitmentData.map((item) => {
          return (
            <Card key={item.id} className="my-2">
              <div className="flex flex-row">
                <img
                  src="/img/img1.png"
                  className="w-1/4 rounded mr-6"
                  alt=""
                />
                <div className="flex flex-col justify-center ">
                  <p className="text-3xl font-bold">{item.title}</p>
                  <p className="text-2xl font-medium">{item.subtitle}</p>
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
