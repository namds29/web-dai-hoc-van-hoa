import {
  ACADEMICS_FUCTIONAL_UNITS,
  ACADEMICS_TRAINING_PROGRAM,
} from "src/utils/constant";
// import styles from "./index.module.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Banner from "src/components/banner";

const Academics = () => {
  const [unitId, setUnitId] = useState<number>(1);
  const navigate = useNavigate();

  const handleChangeUnit = (id: number) => {
    setUnitId(id);
  };

  const handleChangeContent = (value: number) => {
    switch (value) {
      case 1:
        return (
          <div>
            <p>1. General Introduction</p>
            <p>
              The General Administration Department was formerly known as the
              Assets Management - Administration Department, then the regular
              Assets Management division was separated into the Assets
              Management Department, and the Assets Management - Administration
              Department was renamed the Organization - Administration
              Department. In July 2011, the Organization division was renamed to
              the Personnel Organization Department, and the Organization –
              Administration was renamed the General Administration Department
              until now.
            </p>
            <p>2. Contact information</p>
            <p>
              Responsible for content: MA. Doan Tien Dung - Head
              <br />
              Address: Room A107, B102, B103;
              <br />
              Thanh Hoa University of Culture, Sports and Tourism, No. 561,
              Quang Trung Street, Dong Ve Ward, Thanh Hoa City
              <br />
              Phone: 0888 856 777
              <br />
              Email: doantiendung@dvtdt.edu.vn
              <br />
              Website:http://hcth.tucst.edvn
              <br />
            </p>
          </div>
        );
      case 2:
        return (
          <div>
            <p>1. General Introduction</p>
            <p>
              The Department of Personnel Organization has the function of
              advising the President on the personnel organization of the
              University: Strengthening the organizational structure, separating
              and establishing units within the University; Planning,
              recruitment, training, fostering and management of civil servants
              and public employees; Implementing policies and regimes for
              lecturers and workers in accordance with the regulations of State
              and the University ; Protecting internal politics in the
              University.
            </p>
            <p>2. Contact information</p>
            <p>
              Responsible for content: MA. Pham Thi Phuong - Head
              <br />
              Address: Room 203A - 204A
              <br />
              Thanh Hoa University of Culture, Sports and Tourism, No. 561,
              Quang Trung Street, Dong Ve Ward, Thanh Hoa City.
              <br />
              Phone: (+84) 982085278
              <br />
              Email: phamthiphuong@dvtdt.edu.vn
              <br />
              Website: http://tccb.tucst.edu.vn
              <br />
            </p>
          </div>
        );
      case 3:
        return (
          <div>
            <p>1. General Introduction</p>
            <p>
              The Department - Planning Department was formerly known as a
              financial accounting team of 2 people, established in 1968 when
              the school was still Thanh Hoa Primary School of Culture and Arts.
              In 2004, when the school was upgraded to Thanh Hoa College of
              Culture and Arts, the Department changed its name to the
              Department - Planning Department. In 2011, the Prime Minister
              signed Decision No. 1221/QD-TTg dated July 22, 2011 to upgrade to
              Thanh Hoa University of Culture, Sports and Tourism, the name of
              the Planning - Finance Department remained.
            </p>
            <p>2. Contact information</p>
            <p>
              Responsible for content: MA. Le Dinh Ruc - Head
              <br />
              Address: Room B105
              <br />
              Thanh Hoa University of Culture, Sports and Tourism, No. 561,
              Quang Trung Street, Dong Ve Ward, Thanh Hoa City
              <br />
              Phone: 0985 898 412
              <br />
              Email: phongkhtc.dvtdt@gmail.com
              <br />
              Website: http://khtc.tucst.edu.vn
              <br />
            </p>
          </div>
        );
      case 4:
        return (
          <div>
            <p>1. General Introduction</p>
            <div>
              <p>Function</p>
              <p>
                Advise the President on strategic planning and training
                development plans of the University.
              </p>
              <p>
                Manage and organize the implementation of training programs at
                the full time from intermediate to university levels.
              </p>
            </div>
            <div>
              <p>Mission</p>
              <p>
                Develop training strategies; set up plans, organize and manage
                the teaching and learning process; Develop the University's
                training programs.
              </p>
              <p>
                Propose the investment of the equipment and facilities for
                classrooms, lecture halls, practice rooms, school workshops;
                plan the distribution and use of classrooms, lecture halls, and
                practice room systems.
              </p>
              <p>
                Manage the training softwares; Manage and monitor the issuance
                of diplomas, certificates and graduation academic transcripts of
                these training systems.
              </p>
              <p>
                Stand member of the Admissions Council for centralized formal
                training.
              </p>
              <p>Report on training activities as requested by superiors</p>
            </div>
            <p>2. Contact information</p>
            <p>
              Responsible for content: Dr. Nguyen Thi Ha - Head
              <br />
              Address: Room 101, Building B
              <br />
              Thanh Hoa University of Culture, Sports and Tourism, No. 561,
              Quang Trung Street, Dong Ve Ward, Thanh Hoa City.
              <br />
              Phone: +(84) 2373 857 421
              <br />
              Email: nguyenthiha@dvtdt.edu.vn
              <br />
              Website: http://qldt.tucst.edu.vn
              <br />
            </p>
          </div>
        );
      case 5:
        return (
          <div>
            <p>1. General Introduction</p>
            <div>
              <p>Function</p>
              <p>
                Advise the President on development strategies, management and
                postgraduate training.
              </p>
              <p>
                Organize the development and management of postgraduate training
                programs in the University's training majors
              </p>
            </div>
            <div>
              <p>Mission</p>
              <p>Participate in the Postgraduate Admission Council.</p>
              <p>
                Propose and implement enrollment targets, announcing enrollment,
                receiving postgraduate admission applications for allowed majors
                and training levels.
              </p>
              <p>
                Construct a schedule and a record to monitor lecturers' teaching
                and students' learning.
              </p>
              <p>
                Notify teaching plans and tasks to faculties, subjects and
                subject lecturers.
              </p>
              <p>
                Manage and store student records, entrance exam scores, and
                student transcripts according to regulations.
              </p>
              <p>
                Develop postgraduate training and fostering links with domestic
                and foreign Academies and universities.
              </p>
              <p>Expand international cooperation in postgraduate training.</p>
            </div>
            <p>2. Contact information</p>
            <p>
              Responsible for content: Dr. Ha Dinh Hung - Head
              <br />
              Address: Room 109, Building B
              <br />
              Thanh Hoa University of Culture, Sports and Tourism, No. 561,
              Quang Trung Street, Dong Ve Ward, Thanh Hoa City.
              <br />
              Phone: 0912 501 982
              <br />
              Email: hadinhhung@dvtdt.edu.vn
              <br />
              Website: http://dtsdh.tucst.edu.vn
              <br />
            </p>
          </div>
        );
      case 6:
        return (
          <div>
            <p>1. General Introduction</p>
            <p>
              The Politics and Student Affairs Department has the function of
              advising the President on organizing political, ideological
              management and alumni network according to the guidelines of the
              Communist Party and the laws of the State and the current
              regulations of the Ministry of Education and Training, Thanh Hoa
              Provincial People’s Committee and the University’s development
              policies and strategies. The following main duties of the
              University are put forward:
              <br /> • Deploy political and moral work and propaganda activities
              among students.
              <br /> • Deploy student affairs
              <br /> • Carry out student support and service activities
              <br /> • Preside and coordinate to organize community connection
              and service activities. Manage the effective use of facilities and
              equipment assigned by the School
            </p>
            <p>2. Contact information</p>
            <p>
              Responsible for content: LE XUAN SON - Head
              <br />
              Address: Room 104 - 105 A
              <br />
              Thanh Hoa University of Culture, Sports and Tourism, No. 561,
              Quang Trung Street, Dong Ve Ward, Thanh Hoa City.
              <br />
              Phone: 0911688181
              <br />
              Email: lexuanson@dvtdt.edu.vn
              <br />
              Website: http://ctcthssv.tucst.edu.vn
              <br />
            </p>
          </div>
        );
      case 7:
        return (
          <div>
            <p>1. General Introduction</p>
            <p>
              The Department of Scientific Management, Training and
              International Cooperation has the function of advising the
              President in building development orientation, setting up plans
              and managing scientific research activities, education,
              postgraduate training and international cooperation of the
              Universitty..
            </p>
            <p>2. Contact information</p>
            <p>
              Responsible for content: Assoc.Prof, Dr. Doan Van Truong - Head.
              <br />
              Address: Rooms 401, 402, 403, 404, Building A
              <br />
              Thanh Hoa University of Culture, Sports and Tourism, No. 561,
              Quang Trung Street, Dong Ve Ward, Thanh Hoa City.
              <br />
              Phone: 0979 283 406
              <br />
              Email: Doanvantruong@dvtdt.edu.vn
              <br />
              Website: http://qlkhhtqt.tucst.edu.vn
              <br />
            </p>
          </div>
        );
      case 8:
        return (
          <div>
            <p>1. General Introduction</p>
            <p>
              The Inspection Department has the function of providing the
              President with consultancy and support on the detection of the
              loopholes in the University’s management mechanism to propose
              possible solutions; Preventing from and struggle against illegal
              behaviours in accordance with the law, internal rules and
              regulations of the University; Helping the Departments, centers
              and departments implement legal policies on education and related
              policies and laws; Resolving complaints and denunciations,
              preventing from corruption within the scope of functions and
              missions of the University according to the law.
            </p>
            <p>2. Contact information</p>
            <p>
              Responsible for content: MA. Hoang Ba Khai – Head
              <br />
              Address: Room A302,303
              <br />
              Thanh Hoa University of Culture, Sports and Tourism, No. 561,
              Quang Trung Street, Dong Ve Ward, Thanh Hoa City.
              <br />
              Phone: 0983 759 332
              <br />
              Website: http://Thanhtra.tucst.edu.vn
              <br />
            </p>
          </div>
        );
      case 9:
        return (
          <div>
            <p>1. General Introduction</p>
            <p>
              The Testing and Quality Assurance Department has the function of
              advising and assisting the President in the management of testing
              and ensuring the University’s educational quality; Carrying out
              testing work to improve the quality of education;
              <br />
              Participate in organizing entrance and graduation exams for all
              training systems and levels in accordance with the laws and
              regulations.
            </p>
            <p>2. Contact information</p>
            <p>
              Responsible for content: MSc. Le Ngoc Hoan - Head
              <br />
              Address: Room 304, 305, 306A
              <br />
              Thanh Hoa University of Culture, Sports and Tourism, No. 561,
              Quang Trung Street, Dong Ve Ward, Thanh Hoa City.
              <br />
              Phone: 0916164468
              <br />
              Email: lengochoan@dvtdt.edu.vn
              <br />
              Website: http://www.ktdbclgd.dvtdt.edu.vn
              <br />
            </p>
          </div>
        );
      case 10:
        return (
          <div>
            <p>1. General Introduction</p>
            <p>
              The Department has the function of advising and assisting the
              President in the management, procurement, repair, and maintenance
              of school facilities serving the training and scientific research
              of the staff and the students.
              <br />
              Set up a plan for managing the school's equipment and supplies;
              monitor the procurement and use of equipment and supplies; Manage
              the assets in classrooms, lecture halls, laboratories,
              Departments...
            </p>
            <p>2. Contact information</p>
            <p>
              Responsible for content: MA. Le Van Duong – Head
              <br />
              Address: Room 102A
              <br />
              Thanh Hoa University of Culture, Sports and Tourism, No. 561,
              Quang Trung Street, Dong Ve Ward, Thanh Hoa City.
              <br />
              Phone: +(84) 949 150 191 +(84) 986 792 191
              <br />
              Email: levanduong@dvtdt.edu.vn
              <br />
              Website: http://qtcsvc.tucst.edu.vn
              <br />
            </p>
          </div>
        );
      case 11:
        return (
          <div>
            <p>1. General Introduction</p>
            <div>
              <p>Function</p>
              <p>
                Advise the School Board on enrollment work; Set up the plans,
                implement and supervise enrollment work, enrollment and job
                consulting; Give information and propaganda for enrollment work;
                Construct, promot and develop the School's image to society.
              </p>
            </div>
            <div>
              <p>Mission</p>
              <p>
                Coordinate with the Training Management Department , Linking and
                Continuing Education Center to advise the School Board to
                develop admission regulations;
              </p>
              <p>
                Build and deploy overall and detailed plans for admission
                consulting work based on the annual assigned targets
              </p>
              <p>
                Synthesize and collect data related to admission promotion from
                admission festivals and students gatherings organized by the
                school.
              </p>
              <p>
                Coordinate with the Training Managemen Department, Politics &
                Sstudent Affairs Department, the Linking and continuing
                Education Center, faculties and organizations, businesses to
                design, post advertisements and promote enrollment work in
                newspapers, radio, internet.
              </p>
              <p>
                Receive admission applications in accordance with current
                regulations; synthesize and report data; prepare documents for
                regular and extraordinary Admissions Council meetings; Store
                admission documents.
              </p>
              <p>
                Coordinate with businesses and job centers to sign agreements on
                job cooperation, accepting students for internships, and career
                guidance for post-graduation students (labor recruitment).
              </p>
            </div>
            <p>2. Contact information</p>
            <p>
              Responsible for content: MA. Phung Thi Thuy Phuong - Head
              <br />
              Address: Room 104, Building B
              <br />
              Thanh Hoa University of Culture, Sports and Tourism, No. 561,
              Quang Trung Street, Dong Ve Ward, Thanh Hoa City.
              <br />
              Phone: +(84) 2373 713 496; +(84) 904 480 222
              <br />
              Email: trungtamtuvantuyensinhvhttdl@gmail.com
              <br />
              Website:http://tttvtsgtvl.tucst.edu.vn/
              <br />
            </p>
          </div>
        );
      case 12:
        return (
          <div>
            <p>1. General Introduction</p>
            <p>
              The Center has the function of advising the President on
              development strategies, management and training, in-service
              training enrollment, training according to social needs and joint
              training; propagate enrollment and manage training; Coordinate
              with units and other educational institutions to carry out
              enrollment and training for joint training classes according to
              current regulations.
            </p>
            <p>2. Contact information</p>
            <p>
              Responsible for content: MA. Nguyen Dinh Thao - Director
              <br />
              Address: Room 106, Building C
              <br />
              Thanh Hoa University of Culture, Sports and Tourism, No. 561,
              Quang Trung Street, Dong Ve Ward, Thanh Hoa City
              <br />
              Phone: 0942 238 999
              <br />
              Email: nguyendinhthao@dvtdt.edu.vn
              <br />
              Website: http://ttgdtxlk.tucst.edu.vn
              <br />
            </p>
          </div>
        );
      case 13:
        return (
          <div>
            <p>1. General Introduction</p>
            <p>
              The Center has the function of advising and helping the President
              manage research, training and information technology application
              work at Thanh Hoa University of Culture, Sports and Tourism;
              Organizing training, exams and issue information technology
              certificates, foreign language certificates and some other
              short-term certificates to learners.
            </p>
            <p>2. Contact information</p>
            <p>
              Responsible for content: MA. Nguyen Thi Thanh Nga - Head
              <br />
              Address: Room 106, 206 Building B
              <br />
              Thanh Hoa University of Culture, Sports and Tourism, No. 561,
              Quang Trung Street, Dong Ve Ward, Thanh Hoa City
              <br />
              Phone: 0911938588
              <br />
              Email: nguyenthithanhnga@dvtdt.edu.vn
              <br />
              Website: http://ttnnth.tucst.edu.vn/
              <br />
            </p>
          </div>
        );
      case 14:
        return (
          <div>
            <p>
              The center has the function of advising and helping the President
              to carry out the following duties:
            </p>
            <p>
              - Coordinate vocational practice training for students at the
              Center.
              <br />
              - Deploy enrollment, training, fostering and issue professional
              certificates of tourism services and fine arts according to social
              needs.
              <br />- Organize services at the Center according to social needs.
            </p>
          </div>
        );
      case 15:
        return (
          <div>
            <p>1. General Introduction</p>
            <p>
              The Center has the function of serving teaching, learning,
              training, scientific research, implementing science and technology
              applications and management of the School through the use and
              exploitation available materials and databases in the Library.
            </p>
            <p>2. Contact information</p>
            <p>
              Responsible for content: MA. Trinh Tat Dat - Director
              <br />
              Address: 5th Floor, Building A, Thanh Hoa University of Culture,
              Sports and Tourism, No. 561, Quang Trung Street, Dong Ve Ward,
              Thanh Hoa City.
              <br />
              Phone: (+84) 915 626 312
              <br />
              Email: trinhtatdat@dvtdt.edu.vn
              <br />
              Website: http://tttttv.tucst.edu.vn/
              <br />
            </p>
          </div>
        );
      default:
        return <></>;
    }
  };

  return (
    <section className="w-full">
      <Banner />
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
              {handleChangeContent(unitId)}
            </div>
          </div>
        </section>
        <section id="functional_unit">
          <p className="text-2xl mt-8 underline underline-offset-8">
            Training Program
          </p>
          <div className="flex text-black border-black mt-4">
            <div className="title w-1/3 bg-orange-400">
              {ACADEMICS_TRAINING_PROGRAM.map((item) => (
                <div className=" text-black px-4 py-2">
                  <a className="text-xl font-bold">{item.parent_title}</a>
                  <div className="cursor-pointer ml-4 text-white font-normal ">
                    {item.children_title.map((child) => (
                      <div className="underline hover:text-gray-300">
                        {child}
                      </div>
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
                  <div
                    className="px-8 py-4 bg-orange-500 rounded cursor-pointer hover:bg-orange-400"
                    onClick={() => navigate("/academics/formal-training")}
                  >
                    Formal training
                  </div>
                  <div className="px-8 py-4 bg-orange-500 rounded cursor-pointer hover:bg-orange-400">
                    Transition training
                  </div>
                  <div className="px-8 py-4 bg-orange-500 rounded cursor-pointer hover:bg-orange-400">
                    Second-degree training
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
