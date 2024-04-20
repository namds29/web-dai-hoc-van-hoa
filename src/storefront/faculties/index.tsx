import { FACULTY_UNITS } from "src/utils/constant";
import { useState } from "react";
import Banner from "src/components/banner";
import styles from "./index.module.scss";

const Faculties = () => {
  const [unitId, setUnitId] = useState<number>(1);

  const handleChangeUnit = (id: number) => {
    setUnitId(id);
  };

  const handleChangeContent = (value: number) => {
    switch (value) {
      case 1:
        return (
          <div>
            <p className="indent-8">
              The Faculty of Culture and Information stands as a cornerstone in
              the vibrant history of Thanh Hoa University of Culture, Sports,
              and Tourism. Throughout its journey, the faculty has undergone
              several transformations, expanding its scope and enriching its
              offerings to meet the evolving needs of education and society.
            </p>

            <p className="indent-8">
              Before 2004, the faculty operated under the name Faculty of
              Culture – Theory. Its curriculum encompassed diverse fields such
              as museum studies, book publishing, library sciences, popular
              culture, movie releases, promotional information, and cultural
              management at primary and intermediate levels. Collaborating
              closely with Hanoi University of Culture, it provided
              undergraduate training in Museum Studies, Library Sciences, Book
              Publishing, Culture Management, and Cultural Tourism, actively
              contributing to the cultural development of Thanh Hoa province.
            </p>

            <p className="indent-8">
              In 2004, the faculty rebranded itself as the Faculty of Culture -
              Tourism. Its mission expanded to include training in Culture
              Management, Library Sciences, Vietnamese Studies, and Departmental
              Secretarial studies at the college level. The collaboration with
              Hanoi University of Culture and other educational institutions
              continued, facilitating undergraduate programs in Culture
              Management, Library Sciences, and more.
            </p>

            <p className="indent-8">
              By 2011, the faculty assumed the name Faculty of Culture and
              Information, focusing on Culture Management and Information
              Studies. This period saw the addition of Social Work as a training
              field, further enhancing the faculty's contribution to societal
              development. Subsequent years witnessed the integration of
              Communication Technology and the approval of the Ministry of
              Education and Training to introduce this field of study.
            </p>

            <p className="indent-8">
              In 2018, the Division of Social Work merged into the Faculty of
              Culture and Information, consolidating its resources and
              expertise. The following year, the faculty expanded its offerings
              by introducing Communication Technology and Computer Science
              Teacher Education, catering to the growing demands of the digital
              age. Accredited by the Ministry of Education and Training, these
              programs attracted students not only from Vietnam but also from
              neighboring countries such as Laos.
            </p>

            <p className="indent-8">
              In 2022, the faculty underwent another transformation, renaming
              itself as the Faculty of Culture and Society. Its curriculum
              encompassed Culture Management, Social Work, Information - Library
              studies, Communication Technology, and Computer Science Teacher
              Education. This alteration reflected the faculty's commitment to
              holistic education and its role in shaping well-rounded
              individuals equipped to address societal challenges.
            </p>

            <p className="indent-8">
              In 2023, the faculty reverted to its previous name, emphasizing
              its core focus on culture and information. The curriculum now
              comprised five distinct fields: Culture Management, Social Work,
              Information - Library (with specializations in Library - School
              Equipment, Archives, and Applied Information Technology),
              Communication Technology, and Computer Science Teacher Education.
            </p>

            <p className="indent-8">
              Throughout its journey, the Faculty of Culture and Information has
              remained dedicated to academic excellence and societal impact. Its
              lecturers and students actively engage in scientific research,
              leading and participating in university and provincial-level
              projects and contributing articles to international and domestic
              journals. The faculty's programs have played a crucial role in
              nurturing human resources for Thanh Hoa province and Vietnam at
              large, fostering expertise in Culture Management, Social Work, and
              Information - Library studies.
            </p>

            <p>
              <strong>Contact Information</strong>
            </p>
            <ul>
              <li>
                <strong>Responsible for Content:</strong> Dr. Le Thi Thao - Dean
              </li>
              <li>
                <strong>Address:</strong> Room 401, Building C, Thanh Hoa
                University of Culture, Sports, and Tourism, No. 561, Quang Trung
                Street, Dong Ve Ward, Thanh Hoa City
              </li>
              <li>
                <strong>Phone:</strong> (+84) 0933868919
              </li>
              <li>
                <strong>Email:</strong>{" "}
                <a href="mailto:khoavanhoathangtin@tucst.edu.vn">
                  khoavanhoathangtin@tucst.edu.vn
                </a>
              </li>
              <li>
                <strong>Website:</strong>{" "}
                <a href="http://khoavhtt.tucst.edu.vn">
                  Faculty of Culture and Information
                </a>
              </li>
            </ul>
          </div>
        );
      case 2:
        return (
          <div>
            <p>
              The Faculty of Music has a rich history of development, tracing
              its roots back to the Primary level of Culture and Arts (1967),
              then the High School of Culture and Arts (1978), the College of
              Culture and Arts (2004), and finally becoming a part of Thanh Hoa
              University of Culture, Sports, and Tourism (2011). The faculty
              offers training in majors including Vocal Music, Music Education,
              Intermediate Vocal Talent, and Intermediate Musical Instrument
              Talent.
            </p>

            <h2 className="mt-4">Achievements</h2>
            <ul className="list-disc ml-8 mb-4">
              <li>
                Since its establishment, the Faculty of Music has trained many
                students who have achieved high honors in provincial and
                national music competitions, including "Television Singing
                Festival - Sao Mai Award," "Students Talents of Schools of
                National Culture and Arts," "Vietnamese Voice," "Vietnam Idol,"
                "Vietnamese Band," "Bolero Idol," and more.
              </li>
              <li>
                Notable singers who have emerged from the faculty include Le Anh
                Tho, Le Huy Phuoc, Ho Quang 8, Le Minh Tuyen, Do Huong Giang,
                Mai Ut, Trinh Bao Khuyen, Tran Phuong Linh, Ngo Trung Quang, Do
                My Lam, Ngo Thanh Huyen, Hoang Thuy, Le Thuy Anh, Nguyen Van
                Thang, Trinh Linh Chi, Trinh Dinh Quang, Nguyen Thi Van Anh, and
                many others.
              </li>
              <li>
                The faculty has increased the number of standardized lecturers
                to enhance the quality of training, often collaborating with
                professors, associate professors, doctors, People's Artists,
                Meritorious Artists, artisans, artists, and renowned singers to
                provide guidance and practical performance experience to
                students.
              </li>
              <li>
                The Faculty of Music actively engages in training and
                performance collaborations with domestic and international
                universities and music academies in countries such as Italy,
                Switzerland, Poland, Russia, Korea, and China. Additionally, it
                has participated in numerous exchange programs with foreign
                bands, leaving a lasting impression on audiences.
              </li>
            </ul>

            <h2 className="mt-4">
              <strong>Contact Information</strong>
            </h2>
            <p>
              <strong>Responsible for Content:</strong> MA. Pham Thi Hoang Hien
              - Deputy Dean in charge of the department
              <br />
              <strong>Address:</strong> Room 208-209, Building B, Thanh Hoa
              University of Culture, Sports and Tourism, No. 561, Quang Trung
              Street, Dong Ve Ward, Thanh Hoa City
              <br />
              <strong>Phone:</strong> +(84) 912395364
              <br />
              <strong>Email:</strong>{" "}
              <a href="mailto:khoaamnhac.tucst@gmail.com">
                khoaamnhac.tucst@gmail.com
              </a>
              <br />
              <strong>Website:</strong>{" "}
              <a href="http://khoaan.tucst.edu.vn">Faculty of Music</a>
            </p>
          </div>
        );
      case 3:
        return (
          <div>
            <p className="indent-8">
              The Faculty of Fine Arts has a rich history dating back to the
              Primary level of Culture and Arts (1967), the High School of
              Culture and Arts (1978), Thanh Hoa College of Culture and Arts
              (2004), and finally becoming part of Thanh Hoa University of
              Culture, Sports, and Tourism (2011). With over 50 years of
              experience, the faculty specializes in training in the fields of
              Painting, Graphic Design, and Fashion Design, offering programs
              from professional intermediate to university levels for Thanh Hoa
              province, the North Central region, and the South of the Red
              River.
            </p>

            <p className="indent-8">
              The faculty has actively engaged in international cooperation
              programs in fine arts education, sending students and lecturers to
              Poland and the Philippines for study, as well as inviting foreign
              lecturers to teach topics. Moreover, experts in Graphics, Fashion
              Design, and Painting from prestigious institutions such as Vietnam
              University of Fine Arts and industry have been invited to
              contribute to teaching.
            </p>

            <p className="indent-8">
              100% of the faculty's lecturers hold post-university degrees from
              reputable domestic and foreign universities, ensuring high-quality
              education. The facilities for training are also well-equipped. In
              terms of research and application to social connections, the
              Faculty has received attention from the Province with assigned key
              fine art works and projects.
            </p>

            <p className="indent-8">
              In early May 2022, the Division of Fine Arts Education was merged
              into the Faculty, retaining its organizational structure,
              function, and mission, with a focus on the field of Fine Arts
              Education.
            </p>

            <p className="indent-8">
              Recognized for its wealth of training experience, the Faculty has
              been honored at all levels, receiving Certificates of Merit from
              the Ministry of Education and Training, Certificates of Merit from
              the Chairman of the Provincial People's Committee, among others.
              Many lecturers and students have achieved high awards in both
              domestic and international art competitions, contributing to the
              provision of high-quality human resources in education and fine
              arts in Thanh Hoa province and Vietnam at large.
            </p>
            <h2>
              <strong>Contact Information</strong>
            </h2>
            <p>
              <strong>Responsible for Content:</strong> Dr. Tran Viet Anh – Dean
              <br />
              <strong>Address:</strong> Room 202, Building B, Thanh Hoa
              University of Culture, Sports and Tourism, No. 561, Quang Trung
              Street, Dong Ve Ward, Thanh Hoa City.
              <br />
              <strong>Phone:</strong> 090 424 0125
              <br />
              <strong>Email:</strong>{" "}
              <a href="mailto:tranvietanh@dvtdt.edu.vn">
                tranvietanh@dvtdt.edu.vn
              </a>
              <br />
              <strong>Fanpage:</strong> <a href="#">MỸ THUẬT - TUCST</a>
              <br />
              <strong>Website:</strong>{" "}
              <a href="http://khoamt.tucst.edu.vn">Faculty of Fine Arts</a>
            </p>
          </div>
        );
      case 4:
        return (
          <div>
            <strong>
              <h2>Function</h2>
            </strong>
            <p>
              The Faculty of Tourism is a specialized department of Thanh Hoa
              University of Culture, Sports, and Tourism (TUCST), with the
              function of training and scientific research in the fields of
              Tourism, Tourism Services & Tour Management, and Hotel Management
              to meet the needs and development trends of society.
            </p>

            <strong>
              <h2>Mission</h2>
            </strong>
            <strong>
              <h3 className="indent-4">1.Training and Fostering</h3>
            </strong>
            <ul className="list-disc ml-8">
              <li>University level training in:</li>
              <ul className="list-disc ml-8">
                <li>Tourism</li>
                <li>Tourism Services & Tour Management</li>
                <li>Hotel Management</li>
              </ul>
              <li>
                Coordinate with the Center for Tourism Practice & Event
                Organization, TUCST, to train and issue certificates in the
                following professions:
              </li>
              <ul className="list-disc ml-8">
                <li>Domestic tour guide profession</li>
                <li>International travel guide profession</li>
                <li>Domestic tourism management operation</li>
                <li>International tourism management operation</li>
                <li>
                  Training courses on state management, eco-tourism, community
                  tourism, tourism presentation skills, etc.
                </li>
              </ul>
              <li>
                Set up training programs and teaching plans for the Faculty's
                training majors.
              </li>
              <li>
                Build development plans and update training programs towards
                standardization to meet social needs and international
                integration.
              </li>
              <li>
                Foster and improve the professional qualifications and skills of
                the teaching staff to meet the school's requirements, the needs
                of the industry, and society.
              </li>
            </ul>

            <strong>
              <h3 className="indent-4">2.Scientific Research</h3>
            </strong>
            <ul className="list-disc ml-8">
              <li>
                Scientific research and technology transfer in the fields of
                Tourism, Tourism Culture, Hotel Management, Tourism Services &
                Tour Management.
              </li>
              <li>
                Compile textbooks and lectures towards standardization, quality
                assurance, meeting social needs, and international integration.
              </li>
            </ul>

            <strong>
              <h2>Contact Information</h2>
            </strong>
            <p>
              <strong>Responsible for Content:</strong> Dr. Nguyen Truc Quynh –
              Dean
              <br />
              <strong>Address:</strong> Department of the Faculty of Tourism,
              Room 107, Building B, Thanh Hoa University of Culture, Sports, and
              Tourism, No. 561, Quang Trung Street, Dong Ve Ward, Thanh Hoa
              City.
              <br />
              <strong>Phone:</strong> 0918.458.589
              <br />
              <strong>Hotline:</strong> 0983.092.009
              <br />
              <strong>Email:</strong>{" "}
              <a href="mailto:khoadulich@dvtdt.edu.vn">
                khoadulich@dvtdt.edu.vn
              </a>
              <br />
              <strong>Website:</strong>{" "}
              <a href="http://www.dvtdt.edu.vn">Faculty of Tourism</a>
              <br />
              <strong>Fanpage:</strong>{" "}
              <a href="https://www.facebook.com/khoadulich.tusct">
                Faculty of Tourism
              </a>
            </p>
          </div>
        );
      case 5:
        return (
          <div>
            <h2>
              <strong>Function</strong>
            </h2>
            <p>
              The Faculty of Physical Education and Sports has the function of
              managing training, fostering, and scientific research in the
              fields of Physical Education and Sports under the direction of the
              Governing Board.
            </p>

            <h2>
              <strong>Mission</strong>
            </h2>
            <strong>
              <h3 className="indent-4">1. Training and Fostering</h3>
            </strong>
            <ul className="list-disc ml-8">
              <li>
                Train and foster students in the fields of Sports Management and
                Physical Education at the university level.
              </li>
              <li>
                Implement teaching programs and plans within the scope of the
                faculty.
              </li>
              <li>
                Foster and improve the professional qualifications and skills of
                the teaching staff to meet the school's requirements, and the
                needs of the industry and society.
              </li>
            </ul>

            <strong>
              <h3 className="indent-4">2. Scientific Research</h3>
            </strong>
            <ul className="list-disc ml-8">
              <li>
                Basic scientific research in the field of Sports and Physical
                Education.
              </li>
              <li>Compile textbooks and specialized reference materials.</li>
              <li>Guide students' scientific research work.</li>
            </ul>

            <h2>
              <strong>Contact Information</strong>
            </h2>
            <p>
              <strong>Responsible for Content:</strong> Faculty of Physical
              Education and Sports
              <br />
              <strong>Address:</strong> Department of the Faculty of Physical
              Education and Sports - Multi-purpose gymnasium, Thanh Hoa
              University of Culture, Sports and Tourism, No. 561, Quang Trung
              Street, Dong Ve Ward, Thanh Hoa City.
              <br />
              <strong>Phone:</strong> 0398280579 or 0978676759
              <br />
              <strong>Email:</strong>{" "}
              <a href="mailto:trinhngoctrung.dvtdt@gmail.com">
                trinhngoctrung.dvtdt@gmail.com
              </a>
              <br />
              <strong>Website:</strong>{" "}
              <a href="http://khoatdtt.tucst.edu.vn">
                Faculty of Physical Education and Sports
              </a>
            </p>
          </div>
        );
      case 6:
        return (
          <div>
            <h2>
              <strong>Function</strong>
            </h2>
            <p>
              The Faculty of Preschool - Primary Education has the function of
              training and scientific research in the fields of Preschool
              Education and Primary Education; advising the president on
              policies, strategies related to preschool and primary education.
            </p>

            <h2>
              <strong>Mission</strong>
            </h2>
            <strong>
              <h3 className="indent-4">1. Training and Fostering</h3>
            </strong>

            <ul className="list-disc ml-8">
              <li>
                Set up training programs and teaching plans for the Bachelor of
                Science in Preschool Education (formal university system and
                in-service system); Bachelor of Science in Primary Education.
              </li>
              <li>
                Build development plan and update training programs towards
                standardization, meeting social needs and international
                integration.
              </li>
              <li>
                Foster and improve professional qualifications and new issues in
                education for teachers and leaders of preschool education and
                primary education.
              </li>
            </ul>

            <strong>
              <h3 className="indent-4">2. Scientific Research</h3>
            </strong>
            <ul className="list-disc ml-8">
              <li>
                Research on basic science and preschool education science,
                primary education.
              </li>
              <li>
                Provide training programs; compile textbooks and documents at
                different levels.
              </li>
              <li>Guide students' scientific research work.</li>
              <li>
                Coordinate with scientific research organizations inside and
                outside the school; link training with scientific research and
                educational practices at the Preschool and Primary levels of
                localities; support and improve educational qualifications and
                skills for preschool teachers towards standardization according
                to local needs.
              </li>
            </ul>

            <h2>
              <strong>Contact Information</strong>
            </h2>
            <p>
              <strong>Responsible for Content:</strong> Faculty of Preschool -
              Primary Education
              <br />
              <strong>Address:</strong> Room 201, Building C, Thanh Hoa
              University of Culture, Sports and Tourism, No. 561, Quang Trung
              Street, Dong Ve Ward, Thanh Hoa City.
              <br />
              <strong>Phone:</strong> 0914.463.007
              <br />
              <strong>Email:</strong>{" "}
              <a href="mailto:khoangoaingu@dvtdt.edu.vn">
                khoangoaingu@dvtdt.edu.vn
              </a>
              <br />
              <strong>Website:</strong>{" "}
              <a href="http://khoann.tucst.edu.vn">
                Faculty of Preschool - Primary Education
              </a>
            </p>
          </div>
        );
      case 7:
        return (
          <div>
            <h2>
              <strong>History of Formation and Development</strong>
            </h2>
            <p>
              The Faculty of Law and State Management (formerly known as the
              Faculty of State Management and Social Work) was established in
              2015 according to Decision No. 634/QD-ĐVTDT on September 25th,
              2015 by the President of Thanh Hoa University of Culture, Sports
              and Tourism with 3 training majors: Law, State Management, and
              Social Work at formal university system, inter-university system,
              and in-service system. The faculty has been training more than
              1,000 students including international students (currently 51
              Laotian students).
            </p>
            <p>
              According to Decision No. 511/QD-ĐVTDT, the Division of Social
              Work was merged into the Faculty of Culture and Information on
              June 30th, 2018. The Faculty was renamed Faculty of Law and State
              Management by the government on June 15th, 2018. In accordance
              with the rearrangement of the general organizational structure of
              the University, the Division of Political Theory was officially
              merged into the Faculty on May 22nd, 2022 according to Decision
              No. 696/QD-DVTDT dated May 25th, 2022. The Faculty has managed 03
              divisions: Law, State Management, and Political Theory.
            </p>
            <p>
              The Faculty has been training two fields: Law and State Management
              at undergraduate and master's levels. Training forms are
              diversified to meet the needs of learners, including formal
              university system, inter-university system, and in-service system.
              These are training fields with great attraction of job
              opportunities, training human resources for socio-economic
              activities of the North Central - South Red River region in
              particular and the whole country in general.
            </p>

            <h2>
              <strong>Function</strong>
            </h2>
            <p>
              The Faculty of Law and State Management has the function of
              training, scientific research, and technology transfer in the
              fields of Law and State Management. In addition, the Division of
              Political Theory has been responsible for teaching political
              theoretical knowledge for students in the school.
            </p>

            <h2>
              <strong>Mission</strong>
            </h2>
            <strong>
              <h3 className="indent-4">1. Training and Fostering</h3>
            </strong>
            <ul className="list-disc ml-8">
              <li>
                Train university level at formal university system,
                inter-university system, and in-service system including the
                following fields:
              </li>
              <ul className="list-disc ml-8">
                <li>Law.</li>
                <li>State management.</li>
              </ul>
              <li>
                Train general education knowledge on political theory for
                students in the school.
              </li>
              <li>
                Foster and improve professional qualifications and skills for
                lectures.
              </li>
              <li>
                Set up a plan to develop the teaching staff, training programs,
                and facilities towards standardization for quality assurance and
                meet social needs as well as international integration.
              </li>
              <li>
                Construct training programs, teaching and learning plans and
                organize the training process for one or several fields;
                Organize the training process and other educational activities
                according to the school's general curriculum and teaching plan.
              </li>
              <li>
                Manage civil servants, public employees, and students of the
                Faculty.
              </li>
              <li>
                Compile textbooks and related reference materials; Organize the
                workshops, seminars… to improve teaching and learning methods;
                Propose supplementary plans and maintain teaching – learning
                equipment, practice, and internship.
              </li>
            </ul>

            <strong>
              <h3 className="indent-4">2. Scientific Research</h3>
            </strong>
            <ul className="list-disc ml-8">
              <li>
                Scientific research and technology transfer in the fields of
                Law, State Management, and Political Theory.
              </li>
              <li>
                Organize science and technology activities, proactively exploit
                international cooperation projects; coordinate with science and
                technology organizations, business, linking training with
                scientific research with social life.
              </li>
              <li>Perform other duties assigned by the President.</li>
            </ul>

            <h2>
              <strong>Contact Information</strong>
            </h2>
            <p>
              <strong>Responsible for Content:</strong> Dr. Nguyen Thi Tinh –
              Dean
              <br />
              <strong>Address:</strong> Room 402, Building B, Thanh Hoa
              University of Culture, Sports and Tourism, No. 561, Quang Trung
              Street, Dong Ve Ward, Thanh Hoa City.
              <br />
              <strong>Phone:</strong> +(84) 936 861 115
              <br />
              <strong>Email:</strong>{" "}
              <a href="mailto:nguyenthitinh@dvtdt.edu.vn">
                nguyenthitinh@dvtdt.edu.vn
              </a>
              <br />
              <strong>Website:</strong>{" "}
              <a href="http://khoalqlnn.tucst.edu.vn/">
                Faculty of Law and State Management
              </a>
            </p>
          </div>
        );
      case 8:
        return (
          <div>
            <h2>
              <strong>History of Formation</strong>
            </h2>
            <p className="indent-4">
              The Faculty of Foreign Languages was established under Decision
              No. 698/QD-ĐVTDT on May 25th, 2022 by the President of Thanh Hoa
              University of Culture, Sports & Tourism.
            </p>

            <h2>
              <strong>Mission</strong>
            </h2>
            <ul className="list-disc ml-8">
              <li>
                Train and foster human resources of foreign languages and social
                skills.
              </li>
              <li>
                Set up a sense of learning and scientific research for learners.
              </li>
              <li>
                Provide qualified human resources, meeting the demands of
                society and international cooperation and contributing to
                promoting the development of Thanh Hoa University of Culture,
                Sports & Tourism as well as the economic, cultural and social
                development of Thanh Hoa province and the whole country.
              </li>
            </ul>

            <h2>
              <strong>Vision</strong>
            </h2>
            <ul className="list-disc ml-8">
              <li>
                Diversify training types and programs; gradually improve
                training quality to meet the school’s requirements and Society
                of human resources with proficient foreign languages.
              </li>
              <li>
                Promote scientific research to serve foreign language training
                and teaching methods; Build and complete the English language
                university training program that was accredited to meet national
                standards.
              </li>
              <li>
                Be one of the training faculties with sustainable development,
                contributing to building the brand of Thanh Hoa University of
                Culture, Sports & Tourism.
              </li>
            </ul>

            <h2>
              <strong>Quality Policy</strong>
            </h2>
            <p className="indent-4">
              The motto of the faculty: Gradually innovate and improve the
              quality of teaching and scientific research, provide learners with
              the best knowledge and skills to meet social needs, international
              integration and sustainable development.
            </p>

            <h2>
              <strong>Contact Information</strong>
            </h2>
            <p>
              <strong>Responsible for Content:</strong> Faculty of Foreign
              Languages
              <br />
              <strong>Address:</strong> Room 203, Building B, Thanh Hoa
              University of Culture, Sports and Tourism, No. 561, Quang Trung
              Street, Dong Ve Ward, Thanh Hoa City.
              <br />
              <strong>Phone:</strong> 0914.463.007
              <br />
              <strong>Email:</strong>{" "}
              <a href="mailto:khoangoaingu@dvtdt.edu.vn">
                khoangoaingu@dvtdt.edu.vn
              </a>
              <br />
              <strong>Website:</strong>{" "}
              <a href="http://khoann.tucst.edu.vn">
                Faculty of Foreign Languages
              </a>
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
        <p className="text-3xl border-b-4 text-center">Faculties</p>
        <section id="functional_unit">
          <p className="text-2xl mt-8">Faculty Units</p>
          <div className="flex text-black border-black mt-4">
            <div className="title w-1/3 rounded-l-xl bg-orange-400">
              {FACULTY_UNITS.map((item) => (
                <div
                  onClick={() => handleChangeUnit(item.id)}
                  className="border-b font-normal text-xl flex justify-between items-center cursor-pointer text-white hover:text-gray-300 px-4 py-2"
                  key={item.id}
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
      </section>
    </section>
  );
};
export default Faculties;
