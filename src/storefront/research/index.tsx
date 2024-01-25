import styles from "./index.module.scss";

const Research = () => {
  return (
    <section className="w-full">

      <div className="w-full h-400">
        <img className="w-full h-400 object-cover" src="/img/banner3.png" alt="" />
      </div>
      <section className="bg-gray-100 w-full text-orange-500 font-bold  justify-between items-center px-20 py-8">
        <div className="text-center">
          <p className="text-4xl">Research</p>
          <p className="text-xl border-b-4">
            From school leaders to undergraduates, all members of the TUCST community are engaged in the creation of knowledge
          </p>
        </div>
        <section className="mt-8 bg-amber-800 rounded px-8 py-4 text-white">
          <section id="journal">
            <p className="text-2xl border-b-4">Journal</p>
            <div className="flex justify-evenly gap-8 mt-8">
              <div className="text-center">
                <div className={styles.journal_img}>
                  <img className="w-full" src="/img/tapchi.jpg" alt="" />
                </div>
                <div>Journal name</div>
              </div>
              <div className="text-center">
                <div className={styles.journal_img}>
                  <img className="w-full" src="/img/tapchi.jpg" alt="" />
                </div>
                <div>Journal name</div>
              </div>
              <div className="text-center">
                <div className={styles.journal_img}>
                  <img className="w-full" src="/img/tapchi.jpg" alt="" />
                </div>
                <div>Journal name</div>
              </div>
            </div>
            <div className="text-center ">
              <button
                className={`${styles.btn_see_more} text-white border-double border-4 hover:opacity-70 border-white`}
              >
                See more
              </button>
            </div>
          </section>
          <section id="science">
            <p className="text-2xl border-b-4">Science Topic</p>
          
            <div className="bg-white w-full mt-10 rounded flex gap-6 p-4 mb-5">
              <div className="w-52 h-40 rounded">
                <img className="w-52 h-full rounded object-cover" src="/img/img1.png" alt="" />
              </div>
              <div className={styles.card_science}>
                <p className="title text-xl font-bold">Science Title</p>
                <p className={styles.card_science_description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam rhoncus dignissim risus, et consectetur massa tincidunt sit amet. Nam elementum vulputate metus</p>
                <a className="text-blue-800 hover:text-blue-700 underline" href="">Link website</a>
              </div>
            </div>
            <div className="bg-white w-full mt-10 rounded flex gap-6 p-4 mb-5">
              <div className="w-52 h-40 rounded">
                <img className="w-52 h-full rounded object-cover" src="/img/img1.png" alt="" />
              </div>
              <div className={styles.card_science}>
                <p className="title text-xl font-bold">Science Title</p>
                <p className={styles.card_science_description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam rhoncus dignissim risus, et consectetur massa tincidunt sit amet. Nam elementum vulputate metus</p>
                <a className="text-blue-800 hover:text-blue-700 underline" href="">Link website</a>
              </div>
            </div>
            <div className="bg-white w-full mt-10 rounded flex gap-6 p-4 mb-5">
              <div className="w-52 h-40 rounded">
                <img className="w-52 h-full rounded object-cover" src="/img/img1.png" alt="" />
              </div>
              <div className={styles.card_science}>
                <p className="title text-xl font-bold">Science Title</p>
                <p className={styles.card_science_description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam rhoncus dignissim risus, et consectetur massa tincidunt sit amet. Nam elementum vulputate metus</p>
                <a className="text-blue-800 hover:text-blue-700 underline" href="">Link website</a>
              </div>
            </div>

            <div className="text-center ">
              <button
                className={`${styles.btn_see_more} text-white border-double border-4 hover:opacity-70 border-white`}
              >
                See more
              </button>
            </div>
          </section>
          <section id="conferences">
            <p className="text-2xl border-b-4">Conferences</p>
          
            <div className="bg-white w-full mt-10 rounded flex gap-6 p-4 mb-5">
              <div className="w-52 h-40 rounded">
                <img className="w-52 h-full rounded object-cover" src="/img/img1.png" alt="" />
              </div>
              <div className={styles.card_science}>
                <p className="title text-xl font-bold">Science Title</p>
                <p className={styles.card_science_description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam rhoncus dignissim risus, et consectetur massa tincidunt sit amet. Nam elementum vulputate metus</p>
                <a className="text-blue-800 hover:text-blue-700 underline" href="">Link website</a>
              </div>
            </div>
            <div className="bg-white w-full mt-10 rounded flex gap-6 p-4 mb-5">
              <div className="w-52 h-40 rounded">
                <img className="w-52 h-full rounded object-cover" src="/img/img1.png" alt="" />
              </div>
              <div className={styles.card_science}>
                <p className="title text-xl font-bold">Science Title</p>
                <p className={styles.card_science_description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam rhoncus dignissim risus, et consectetur massa tincidunt sit amet. Nam elementum vulputate metus</p>
                <a className="text-blue-800 hover:text-blue-700 underline" href="">Link website</a>
              </div>
            </div>
            <div className="bg-white w-full mt-10 rounded flex gap-6 p-4 mb-5">
              <div className="w-52 h-40 rounded">
                <img className="w-52 h-full rounded object-cover" src="/img/img1.png" alt="" />
              </div>
              <div className={styles.card_science}>
                <p className="title text-xl font-bold">Science Title</p>
                <p className={styles.card_science_description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam rhoncus dignissim risus, et consectetur massa tincidunt sit amet. Nam elementum vulputate metus</p>
                <a className="text-blue-800 hover:text-blue-700 underline" href="">Link website</a>
              </div>
            </div>

            <div className="text-center ">
              <button
                className={`${styles.btn_see_more} text-white border-double border-4 hover:opacity-70 border-white`}
              >
                See more
              </button>
            </div>
          </section>
          <section id="publish">
            <p className="text-2xl border-b-4">Publish</p>
          
            <div className="bg-white w-full mt-10 rounded flex gap-6 p-4 mb-5">
              <div className="w-52 h-40 rounded">
                <img className="w-52 h-full rounded object-cover" src="/img/img1.png" alt="" />
              </div>
              <div className={styles.card_science}>
                <p className="title text-xl font-bold">Science Title</p>
                <p className={styles.card_science_description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam rhoncus dignissim risus, et consectetur massa tincidunt sit amet. Nam elementum vulputate metus</p>
                <a className="text-blue-800 hover:text-blue-700 underline" href="">Link website</a>
              </div>
            </div>
            <div className="bg-white w-full mt-10 rounded flex gap-6 p-4 mb-5">
              <div className="w-52 h-40 rounded">
                <img className="w-52 h-full rounded object-cover" src="/img/img1.png" alt="" />
              </div>
              <div className={styles.card_science}>
                <p className="title text-xl font-bold">Science Title</p>
                <p className={styles.card_science_description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam rhoncus dignissim risus, et consectetur massa tincidunt sit amet. Nam elementum vulputate metus</p>
                <a className="text-blue-800 hover:text-blue-700 underline" href="">Link website</a>
              </div>
            </div>
            <div className="bg-white w-full mt-10 rounded flex gap-6 p-4 mb-5">
              <div className="w-52 h-40 rounded">
                <img className="w-52 h-full rounded object-cover" src="/img/img1.png" alt="" />
              </div>
              <div className={styles.card_science}>
                <p className="title text-xl font-bold">Science Title</p>
                <p className={styles.card_science_description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam rhoncus dignissim risus, et consectetur massa tincidunt sit amet. Nam elementum vulputate metus</p>
                <a className="text-blue-800 hover:text-blue-700 underline" href="">Link website</a>
              </div>
            </div>

            <div className="text-center ">
              <button
                className={`${styles.btn_see_more} text-white border-double border-4 hover:opacity-70 border-white`}
              >
                See more
              </button>
            </div>
          </section>
        </section>
      </section>
    </section>
  );
};
export default Research;
