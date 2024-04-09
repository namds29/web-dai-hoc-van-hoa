import {
  ACADEMICS_FUCTIONAL_UNITS,
  ACADEMICS_TRAINING_PROGRAM,
} from "src/utils/constant";
// import styles from "./index.module.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
      case 16:
        return (
          <div>
            <div>
              <p className="indent-10">
                The Faculty of Culture and Information is one of the first
                departments established in the history of formation and
                development of Thanh Hoa University of Culture, Sports and
                Tourism. During its development, the Faculty of Culture and
                Information has changed its name many times and added training
                fields managed by the faculty.
              </p>
              <p className="indent-10">
                Before 2004, the faculty was named the Faculty of Culture –
                Theory with training fields of museum, book publishing, library,
                popular culture, movie release, promotional information, culture
                management... at primary and intermediate levels; cooperated
                with Hanoi University of Culture to provide undergraduate
                training of Museum, Library, Book Publishing, Culture
                Management, Culture Tourism; Trained and fostered cultural
                officials according to the project of Thanh Hoa province.
              </p>
              <p className="indent-10">
                In 2004, the Faculty changed its name to the Faculty of Culture
                - Tourism with the mission of training students in the fields of
                Culture Management, Library, Vietnamese Study, Department
                Secretary... at college level and continued to associate with
                Hanoi University of Culture, National University Of Art and
                education in undergraduate training of Culture Management,
                Library....
              </p>
              <p className="indent-10">
                In 2011, the Faculty was named Faculty of Culture and
                Information with two training fields of Culture Management and
                Information Studies. In 2018, the Division of Social Work merged
                into the Faculty of Culture - Information. In 2019, approved by
                the Ministry of Education and Training, the Falcuty opened the
                field of communication technology.
              </p>
              <p className="indent-10">
                In 2022, the Faculty renamed Faculty of Culture and Society with
                the training fields of Culture Management, Social work,
                Information - Library, Communication technology at formal
                University system, formal inter-universitysystem and in-service
                system including.
              </p>
              <p className="indent-10">
                In 2023, the Faculty changed its name to the Faculty of Culture
                and Information with 5 training fields: Culture Management,
                Social Work, Information - Library (specializing in Library -
                School equipment, Archives, Applied information technology),
                Communication technology, Computer Science Teacher Education.
                Scientific research among lecturers and students have been
                promoted. Many lecturers have chaired or participated in
                university and provincial level research projects or had
                articles published in international and domestic specialized
                scientific journals.The faculty's majors have attracted many
                students from Lao PDR to study.
              </p>
              <p className="indent-10">
                With a rich history, the Faculty of Culture and Society has
                contributed to develop human resources for Thanh Hoa province in
                particular and Vietnam in general in the fields of Culture
                Management, Social Work and Information - Library for Thanh Hoa
                province in particular and Vietnam in general.
              </p>
            </div>
            <strong>Contact information</strong>
            <p>
              Responsible for content: Dr. Le Thi Thao - Dean
              <br />
              Address: Room 401, Building C
              <br />
              Thanh Hoa University of Culture, Sports and Tourism, No. 561,
              Quang Trung Street, Dong Ve Ward, Thanh Hoa City Phone: (+84)
              0933868919
              <br />
              Email: Khoavanhoathangtin@tucst.edu.vn
              <br />
              Website: http://khoavhtt.tucst.edu.vn
              <br />
            </p>
          </div>
        );
      case 17:
        return (
          <div>
            <div>
              <p className="indent-10">
                The Faculty of Music is one of the training faculties with a
                long history of formation and development from the Primary level
                of Culture and Arts (1967), High School of Culture and Arts
                (1978), College of Culture and Arts (2004) to Thanh Hoa
                University of Culture, Sports and Tourism (2011). The Faculty
                has trained majors including Vocal Music, Music Education,
                Intermediate Vocal Talent, Intermediate Musical Instrument
                Talent
              </p>
              <p className="indent-10">
                Since its establishment, the Faculty of Music has trained many
                students who have won high prizes in many provincial and
                national music competitions such as: "Television Singing
                Festival - Sao Mai Award"; "Students talents of schools of
                national culture and arts”; “Vietnamese Voice”; “Vietnam Idol”;
                "Vietnamese Band" "Bolero Idol"... such as singers: Le Anh Tho;
                Le Huy Phuoc, Ho Quang 8, Le Minh Tuyen; Do Huong Giang; Mai Ut,
                Trinh Bao Khuyen, Tran Phuong Linh, Ngo Trung Quang; Do My Lam,
                Ngo Thanh Huyen; Hoang Thuy; Le Thuy Anh, Nguyen Van Thang,
                Trinh Linh Chi, Trinh Dinh Quang, Nguyen Thi Van Anh…
              </p>
              <p className="indent-10">
                The standardized lecturers have increased. In order to improve
                the quality of training to meet social requirements, the Faculty
                has cooperated with Professors, Associate Professors, Doctors,
                People's Artists, Meritorious Artists, artisans, artists, and
                famous singers in teaching, especially guiding performance
                practices for students.
              </p>
              <p className="indent-10">
                The Faculty has been cooperating in training and performing with
                domestic and international universities and academies of music
                such as Italy, Switzerland, Poland, Russia, Korea, China... In
                addition, many exchange programs of music with foreign bands
                made great impression: Jazz Quintet "Five Play", American
                Blended band, "Russia - Love and Nostalgia", musical exchange
                performance in Ziegiola old town - Poland, Lao cultural days In
                Vietnam,...
              </p>
            </div>
            <strong>Contact information</strong>
            <p>
              Responsible for content: MA. Pham Thi Hoang Hien - Deputy Dean in
              charge of the department
              <br />
              Address: Room 208-209, Building B
              <br />
              Thanh Hoa University of Culture, Sports and Tourism, No. 561,
              Quang Trung Street, Dong Ve Ward, Thanh Hoa City
              <br />
              Phone: +(84) 912395364
              <br />
              Email: khoaamnhac.tucst@gmail.com
              <br />
              Website: http://khoaan.tucst.edu.vn
              <br />
            </p>
          </div>
        );
      case 18:
        return (
          <div>
            <div>
              <p className="indent-10">
                The Faculty of Fine Arts was established when the school was at
                the Primary level of Culture and Arts (1967), High School of
                Culture and Arts (1978), Thanh Hoa College of Culture and Arts
                (2004), and Thanh Hoa University of Culture, Sports and Tourism
                (2011) with more than 50 years in training of fine arts in Thanh
                Hoa and Vietnam. The Faculty has the function of training in the
                fields of Painting, Graphic Design and Fashion Design from
                professional intermediate to university levels for Thanh Hoa
                province, the North Central region and the South of the Red
                River.
              </p>
              <p className="indent-10">
                The falcuty has had international cooperation programs of
                training in fine arts including sending students and lecturers
                to Poland and the Philippines to study; Invite foreign
                lecturersto teach topics. In addition, the faculty has been
                inviting experts in the fields of Graphics, Fashion Design and
                Painting from Vietnam University of Fine Arts and University of
                Fine Arts and industry to teach.
              </p>
              <p className="indent-10">
                With regard to the teaching staff, 100% of lecturers have
                post-university degrees, trained at prestigious domestic and
                foreign Universities. In addition, the facilities are good for
                training. As for research and application to social connection,
                the Faculty has received attention from the Province with
                assigned key fine art works and projects.
              </p>
              <p className="indent-10">
                In early May 2022, Division of Fine Arts Education was merged
                into the Faculty, but its organizational structure, the function
                and mission is unchangeable - in charge of the field of Fine
                Arts Education.
              </p>
              <p className="indent-10">
                As one of the richest faculties of training experience, the
                Faculty has been praised and honored for many years at all
                levels: Certificate of Merit from the Ministry of Education and
                Training, Certificate of Merit from the Chairman of the
                Provincial People's Committee... Many lecturers and students won
                high awards in domestic and international art competitions,
                contributing to providing high-quality human resources in the
                fields of education and fine arts in Thanh Hoa province in
                particular and in Vietnam ingeneral.
              </p>
            </div>
            <strong>Contact information</strong>
            <p>
              Responsible for content: Dr. Tran Viet Anh – Dean
              <br />
              Address: Room 202, Building B
              <br />
              Thanh Hoa University of Culture, Sports and Tourism, No. 561,
              Quang Trung Street, Dong Ve Ward, Thanh Hoa City
              <br />
              Phone: 090 424 0125
              <br />
              Email: tranvietanh@dvtdt.edu.vn
              <br />
              Fanpage: MỸ THUẬT - TUCST
              <br />
              Website: http://khoamt.tucst.edu.vn
              <br />
            </p>
          </div>
        );
      case 19:
        return (
          <div>
            <div>
              <p>
                1.Function
                <br />
                The Faculty of Fine Arts was established when the school was at
                the Primary level of Culture and Arts (1967), High School of
                Culture and Arts (1978), Thanh Hoa College of Culture and Arts
                (2004), and Thanh Hoa University of Culture, Sports and Tourism
                (2011) with more than 50 years in training of fine arts in Thanh
                Hoa and Vietnam. The Faculty has the function of training in the
                fields of Painting, Graphic Design and Fashion Design from
                professional intermediate to university levels for Thanh Hoa
                province, the North Central region and the South of the Red
                River.
              </p>
              <p>
                2. Mission <br />
                2.1. Training and fostering
                <br />
                - University level training:
                <br />
                + Tourism
                <br />
                + Tourism Services & Tour Management
                <br />
                + Hotel Management
                <br />
                - Coordinate with the Center for Tourism Practice & Event
                Organization, Tucst, to train and issue certificates in the
                following professions:
                <br />
                + Domestic tour guide profession
                <br />
                + International travel guide profession
                <br />
                + Domestic tourism management operation
                <br />
                + International tourism management operation
                <br />
                + Training courses on state management, eco-tourism, community
                tourism, tourism presentation skills...
                <br />
                - Set up training programs and teaching plans for the Faculty's
                training majors.
                <br />
                - Build development plans and update training programs towards
                standardization to meet social needs and international
                integration.
                <br />
                - Foster and improve the professional qualifications and skills
                of the teaching staff to meet the school's requirements, the
                needs of the industry and society.
                <br />
                2.2. Scientific research
                <br />
                - Scientific research and technology transfer in the fields of
                Tourism, Tourism Culture, Hotel Management, Tourism Services &
                Tour Management
                <br />- Compile textbooks and lectures towards standardization,
                quality assurance, meeting social needs and international
                integration
              </p>
            </div>
            <strong>Contact information</strong>
            <p>
              Responsible for content: Dr. Nguyen Truc Quynh – Dean Address:
              Department of the Faculty of Tourism, Room 107, Building B
              <br />
              Thanh Hoa University of Culture, Sports and Tourism, No. 561,
              Quang Trung Street, Dong Ve Ward, Thanh Hoa City
              <br />
              Phone: 0918.458.589
              <br />
              Hotline: 0983.092.009
              <br />
              Email: khoadulich@dvtdt.edu.vn
              <br />
              Website: http://www.dvtdt.edu.vn
              <br />
              Fanpage: https://www.facebook.com/khoadulich.tusct
              <br />
            </p>
          </div>
        );
      case 20:
        return (
          <div>
            <div>
              <p>
                The Faculty of Physical Education and Sports (formerly known as
                Faculty of Physical Education & Teacher Education) had 3
                training fields: Sports Management, Music Education, and Fine
                Arts Education. In 2015, the Faculty was allowed to train the
                field of Preschool Teacher Education by the Ministry of
                Education and training, so the Falcuty was splitted into Faculty
                of Preschool Teacher Education and Arts and Faculty of Physical
                Education and Sports.
              </p>
              <p>
                The Faculty of Physical Education and Sports was established
                under Decision No. 644/QD-ĐVTDT on 29th, September 2015 by the
                President of Thanh Hoa University of Culture, Sports and Tourism
                with the missions of training in the fields of Physical
                Education and Sports and teaching physical education modules for
                non-specialized students in the School. <br />
                1. Function
                <br />
                The Faculty of Physical Education and Sports has the function of
                managing training, fostering, and scientific research in the
                fields of Physical Education and Sports under the direction of
                the Governing Board.
                <br />
                2. Mission
                <br />
                2.1. Training and fostering
                <br />
                - Train and foster students in the fields of Sports Management
                and Physical Education at university level.
                <br />
                - Implement teaching programs and plans within the scope of the
                faculty.
                <br />
                - Foster and improve the professional qualifications and skills
                of the teaching staff to meet the school's requirements, the
                needs of the industry and society.
                <br />
                2.2. Scientific research
                <br />
                - Basic scientific research in the field of Sports and Physical
                Education.
                <br />
                - Compile textbooks and specialized reference materials.
                <br />
                - Guide students' scientific research work.
                <br />
              </p>
            </div>
            <strong>Contact information</strong>
            <p>
              Responsible for content: Falcuty of Physical Education and Sports
              <br />
              Address: Department of the Falcuty of Physical Education and
              Sports - Multi-purpose gymnasium, Thanh Hoa University of Culture,
              Sports and Tourism, No. 561, Quang Trung Street, Dong Ve Ward,
              Thanh Hoa City.
              <br />
              Phone: 0398280579 or 0978676759
              <br />
              Email: trinhngoctrung.dvtdt@gmail.
              <br />
              Website: http://khoatdtt.tucst.edu.vn
              <br />
            </p>
          </div>
        );
      case 21:
        return (
          <div>
            <div>
              <p>
                1. Function <br />
                The Faculty of Preschool - Primary Education has the function of
                training and scientific research in the fields of Preschool
                Education and Primary Education; advising the president on
                policies, strategies related to preschool and primary education.
                <br />
                2. Mission
                <br />
                2.1. Training and fostering
                <br />
                - Set up training programs and teaching plans for the bachelor
                of science in Prechool Education (formal university system and
                in-service system); Bachelor of Science in Primary Education.
                <br />
                - Build development plan and update training programs towards
                standardization, meeting social needs and international
                integration.
                <br />
                - Foster and improve professional qualifications and new issues
                in education for teachers and leaders of preschool education and
                primary education.
                <br />
                2.2. Scientific research
                <br />
                - Research on basic science and preschool education science,
                primary education.
                <br />
                - Provide training programs; compile textbooks and documents at
                different levels.
                <br />
                - Guide students' scientific research work..
                <br />
                - Coordinate with scientific research organizations inside and
                outside the school; link training with scientific research and
                educational practices at the Preschool and Primary levels of
                localities; support and improve educational qualifications and
                skills for preschool teachers towards standardization according
                to local needs.
                <br />
              </p>
            </div>
            <strong>Contact information</strong>
            <p>
              Responsible for content: Faculty of Preschool - Primary Education
              <br />
              Address: Room 201, Building C, Thanh Hoa University of Culture,
              Sports and Tourism, No. 561, Quang Trung Street, Dong Ve Ward,
              Thanh Hoa City.
              <br />
              Phone: 0914.463.007
              <br />
              Hotline: 0983.092.009
              <br />
              Email:khoangoaingu@dvtdt.edu.vn
              <br />
              Website: http://khoann.tucst.edu.vn
              <br />
            </p>
          </div>
        );
      case 22:
        return (
          <div>
            <div>
              <p>
                1. History of formation and development <br />
                The Faculty of Law and State Managemen (formerly known as the
                Faculty of State Management and Social Work) was established in
                2015 according to Decision No. 634/QD-ĐVTDT on 25th, September
                2015 by the President of Thanh Hoa University of Culture, Sports
                and Tourism with 3 training majors: Law, State Management and
                Social Work at formal university system, inter-university system
                and in-service system. The faculty has been training more than
                1,000 students including international students (currently 51
                Laotian students).
                <br />
                According to Decision No. 511/QD-ĐVTDT, the Division of Social
                Work was merged into the Faculty of Culture and Information on
                30th ,June 2018. The Falcuty renamed Faculty of Law and State
                Management. government on15th, June 2018. In accordance with the
                rearrangement of the general organizational structure of the
                University, the Division of Political Theory was officially
                merged into the Faculty on 22nd, May 2022 according to Decision
                No. 696/QD-DVTDT dated May 25th, 2022. The Faculty has managed
                03 divisions: Law, State Management and Political Theory.
                <br />
                The Faculty has been training two fields: Law and State
                Management at undergraduate and master's levels. Training forms
                are diversified to meet the needs of learners, including formal
                university system, inter-university system and in-service
                system. These are traing fields with great attraction of job
                opportunities, training human resources for socio-economic
                activities of the North Central - South Red River region in
                particular and the whole country in general.
                <br />
                2. Function
                <br />
                The Faculty of Law and State Management has the function of
                training, scientific research and technology transfer in the
                fields of Law and State Management. In addition, the Division of
                Political Theory has been responsible for teaching political
                theoretical knowledge for students in the school.
                <br />
                3. Mission
                <br />
                3.1. Training and fostering
                <br />
                - Train university level at formal university system,
                inter-university system and in-service system including the
                following fields:
                <br />
                + Law.
                <br />
                + State management.
                <br />
                - Train general education knowledge on political theory for
                students in the school.
                <br />
                - Foster and improve professional qualifications and skills for
                lectures.
                <br />
                - Set up a plan to develop the teaching staff, training programs
                and facilities towards standardization for quality assurance and
                meet social needs as well as international integration.
                <br />
                - Construct training programs, teaching and learning plans and
                organize the training process for one or several fields;
                Organize the training process and other educational activities
                according to the school's general curriculum and teaching plan.
                <br />
                - Manage civil servants, public employees and students of the
                Faculty.
                <br />
                - Compile textbooks and related reference materials; Organize
                the workshops, seminars… to improve teaching and learning
                methods; Propose supplementary plans and maintain teaching –
                learning equipment, practice and internship.
                <br />
                3.2. Scientific research
                <br />
                - Scientific research and technology transfer in the fields of
                Law, State Management and Political Theory.
                <br />
                - Organize science and technology activities, proactively
                exploit international cooperation projects; coordinate with
                science and technology organizations, business, linking training
                with scientific research with social life.
                <br />
                - Perform other duties assigned by the President.
                <br />
              </p>
            </div>
            <strong>Contact information</strong>
            <p>
              Responsible for content: Dr. Nguyen Thi Tinh – Dean
              <br />
              Address: Room 402, Building B, Thanh Hoa University of Culture,
              Sports and Tourism, No. 561, Quang Trung Street, Dong Ve Ward,
              Thanh Hoa City.
              <br />
              Phone: +(84) 936 861 115
              <br />
              Email: nguyenthitinh@dvtdt.edu.vn
              <br />
              Website: http://khoalqlnn.tucst.edu.vn
              <br />
            </p>
          </div>
        );
      case 23:
        return (
          <div>
            <div>
              <p>
                1. History of formation <br />
                The Faculty of Foreign Languages was established under Decision
                No. 698/QD-ĐVTDT on May 25th, 2022 by the President of Thanh Hoa
                University of Culture, Sports & Tourism.
                <br />
                2. Mission
                <br />
                Train and foster human resources of foreign languages and social
                skills; Set up a sense of learning and scientific research for
                learners; provide qualified human resources, meeting the demands
                of society and international cooperation and contributing to
                promoting the development of Thanh Hoa University of Culture,
                Sports & Tourism as well as the economic, cultural and social
                development of Thanh Hoa province and the whole country.
                <br />
                3. Vision
                <br />
                Diversify training types and programs; gradually improve
                training quality to meet the school’s requirements and Society
                of human resources with proficient foreign languages.
                <br />
                Promote scientific research to serve foreign language training
                and teaching methods; Build and complete the English language
                university training program that was accredited to meet national
                standards.
                <br />
                Be one of the training faculties with sustainable development,
                contributing to building the brand of Thanh Hoa University of
                Culture, Sports & Tourism.
                <br />
                4. Quality policy
                <br />
                The motto of the faculty: Gradually innovate and improve the
                quality of teaching and scientific research, provide learners
                with the best knowledge and skills to meet social needs,
                international integration and sustainable development.
                <br />
              </p>
            </div>
            <strong>Contact information</strong>
            <p>
              Responsible for content: Faculty of Foreign Languages
              <br />
              Address: Room 203, Building B, Thanh Hoa University of Culture,
              Sports and Tourism, No. 561, Quang Trung Street, Dong Ve Ward,
              Thanh Hoa City.
              <br />
              Phone: 0914.463.007
              <br />
              Email:khoangoaingu@dvtdt.edu.vn
              <br />
              Website: http://khoann.tucst.edu.vn
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
      <div className="w-full h-400">
        <img
          className="w-full h-400 object-cover"
          src="/img/banner3.png"
          alt=""
        />
      </div>
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
                      <div className="underline hover:text-gray-300">{child}</div>
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
                  <div className="px-8 py-4 bg-orange-500 rounded cursor-pointer hover:bg-orange-400" onClick={()=> navigate("/academics/formal-training")}>
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
