import { Fragment } from "react";

const PARTNER_LIST = [
  {
    logo: "/img/Chien Hsin.png",
    title: "Chien Hsin University (UCH)",
    description: "Chien Hsin University (UCH) – 健行科技大學 Chien Hsin University of Science and Technology. The school was established in 1966 in Zhongli, Taoyuan. The school is not only famous for its beautiful and spacious campus but also applies technology in vocational training and its advanced professional teaching methods. Chien Hsin University, formerly known as Zhengfa University and Jianxing Industrial College, was established in 1966. In 2003, the school was approved by the Ministry of Education to become a university with its current official name. Chien Hsin University focuses on three long-term research areas: automation, telecommunications, and Internet technology. The school always prioritizes knowledge management and intellectual economy. Chien Hsin University aims to become a leading technology university in Taiwan. The curriculum here is designed specifically for students but still ensures compliance with the teaching standards of the Ministry of Education",
    website: "uch.edu.tw",
  },
  {
    logo: "/img/Hsuan Chang.png",
    title: "Hsuan Chuang University",
    description: "Hsuan Chuang University is a private Buddhist university located in Xiangshan District, Hsinchu City, Taiwan. Hsuan Chuang University was founded in 1997 by Mr. Liao Zhong and named after the Tang Dynasty monk Xuanzang.",
    website: "www.hcu.edu.tw",
  },
  {
    logo: "/img/sc-logo-1.png",
    title: "Southern Luzon University (SLSU)",
    description: "Southern Luzon University (SLSU) was established in 1964 as a public university under the Philippine Ministry of Education. Currently, Southern Luzon University is considered the best one in the Lucban administrative region and is ranked among the top high-quality universities in the Philippines. With a tradition of building and developing over the past 40 years, the affiliated institutes of Southern Luzon University have focused on training at the undergraduate and postgraduate levels (masters and doctoral degrees) in many different majors. University training has the following fields: Higher education; Agriculture; Medicine; Arts Science; Business administration; Mechanical study; Pedagogical education; Industrial Engineering; Master's training in the fields of Business Administration, Education, Environment, and Agriculture; Doctoral training in the field of education.SLSU has a team of lecturers with extensive experience in teaching, training and scientific research, can adapt, and quickly approach the developments of society.",
    website: "www.slsu.edu.ph",
  },
  {
    logo: "/img/Chungyu.png",
    title: "Chungyu University of Cinema and Arts",
    description: "Chungyu University of Film and Arts has the English name Chungyu University of Film and Arts (崇佑影藝科技大學). The school was established in 1967, located in Keelung city. The school was upgraded to 'Chungyu Academy of Technology'. On August 1st, 2017, the school officially changed its name to Sung Huu University of Cinema and Arts.",
    website: "cufa.edu.tw",
    vn_name: "Trường Đại học Điện ảnh và Nghệ thuật Sùng Hữu"
  },
  {
    logo: "/img/laos.jpeg",
    title: "Education and Sports Department, Hua Phan Province, Lao PDR",
    description: "Hua Phan province had about 225 students who studied at Thanh Hoa University of Culture, Sports and Tourism from 2015 to 2021 including 96 students funded by Thanh Hoa province's budget for Hua Phan province and 118 students self-funded according to the training cooperation memorandum between the two sides; 11 officials from Hua Phan province came to study 1 year Vietnamese course. The two sides will continue to implement the training cooperation memorandum signed. Specifically, Thanh Hoa University of Culture, Sports and Tourism will continue to teach Vietnamese and train relevant majors for Laotain students; teaching Vietnamese for officials of departments, and divisions of Hua Phan province; train from intermediate or college level to university, master's and doctoral degrees for officials of Hua Phan province.",
    website: "#",
  },
  {
    logo: "/img/philip-logo.png",
    title: " Mindoro University (MinSU)",
    description: "Mindoro University (MinSU) was formerly named Mindoro College of Agriculture and Technology (MinsCAT). The college is considered as high-quality school in the province. The University focuses on academic strategies, administration, research to meet the needs of a growing population.In June 2023, the TUCST had cooperation agreements with Southern Luzon University and Mindoro State University on academic exchange, lecturer exchange in the fields of  Music, Tourism, Sports, School Administration, and scientific research.",
    website: "www.minsu.edu.ph",
  },
  {
    logo: "/img/SSGV.png",
    title: "SkillsSG Ventures (SSGV), Singapore",
    description: "SkillsSG Ventures (SSGV) is a private corporation of consulting and training from Singapore. Each company has 15-30 years of industry-specific expertise in skills development according to the standard of SkillsFuture Singapore's renowned Workforce Skills Qualification (“WSQ”). In addition to being a pioneering member of the Strategic Association of Professional Training and Consulting Organizations (SAPTCO Singapore), the companies also support national initiatives such as the WSQ framework, Transformation Map of industry, WorldSkills Singapore 2018 and the internationalization of Singapore's teaching program, assessment and certification. These companies have implemented many projects and consultations in Indonesia, the Philippines, Malaysia, Vietnam, Myanmar, Timor Leste, Seychelles, India and China.",
    website: "skillssg.global",
  },
  {
    logo: "/img/uz-logo-pion-aktualnosci-1.png",
    title: "Zielona Gora University, Poland",
    description: "Zielona Gora University (UZ) is a high-quality university located in Zielona Gora, western Poland. This is an advantageous location because it is a city bordered by Prague, Berlin, Cottbus and Dresden. This is considered an ideal school for students who are studying Engineering in Poland. Zielona Gora University is one of Poland's ranked universities with many high-quality training programs. The school focuses on technical sciences, economics and natural sciences, in which information technology, computer engineering and technical sciences are highly appreciated majors at this University. According to the latest rankings of the Polish Ministry of University and Science, Zielona Gora is in the top 3 in Poland in scientific research such as Mathematics and Physics, and is the only comprehensive university with a structure like general universities in the US. Zielona Gora University stands out for its computer engineering training programs with the majors of software engineering, information systems and computer networks that provide students with the necessary knowledge and skills to design, deploy and manage information systems and computer networks. The school is equipped with modern laboratories, research centers and a well-stocked library. Students have the opportunity to work with leading professors and researchers in the fields of computer science, electronic engineering, thermal engineering, physics,...",
    website: "uz.zgora.pl/en",
  },
  {
    logo: "/img/Daejin.png",
    title: "Daejin University, Korea",
    description: "Korean Daejin University (Daejin University) is a private university in the top 100 best universities in Asia. Daejin University is one of the largest multidisciplinary research universities in Korea.Daejin University is one of the prestigious private ones meeting international standards recognized by the Korean government, established in 1992. Daejin University attracts a large number of domestic and foreign students, about 15,000 students. In the land of kimchi, Daejin is one of the largest multidisciplinary research universities.",
    website: "www.daejin.ac.kr",
  },
]
const InternationalPartners = () => {
  return (
    <section className="w-full">
      <div>
        <img className="w-full h-full" src="/img/inter-partner.png" alt="" />
      </div>
      <div className="flex min-h-[100vh] gap-10">
        <section className="bg-subColor w-1/3 flex flex-col p-4">
          <p className="font-bold text-2xl mb-4">Partner List</p>
          {PARTNER_LIST.map(item => <Fragment key={item.title + "1"}>
          <a className="mb-4 cursor-pointer hover:opacity-80">
            🔍 {item.title}
          </a>
          </Fragment>)}
          <p className="font-bold text-2xl mb-4">Partner With Us</p>
        </section>

        <section className="text-black p-4 w-full">
          <p className="font-bold text-2xl mb-4">Partner List</p>
          <div className="grid grid-cols-2 gap-10">
            {PARTNER_LIST.map(item => <Fragment key={item.title}>
              <div key={item.title} className="border bg-gray-200 p-4 text-center ">
                <div className="flex justify-center w-full rounded-lg h-[300px]">
                  <img
                    className="w-full h-full object-contain rounded-xl mix-blend-multiply"
                    src={item.logo}
                    alt={item.title}
                  />
                </div>
                <p className="font-bold mt-4 mb-4">
                  {item.title}
                </p>
                <p className="text-orange-600">{item.description}</p>
                <div className="mt-6">
                  <a href={`https://${item.website}`} target="_blank" className="bg-red-400 px-4 py-2  rounded text-white">Website</a>
                </div>
              </div>
            </Fragment>)}



          </div>

          <div className="font-bold text-2xl mb-4 mt-8">Partner with Us</div>
          <div>
            <p>Phone: </p>
            <p className="mt-2">Email:</p>
            <p className="mt-2">Department:</p>
          </div>
        </section>
      </div>
    </section>
  );
};
export default InternationalPartners;
