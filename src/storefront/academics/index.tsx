import styles from "./index.module.scss";

const Academics = () => {
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
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
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
    </section>
  );
};
export default Academics;
