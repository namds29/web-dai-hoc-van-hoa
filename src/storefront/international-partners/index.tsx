import styles from "./index.module.scss";

const InternationalPartners = () => {
  return (
    <section className="w-full">
      <div className="w-full h-400">
        <img
          className="w-full h-400 object-cover"
          src="/img/banner3.png"
          alt=""
        />
      </div>
      <div className="flex min-h-[100vh] gap-10">
        <div className="bg-yellow-700 w-1/3 flex flex-col p-4">
          <p className="font-bold text-2xl mb-4">Partner List</p>
          <a className="mb-4 cursor-pointer hover:opacity-80">🔍 Southern Luzon State University - Philipines</a>
          <a className="mb-4 cursor-pointer hover:opacity-80">🔍 Hsuan Chuang University (HCU) - Taiwan</a>
          <a className="mb-4 cursor-pointer hover:opacity-80">🔍 Chien Hsin University of Science and Technology - Taiwan</a>
          <a className="mb-4 cursor-pointer hover:opacity-80">🔍 Daejin University - Korea</a>
        </div>

        <div className="text-black p-4">
          <p className="font-bold text-2xl mb-4">Partner List</p>
          <div><img src="/" alt="" /></div>
        </div>
      </div>
    </section>
  );
};
export default InternationalPartners;
