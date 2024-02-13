import styles from "./index.module.scss";

const About = () => {
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
            <div className="text-center text-white mt-4">Nguyễn Văn A</div>
          </div>
          <div className="h-72 w-72 rounded-t-xl w-full hover:drop-shadow-2xl ">
            <div className="w-full h-full grayscale hover:grayscale-0  duration-500">
              <img
                className="w-full h-full rounded-t-xl object-cover"
                src="/img/ceo.png"
                alt=""
              />
            </div>
            <div className="text-center text-white mt-4">Nguyễn Văn A</div>
          </div>
          <div className="h-72 w-72 rounded-t-xl w-full hover:drop-shadow-2xl ">
            <div className="w-full h-full grayscale hover:grayscale-0  duration-500">
              <img
                className="w-full h-full rounded-t-xl object-cover"
                src="/img/ceo.png"
                alt=""
              />
            </div>
            <div className="text-center text-white mt-4">Nguyễn Văn A</div>
          </div>
          <div className="h-72 w-72 rounded-t-xl w-full hover:drop-shadow-2xl ">
            <div className="w-full h-full grayscale hover:grayscale-0  duration-500">
              <img
                className="w-full h-full rounded-t-xl object-cover"
                src="/img/ceo.png"
                alt=""
              />
            </div>
            <div className="text-center text-white mt-4">Nguyễn Văn A</div>
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
            Content
          </div>
        </div>
      </section>
      <section className="grid grid-cols-4 text-xl bold text-center gap-4 bg-gray-200 w-full text-black  font-bold px-20 py-8">
        <div className="w-full h-64 p-8 rounded bg-orange-300 flex items-center">
          HISTORY OF FORMATION AND DEVELOPMENT
        </div>
        <div className="w-full h-64 p-8 rounded bg-orange-300 flex items-center">
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
    </section>
  );
};
export default About;
