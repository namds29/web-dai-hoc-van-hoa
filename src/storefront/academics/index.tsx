import {
  ACADEMICS_FUCTIONAL_UNITS,
  ACADEMICS_TRAINING_PROGRAM,
} from "src/utils/constant";
// import styles from "./index.module.scss";
import { useState } from "react";

const Academics = () => {
  const [unitId, setUnitId] = useState<number>(1);
  // const [trainingTitle, setTrainingTitle] = useState<string>("");

  const handleChangeUnit = (id: number) => {
    console.log(id);
    setUnitId(id);
  };
  // const handleChangeTitle = (title: string) => {
  //   console.log(title);
  //   setTrainingTitle(title);
  // };

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
        <p className="text-3xl border-b-4 text-center">Academics</p>
        <section id="functional_unit">
          <p className="text-2xl mt-8">Functional Units</p>
          <div className="flex text-black border-black mt-4">
            <div className="title w-1/3 rounded-l-xl bg-orange-400">
              {ACADEMICS_FUCTIONAL_UNITS.map((item) => (
                <div
                  onClick={() => handleChangeUnit(item.id)}
                  className="border-b font-normal text-xl flex justify-between items-center cursor-pointer text-white hover:text-gray-300 px-4 py-2"
                >
                  <a>{item.title}</a>
                </div>
              ))}
            </div>
            <div className="description font-normal p-4 w-2/3 bg-orange-300 rounded-r-xl">
              {unitId == 1 && (
                <div className="content">
                  <p className="font-bold">1. General administrative office</p>
                  <p>Introduction:</p>
                  <p>Contact:</p>
                  <p className="font-bold">2. Organization and staff</p>
                  <p>Introduction:</p>
                  <p>Contact:</p>
                  <p>(...)</p>
                </div>
              )}
              {unitId == 2 && (
                <div className="content">
                  <p className="font-bold">1. Organization and staff</p>
                  <p>Introduction:</p>

                  <p className="font-bold">2. Organization and staff</p>
                  <p>Introduction:</p>
                  <p>Contact:</p>
                  <p>(...)</p>
                </div>
              )}
            </div>
          </div>
        </section>
        <section id="functional_unit">
          <p className="text-2xl mt-8 underline underline-offset-8">Training Program</p>
          <div className="flex text-black border-black mt-4">
            <div className="title w-1/3 bg-orange-400">
              {ACADEMICS_TRAINING_PROGRAM.map((item) => (
                <div className=" text-black px-4 py-2">
                  <a className="text-xl font-bold">{item.parent_title}</a>
                  <div className="cursor-pointer ml-4 text-white font-normal hover:text-gray-300">
                    {item.children_title.map((child) => (
                      <div className="underline">{child}</div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="description font-normal pl-10 w-2/3">
              <div className="content">
                <p className="font-bold text-center text-2xl">University</p>
                <div className="flex mt-8 gap-10">
                  <div className="w-full h-72 rounded-xl bg-orange-500 cursor-pointer"></div>
                  <div className="w-full h-80 rounded-xl bg-orange-500 cursor-pointer"></div>
                  <div className="w-full h-96 rounded-xl bg-orange-500 cursor-pointer"></div>
                </div>
                <div className="flex mt-12 justify-center gap-10 items-center font-bold text-xl text-white">
                  <div className="px-8 py-4 bg-orange-500 rounded cursor-pointer">
                    Chính quy
                  </div>
                  <div className="px-8 py-4 bg-orange-500 rounded cursor-pointer">
                    Liên Thông
                  </div>
                  <div className="px-8 py-4 bg-orange-500 rounded cursor-pointer">
                    Văn bằng 2
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </section>
  );
};
export default Academics;
