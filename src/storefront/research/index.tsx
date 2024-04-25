import Banner from "src/components/banner";
import styles from "./index.module.scss";

const Research = () => {
  return (
    <section className="w-full">
      <Banner />

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
                <a href="https://drive.google.com/file/d/1SMuR9fq2126Ap5KGKo6bPxTecB6VL-A7/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                  <div className={styles.journal_img}>
                    <img className="w-full" src="/img/bia1.png" alt="Bia tap chi 1" />
                  </div>
                </a>
              </div>

              <div className="text-center">
                <a href="https://drive.google.com/file/d/124S_Lp94eTAPo3W-nZZDymuKi8g1XHn4/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                  <div className={styles.journal_img}>
                    <img className="w-full" src="/img/bia3.png" alt="Bia tap chi 2" />
                  </div>
                </a>
              </div>
              <div className="text-center">
                <a href="https://drive.google.com/file/d/1FMiqO_P0R5GkTzzuCRUSPKybMZram06d/view" target="_blank" rel="noopener noreferrer">
                  <div className={styles.journal_img}>
                    <img className="w-full" src="/img/bia2.png" alt="Bia tap chi 3" />
                  </div>
                </a>
              </div>
            </div>
           
          </section>
          <section id="science" className="mt-10">
            <p className="text-2xl border-b-4">Science Topic</p>

            <div className="bg-white w-full mt-10 rounded flex gap-6 p-4 mb-5">
              <div className="w-52 h-40 rounded">
                <img className="w-52 h-full rounded object-cover" src="/img/img1.png" alt="" />
              </div>
              <div className={styles.card_science}>
                <p className="title text-xl font-bold">Science Title</p>
                <p className={styles.card_science_description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam rhoncus dignissim risus, et consectetur massa tincidunt sit amet. Nam elementum vulputate metus</p>
                
              </div>
            </div>
            <div className="bg-white w-full mt-10 rounded flex gap-6 p-4 mb-5">
              <div className="w-52 h-40 rounded">
                <img className="w-52 h-full rounded object-cover" src="/img/img1.png" alt="" />
              </div>
              <div className={styles.card_science}>
                <p className="title text-xl font-bold">Science Title</p>
                <p className={styles.card_science_description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam rhoncus dignissim risus, et consectetur massa tincidunt sit amet. Nam elementum vulputate metus</p>
                
              </div>
            </div>
            <div className="bg-white w-full mt-10 rounded flex gap-6 p-4 mb-5">
              <div className="w-52 h-40 rounded">
                <img className="w-52 h-full rounded object-cover" src="/img/img1.png" alt="" />
              </div>
              <div className={styles.card_science}>
                <p className="title text-xl font-bold">Science Title</p>
                <p className={styles.card_science_description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam rhoncus dignissim risus, et consectetur massa tincidunt sit amet. Nam elementum vulputate metus</p>
                
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
                
              </div>
            </div>
            <div className="bg-white w-full mt-10 rounded flex gap-6 p-4 mb-5">
              <div className="w-52 h-40 rounded">
                <img className="w-52 h-full rounded object-cover" src="/img/img1.png" alt="" />
              </div>
              <div className={styles.card_science}>
                <p className="title text-xl font-bold">Science Title</p>
                <p className={styles.card_science_description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam rhoncus dignissim risus, et consectetur massa tincidunt sit amet. Nam elementum vulputate metus</p>
                
              </div>
            </div>
            <div className="bg-white w-full mt-10 rounded flex gap-6 p-4 mb-5">
              <div className="w-52 h-40 rounded">
                <img className="w-52 h-full rounded object-cover" src="/img/img1.png" alt="" />
              </div>
              <div className={styles.card_science}>
                <p className="title text-xl font-bold">Science Title</p>
                <p className={styles.card_science_description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam rhoncus dignissim risus, et consectetur massa tincidunt sit amet. Nam elementum vulputate metus</p>
                
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
                
              </div>
            </div>
            <div className="bg-white w-full mt-10 rounded flex gap-6 p-4 mb-5">
              <div className="w-52 h-40 rounded">
                <img className="w-52 h-full rounded object-cover" src="/img/img1.png" alt="" />
              </div>
              <div className={styles.card_science}>
                <p className="title text-xl font-bold">Science Title</p>
                <p className={styles.card_science_description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam rhoncus dignissim risus, et consectetur massa tincidunt sit amet. Nam elementum vulputate metus</p>
                
              </div>
            </div>
            <div className="bg-white w-full mt-10 rounded flex gap-6 p-4 mb-5">
              <div className="w-52 h-40 rounded">
                <img className="w-52 h-full rounded object-cover" src="/img/img1.png" alt="" />
              </div>
              <div className={styles.card_science}>
                <p className="title text-xl font-bold">Science Title</p>
                <p className={styles.card_science_description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam rhoncus dignissim risus, et consectetur massa tincidunt sit amet. Nam elementum vulputate metus</p>
                
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
