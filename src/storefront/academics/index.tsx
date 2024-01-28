import { ACADEMICS_FUCTIONAL_UNITS } from "src/utils/constant";
import styles from "./index.module.scss";
import { useState } from "react";

const Academics = () => {
  const [unitId, setUnitId] = useState<number>(1);
  const handleChangeUnit = (id: number) => {
    console.log(id);
    setUnitId(id);
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
        <p className="text-3xl border-b-4 text-center">Academics</p>
        <p className="text-2xl mt-8">Functional Units</p>
        <div className="flex border text-black border-black mt-4">
          <div className="title w-1/3">
            {ACADEMICS_FUCTIONAL_UNITS.map((item) => (
              <div
                onClick={() => handleChangeUnit(item.id)}
                className="cursor-pointer text-blue-800 hover:text-blue-700 px-4 py-2 border-r border-black"
              >
                <a>{item.title}</a>
              </div>
            ))}
          </div>
          <div className="description font-normal p-4 w-2/3">
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
    </section>
  );
};
export default Academics;
