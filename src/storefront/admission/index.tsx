// import styles from "./index.module.scss";
import { Collapse, CollapseProps } from "antd";
import Banner from "src/components/banner";

const items: CollapseProps["items"] = [
  {
    key: "1",
    label: "Undergraduate",
    children: (
      <div>
        <p>- Overview</p>
        <p>- Programs</p>
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
      <div>
        <p>- Overview</p>
        <p>- Programs</p>
        <p>- Majors</p>
        <p>- Requirements</p>
        <p>- Apply</p>
      </div>
    ),
  },
  {
    key: "3",
    label: "Exchange programs",
    children: (
      <div>
        <p>- Overview</p>
        <p>- Programs</p>
        <p>- Majors</p>
        <p>- Requirements</p>
        <p>- Apply</p>
      </div>
    ),
  },
  {
    key: "4",
    label: "Vietnamese intensive courses",
    children: (
      <div>
        <p>- Overview</p>
        <p>- Programs</p>
        <p>- Majors</p>
        <p>- Requirements</p>
        <p>- Apply</p>
      </div>
    ),
  },
];

// const renderAdmissionDetail = () => {

// }

const Admission = () => {
  const onChange = (key: string | string[]) => {
    console.log(key);
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
            <section className="w-2/3">
              <div>
                <div className="bg-orange-300 rounded p-3">Overview</div>
                <p className="p-3"></p>
              </div>
              <div>
                <div className="bg-orange-300 rounded p-3">Programs</div>
                <p className="p-3"></p>
              </div>
              <div>
                <div className="bg-orange-300 rounded p-3">MAJORS</div>
                <p className="p-3"></p>
              </div>
              <div>
                <div className="bg-orange-300 rounded p-3">REQUIREMENTS</div>
                <p className="p-3 font-medium">
                  <h2>Admission Requirements:</h2>
                  <ul>
                    <li>
                      - <strong>Admission Subjects:</strong> Candidates who have
                      graduated from high school (Full–time or Continuing
                      education) or have graduated from intermediate school or
                      college. (Candidates who have graduated from intermediate
                      school without a high school diploma must complete
                      cultural subjects at high school under the regulations).
                    </li>
                    <li>
                      - <strong>Scale of Admission:</strong> Nationwide
                    </li>
                    <li>
                      - <strong>Form of Admission:</strong> Examination and
                      Admission according to Regulations of the Ministry of
                      Education and Training; Admission Project of Thanh Hoa
                      University of Culture, Sports and Tourism, as follows:
                      <ol type="1">
                        <li>
                          Method 1: Considering the results of the high school
                          graduation exam.
                        </li>
                        <li>
                          Method 2: Considering high school transcript results
                        </li>
                        <li>
                          Method 3: Direct Admission according to regulations of
                          the Ministry of Education and Training.
                        </li>
                      </ol>
                    </li>
                  </ul>

                  <h2>Graduation Requirements:</h2>
                  <ul>
                    <li>
                      Students are considered and recognized for graduation when
                      they meet the following conditions:
                    </li>
                    <li>
                      - Accumulate enough modules, and credits and complete
                      other mandatory contents as required by the training
                      program, meeting the output standards of the training
                      program;
                    </li>
                    <li>
                      - The cumulative average score of the entire course is
                      average or higher;
                    </li>
                    <li>
                      - At the time of graduation, students are not being
                      prosecuted for criminal liability or are not being
                      disciplined at the level of academic suspension;
                    </li>
                    <li>
                      - Meet the output standards in Foreign Languages and
                      Information Technology according to the school's
                      regulations (English Certificate level 3 of the 6-level
                      Framework for Vietnam or equivalent according to Circular
                      01/2014; Information Technology Certificate according to
                      Circular 03/2014).
                    </li>
                    <li>
                      - Complete the Defense Education Certificate and Physical
                      Education module.
                    </li>
                    <li>
                      - Having sent an application form to the Department of
                      Training Management for a graduation check (for students
                      who graduate early or late compared to the expected time
                      of the course, or who have no desire to graduate because
                      they need to improve their academic results).
                    </li>
                  </ul>

                  <p>
                    <strong>Degree granting unit:</strong> Thanh Hoa University
                    of Culture, Sports and Tourism
                  </p>
                </p>
              </div>
              <div>
                <div className="bg-orange-300 rounded p-3">Apply</div>
                <p className="p-3"></p>
              </div>
            </section>
          </div>
        </section>
      </section>
    </section>
  );
};
export default Admission;
