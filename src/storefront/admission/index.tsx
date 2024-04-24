// import styles from "./index.module.scss";
import { Collapse, CollapseProps } from "antd";
import { useState } from "react";
import Banner from "src/components/banner";

const Admission = () => {
  const [currentSelect, setCurrentSelect] = useState<number>(1);

  const items: CollapseProps["items"] = [
    {
      key: "1",
      label: "Undergraduate",
      children: (
        <div onClick={() => setCurrentSelect(1)}>
          <p>- Overview</p>
          <p>- Majors</p>
          <p>- Requirements</p>
          <p>- Apply</p>
        </div>
      ),
    },
    {
      key: "2",
      label: "Graduate",
      children: (
        <div onClick={() => setCurrentSelect(2)}>
          <p>- Overview</p>
          <p>- Apply</p>
        </div>
      ),
    },
    {
      key: "3",
      label: "Exchange programs",
      children: (
        <div onClick={() => setCurrentSelect(3)}>
          <p>- Overview</p>
          <p>- Programs</p>
          <p>- Contact</p>
        </div>
      ),
    },
    {
      key: "4",
      label: "Vietnamese intensive courses",
      children: (
        <div onClick={() => setCurrentSelect(4)}>
          <p>- Overview</p>
          <p>- Programs</p>
          <p>- Contact</p>
        </div>
      ),
    },
  ];

  const onChange = (key: string | string[]) => {
    console.log(key);
  };

  const renderDetail = (select: number) => {
    switch (select) {
      case 1:
        return (
          <>
            <div>
              <div className="bg-orange-300 rounded p-3">Overview</div>
              <div className="p-3">
                <p className="indent-5 font-light">
                  Since 2012, the School has organized training according to the
                  credit system. Training programs ensure the output standards
                  of learners after graduation, meet the requirements for
                  transfer between levels and other training programs.
                </p>
                <p className="indent-5 font-light">
                  In 2023, the School completed the quality accreditation for 4
                  Bachelor programs, including: Early Childhood Education, State
                  Management, Music Education, and Arts Education; was
                  recognized as meeting accreditation standards according to
                  Decisions No. 595/QD-KĐCLV, 596/QD-KĐCLV, 597/QD-KĐCLV,
                  598/QD-KĐCLV dated February 27, 2023.
                </p>
                <p className="indent-5 font-light">
                  In 2024, the School has completed the quality accreditation
                  for 4 Bachelor programs, including: Hotel Management, Law,
                  Vocal Music, and English Language, was recognized as meeting
                  accreditation standards according to Decisions. No.:
                  11/QD-KĐCLV, 12/QD-KĐCLV, 13/QD-KĐCLV, 14/QD-KĐCLV dated March
                  4, 2024.
                </p>
                <p className="indent-5 font-light">
                  The School aims to develop high-quality human resource
                  training and scientific research in the field of
                  social-sciences and humanities, with 3 main pillars:
                  Culture-Arts, Sports, and Tourism; to serve the community
                  contributing to the socio-economic development of Thanh Hoa
                  province, the South Red River-North Central region, and the
                  whole country.
                </p>
              </div>
            </div>
            <div>
              <div className="bg-orange-300 rounded p-3">Majors</div>
              <div className="p-3">
                <p className="indent-5 font-light">
                  Currently, Thanh Hoa University of Culture, Sports and Tourism
                  has become one of the multi-disciplinary institutions with
                  specific fields:
                </p>
                <p className="indent-7 font-light">
                  + 21 Full-time training Courses: Cultural Management,
                  Communication Technology, Library Information, Social Work,
                  Information Technology Education, Tourism, Hotel Management,
                  Travel & Tourism Service Management, Early Childhood
                  Education, Primary Education, Vocal Music, Music Education,
                  Arts Education, Fashion Design, Graphics, State Management,
                  Law, English Language, Sports Management, Physical Education,
                  Sports Training.{" "}
                </p>
                <p className="indent-7 font-light">
                  + 16 Full-time Transfer Degree and Part-time Transfer Degree
                  Courses: Cultural Management, Library Information, Social
                  Work, Tourism, Hotel Management, Travel & Tourism Service
                  Management, Early Childhood Education, Primary Education,
                  Vocal Music, Music Education, Arts Education, Fashion Design,
                  Graphics, State Management, Law, English Language, Sports
                  Management.{" "}
                </p>
              </div>
            </div>
            <div>
              <div className="bg-orange-300 rounded p-3">Requirements</div>
              <div className="p-3 font-light">
                <p>1. Admission requirements:</p>
                <p>
                  - Admission subjects: Candidates who have graduated from high
                  school (Full–time or Continuing education) or have graduated
                  from intermediate school or college. (Candidates who have
                  graduated from intermediate school without a high school
                  diploma must complete cultural subjects at high school under
                  the regulations).
                </p>
                <p>- Scale of admission: nation-wide</p>
                <p>
                  - Form of admission: Examination and Admission according to
                  Regulations of the Ministry of Education and Training;
                  Admission Project of Thanh Hoa University of Culture, Sports
                  and Tourism, as follows:{" "}
                  <p>
                    Method 1: Considering the results of the high school
                    graduation exam.
                  </p>{" "}
                  <p>Method 2: Considering high school transcript results</p>{" "}
                  <p>
                    Method 3: Direct Admission according to regulations of the
                    Ministry of Education and Training.
                  </p>
                </p>
                <p>2. Graduation Requirements:</p>
                <p>
                  - Accumulate enough modules, and credits and complete other
                  mandatory contents as required by the training program,
                  meeting the output standards of the training program;
                </p>
                <p>
                  - The cumulative average score of the entire course is average
                  or higher;
                </p>
                <p>
                  - At the time of graduation, students are not being prosecuted
                  for criminal liability or are not being disciplined at the
                  level of academic suspension;
                </p>
                <p>
                  - Meet the output standards in Foreign Languages and
                  Information Technology according to the school's regulations
                  (English Certificate level 3 of the 6-level Framework for
                  Vietnam or equivalent according to Circular 01/2014;
                  Information Technology Certificate according to Circular
                  03/2014).
                </p>
                <p>
                  - Complete the Defense Education Certificate and Physical
                  Education module.
                </p>
                <p>
                  - Having sent an application form to the Department of
                  Training Management for a graduation check (for students who
                  graduate early or late compared to the expected time of the
                  course, or who have no desire to graduate because they need to
                  improve their academic results).
                </p>
                <p>
                  3. Degree granting unit: Thanh Hoa University of Culture,
                  Sports and Tourism
                </p>
              </div>
            </div>
            <div>
              <div className="bg-orange-300 rounded p-3">Apply</div>
              <div className="p-3 font-light">
                <p>
                  <strong>Address:</strong> Postgraduate Training Department,
                  Room 109, Building B, Thanh Hoa University of Culture, Sports
                  and Tourism, No. 561, Quang Trung III Street, Dong Ve Ward,
                  Thanh Hoa City, Thanh Hoa Province.
                </p>

                <h3>Contact Info:</h3>
                <ul>
                  <li>
                    Dr. Ha Dinh Hung, Head of Postgraduate Training Department:{" "}
                    <a href="tel:+84912501982">0912501982</a>; Email:{" "}
                    <a href="mailto:hadinhhung@dvtdt.edu.vn">
                      hadinhhung@dvtdt.edu.vn
                    </a>
                  </li>
                  <li>
                    M.A. Vu Thi Dung, Deputy Head of Postgraduate Training
                    Department: <a href="tel:+84918836186">0918836186</a>;
                    Email:{" "}
                    <a href="mailto:vuthidung@dvtdt.edu.vn">
                      vuthidung@dvtdt.edu.vn
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </>
        );
      case 2:
        return (
          <>
            <div>
              <div className="bg-orange-300 rounded p-3">Overview</div>
              <div className="p-3">
                <p className="indent-5 font-light">
                  Currently, TUCST is training 3 master's majors (Cultural
                  Management, Public Management and English Language) and 1
                  doctoral major (Cultural Management). Accordingly, culture is
                  one of the main training pillars of the school. The
                  postgraduate training program of TUCST has attracted hundreds
                  of students from new graduates to employees and junior or
                  senior managers in many state-owned units in Thanh Hoa
                  province.
                </p>
              </div>
            </div>
            <div>
              <div className="bg-orange-300 rounded p-3">Apply</div>
              <div className="p-3 font-light">
                <p>
                  <strong>Address:</strong> Room 101, Building B<br />
                  Thanh Hoa University of Culture, Sports and Tourism, No. 561,
                  Quang Trung Street, Dong Ve Ward, Thanh Hoa City.
                </p>

                <p>
                  <strong>Phone:</strong>{" "}
                  <a href="tel:+84373857421">+(84) 2373 857 421</a>
                </p>

                <p>
                  <strong>Email:</strong>{" "}
                  <a href="mailto:nguyenthiha@dvtdt.edu.vn">
                    nguyenthiha@dvtdt.edu.vn
                  </a>
                </p>

                <p>
                  <strong>Website:</strong>{" "}
                  <a href="http://qldt.tucst.edu.vn">
                    http://qldt.tucst.edu.vn
                  </a>
                </p>
              </div>
            </div>
          </>
        );
      case 3:
        return (
          <>
            <div>
              <div className="bg-orange-300 rounded p-3">Overview</div>
              <div className="p-3">
                <p className="indent-5 font-light">
                  As a leading institution of higher education in Vietnam, TUCST
                  boasts a large partnership network with numerous universities
                  worldwide, especially Asia area. So far, the University has
                  signed many connecting programs with international partners:
                  training undergraduate 3:1, training graduates, and
                  internships.
                </p>
                <p className="indent-5 font-light">
                  Our exchange programs are conducted annually, providing
                  regular opportunities for academic and cultural enrichment for
                  Vietnamese students and overseas students who have a demand
                  for learning in Vietnam.
                </p>
              </div>
            </div>
            <div>
              <div className="bg-orange-300 rounded p-3">Program</div>
              <div className="p-3 font-light"></div>
            </div>
            <div>
              <div className="bg-orange-300 rounded p-3">Apply</div>
              <div className="p-3 font-light">
                <p>
                  <strong>Address:</strong> Room 404, Building B, Thanh Hoa
                  University of Culture, Sports and Tourism, No. 561, Quang
                  Trung III Street, Dong Ve Ward, Thanh Hoa City, Thanh Hoa
                  Province.
                </p>

                <p>
                  <strong>Email:</strong> [No email provided]
                </p>
              </div>
            </div>
          </>
        );
      case 4:
        return (
          <>
            <div>
              <div className="bg-orange-300 rounded p-3">Overview</div>
              <div className="p-3">
                <p className="indent-5 font-light">
                  Welcome to the Vietnamese language and culture courses for
                  foreigners! This course not only helps you learn Vietnamese
                  confidently but also explores the diverse culture of this
                  country. With experienced teachers and practical activities,
                  you will quickly progress and gain a deeper understanding of
                  the rich language and culture of Vietnam. Join us to
                  experience the beauty of the Vietnamese language and culture!
                </p>
              </div>
            </div>
            <div>
              <div className="bg-orange-300 rounded p-3">Program</div>
              <div className="p-3"></div>
            </div>
            <div>
              <div className="bg-orange-300 rounded p-3">Contact</div>
              <div className="p-3 font-light">
                <p>
                  <strong>Address:</strong> [No address provided]
                </p>
                <p>
                  <strong>Mobile:</strong> [No mobile provided]
                </p>
                <p>
                  <strong>Email:</strong> [No email provided]
                </p>
              </div>
            </div>
          </>
        );

      default:
        return <></>;
    }
  };

  return (
    <section className="w-full">
      <Banner />
      <section className="bg-gray-100 w-full text-orange-500 font-bold  justify-between items-center px-20 py-8">
        <p className="text-3xl border-b-4 text-center">Admission</p>
        <section id="functional_unit">
          <div className="flex text-black mt-4 gap-8">
            <section className="w-1/3">
              <div className="bg-orange-300 rounded-xl">
                <Collapse
                  items={items}
                  defaultActiveKey={["1"]}
                  onChange={onChange}
                />
              </div>
            </section>
            <section className="w-2/3">{renderDetail(currentSelect)}</section>
          </div>
        </section>
      </section>
    </section>
  );
};
export default Admission;
