import { ACADEMICS_FORMAL_TRAINING } from "src/utils/constant";
// import styles from "./index.module.scss";
import { useState } from "react";

const contentStyle: React.CSSProperties = {
  margin: 0,
  width: "100%",
  height: "100%",
  lineHeight: "160px",
  textAlign: "center",
  background: "white",
  objectFit: "contain",
};
const FormalTraining = () => {
  const [unitId, setUnitId] = useState<number>(1);

  const handleChangeUnit = (id: number) => {
    setUnitId(id);
  };

  const handleChangeContent = (value: number) => {
    switch (value) {
      case 1:
        return (
          <div>
            <section>
              <h1 className="font-bold">I. GENERAL INFORMATION</h1>
              <ol>
                <li className="font-bold">
                  1.Training Course: Early Childhood Education
                </li>
                <li className="font-bold">2.Code: 7140201</li>
                <li>
                  <span className="font-bold">
                    3.Certificate of accreditation:
                  </span>{" "}
                  Accredited
                </li>
                <li>
                  <span className="font-bold">4.Training Degree:</span> Bachelor
                </li>
                <li>
                  <span className="font-bold">5.Form of training:</span> Full –
                  time
                </li>
                <li>
                  <span className="font-bold">6.Admission Requirements:</span>
                  <ul>
                    <li>
                      - Admission subjects: Candidates who have graduated from
                      high school (Full – time or Continuing education) or have
                      graduated from intermediate school or college. (Candidates
                      who have graduated from intermediate school without a high
                      school diploma must complete cultural subjects at high
                      school in accordance with the regulations).
                    </li>
                    <li>- Scale of admission: nation-wide</li>
                    <li>
                      - Form of admission: Examination and Admission according
                      to Regulations of the Ministry of Education and Training;
                      Admission Project of Thanh Hoa University of Culture,
                      Sports and Tourism, as follows:
                      <ul>
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
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <span className="font-bold">7.Graduation Requirements:</span>
                  <ul>
                    <li>
                      Students are considered and recognized for graduation when
                      they meet the following conditions:
                      <ul>
                        <li>
                          - Accumulate enough modules, credits and complete
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
                          regulations (English Certificate level 3 of the
                          6-level Framework for Vietnam or equivalent according
                          to Circular 01/2014; Information Technology
                          Certificate according to Circular 03/2014).
                        </li>
                        <li>
                          - Complete Defense Education Certificate and Physical
                          Education module.
                        </li>
                        <li>
                          - Having sent an application form to Department of
                          Training Management for graduation check (for students
                          who graduate early or late compared to the expected
                          time of the course, or who have no desire to graduate
                          because they need to improve their academic results).
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <span className="font-bold">8.Degree:</span> Bachelor of Early
                  Childhood Education
                </li>
                <li>
                  <span className="font-bold">9.Degree granting unit:</span>{" "}
                  Thanh Hoa University of Culture, Sports and Tourism
                </li>
              </ol>
            </section>

            <section>
              <h1 className="font-bold">II. TRAINING OBJECTIVES</h1>
              <ol>
                <li>
                  <span className="font-bold"></span>General Objective:
                  <p>
                    Train bachelors of Early Childhood Education with background
                    knowledge in social sciences, humanities and educational
                    sciences; have abilities to form ideas, design, implement,
                    evaluate and develop preschool education programs; have the
                    capacity for autonomy and responsibility in professional
                    activities, meet the requirements of educational development
                    in the context of national modernization and international
                    integration.
                  </p>
                </li>
                <li>
                  {" "}
                  <span className="font-bold"></span>Specific Objectives:
                  <ol type="a">
                    <li>
                      PO1: Apply basic knowledge of humanities, social sciences,
                      educational sciences and major arguments to solve problems
                      in the field of preschool education.
                    </li>
                    <li>
                      PO2: Demonstrate skills, personal qualities and career
                      development orientation in preschool education activities.
                    </li>
                    <li>
                      PO3: Form the capacity to build ideas, design, implement,
                      evaluate and develop preschool education programs that
                      meet social needs.
                    </li>
                    <li>
                      PO4: Form creative and scientific research capacity; level
                      of autonomy and responsibility in professional activities.
                    </li>
                  </ol>
                </li>
              </ol>
            </section>

            <section>
              <h1 className="font-bold">III. PROGRAM LEARNING OUTCOMES</h1>
              <h2 className="font-bold">1.Knowledge</h2>
              <ul>
                <li>
                  - PLO1.1: Apply basic knowledge of humanities, social
                  sciences, politics and law in solving problems of life,
                  learning and educational practice in schools and preschool
                  institutions.
                </li>
                <li>
                  - PLO1.2: Apply the knowledge system about psychological and
                  physiological characteristics; about health care; about the
                  science of preschool education to analyze and organize the
                  care and education process for preschool children.
                </li>
                <li>
                  - PLO1.3: Apply major knowledge in selecting, developing,
                  applying, and integrating in determining goals, content,
                  methods, organizational forms and evaluation of the care and
                  education activities for preschool children.
                </li>
              </ul>
              <h2 className="font-bold">2.Skills</h2>
              <ul>
                <li>
                  - PLO2.1: Demonstrate ethics, professional responsibility and
                  have exemplary communication skills and pedagogical behavior
                  in professional tasks.
                </li>
                <li>
                  - PLO2.2. Have organizing skills to effectively carry out care
                  and education tasks for preschool children (physical
                  development, language; elementary knowledge of mathematics;
                  visual activities, musical and literary activities,
                  entertaining, exploring the surrounding environment...) with
                  the perspective of integrating topics and applying methods and
                  forms of educational organization, using teaching aids... to
                  develop comprehensively, create excitement, children's
                  positivity in a scientific way, solve the problems in the care
                  and education process for preschool children.
                </li>
                <li>
                  - PLO2.3: Apply well the techniques of information technology,
                  communications and foreign languages according to the needs of
                  preschool teaching to design professional plans, improve
                  classroom forms and lesson plans according to the need to
                  modernize education in preschools.
                </li>
              </ul>
              <h2 className="font-bold">
                3.Learner's autonomy and responsibility
              </h2>
              <ul>
                <li>
                  - PLO3.1: Ability to work independently or in groups according
                  to the requirements of child care and education tasks and
                  preschool education innovation, take responsibility with
                  yourself, your group and the products you create.
                </li>
                <li>
                  - PLO3.2: Ability to organize, guide, supervise and interact
                  in group activities of professional groups and children.
                </li>
                <li>
                  - PLO3.3: Ability to self-orient, adapt to environments and
                  working situations in preschool institutions, evaluate and
                  improve the effectiveness of educational activities in
                  preschools in scope of your professional activities.
                </li>
              </ul>
              <h2 className="font-bold">4.Capacity</h2>
              <ul>
                <li>
                  - PLO4.1: Ability to criticize knowledge and educational
                  methods; form alternative solutions in innovative conditions
                  to improve, enhance quality, and develop educational programs
                  in preschools.
                </li>
                <li>
                  - PLO4.2: Ability to research, observe, learn and evaluate
                  children's development level; explore and detect psychology,
                  pathology, physical and mental needs of children and their
                  parents to regulate, adapt and be creative in new educational
                  circumstances.
                </li>
                <li>
                  - PLO4.3: Ability to evaluate the work effectiveness of
                  oneself and colleagues and adjust educational plans to suit
                  the child's developmental characteristics; communicate
                  problems and solutions to colleagues; disseminate knowledge
                  and skills in performing specific or complex educational
                  tasks.
                </li>
              </ul>
            </section>

            <section>
              <h1 className="font-bold">IV. WORKING POSITION</h1>
              <ul>
                <li>
                  - Teachers and administrators in schools and preschool
                  institutions;
                </li>
                <li>- Teachers at preschool teacher training institutions;</li>
                <li>
                  - Consultants, researchers on preschool education expertise;
                </li>
                <li>
                  - Experts at the Research Institute, Center for Research on
                  Early Childhood Education; at Divisions and Departments of
                  Education and Training.
                </li>
              </ul>
            </section>

            <section>
              <h1 className="font-bold">
                V. POSSIBILITY FOR FURTHER EDUCATION
              </h1>
              <ul>
                <li>
                  - Have abilities to self-study, self-research, ensure
                  professional knowledge to apply for major postgraduate
                  programs (master, doctorate) or in similar fields, such as:
                  Education, Educational theory and history, Educational
                  management, Special education, Psychology.
                </li>
                <li>- Study another pedagogical field;</li>
                <li>
                  - Can participate in scientific research projects in the field
                  of education in general and preschool education in particular.
                </li>
              </ul>
            </section>
          </div>
        );
      case 2:
        return (
          <div>
            <section>
              <h1 className="font-bold">I. GENERAL INFORMATION</h1>
              <ol>
                <li className="font-bold">
                  1.Training Course: Music Education
                </li>
                <li className="font-bold">2.Code: 7140221</li>
                <li>
                  <span className="font-bold">
                    3.Certificate of accreditation:
                  </span>{" "}
                  not accredited
                </li>
                <li>
                  <span className="font-bold">4.Training Degree:</span> Bachelor
                </li>
                <li>
                  <span className="font-bold">5.Form of training:</span> Full –
                  time
                </li>
                <li>
                  <span className="font-bold">6.Admission Requirements:</span>
                  <ul>
                    <li>
                      - Admission subjects: Candidates who have graduated from
                      high school (Full – time or Continuing education) or have
                      graduated from intermediate school or college. (Candidates
                      who have graduated from intermediate school without a high
                      school diploma must complete cultural subjects at high
                      school in accordance with the regulations).
                    </li>
                    <li>- Scale of admission: nation-wide</li>
                    <li>
                      - Form of admission: Examination and Admission according
                      to Regulations of the Ministry of Education and Training;
                      Admission Project of Thanh Hoa University of Culture,
                      Sports and Tourism, as follows:
                      <ul>
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
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <span className="font-bold">7.Graduation Requirements:</span>
                  <ul>
                    <li>
                      - Students are considered and recognized for graduation
                      when they meet the following conditions:
                      <ul>
                        <li>
                          Accumulate enough modules, credits and complete other
                          mandatory contents as required by the training
                          program, meeting the output standards of the training
                          program;
                        </li>
                        <li>
                          The cumulative average score of the entire course is
                          average or higher;
                        </li>
                        <li>
                          At the time of graduation, students are not being
                          prosecuted for criminal liability or are not being
                          disciplined at the level of academic suspension;
                        </li>
                        <li>
                          Meet the output standards in Foreign Languages and
                          Information Technology according to the school's
                          regulations (English Certificate level 3 of the
                          6-level Framework for Vietnam or equivalent according
                          to Circular 01/2014; Information Technology
                          Certificate according to Circular 03/2014).
                        </li>
                        <li>
                          Complete Defense Education Certificate and Physical
                          Education module.
                        </li>
                        <li>
                          Having sent an application form to Department of
                          Training Management for graduation check (for students
                          who graduate early or late compared to the expected
                          time of the course, or who have no desire to graduate
                          because they need to improve their academic results).
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <span className="font-bold">8.Degree:</span> Bachelor of Music
                  Education
                </li>
                <li>
                  <span className="font-bold">9.Degree granting unit:</span>{" "}
                  Thanh Hoa University of Culture, Sports and Tourism
                </li>
              </ol>
            </section>

            <section>
              <h1 className="font-bold">II. TRAINING OBJECTIVES</h1>
              <ol>
                <li>
                  General Objective:
                  <p>
                    Train bachelors of Music Education with background knowledge
                    in social sciences, humanities and educational sciences;
                    have abilities to form ideas, design, implement, evaluate
                    and develop music education programs; have the capacity for
                    autonomy and responsibility in professional activities, meet
                    the requirements of educational development in the context
                    of national modernization and international integration.
                  </p>
                </li>
                <li>
                  Specific Objectives:
                  <ol type="a">
                    <li>
                      PO1: Apply basic knowledge of humanities, social sciences,
                      educational sciences and major arguments to solve problems
                      in the field of music education.
                    </li>
                    <li>
                      PO2: Demonstrate skills, personal qualities and career
                      development orientation in music education activities.
                    </li>
                    <li>
                      PO3: Form the capacity to build ideas, design, implement,
                      evaluate and develop music education programs that meet
                      social needs.
                    </li>
                    <li>
                      PO4: Form creative and scientific research capacity; level
                      of autonomy and responsibility in professional activities.
                    </li>
                  </ol>
                </li>
              </ol>
            </section>

            <section>
              <h1 className="font-bold">III. PROGRAM LEARNING OUTCOMES</h1>
              <h2 className="font-bold">Knowledge</h2>
              <ul>
                <li>
                  - PLO1.1: Apply basic knowledge of humanities, social
                  sciences, politics and law in solving problems of life,
                  learning and music education practice.
                </li>
                <li>
                  - PLO1.2: Apply the knowledge system about educational
                  sciences to analyze and organize the teaching process for
                  performing music education’s objectives.
                </li>
                <li>
                  - PLO1.3: Apply major knowledge in selecting, developing,
                  applying, and integrating in determining goals, content,
                  methods, organizational forms and evaluation of the music
                  education activities.
                </li>
              </ul>
              <h2 className="font-bold">Skills</h2>
              <ul>
                <li>
                  - PLO2.1: Demonstrate ethics, professional responsibility and
                  have exemplary communication skills and pedagogical behavior
                  in professional tasks.
                </li>
                <li>
                  - PLO2.2: Have organizing skills to effectively carry out
                  music education tasks according to the core contents at
                  primary, secondary, and high school level; using musical
                  instrument skills, vocal skills, extracurricular activities
                  skills and social work skills...
                </li>
                <li>
                  - PLO2.3: Apply well the techniques of information technology,
                  communications and foreign languages according to the needs of
                  music teaching to design professional plans and improve lesson
                  plans in the classroom according to the needs of modernizing
                  education.
                </li>
              </ul>
              <h2 className="font-bold">
                Learner's autonomy and responsibility
              </h2>
              <ul>
                <li>
                  - PLO3.1: Ability to work independently or in groups according
                  to the requirements of education tasks and music education
                  innovation, take responsibility with yourself, your group and
                  the products you create.
                </li>
                <li>
                  - PLO3.2: Ability to organize, guide, supervise and interact
                  in group activities of professional groups and children.
                </li>
                <li>
                  - PLO3.3: Ability to plan, coordinate, and manage physical and
                  human resources, to evaluate and improve the effectiveness of
                  music education activities within the scope of one's
                  professional activities. Take responsibility for the quality
                  and efficiency of work according to the established plan.
                </li>
              </ul>
              <h2 className="font-bold">Capacity</h2>
              <ul>
                <li>
                  - PLO4.1: Ability to criticize knowledge and old educational
                  methods; form alternative solutions in innovative conditions
                  to improve, enhance quality, and develop music education
                  programs.
                </li>
                <li>
                  - PLO4.2: Ability to research, observe, learn and evaluate
                  children's development level to regulate, adapt and be
                  creative in new educational circumstances.
                </li>
                <li>
                  - PLO4.3: Ability to evaluate the work effectiveness of
                  oneself and colleagues and adjust educational plans to suit
                  the child's developmental characteristics; communicate
                  problems and solutions to colleagues; disseminate knowledge
                  and skills in performing specific or complex educational
                  tasks.
                </li>
              </ul>
            </section>

            <section>
              <h1 className="font-bold">IV. WORKING POSITION</h1>
              <ul>
                <li>
                  - Music teachers in preschools, elementary, secondary, high
                  schools, intermediate schools, professional colleges or
                  cultural houses;
                </li>
                <li>
                  - Team leaders of the Young Pioneers Team in primary and
                  secondary schools;
                </li>
                <li>
                  - Movement officers in cultural, political, social agencies...
                </li>
                <li>
                  - Cultural and artistic specialists in education and training
                  departments, in cultural and information, sports and tourism
                  centers...
                </li>
                <li>
                  - Researchers working at scientific research agencies in the
                  field of music; Music editors of Radio and Television
                  stations...
                </li>
              </ul>
            </section>

            <section>
              <h1 className="font-bold">
                V. POSSIBILITY FOR FURTHER EDUCATION
              </h1>
              <ul>
                <li>
                  - Self-study, self-research according to specialized training.
                </li>
                <li>
                  - Self-study to improve your qualifications and attend
                  professional training programs on music pedagogy.
                </li>
                <li>
                  - Continue professional study and research at master's and
                  doctoral levels.
                </li>
              </ul>
            </section>
          </div>
        );
      case 3:
        return (
          <div>
            <section>
              <h1 className="font-bold">I. GENERAL INFORMATION</h1>
              <ol>
                <li className="font-bold">1. Training Course: Art Education</li>
                <li className="font-bold">2. Code: 7140221</li>
                <li>
                  <span className="font-bold">
                    3. Certificate of accreditation:
                  </span>{" "}
                  Accredited
                </li>
                <li>
                  <span className="font-bold">4. Training Degree:</span>{" "}
                  Bachelor
                </li>
                <li>
                  <span className="font-bold">5. Form of training:</span> Full –
                  time
                </li>
                <li>
                  <span className="font-bold">6. Admission requirements:</span>
                  <ul>
                    <li>
                      - Admission subjects: Candidates who have graduated from
                      high school (Full – time or Continuing education) or have
                      graduated from intermediate school or college. (Candidates
                      who have graduated from intermediate school without a high
                      school diploma must complete cultural subjects at high
                      school in accordance with the regulations).
                    </li>
                    <li>- Scale of admission: nation-wide</li>
                    <li>
                      - Form of admission: Examination and Admission according
                      to Regulations of the Ministry of Education and Training;
                      Admission Project of Thanh Hoa University of Culture,
                      Sports and Tourism, as follows:
                      <ul>
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
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <span className="font-bold">7. Graduation Requirements:</span>
                  <ul>
                    <li>
                      - Students are considered and recognized for graduation
                      when they meet the following conditions:
                      <ul>
                        <li>
                          Accumulate enough modules, credits and complete other
                          mandatory contents as required by the training
                          program, meeting the output standards of the training
                          program;
                        </li>
                        <li>
                          The cumulative average score of the entire course is
                          average or higher;
                        </li>
                        <li>
                          At the time of graduation, students are not being
                          prosecuted for criminal liability or are not being
                          disciplined at the level of academic suspension;
                        </li>
                        <li>
                          Meet the output standards in Foreign Languages and
                          Information Technology according to the school's
                          regulations (English Certificate level 3 of the
                          6-level Framework for Vietnam or equivalent according
                          to Circular 01/2014; Information Technology
                          Certificate according to Circular 03/2014).
                        </li>
                        <li>
                          Complete Defense Education Certificate and Physical
                          Education module.
                        </li>
                        <li>
                          Having sent an application form to Department of
                          Training Management for graduation check (for students
                          who graduate early or late compared to the expected
                          time of the course, or who have no desire to graduate
                          because they need to improve their academic results).
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <span className="font-bold">8. Degree:</span> Bachelor of Art
                  Education
                </li>
                <li>
                  <span className="font-bold">9. Degree granting unit:</span>{" "}
                  Thanh Hoa University of Culture, Sports and Tourism
                </li>
              </ol>
            </section>

            <section>
              <h1 className="font-bold">II. TRAINING OBJECTIVES</h1>
              <ol>
                <li>
                  General Objective:
                  <p>
                    Train bachelors of Art Education with background knowledge
                    in social sciences, humanities and educational sciences;
                    have abilities to form ideas, design, implement, evaluate
                    and develop art education programs; have the capacity for
                    autonomy and responsibility in professional activities, meet
                    the requirements of educational development in the context
                    of national modernization and international integration.
                  </p>
                </li>
                <li>
                  Specific Objectives:
                  <ol type="a">
                    <li>
                      PO1: Apply basic knowledge of humanities, social sciences,
                      educational sciences and major arguments to solve problems
                      in the field of art education.
                    </li>
                    <li>
                      PO2: Demonstrate skills, personal qualities and career
                      development orientation in art education activities.
                    </li>
                    <li>
                      PO3: Form the capacity to build ideas, design, implement,
                      evaluate and develop art education programs that meet
                      social needs.
                    </li>
                    <li>
                      PO4: Form creative and scientific research capacity; level
                      of autonomy and responsibility in professional activities.
                    </li>
                  </ol>
                </li>
              </ol>
            </section>

            <section>
              <h1 className="font-bold">III. PROGRAM LEARNING OUTCOMES</h1>
              <h2 className="font-bold">Knowledge</h2>
              <ul>
                <li>
                  - PLO1.1: Apply basic knowledge of humanities, social
                  sciences, politics and law in solving problems of life,
                  learning and art education practice.
                </li>
                <li>
                  - PLO1.2: Apply the knowledge system, master systematic
                  scientific knowledge at the Art education level, including:
                  knowledge of social sciences - humanities, foreign languages,
                  psychology, teaching methods of Arts.
                </li>
                <li>
                  - PLO1.3: Apply major knowledge in selecting, developing,
                  applying, and integrating in determining goals, content,
                  methods, organizational forms and evaluation of the art
                  education activities to students.
                </li>
                <li>
                  - PLO1.4: Form the capacity for autonomy and responsibility in
                  professional activities.
                </li>
              </ul>
              <h2 className="font-bold">Skills</h2>
              <ul>
                <li>
                  - PLO2.1: Demonstrate ethics, professional responsibility and
                  have exemplary communication skills and pedagogical behavior
                  in professional tasks.
                </li>
                <li>
                  - PLO2.2: Have skills to teach and organize art education at
                  primary, secondary, and high school level; extracurricular
                  activities skills and social work skills...
                </li>
                <li>
                  - PLO2.3: Apply well the techniques of information technology,
                  communications and foreign languages according to the needs of
                  art teaching to design professional plans and improve lesson
                  plans in the classNameroom according to the needs of
                  modernizing education.
                </li>
              </ul>
              <h2>Learner's autonomy and responsibility</h2>
              <ul>
                <li>
                  - PLO3.1: Ability to work independently or in groups according
                  to the requirements of education tasks and art education
                  innovation, take responsibility with yourself, your group and
                  the products you create.
                </li>
                <li>
                  - PLO3.2: Ability to organize, guide, supervise and interact
                  in group activities of professional groups and children.
                </li>
                <li>
                  - PLO3.3: Ability to plan, coordinate, and manage physical and
                  human resources, to evaluate and improve the effectiveness of
                  music education activities within the scope of one's
                  professional activities.
                </li>
              </ul>
              <h2 className="font-bold">Capacity</h2>
              <ul>
                <li>
                  - PLO4.1: Ability to criticize knowledge and old educational
                  methods; form alternative solutions in innovative conditions
                  to improve, enhance quality, and develop art education
                  programs at primary, secondary, and high school level.
                </li>
                <li>
                  - PLO4.2: Ability to research, observe, learn and evaluate
                  children's development level to regulate, adapt and be
                  creative in new educational circumstances.
                </li>
                <li>
                  - PLO4.3: Ability to evaluate the work effectiveness of
                  oneself and colleagues and adjust educational plans to suit
                  the child's developmental characteristics; communicate
                  problems and solutions to colleagues; disseminate knowledge
                  and skills in performing specific or complex educational
                  tasks.
                </li>
              </ul>
            </section>

            <section>
              <h1 className="font-bold">IV. WORKING POSITION</h1>
              <ul>
                <li>
                  - Art teachers in preschools, elementary, secondary, high
                  schools
                </li>
                <li>
                  - Art teachers in intermediate schools, professional colleges;
                </li>
                <li>
                  - Working at Department of culture and education of districts,
                  towns and cities;
                </li>
                <li>
                  - Working at Cultural centers of provinces, cities, districts
                  and towns;
                </li>
                <li>- Working at Art talent training center;</li>
                <li>- Lecturer at art teacher training institutions;</li>
                <li>
                  - Specialist at Research Institutes, Fine Arts Research
                  Centers, cultural centers of provinces, cities, and districts.
                </li>
              </ul>
            </section>

            <section>
              <h1 className="font-bold">
                V. POSSIBILITY FOR FURTHER EDUCATION
              </h1>
              <ul>
                <li>
                  - Study another major in parallel (Graphic Design, Fashion
                  Design).
                </li>
                <li>
                  - Participate in postgraduate training programs (Master's,
                  Doctoral) in the majors: Painting, Graphics and Art theory and
                  history.
                </li>
              </ul>
            </section>
          </div>
        );
      case 4:
        return (
          <div>
            <section>
              <h1 className="font-bold">I. GENERAL INFORMATION</h1>
              <ol>
                <li className="font-bold">1. Training Course: Vocal Music</li>
                <li className="font-bold">2. Code: 7210205</li>
                <li>
                  <span className="font-bold">
                    3. Certificate of accreditation:
                  </span>{" "}
                  Accredited
                </li>
                <li>
                  <span className="font-bold">4. Training Degree:</span>{" "}
                  Bachelor
                </li>
                <li>
                  <span className="font-bold">5. Form of training:</span> Full –
                  time
                </li>
                <li>
                  <span className="font-bold">6. Admission Requirements:</span>
                  <ul>
                    <li>
                      - Admission subjects: Candidates who have graduated from
                      high school (Full – time or Continuing education) or have
                      graduated from intermediate school or college. (Candidates
                      who have graduated from intermediate school without a high
                      school diploma must complete cultural subjects at high
                      school in accordance with the regulations).
                    </li>
                    <li>- Scale of admission: nation-wide</li>
                    <li>
                      - Form of admission: Examination and Admission according
                      to Regulations of the Ministry of Education and Training;
                      Admission Project of Thanh Hoa University of Culture,
                      Sports and Tourism, as follows:
                      <ul>
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
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <span className="font-bold">7. Graduation Requirements:</span>
                  <ul>
                    <li>
                      - Students are considered and recognized for graduation
                      when they meet the following conditions:
                      <ul>
                        <li>
                          Accumulate enough modules, credits and complete other
                          mandatory contents as required by the training
                          program, meeting the output standards of the training
                          program;
                        </li>
                        <li>
                          The cumulative average score of the entire course is
                          average or higher;
                        </li>
                        <li>
                          At the time of graduation, students are not being
                          prosecuted for criminal liability or are not being
                          disciplined at the level of academic suspension;
                        </li>
                        <li>
                          Meet the output standards in Foreign Languages and
                          Information Technology according to the school's
                          regulations (English Certificate level 3 of the
                          6-level Framework for Vietnam or equivalent according
                          to Circular 01/2014; Information Technology
                          Certificate according to Circular 03/2014).
                        </li>
                        <li>
                          Complete Defense Education Certificate and Physical
                          Education module.
                        </li>
                        <li>
                          Having sent an application form to Department of
                          Training Management for graduation check (for students
                          who graduate early or late compared to the expected
                          time of the course, or who have no desire to graduate
                          because they need to improve their academic results).
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <span className="font-bold">8. Degree:</span> Bachelor of
                  Vocal Music
                </li>
                <li>
                  <span className="font-bold">9. Degree granting unit:</span>{" "}
                  Thanh Hoa University of Culture, Sports and Tourism
                </li>
              </ol>
            </section>

            <section>
              <h1 className="font-bold">II. TRAINING OBJECTIVES</h1>
              <ol>
                <li>
                  General Objective:
                  <p>
                    Train bachelors of Vocal Music with background knowledge in
                    humanities and social sciences; knowledge in the field of
                    Music in general and vocal performance in particular; have
                    abilities to form ideas, design, implement, participate in
                    organizing and performing music programs; creativity,
                    scientific research, have the capacity for autonomy and
                    responsibility in professional activities, meet the
                    requirements of music development in the context of national
                    modernization and international integration.
                  </p>
                </li>
                <li>
                  Specific Objectives:
                  <ol type="a">
                    <li>
                      PO1: Apply basic knowledge of social sciences and
                      humanities, knowledge of the field of music and vocal
                      performance to solve problems in the field of music.
                    </li>
                    <li>
                      PO2: Demonstrate skills, personal qualities and career
                      development orientation in music and vocal performance
                      activities.
                    </li>
                    <li>
                      PO3: Form the capacity to build ideas, design, implement,
                      organize and perform in music programs that meet social
                      needs.
                    </li>
                    <li>
                      PO4: Form creative and scientific research capacity; level
                      of autonomy and responsibility in professional activities.
                    </li>
                  </ol>
                </li>
              </ol>
            </section>

            <section>
              <h1 className="font-bold">III. PROGRAM LEARNING OUTCOMES</h1>
              <h2 className="font-bold">1. Knowledge</h2>
              <ul>
                <li>
                  - PLO1.1: Apply the basic knowledge system about music as a
                  foundation for studying and researching in-depth knowledge for
                  music performance. Thereby, students have the best knowledge
                  to serve their major studies.
                </li>
                <li>
                  - PLO1.2: Apply basic and comprehensive vocal music knowledge
                  to become a professional singer, have the ability to teach
                  vocal music majors, and have the ability to organize artistic
                  performance activities on the basis of promote creativity in
                  performing arts, scientific research and organizing activities
                  in the field of music.
                </li>
                <li>
                  - PLO1.3: Apply knowledge of social sciences and humanities
                  and knowledge of the field of music to organize performing
                  arts activities. Building the style of a standard performing
                  artist, capable of propagandizing, bringing music into social
                  life, contributing to the development of Art and Culture
                  according to the Party and State's guidelines.
                </li>
              </ul>
              <h2 className="font-bold">2. Skills</h2>
              <ul>
                <li>
                  - PLO2.1: Demonstrate ethics, professional responsibility and
                  have exemplary communication skills and pedagogical behavior
                  in professional tasks.
                </li>
                <li>
                  - PLO2.2: Have skills to fluently perform vocal techniques in
                  vocal works: Aria, Romance, Vocalise, art songs, folk songs...
                  Able to choose and use appropriate vocal works with her voice
                  and singing ability to perform well in the Graduation Report
                  performance program.
                </li>
                <li>
                  - PLO2.3: Apply a number of modern, appropriate technological
                  methods to perform and apply creativity in music activities
                  and vocal performances.
                </li>
              </ul>
              <h2 className="font-bold">
                3. Learner's autonomy and responsibility
              </h2>
              <ul>
                <li>
                  - PLO3.1: Ability to work independently or in groups according
                  to the requirements of music performance activities, take
                  responsibility with yourself, your group and the products you
                  create.
                </li>
                <li>
                  - PLO3.2: Ability to organize, guide, supervise and interact
                  in group activities of professional groups and music
                  activities. Have a sense of responsibility and autonomy with
                  assigned work.
                </li>
                <li>
                  - PLO3.3: Ability to plan, coordinate, and manage physical and
                  human resources, to evaluate and improve the effectiveness of
                  music activities. Take responsibility for the quality and
                  efficiency of work according to the assigned work.
                </li>
              </ul>
              <h2 className="font-bold">4. Capacity</h2>
              <ul>
                <li>
                  - PLO4.1: Ability to perform proficiently, initiative in
                  creating, handling works, and handling stage situations during
                  music performance.
                </li>
                <li>
                  - PLO4.2: Ability to research in music field, observe, learn
                  and evaluate level of development and current music trends.
                </li>
                <li>
                  - PLO4.3: Ability to evaluate the work effectiveness of
                  oneself and colleagues and adjust activities and build
                  performance programs in accordance with music activities
                  according to society's requirements.
                </li>
              </ul>
            </section>

            <section>
              <h1 className="font-bold">IV. WORKING POSITION</h1>
              <ul>
                <li>
                  - Artists, singers, and actors performing music in
                  professional and amateur theaters and dance troupes.
                </li>
                <li>
                  - Music teachers in high schools; teaching Vocal Music at
                  professional music training institutions from intermediate to
                  university.
                </li>
                <li>
                  - Specialized officers in cultural and artistic activities at
                  agencies, businesses, and cultural centers of communes, wards,
                  districts, towns, and cities.
                </li>
                <li>
                  - Do research work at scientific research agencies on music;
                  Music editor of Radio-Television station…
                </li>
              </ul>
            </section>

            <section>
              <h1 className="font-bold">
                V. POSSIBILITY FOR FURTHER EDUCATION
              </h1>
              <ul>
                <li>
                  - Self-study and scientific research according to specialized
                  training.
                </li>
                <li>
                  - Improve your own expertise and skills to participate in
                  postgraduate programs (Master's, Doctorate) in the fields of
                  Vocal Music, Musicology, Music Theory and Teaching Methods,
                  Management Cultural Theory.
                </li>
                <li>- Study another pedagogical field (Music Education).</li>
              </ul>
            </section>
          </div>
        );
      case 5:
        return (
          <div>
            <section>
              <h1 className="font-bold">I. GENERAL INFORMATION</h1>
              <ol>
                <li className="font-bold">
                  1. Training Course: Fashion Design
                </li>
                <li className="font-bold">2. Code: 52210404</li>
                <li>
                  <span className="font-bold">
                    3. Certificate of accreditation:
                  </span>{" "}
                  Not accredited
                </li>
                <li>
                  <span className="font-bold">4. Training degree:</span>{" "}
                  Bachelor
                </li>
                <li>
                  <span className="font-bold">5. Form of training:</span> Full –
                  time
                </li>
                <li>
                  <span className="font-bold">6. Admission requirements:</span>
                  <ul>
                    <li>
                      - Admission subjects: Candidates who have graduated from
                      high school (Full – time or Continuing education) or have
                      graduated from intermediate school or college. (Candidates
                      who have graduated from intermediate school without a high
                      school diploma must complete cultural subjects at high
                      school in accordance with the regulations).
                    </li>
                    <li>- Scale of admission: nation-wide</li>
                    <li>
                      - Form of admission: Examination and Admission according
                      to Regulations of the Ministry of Education and Training;
                      Admission Project of Thanh Hoa University of Culture,
                      Sports and Tourism, as follows:
                      <ul>
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
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <span className="font-bold">7. Graduation Requirements:</span>
                  <ul>
                    <li>
                      - Students are considered and recognized for graduation
                      when they meet the following conditions:
                      <ul>
                        <li>
                          Accumulate enough modules, credits and complete other
                          mandatory contents as required by the training
                          program, meeting the output standards of the training
                          program;
                        </li>
                        <li>
                          The cumulative average score of the entire course is
                          average or higher;
                        </li>
                        <li>
                          At the time of graduation, students are not being
                          prosecuted for criminal liability or are not being
                          disciplined at the level of academic suspension;
                        </li>
                        <li>
                          Meet the output standards in Foreign Languages and
                          Information Technology according to the school's
                          regulations (English Certificate level 3 of the
                          6-level Framework for Vietnam or equivalent according
                          to Circular 01/2014; Information Technology
                          Certificate according to Circular 03/2014).
                        </li>
                        <li>
                          Complete Defense Education Certificate and Physical
                          Education module.
                        </li>
                        <li>
                          Having sent an application form to Department of
                          Training Management for graduation check (for students
                          who graduate early or late compared to the expected
                          time of the course, or who have no desire to graduate
                          because they need to improve their academic results).
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <span className="font-bold">8. Degree:</span> Bachelor of
                  Fashion Design
                </li>
                <li>
                  <span className="font-bold">9. Degree granting unit:</span>{" "}
                  Thanh Hoa University of Culture, Sports and Tourism
                </li>
              </ol>
            </section>

            <section>
              <h1 className="font-bold">II. TRAINING OBJECTIVES</h1>
              <ol>
                <li>
                  General Objective:
                  <p>
                    Train bachelors in Fashion Design with basic scientific
                    knowledge, fashion basic and major knowledge; have abilities
                    to analyze, solve problems and evaluate art products; have
                    cabilities to build and manage a fashion design business;
                    have communication and teamwork skills; have a professional
                    attitude consistent with the requirements of the industry
                    and society.
                  </p>
                </li>
                <li>
                  Specific Objectives:
                  <ol type="a">
                    <li>
                      PO1: Apply foundational knowledge of art and major
                      agurment to solve problems in the field of fine arts in
                      general and the field of fashion in particular.
                    </li>
                    <li>
                      PO2: Demonstrate skills, personal qualities and career
                      development orientation in the fashion field.
                    </li>
                    <li>
                      PO3: Form the capacity to develop ideas, design,
                      implement, evaluate and develop fashion design programs
                      that meet the needs of society.
                    </li>
                    <li>
                      PO4: Form creative and scientific research capacity; level
                      of autonomy and responsibility in professional activities
                    </li>
                  </ol>
                </li>
              </ol>
            </section>

            <section>
              <h1 className="font-bold">III. PROGRAM LEARNING OUTCOMES</h1>
              <h2 className="font-bold">1. Knowledge</h2>
              <ul>
                <li>
                  - PLO1.1: Apply basic knowledge of humanities, social
                  sciences, politics and law in solving practical work tasks in
                  a creative fashion design work environment.
                </li>
                <li>
                  - PLO1.2: Apply specialized knowledge of fashion design
                  techniques to creativity, tailoring techniques, and production
                  in the fashion field.
                </li>
                <li>
                  - PLO1.3: Apply professional knowledge in fashion design
                  creation to build thinking ability and promote creative ideas
                  associated with the practice of fashion production.
                </li>
              </ul>
              <h2 className="font-bold">2. Skills</h2>
              <ul>
                <li>
                  - PLO2.1: Express creative ideas and design a variety of
                  fashion products.
                </li>
                <li>
                  - PLO2.2: Have skills in applying fashion knowledge to applied
                  decorative projects in life, skills in constructing applied
                  decorative projects.
                </li>
                <li>
                  - PLO2.3. Apply practically in sketching, designing and
                  simulating using hand-drawn, drawing and computerized
                  multimedia processing tools, skills in composing and
                  implementing fashion products.
                </li>
                <li>
                  - PLO2.4: Demonstrate ethics, professional responsibility and
                  have communication skills and standard behavior in
                  professional tasks.
                </li>
              </ul>
              <h2 className="font-bold">
                3. Learner's autonomy and responsibility
              </h2>
              <ul>
                <li>
                  - PLO3.1: Ability to work independently or in groups; to
                  present about trained professional issues; have effective
                  interpersonal communication skills using different media
                  (face-to-face, written, electronic media, broadcast); have
                  skills in controlling time, building plans and organizing work
                  effectively.
                </li>
                <li>
                  - PLO3.2: Ability to organize, guide, supervise and interact
                  in group activities of a professional team.
                </li>
                <li>
                  - PLO3.3: Ability to plan, coordinate and manage physical and
                  human resources; to evaluate, complete and take responsibility
                  for the design products you create.
                </li>
                <li>
                  - PLO3.4: Ability to self-study and lifelong learning,
                  accumulate and update knowledge and experience to improve
                  professional qualifications or continue training at a higher
                  level to meet social requirements.
                </li>
              </ul>
              <h2 className="font-bold">4. Capacity</h2>
              <ul>
                <li>
                  - PLO4.1: Ability to criticize knowledge and thinking; to form
                  solutions or approaches to deploy new creative design to
                  replace innovation to improve quality, and develop the
                  industry.
                </li>
                <li>
                  - PLO4.2: Ability to research, observe, create and explore
                  fashion design products, adapt to the general development
                  situation of society, enhance aesthetic values in thinking,
                  adaptation and creativity.
                </li>
                <li>
                  - PLO4.3: Ability to evaluate the work effectiveness of
                  oneself and colleagues and convey artistic knowledge to
                  customers.
                </li>
              </ul>
            </section>

            <section>
              <h1 className="font-bold">IV. WORKING POSITION</h1>
              <ul>
                <li>
                  - Designer, consultant, and brand manager at fashion companies
                  and garment factories;
                </li>
                <li>
                  - Production supervisor for garment production and product
                  quality management at fashion companies and garment factories;
                </li>
                <li>
                  - Fashion design assistant, or main designer for fashion
                  brands;
                </li>
                <li>- Fashion manager and fashion business officer;</li>
                <li>
                  - Fashion design teacher and researchers at higher education
                  institutions, colleges and related research institutes.
                </li>
              </ul>
            </section>

            <section>
              <h1 className="font-bold">
                V. POSSIBILITY FOR FURTHER EDUCATION
              </h1>
              <ul>
                <li>
                  - Self-study and scientific research according to specialized
                  training.
                </li>
                <li>
                  - Study another major in the field of fine arts and fashion.
                </li>
                <li>
                  - Improve your major and professional knowledge to participate
                  in graduate programs (Master's, Doctorate) in specialized
                  fields of art and fashion.
                </li>
              </ul>
            </section>
          </div>
        );
      case 6:
        return (
          <div>
            <section>
              <h1 className="font-bold">I. GENERAL INFORMATION</h1>
              <ol>
                <li className="font-bold">1. Training Course: Graphic</li>
                <li className="font-bold">2. Code: 52210104</li>
                <li>
                  <span className="font-bold">
                    3. Certificate of accreditation:
                  </span>{" "}
                  Not accredited
                </li>
                <li>
                  <span className="font-bold">4. Training Degree:</span>{" "}
                  Bachelor
                </li>
                <li>
                  <span className="font-bold">5. Form of training:</span> Full –
                  time
                </li>
                <li>
                  <span className="font-bold">6. Admission Requirements:</span>
                  <ul>
                    <li>
                      - Admission subjects: Candidates who have graduated from
                      high school (Full – time or Continuing education) or have
                      graduated from intermediate school or college. (Candidates
                      who have graduated from intermediate school without a high
                      school diploma must complete cultural subjects at high
                      school in accordance with the regulations).
                    </li>
                    <li>- Scale of admission: nation-wide</li>
                    <li>
                      - Form of admission: Examination and Admission according
                      to Regulations of Ministry of Education and Training;
                      Admission Project of Thanh Hoa University of Culture,
                      Sports and Tourism, as follows:
                      <ul>
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
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <span className="font-bold">7. Graduation Requirements:</span>
                  <ul>
                    <li>
                      - Students are considered and recognized for graduation
                      when they meet the following conditions:
                      <ul>
                        <li>
                          Accumulate enough modules, credits and complete other
                          mandatory contents as required by the training
                          program, meeting the output standards of the training
                          program;
                        </li>
                        <li>
                          The cumulative average score of the entire course is
                          average or higher;
                        </li>
                        <li>
                          At the time of graduation, students are not being
                          prosecuted for criminal liability or are not being
                          disciplined at the level of academic suspension;
                        </li>
                        <li>
                          Meet the output standards in Foreign Languages and
                          Information Technology according to the school's
                          regulations (English Certificate level 3 of the
                          6-level Framework for Vietnam or equivalent according
                          to Circular 01/2014; Information Technology
                          Certificate according to Circular 03/2014).
                        </li>
                        <li>
                          Complete Defense Education Certificate and Physical
                          Education module.
                        </li>
                        <li>
                          Having sent an application form to Department of
                          Training Management for graduation check (for students
                          who graduate early or late compared to the expected
                          time of the course, or who have no desire to graduate
                          because they need to improve their academic results).
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <span className="font-bold">8. Degree:</span> Bachelor of
                  Graphic
                </li>
                <li>
                  <span className="font-bold">9. Degree granting unit:</span>{" "}
                  Thanh Hoa University of Culture, Sports and Tourism
                </li>
              </ol>
            </section>

            <section>
              <h1 className="font-bold">II. TRAINING OBJECTIVES</h1>
              <ol>
                <li>
                  General Objective:
                  <p>
                    Train bachelors in Graphics with background knowledge in
                    social sciences, humanities and educational sciences; have
                    abilities to analyze, solve problems and evaluate applied
                    arts products; have capabilities to build and manage an
                    advertising design business; communication and teamwork
                    skills; a professional attitude consistent with the
                    requirements of the industry and society.
                  </p>
                </li>
                <li>
                  Specific Objectives:
                  <ol type="a">
                    <li>
                      PO1: Apply basic knowledge of humanities, social sciences,
                      educational sciences and major arguments to solve problems
                      in the field of applied arts.
                    </li>
                    <li>
                      PO2: Demonstrate skills, personal qualities and career
                      development orientation in creative applied arts
                      activities.
                    </li>
                    <li>
                      PO3: Form the capacity to develop ideas, design,
                      implement, evaluate and develop graphic training programs
                      that meet social needs.
                    </li>
                    <li>
                      PO4: Form creative and scientific research capacity; level
                      of autonomy and responsibility in professional activities.
                    </li>
                  </ol>
                </li>
              </ol>
            </section>

            <section>
              <h1 className="font-bold">III. PROGRAM LEARNING OUTCOMES</h1>
              <h2 className="font-bold">Knowledge</h2>
              <ul>
                <li>
                  - PLO1.1: Apply basic knowledge of art theory to design
                  products in the field of applied arts.
                </li>
                <li>
                  - PLO1.2: Apply a systematic system of scientific knowledge at
                  the graphic university level, including the fields of:
                  publishing, communications, electronic advertising, and
                  interior decoration.
                </li>
                <li>
                  - PLO1.3: Apply knowledge of e-commerce marketing and
                  advertising to social life.
                </li>
                <li>
                  - PLO1.4: Form the capacity for autonomy and responsibility in
                  professional activities.
                </li>
              </ul>
              <h2 className="font-bold">Skills</h2>
              <ul>
                <li>
                  - PLO2.1: Demonstrate the ability to selectively analyze,
                  create, market, and promote graphic products.
                </li>
                <li>
                  - PLO2.2: Have skills in applying graphic knowledge to
                  decorative projects applied in life.
                </li>
                <li>
                  - PLO2.3: Apply well the modeling of real objects to sketch,
                  design and simulate using hand-drawn, drawn and designed
                  multimedia processing tools on computers, skills in composing
                  and implementing graphic products.
                </li>
                <li>
                  - PLO2.4: Have skills to improve and perfect product
                  processing using learned design software tools.
                </li>
              </ul>
              <h2 className="font-bold">
                Learner's autonomy and responsibility
              </h2>
              <ul>
                <li>
                  - PLO3.1: Ability to work independently, exchange and share
                  ideas; have abilities to present about trained professional
                  issues; effective interpersonal communication skills using
                  different media (face-to-face, written, electronic media,
                  broadcast); have skills in controlling time, building plans
                  and organizing work effectively.
                </li>
                <li>
                  - PLO3.2: Ability to plan, coordinate, manage and evaluate
                  human and facilities resources in professional activities.
                </li>
                <li>
                  - PLO3.3: Ability to organize, guide, supervise and interact
                  in professional group activities.
                </li>
              </ul>
              <h2 className="font-bold">Capacity</h2>
              <ul>
                <li>
                  - PLO4.1: Ability to criticize to create innovation in
                  creating ideas, forming new creative thinking in accordance
                  with the general development of society.
                </li>
                <li>
                  - PLO4.2: Ability to research, observe, create, and explore
                  applied art products.
                </li>
                <li>
                  - PLO4.3: Ability to evaluate the work effectiveness of
                  oneself and colleagues and convey applied art knowledge to
                  customers.
                </li>
              </ul>
            </section>

            <section>
              <h1 className="font-bold">IV. WORKING POSITION</h1>
              <ul>
                <li>
                  - Work in many different fields in the Applied Arts industry
                  such as: Graphic design, photography, illustration,
                  advertising, printing, magazine and publishing design,
                  packaging design, interactive communication work;
                </li>
                <li>
                  - Work in Department of culture and education of districts,
                  towns and cities
                </li>
                <li>- Lecturer at art teacher training institutions;</li>
                <li>- Work in Graphics training centers;</li>
                <li>
                  - Specialist at Research Institutes, Fine Arts Research
                  Centers, Cultural centers of provinces, cities, and districts.
                </li>
                <li>- Have your own company or brand;</li>
              </ul>
            </section>

            <section>
              <h1 className="font-bold">
                V. POSSIBILITY FOR FURTHER EDUCATION
              </h1>
              <ul>
                <li>
                  - Ability to self-study, self-research, ensure professional
                  knowledge to participate in postgraduate programs (Master's,
                  Doctoral) in the fields of Applied Arts, Management Cultural
                  theory, Art studies.
                </li>
                <li>
                  - Ability to continue studying master's and doctoral training
                  programs in the field of fine arts, design (or related to
                  applied arts);
                </li>
                <li>
                  - Carry out in-depth research in the field of applied arts.
                </li>
              </ul>
            </section>
          </div>
        );
      case 7:
        return (
          <div>
            <section>
              <h1 className="font-bold">I. GENERAL INFORMATION</h1>
              <ol>
                <li className="font-bold">1. Training Course: Tourism</li>
                <li className="font-bold">2. Code: 7810101</li>
                <li>
                  <span className="font-bold">
                    3. Certificate of accreditation:
                  </span>{" "}
                  Not Accredited
                </li>
                <li>
                  <span className="font-bold">4. Training degree:</span>{" "}
                  Bachelor
                </li>
                <li>
                  <span className="font-bold">5. Form of training:</span> Full –
                  time
                </li>
                <li>
                  <span className="font-bold">6. Admission requirements:</span>
                  <ul>
                    <li>
                      - Admission subjects: Candidates who have graduated from
                      high school (Full – time or Continuing education) or have
                      graduated from intermediate school or college. (Candidates
                      who have graduated from intermediate school without a high
                      school diploma must complete cultural subjects at high
                      school in accordance with the regulations).
                    </li>
                    <li>- Scale of admission: nation-wide</li>
                    <li>
                      - Form of admission: Examination and Admission according
                      to Regulations of the Ministry of Education and Training;
                      Admission Project of Thanh Hoa University of Culture,
                      Sports and Tourism, as follows:
                      <ul>
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
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <span className="font-bold">7. Graduation Requirements:</span>
                  <ul>
                    <li>
                      - Students are considered and recognized for graduation
                      when they meet the following conditions:
                      <ul>
                        <li>
                          Accumulate enough modules, credits and complete other
                          mandatory contents as required by the training
                          program, meeting the output standards of the training
                          program;
                        </li>
                        <li>
                          The cumulative average score of the entire course is
                          average or higher;
                        </li>
                        <li>
                          At the time of graduation, students are not being
                          prosecuted for criminal liability or are not being
                          disciplined at the level of academic suspension;
                        </li>
                        <li>
                          Meet the output standards in Foreign Languages and
                          Information Technology according to the school's
                          regulations (English Certificate level 3 of the
                          6-level Framework for Vietnam or equivalent according
                          to Circular 01/2014; Information Technology
                          Certificate according to Circular 03/2014).
                        </li>
                        <li>
                          Complete Defense Education Certificate and Physical
                          Education module.
                        </li>
                        <li>
                          Having sent an application form to Department of
                          Training Management for graduation check (for students
                          who graduate early or late compared to the expected
                          time of the course, or who have no desire to graduate
                          because they need to improve their academic results).
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <span className="font-bold">8. Degree:</span> Bachelor of
                  Tourism
                </li>
                <li>
                  <span className="font-bold">9. Degree granting unit:</span>{" "}
                  Thanh Hoa University of Culture, Sports and Tourism
                </li>
              </ol>
            </section>

            <section>
              <h1 className="font-bold">II. TRAINING OBJECTIVES</h1>
              <ol>
                <li>
                  General objective:
                  <p>
                    Train Bachelor of Tourism with background knowledge in
                    management science, social sciences, humanities and tourism;
                    have strong professional knowledge, be proactive and
                    creative in tour guiding, tour design and operation
                    activities; organize tourism events; have moral qualities;
                    the ability to be autonomous and responsible in professional
                    activities, contributing to turning tourism into a key
                    economic sector, meeting the requirements of socio-economic
                    development, ensuring national defense, security and
                    international integration.
                  </p>
                </li>
                <li>
                  Specific objectives:
                  <ol type="a">
                    <li>
                      PO1: Apply basic knowledge of management science, social
                      sciences and humanities, tourism economics as well as
                      in-depth knowledge in different fields of tourism
                      activities to serve tourist guiding activities.
                    </li>
                    <li>
                      PO2: Demonstrate skills, personal qualities and career
                      development orientation in tourism activities.
                    </li>
                    <li>
                      PO3: Form the capacity to guide tourism, design, consult
                      and implement tourism programs, organize tourism events...
                      to meet the needs of tourists.
                    </li>
                    <li>
                      PO4: Form the capacity for autonomy and responsibility in
                      professional activities.
                    </li>
                  </ol>
                </li>
              </ol>
            </section>

            <section>
              <h1 className="font-bold">III. PROGRAM LEARNING OUTCOMES</h1>
              <ol>
                <li>
                  <h2 className="font-bold">1. Knowledge</h2>
                  <ul>
                    <li>
                      - PLO1.1: Understand and apply interdisciplinary knowledge
                      of economics, politics, society, and culture in tourist
                      guiding activities.
                    </li>
                    <li>
                      - PLO1.2: Understand, analyze, evaluate, and apply basic
                      and in-depth knowledge of tourism science into practical
                      tourism guiding activities.
                    </li>
                  </ul>
                </li>
                <li>
                  <h2 className="font-bold">2. Skills</h2>
                  <ul>
                    <li>
                      - PLO2.1: Form practical skills for the tourist guiding
                      profession and supporting skills in professional
                      activities.
                    </li>
                    <li>
                      - PLO2.2: Form communication skills and handling
                      situations in tour guiding activities; Build relationships
                      with colleagues and tourists.
                    </li>
                    <li>
                      - PLO2.3: Form skills in using foreign languages and
                      information technology in professional work.
                    </li>
                  </ul>
                </li>
                <li>
                  <h2 className="font-bold">
                    3. Learner's autonomy and responsibility
                  </h2>
                  <ul>
                    <li>
                      - PLO3.1: Level of autonomy: Able to work independently or
                      in groups in travel programs.
                    </li>
                    <li>
                      - PLO3.2: Learner responsibilities: Have a sense of civic
                      responsibility, correct professional attitudes and ethics,
                      observe discipline and scientific working style; have a
                      sense of responsibility in developing sustainable tourism.
                    </li>
                  </ul>
                </li>
                <li>
                  <h2 className="font-bold">4. Capacity</h2>
                  <ul>
                    <li>
                      - PLO4.1: Ability to apply knowledge of tourism, culture
                      and society into professional practice as a tour guide.
                    </li>
                    <li>
                      - PLO4.2: Creative capacity, developing interactive
                      activities with tourists, understanding the psychology,
                      needs of tourists, and target groups of tourists to adjust
                      appropriate travel guiding methods.
                    </li>
                    <li>
                      - PLO4.3: Ability to analyze and evaluate the potential,
                      current status and development opportunities of tourist
                      guiding activities in the context of international
                      integration.
                    </li>
                  </ul>
                </li>
              </ol>
            </section>

            <section>
              <h1 className="font-bold">IV. WORKING POSITION</h1>
              <ul>
                <li>
                  - Tour guide of travel companies, tourist areas and
                  destinations;
                </li>
                <li>
                  - Tour designer; marketing officer, consulting, tour
                  offerings;
                </li>
                <li>
                  - Operator in the tour, event organization, team building...
                </li>
                <li>
                  - Self-establish and manage travel businesses according to
                  law.
                </li>
                <li>
                  - Experts and managers at state management agencies and public
                  service units related to tourism; Non-governmental
                  organizations;
                </li>
                <li>
                  - Researcher and teacher in tourism at training and research
                  institutes related to the fields of tourism.
                </li>
              </ul>
            </section>

            <section>
              <h1 className="font-bold">
                V. POSSIBILITY FOR FURTHER EDUCATION
              </h1>
              <ul>
                <li>- Study a 2nd university degree in a nearby major.</li>
                <li>
                  - Ability to self-study, self-research, ensure professional
                  knowledge to participate in postgraduate programs (Master's,
                  Doctoral) in the following majors: Tourism, Tourism service
                  management and Travel, Business Administration...
                </li>
                <li>
                  - Can carry out scientific research projects in the fields of
                  Tourism and Culture.
                </li>
                <li>
                  - Have the capacity to organize professional activities in
                  tourism management and tour guiding, meeting development and
                  social needs in the period of industrialization, modernization
                  of the country and international integration.
                </li>
              </ul>
            </section>
          </div>
        );
      case 8:
        return (
          <div>
            <section>
              <h1 className="font-bold">I. GENERAL INFORMATION</h1>
              <ol>
                <li className="font-bold">
                  1. Training major: Sports training
                </li>
                <li className="font-bold">2. Major code: 7810302</li>
                <li>
                  <span className="font-bold">3. Inspection certificate:</span>{" "}
                  Not yet inspected for quality
                </li>
                <li>
                  <span className="font-bold">4. Education level:</span>{" "}
                  University
                </li>
                <li>
                  <span className="font-bold">5. Type of training:</span>{" "}
                  Regular
                </li>
                <li>
                  <span className="font-bold">6. Admission conditions:</span>
                  <ul>
                    <li>
                      - Admission target: Students who have graduated from high
                      school (in the form of formal education or continuing
                      education) or have graduated from vocational school or
                      college. (Those who have graduated from vocational school
                      but haven’t had a high school diploma must study to be
                      recognized as having completed high school cultural
                      subjects according to regulations).
                    </li>
                    <li>- Admission scope: whole country</li>
                    <li>
                      - Admission form: Organize entrance exam and admission
                      according to regulations of the Ministry of Education and
                      Training; Admission project of Thanh Hoa University of
                      Culture, Sports and Tourism, with the following methods:
                      <ul>
                        <li>
                          Method 1: Admission based on the results of the high
                          school graduation exam.
                        </li>
                        <li>
                          Method 2: Admission based on high school academic
                          results.
                        </li>
                        <li>
                          Method 3: Direct admission according to regulations of
                          the Ministry of Education and Training.
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <span className="font-bold">7. Graduation conditions:</span>
                  <ul>
                    <li>
                      - Students are considered and recognized for graduation
                      when they meet the following conditions:
                      <ul>
                        <li>
                          Complete enough modules, credits and other mandatory
                          contents as required by the training program, meeting
                          the output standards of the training program;
                        </li>
                        <li>
                          The cumulative grade point average of the completed
                          course is average or higher;
                        </li>
                        <li>
                          At the time of graduation, you are not being
                          prosecuted for criminal liability or are not being
                          disciplined at the level of academic suspension;
                        </li>
                        <li>
                          Meet the output standards in foreign languages and
                          information technology according to the school's
                          regulations (English level 3 according to the 6-level
                          Framework for Vietnam or equivalent according to
                          Circular 01/2014; Information technology certificate
                          according to Circular 03/2014).
                        </li>
                        <li>
                          Have a certificate of National Defense and Security
                          Education and complete the Physical Education module.
                        </li>
                        <li>
                          Have an application sent to the Academic Affairs
                          Office requesting consideration for graduation (for
                          students who graduate early or late compared to the
                          allowed time of the course, or do not want to graduate
                          because they need to improve their graduation
                          ranking).
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <span className="font-bold">8. Graduation degree:</span>{" "}
                  Bachelor of Primary Education
                </li>
                <li>
                  <span className="font-bold">9. Degree granting place:</span>{" "}
                  Thanh Hoa University of Culture, Sports and Tourism.
                </li>
              </ol>
            </section>

            <section>
              <h1 className="font-bold">
                II. OBJECTIVES OF THE TRAINING PROGRAM
              </h1>
              <ol>
                <li>
                  General objectives:
                  <p>
                    Training Bachelor of Sports with basic knowledge of social
                    sciences, politics and law, information technology and
                    foreign languages; knowledge and ability to apply in the
                    practice of sports management, instruction and training, and
                    exercise science; skills and ability to organize sports
                    activities and events to serve the community; ability to
                    work independently or in groups and take personal
                    responsibility and group responsibility in guiding the
                    professional knowledge; the ability to be autonomous and
                    responsible in the work of selection, management of sports
                    training, organization of competitions, and refereeing of
                    sports tournaments; meeting the requirements of sports
                    development in the modernization age and international
                    integration.
                  </p>
                </li>
                <li>
                  Specific objectives:
                  <ol type="a">
                    <li>
                      PO1: Knowledge: Understanding of natural sciences,
                      humanities, politics and law, information technology,
                      foreign languages and updated knowledge in the field of
                      Sports Training.
                    </li>
                    <li>
                      PO2: Professional ability and capacity: Work intensively
                      in the field of Sports Training in organizations,
                      agencies, and businesses.
                    </li>
                    <li>
                      PO3: Ethics and responsibility: Demonstrate professional
                      ethics, ability to exercise autonomy in implementing
                      responsibilities to improve professional activities.
                    </li>
                    <li>
                      PO4: Development and international integration:
                      Continuously study to improve professional capacity and
                      ability, update professional knowledge, continuously
                      research and innovate, lead specialized and
                      interdisciplinary groups to carry out professional tasks
                      to contribute to the development of the field of Sports
                      Training and international integration.
                    </li>
                  </ol>
                </li>
              </ol>
            </section>

            <section>
              <h1 className="font-bold">III. OUTPUT STANDARD</h1>
              <ol>
                <li>
                  <h2 className="font-bold">1. Knowledge</h2>
                  <ul>
                    <li>
                      - PLO1.1. Understand and apply basic knowledge of natural
                      sciences, humanities, politics, law, information
                      technology, foreign languages and updated knowledge of the
                      field of Sports Training.
                    </li>
                    <li>
                      - PLO1.2. Apply professional knowledge to the process of
                      organizing sports training, selecting sports talents,
                      handling and preventing injuries, controlling human body
                      functions, organizing competitions, refereeing sports
                      tournaments and organize sports activities.
                    </li>
                    <li>
                      - PLO1.3. Analyze in-depth issues in the field of Sports
                      Training: design, implement and evaluate specific issues
                      in training and selecting sports talent, organizing
                      competitions, refereeing tournaments sports and movement
                      sports activities.
                    </li>
                  </ul>
                </li>
                <li>
                  <h2 className="font-bold">2. Skills</h2>
                  <ul>
                    <li>
                      - PLO2.1. Apply critical and creative thinking to solve
                      professional research problems and have exemplary
                      communication skills and behavior while performing
                      professional work effectively.
                    </li>
                    <li>
                      - PLO2.2. Appropriately apply theoretical and practical
                      knowledge to plan and organize sports training, select
                      sports talents and have communication skills to perform
                      specific or complex tasks to learners and sports
                      practitioners.
                    </li>
                    <li>
                      - PLO2.3. Do proficiently in information and communication
                      technology techniques, teaching software, and practical
                      technical means to serve research and organize sports
                      training activities.
                    </li>
                  </ul>
                </li>
                <li>
                  <h2 className="font-bold">
                    3. Learner's level of autonomy and responsibility
                  </h2>
                  <ul>
                    <li>
                      - PLO3.1: Comply with state laws, rules and regulations on
                      sports training activities in the working environment
                    </li>
                    <li>
                      - PLO3.1: Maintain professional ethics, high
                      responsibility in professional activities, love your job
                      and always strive for the cause of sport and sports.
                    </li>
                    <li>
                      - PLO3.3: Implement the habit of self-study, update
                      knowledge and experience to improve professional
                      qualifications.
                    </li>
                  </ul>
                </li>
                <li>
                  <h2 className="font-bold">4. Competence</h2>
                  <ul>
                    <li>
                      - PLO4.1. Ability to criticize knowledge; Forming
                      alternative solutions in conditions of innovation,
                      proactive creativity, solving related problems during the
                      process of developing and implementing sports training
                      plans.
                    </li>
                    <li>
                      - PLO4.2. Ability to research, observe, learn and evaluate
                      social needs for physical education and sports that is the
                      basis for proposing appropriate and effective
                      implementation methods.
                    </li>
                    <li>
                      - PLO4.3: Ability to evaluate the work efficiency of
                      oneself and colleagues and adjust work plans to suit
                      reality.
                    </li>
                  </ul>
                </li>
              </ol>
            </section>

            <section>
              <h1 className="font-bold">
                IV. EMPLOYMENT POSITION OF STUDENTS AFTER GRADUATION
              </h1>
              <ul>
                <li>
                  - Work as a coach and instructor in sports clubs, training
                  centers, training sports athletes from grassroots team to
                  provincial and national teams.
                </li>
                <li>
                  - Work as a staff in agencies and organizations that manage
                  physical training and sports at all levels of departments;
                  social organizations, businesses, associations and sports
                  clubs; sports business and enterprises.
                </li>
                <li>
                  - Work as a teacher of Physical Education or guide educational
                  activities outside of class time at primary and secondary
                  schools; High school; vocational school; college. (if having
                  pedagogical certificate).
                </li>
              </ul>
            </section>

            <section>
              <h1 className="font-bold">
                V. ABILITY TO STUDY AND IMPROVE QUALIFICATIONS AFTER GRADUATION
              </h1>
              <ul>
                <li>
                  - Self-study and scientific research according to specialized
                  training.
                </li>
                <li>
                  - Continue studying at the Master's or Doctoral level in the
                  majors of Sports Coaching, Sports Management, Physical
                  Education.
                </li>
                <li>
                  - Improve your professional knowledge to participate in
                  postgraduate programs (master's, doctorate) in the fields of
                  Sports Coaching, Sports Management, Sports Education matter.
                </li>
                <li>
                  - Study a second university degree in sports-related fields.
                </li>
              </ul>
            </section>
          </div>
        );
      case 9:
        return (
          <div>
            <section>
              <h1 className="font-bold">I. GENERAL INFORMATION</h1>
              <ol>
                <li className="font-bold">
                  1. Training major: Informatics Teacher Education
                </li>
                <li className="font-bold">2. Industry code: 7140210</li>
                <li>
                  <span className="font-bold">3. Inspection certificate:</span>{" "}
                  Not yet inspected for quality
                </li>
                <li>
                  <span className="font-bold">4. Education level:</span>{" "}
                  University
                </li>
                <li>
                  <span className="font-bold">5. Type of training:</span>{" "}
                  Regular
                </li>
                <li>
                  <span className="font-bold">6. Admission conditions:</span>
                  <ul>
                    <li>
                      - Admission target: Students who have graduated from high
                      school (in the form of formal education or continuing
                      education) or have graduated from vocational school or
                      college. (Those who have graduated from vocational school
                      but haven’t had a high school diploma must study to be
                      recognized as having completed high school cultural
                      subjects according to regulations).
                    </li>
                    <li>- Admission scope: whole country</li>
                    <li>
                      - Admission form: Organize entrance exam and admission
                      according to regulations of the Ministry of Education and
                      Training; Admission project of Thanh Hoa University of
                      Culture, Sports and Tourism, with the following methods:
                      <ul>
                        <li>
                          Method 1: Admission based on the results of the high
                          school graduation exam.
                        </li>
                        <li>
                          Method 2: Admission based on high school academic
                          results.
                        </li>
                        <li>
                          Method 3: Direct admission according to regulations of
                          the Ministry of Education and Training.
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <span className="font-bold">7. Graduation conditions:</span>
                  <ul>
                    <li>
                      - Students are considered and recognized for graduation
                      when they meet the following conditions:
                      <ul>
                        <li>
                          Complete enough modules, credits and other mandatory
                          contents as required by the training program, meeting
                          the output standards of the training program;
                        </li>
                        <li>
                          The cumulative grade point average of the completed
                          course is average or higher;
                        </li>
                        <li>
                          At the time of graduation, you are not being
                          prosecuted for criminal liability or are not being
                          disciplined at the level of academic suspension;
                        </li>
                        <li>
                          Meet the output standards in foreign languages and
                          information technology according to the school's
                          regulations (English level 3 according to the 6-level
                          Framework for Vietnam or equivalent according to
                          Circular 01/2014; Information technology certificate
                          according to Circular 03/2014).
                        </li>
                        <li>
                          Have a certificate of National Defense and Security
                          Education and complete the Physical Education module.
                        </li>
                        <li>
                          Have an application sent to the Academic Affairs
                          Office requesting consideration for graduation (for
                          students who graduate early or late compared to the
                          allowed time of the course, or do not want to graduate
                          because they need to improve their graduation
                          ranking).
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <span className="font-bold">8. Graduation degree:</span>{" "}
                  Bachelor of Primary Education
                </li>
                <li>
                  <span className="font-bold">9. Degree granting place:</span>{" "}
                  Thanh Hoa University of Culture, Sports and Tourism.
                </li>
              </ol>
            </section>

            <section>
              <h1 className="font-bold">
                II. OBJECTIVES OF THE TRAINING PROGRAM
              </h1>
              <ol>
                <li>
                  General objectives:
                  <p>
                    Training Informatics teachers to meet the needs of general
                    education and social development. These are people with good
                    political and moral qualities; have the lifestyle and
                    behavior of a teacher; have the ability to communicate,
                    understand learners and the educational environment to give
                    appropriate teaching methods; know how to organize the
                    educational process towards comprehensive development of
                    learners' qualities and abilities; have good professional
                    knowledge; have professional practice skills and research
                    competence; have creative thinking skills to solve problems
                    related to information technology teaching activities; have
                    professional responsibility; adapt to a multicultural
                    working environment; have the ability to self-study to adapt
                    to socio-economic development in the process of deep
                    international integration, contributing to meeting the
                    requirements of socio-economic development, national defense
                    and security and international integration.
                  </p>
                </li>
                <li>
                  Specific objectives:
                  <ol type="a">
                    <li>
                      PO1: Understand and apply basic knowledge of management
                      science; social sciences and humanities; about Vietnamese
                      law, about national defense and security; pedagogical
                      knowledge; Basic and in-depth knowledge of information
                      technology pedagogy to solve professional problems in
                      schools and organizations;
                    </li>
                    <li>
                      PO2: Apply basic knowledge of pedagogical skills and
                      information technology to serve in training.
                    </li>
                    <li>
                      PO3: Forming the ability to use foreign languages,
                      information technology, and work in groups; adaptability
                      in different working conditions; Scientific research
                      methods in professional work and study;
                    </li>
                    <li>
                      PO4: Forming personal competencies and qualities;
                      orienting career development in teaching activities;
                      having the ability to work independently or in groups.
                      Know how to summarize experience to form creative thinking
                      ability, build ideas, design, implement, evaluate and
                      develop information technology curricula at training
                      institutions.
                    </li>
                  </ol>
                </li>
              </ol>
            </section>

            <section>
              <h1 className="font-bold">III. OUTPUT STANDARD</h1>
              <ol>
                <li>
                  <h2 className="font-bold">1. Knowledge</h2>
                  <ul>
                    <li>
                      - PLO1.1: Apply knowledge of natural and social sciences
                      and pedagogical knowledge to solve problems in the field
                      of information technology teaching at training
                      institutions; have the ability to study at a post-graduate
                      level.
                    </li>
                    <li>
                      - PLO1.2: Apply knowledge on social issues, culture,
                      science, law and other sciences related to the field of
                      Information Technology and specialized teaching methods
                      specialized in order to be able to teach the subject of
                      Informatics and topics integrated with Informatics at
                      training institutions.
                    </li>
                    <li>
                      - PLO1.3: Apply professional knowledge in developing,
                      applying, organizing methods, evaluating activities,
                      participating in projects and training courses on
                      information technology for teachers at educational
                      institutions.
                    </li>
                  </ul>
                </li>
                <li>
                  <h2 className="font-bold">2. Skills</h2>
                  <ul>
                    <li>
                      - PLO2.1: Demonstrate ethics, professional responsibility,
                      communication skills, professional competence, and
                      pedagogical skills in teaching and professional
                      activities.
                    </li>
                    <li>
                      - PLO2.2. Have skills in organizing and effectively
                      delivering lectures on Information Technology; have
                      independent creative and scientific thinking ability; have
                      individual and group working ability.
                    </li>
                    <li>
                      - PLO2.3: Apply information technology and foreign
                      language techniques well, especially teaching software;
                      Develop integrated topics between information technology
                      applications and other fields to teach at training
                      institutions.
                    </li>
                  </ul>
                </li>
                <li>
                  <h2 className="font-bold">3. Competence</h2>
                  <ul>
                    <li>
                      - PLO3.1: Ability to criticize old and outdated knowledge;
                      Forming alternative solutions under conditions of
                      innovation; have skills and techniques to create and
                      implement Information Technology products; have
                      independent creative and scientific thinking ability.
                    </li>
                    <li>
                      - PLO3.2: Ability to research, observe and search for new
                      knowledge, apply new techniques and tools, master skills
                      to solve professional problems in practice; ability to
                      collect, analyze and synthesize requests from users,
                      thereby deploying applications to meet technical
                      requirements in actual conditions of Information
                      Technology activities..
                    </li>
                    <li>
                      - PLO3.3: Ability to evaluate the work efficiency of
                      oneself and colleagues and adjust work plans to suit
                      reality.
                    </li>
                  </ul>
                </li>
                <li>
                  <h2 className="font-bold">
                    4. Learner's level of autonomy and responsibility
                  </h2>
                  <ul>
                    <li>
                      - PLO4.1: Ability to work independently or in groups
                      according to requirements of professional tasks; detect
                      and solve a number of technical problems related to
                      Information Technology, take personal and group
                      responsibility for the team and for their products.
                    </li>
                    <li>
                      - PLO4.2: Ability to organize, guide, supervise and
                      interact in planning and coordination activities; promote
                      collective intelligence, and provide professional
                      leadership in information technology pedagogy that has
                      been trained; have a sense of responsibility with assigned
                      work.
                    </li>
                    <li>
                      - PLO4.3: Ability to self-orient, plan, and adapt to
                      working environments and circumstances with professional
                      activities; self-study, enhance knowledge and experience
                      to improve professional qualifications with clear career
                      orientation; take responsibility for the quality and
                      efficiency of work according to the established plan.
                    </li>
                  </ul>
                </li>
              </ol>
            </section>

            <section>
              <h1 className="font-bold">
                IV. EMPLOYMENT POSITION OF STUDENTS AFTER GRADUATION
              </h1>
              <ul>
                <li>
                  - Work as a Informatics teacher at primary and secondary
                  schools, high schools and other training institutes.
                </li>
                <li>
                  - Work at the department of education, education office.
                </li>
                <li>
                  - Able to undertake tasks related to Informatics, computer
                  networks at schools, agencies, organizations in society...
                </li>
              </ul>
            </section>

            <section>
              <h1 className="font-bold">
                V. ABILITY TO STUDY AND IMPROVE QUALIFICATIONS AFTER GRADUATION
              </h1>
              <ul>
                <li>
                  - Ability to self-study and conduct scientific research in
                  accordance with specialized training.
                </li>
                <li>
                  - Ability to study a second university major related to
                  Information technology, computer science, computer
                  engineering.
                </li>
                <li>
                  - Ability to study at the Master's or Doctoral level at
                  domestic and international University.
                </li>
                <li>
                  - Ability to organize professional activities, meet
                  development and social needs in the age of industrialization,
                  modernization and international integration.
                </li>
              </ul>
            </section>
          </div>
        );
      case 10:
        return (
          <div>
            <section>
              <h1 className="font-bold">
                I. GENERAL INFORMATION OF TRAINING COURSE/PROGRAM
              </h1>
              <ol>
                <li>
                  <span className="font-bold">1. Course:</span> Tourism and
                  Travel Service Management
                </li>
                <li>
                  <span className="font-bold">2. Code:</span> 52340103
                </li>
                <li>
                  <span className="font-bold">
                    3. Certificate of accreditation:
                  </span>{" "}
                  The quality has not been verified
                </li>
                <li>
                  <span className="font-bold">4. Training degree:</span>{" "}
                  Bachelor
                </li>
                <li>
                  <span className="font-bold">5. Form of training:</span>{" "}
                  Full-time
                </li>
                <li>
                  <span className="font-bold">6. Admission requirements:</span>
                  <ul>
                    <li>
                      - Admission subjects: Candidates who have graduated from
                      high school (in the form of formal education or continuing
                      education) or have graduated from intermediate school or
                      college. (Candidates who have graduated from intermediate
                      school without a high school diploma must complete
                      cultural subjects at high school in accordance with the
                      regulations).
                    </li>
                    <li>- Scale of admission: nation-wide</li>
                    <li>
                      - Form of admission: Admission according to regulations of
                      the Ministry of Education and Training; Admission project
                      of Thanh Hoa University of Culture, Sports and Tourism as
                      follows:
                      <ul>
                        <li>
                          Method 1: Admission based on the results of the high
                          school graduation exam.
                        </li>
                        <li>
                          Method 2: Admission based on high school academic
                          results.
                        </li>
                        <li>
                          Method 3: Direct admission according to regulations of
                          the Ministry of Education and Training.
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <span className="font-bold">7. Graduation requirements:</span>
                  <ul>
                    <li>
                      - Students can pass the graduation check when they meet
                      the following conditions:
                      <ul>
                        <li>
                          Complete enough modules and credits and complete other
                          mandatory contents as required by the training
                          curriculum, meeting the expected learning outcome of
                          the training curriculum;
                        </li>
                        <li>
                          The grade point average of the entire course is
                          average or higher;
                        </li>
                        <li>
                          The students are not being prosecuted for criminal
                          liability or are not being disciplined at the level of
                          academic suspension during the graduation check;
                        </li>
                        <li>
                          Meet the output standards in foreign languages and
                          information technology according to the university’s
                          regulations (Level 3 of proficiency in English
                          according to the 6-level Framework for Foreign
                          Language in effect in Vietnam or equivalent according
                          to Circular 01/2014; Information Technology
                          Certificate according to Circular 03/2014).
                        </li>
                        <li>
                          Awarded the Certificate of National defense and
                          security.
                        </li>
                        <li>
                          Having sent an application form to Department of
                          Training Management for graduation check (for students
                          who graduate early or late compared to the expected
                          time of the course, or who have no desire to graduate
                          because they need to improve their academic results).
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <span className="font-bold">8. Degree:</span> Bachelor of
                  Physical Education
                </li>
                <li>
                  <span className="font-bold">Degree-granting unit:</span> Thanh
                  Hoa University of Culture, Sports and Tourism.
                </li>
              </ol>
            </section>

            <section>
              <h1 className="font-bold">II. COURSE OBJECTIVES</h1>
              <ol>
                <li>
                  <span className="font-bold">1. General objectives:</span>
                  <p>
                    Train bachelors in Tourism and Travel Service Management
                    with good political, moral and health qualities; Master
                    basic knowledge of social sciences, politics and law,
                    tourism and travel; Acquire solid practical knowledge,
                    comprehensive theoretical knowledge, skills in tourism and
                    travel service management, tour business, and management of
                    travel agency; Able to plan tourism business strategies and
                    plans in accordance with reality in changing environmental
                    conditions; Master operational activities in departments of
                    operation, tour guides, market, and other departments in
                    travel businesses.
                  </p>
                </li>
                <li>
                  <span className="font-bold">2. Specific objectives:</span>
                  <ul>
                    <li>
                      - PO1: Provide basic knowledge of social sciences,
                      politics and law, tourism and travel;
                    </li>
                    <li>
                      - PO2: Provide in-depth and practical knowledge of tourism
                      and travel service management;
                    </li>
                    <li>
                      - PO3: Provide supporting knowledge and develop other
                      training majors in economics, business and management,
                      continue to study in-depth at the postgraduate level;
                    </li>
                    <li>
                      - PO4: Train basic skills in tourism and travel service
                      management: critical thinking on economic, business and
                      management problems, forming ideas, planning,
                      implementing, operating and evaluating tourism and travel
                      service business projects/plans.
                    </li>
                  </ul>
                </li>
              </ol>
            </section>

            <section>
              <h1 className="font-bold">III. PROGRAM LEARNING OUTCOME</h1>
              <ol>
                <li>
                  <h2 className="font-bold">1. Knowledge</h2>
                  <ul>
                    <li>
                      - PLO 1.1: Understand basic knowledge of social science,
                      politics and law to solve problems in life, study and
                      practice in the field of tourism and travel service
                      management;
                    </li>
                    <li>
                      - PLO 1.2: Ensure the knowledge system of the tourism
                      industry, tourism and travel service management and
                      relevant knowledge system to present, analyze and solve
                      economic, business and management problems, form ideas,
                      plan, implement, operate and evaluate tourism and travel
                      service business projects/plans.
                    </li>
                  </ul>
                </li>
                <li>
                  <h2 className="font-bold">2. Skills</h2>
                  <ul>
                    <li>
                      - PLO 2.1: Master the process of designing, implementing,
                      operating and evaluating tourism and travel service
                      business projects/plans;
                    </li>
                    <li>
                      - PLO 2.2: Master in collecting and processing information
                      to solve problems in tourism and travel service business;
                    </li>
                    <li>
                      - PLO 2.3: Master operational activities in departments of
                      operation, tour guides, market, and other departments in
                      travel businesses.
                    </li>
                  </ul>
                </li>
                <li>
                  <h2 className="font-bold">
                    3. Learner’s autonomy and responsibility
                  </h2>
                  <ul>
                    <li>
                      - PLO3.1. Be able to work independently and in groups,
                      form, develop and lead groups.
                    </li>
                    <li>
                      - PLO3.2. Be able to present and solve economic, business
                      and management issues.
                    </li>
                    <li>
                      - PLO3.3. Be responsible for work and meet the ethical
                      standards of tourism managers.
                    </li>
                  </ul>
                </li>
                <li>
                  <h2 className="font-bold">4. Capacity</h2>
                  <ul>
                    <li>
                      - PLO4.1. Be able to lead and assist professionally;
                    </li>
                    <li>
                      - PLO4.2. Be able to research and understand the
                      psychology and needs of tourists and the system of tourist
                      destinations to adjust and design appropriate programs,
                      events and tourism services;
                    </li>
                    <li>
                      - PLO4.3. Be able to evaluate personal work efficiency and
                      colleagues’ work efficiency and adjust travel and tourism
                      service management plans to meet customers’ needs.
                    </li>
                  </ul>
                </li>
              </ol>
            </section>

            <section>
              <h1 className="font-bold">IV. CAREER PROSPECTS</h1>
              <ul>
                <li>
                  - Positions in departments of travel companies, tourist
                  transport companies, and service businesses;
                </li>
                <li>
                  - Tour guides, tour narrators, and cheerleaders at travel
                  programs and tourist attractions and events;
                </li>
                <li>
                  - Positions in state management agencies on tourism; lecturers
                  and specialists at training and research facilities in the
                  field of tourism...
                </li>
              </ul>
            </section>

            <section>
              <h1 className="font-bold">V. POSTGRADUATE STUDY OPPORTUNITIES</h1>
              <ul>
                <li>
                  - Self-study and research to improve professional
                  qualifications and skills... to meet the requirements of the
                  position and personnel development planning in the working
                  place.
                </li>
                <li>
                  - Pursue postgraduate training programs in the following
                  majors: Business Administration and Commerce.
                </li>
              </ul>
            </section>
          </div>
        );
      case 11:
        return (
          <div>
            <section>
              <h1 className="font-bold">I. COURSE INFORMATION</h1>
              <ol>
                <li>
                  <span className="font-bold">1. Course:</span> Hotel Management
                </li>
                <li>
                  <span className="font-bold">2. Code:</span> 7810201
                </li>
                <li>
                  <span className="font-bold">
                    3. Certificate of accreditation:
                  </span>{" "}
                  Awarded
                </li>
                <li>
                  <span className="font-bold">4. Training degree:</span>{" "}
                  Bachelor
                </li>
                <li>
                  <span className="font-bold">5. Form of training:</span>{" "}
                  Full-time
                </li>
                <li>
                  <span className="font-bold">6. Admission requirements:</span>
                  <ul>
                    <li>
                      - Admission subjects: Candidates who have graduated from
                      high school (in the form of formal education or continuing
                      education) or have graduated from intermediate school or
                      college. (Candidates who have graduated from intermediate
                      school without a high school diploma must complete
                      cultural subjects at high school in accordance with the
                      regulations).
                    </li>
                    <li>- Scale of admission: nation-wide</li>
                    <li>
                      - Form of admission: Admission according to regulations of
                      the Ministry of Education and Training; Admission project
                      of Thanh Hoa University of Culture, Sports and Tourism as
                      follows:
                      <ul>
                        <li>
                          Method 1: Admission based on the results of the high
                          school graduation exam.
                        </li>
                        <li>
                          Method 2: Admission based on high school academic
                          results.
                        </li>
                        <li>
                          Method 3: Direct admission according to regulations of
                          the Ministry of Education and Training.
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <span className="font-bold">7. Graduation requirements:</span>
                  <ul>
                    <li>
                      - Students can pass the graduation check when they meet
                      the following conditions:
                      <ul>
                        <li>
                          Complete enough modules and credits and complete other
                          mandatory contents as required by the training
                          curriculum, meeting the expected learning outcome of
                          the training curriculum;
                        </li>
                        <li>
                          The grade point average of the entire course is
                          average or higher;
                        </li>
                        <li>
                          The students are not being prosecuted for criminal
                          liability or are not being disciplined at the level of
                          academic suspension during the graduation check;
                        </li>
                        <li>
                          Meet the output standards in foreign languages and
                          information technology according to the university’s
                          regulations (Level 3 of proficiency in English
                          according to the 6-level Framework for Foreign
                          Language in effect in Vietnam or equivalent according
                          to Circular 01/2014; Information Technology
                          Certificate according to Circular 03/2014).
                        </li>
                        <li>
                          Awarded the Certificate of National defense and
                          security.
                        </li>
                        <li>
                          Having sent an application form to Department of
                          Training Management for graduation check (for students
                          who graduate early or late compared to the expected
                          time of the course, or who have no desire to graduate
                          because they need to improve their academic results).
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <span className="font-bold">8. Degree:</span> Bachelor of
                  Physical Education
                </li>
                <li>
                  <span className="font-bold">9. Degree-granting unit:</span>{" "}
                  Thanh Hoa University of Culture, Sports and Tourism.
                </li>
              </ol>
            </section>

            <section>
              <h1 className="font-bold">II. COURSE OBJECTIVES</h1>
              <ol>
                <li>
                  <span className="font-bold">1. General objectives:</span>
                  <p>
                    Train bachelors in Hotel Management with good political,
                    moral and health qualities; have good professional capacity,
                    critical thinking, dynamism and creativity, effectively
                    solve problems related to hotel management activities; adapt
                    to the development of the tourism industry in a changing
                    socio-economic context; Able to work independently and work
                    in groups, and meet job requirements related to professional
                    activities and management activities in tourism and hotel
                    enterprises.
                  </p>
                </li>
                <li>
                  <span className="font-bold">2. Specific objectives:</span>
                  <ul>
                    <li>
                      - PO1: Get a job and undertake specialized work in tourism
                      - hotel businesses, state tourism management agencies, and
                      other agencies related to tourism activities – hotel.
                    </li>
                    <li>
                      - PO2: Develop your career to become an expert, manager,
                      leader and guide others to perform tasks.
                    </li>
                    <li>
                      - PO3: Solve practical problems in planning, organizing,
                      leading, operating, inspecting, supervising and evaluating
                      hotel activities, contributing to the development of the
                      hotel in a responsible manner, adhering to professional
                      ethics.
                    </li>
                  </ul>
                </li>
              </ol>
            </section>

            <section>
              <h1 className="font-bold">III. EXPECTED LEARNING OUTCOME</h1>
              <ol>
                <li>
                  <span className="font-bold">1. Knowledge</span>
                  <ul>
                    <li>
                      - PLO 1.1: Apply knowledge of natural sciences, management
                      sciences, interdisciplinary knowledge of economics,
                      politics, culture, law, information technology, and
                      foreign languages to planning, organizing, managing,
                      operating, inspecting, supervising and evaluating the
                      activities of hotel businesses.
                    </li>
                    <li>
                      - PLO 1.2: Apply the knowledge system on management
                      (tourism human resources, service quality, branding) in
                      general and hotel management, hotel operation management,
                      tourism marketing... to differentiate the requirements of
                      stakeholders in the supply and consumption of quality
                      tourism products and services; effectively resolve
                      specific situations in tourism and hotel businesses.
                    </li>
                  </ul>
                </li>
                <li>
                  <span className="font-bold">2. Skills</span>
                  <ul>
                    <li>
                      - PLO 2.1: Master the professional skills of the
                      reception, room services, bar and kitchen in the hotel.
                    </li>
                    <li>
                      - PLO 2.2: Apply critical and creative thinking to
                      effectively solve problems in hotel management activities.
                    </li>
                    <li>
                      - PLO 2.3: Research in-depth issues of management
                      (service, tourism service quality, branding, tourism human
                      resources), hotel management, tourism marketing,
                      communication, negotiation and currency in the hotel
                      business to organize, operate and manage professional
                      activities serving accommodation, cuisine and other
                      services in the hotel effectively; ensure the development
                      of hotel businesses in the general development of the
                      locality and country.
                    </li>
                  </ul>
                </li>
                <li>
                  <span className="font-bold">
                    3. Learner’s autonomy and responsibility
                  </span>
                  <ul>
                    <li>
                      - PLO 3.1: Be able to work independently and in groups
                      according to the requirements of the enterprise's business
                      management tasks and the needs of social management
                      innovation set out in the process of economic development;
                      Demonstrate entrepreneurial spirit, passion for work,
                      self-study habits, and update knowledge and experience to
                      improve professional qualifications.
                    </li>
                    <li>
                      - PLO 3.2: Comply with regulations and laws in the hotel
                      business, and have social responsibility and professional
                      ethics.
                    </li>
                    <li>
                      - PLO 3.3: Be responsible for quality and work efficiency
                      in unit group activities, of professional departments
                      within the enterprise, and in hotel management activities.
                    </li>
                  </ul>
                </li>
                <li>
                  <span className="font-bold">4. Capacity</span>
                  <ul>
                    <li>
                      - PLO4.1: Be able to critically review knowledge and
                      management methods; forming directions and methods of
                      implementation in terms of innovation and improvement of
                      service quality in hotel management.
                    </li>
                    <li>
                      - PLO4.2: Be able to research, observe, learn and evaluate
                      the level of development of professional management
                      activities and accommodation management activities to meet
                      the development needs of businesses as well as social
                      needs.
                    </li>
                    <li>
                      - PLO4.3: Be able to evaluate the personal work efficiency
                      and the work efficiency of colleagues and adjust
                      management plans to suit the practice of the business.
                    </li>
                  </ul>
                </li>
              </ol>
            </section>

            <section>
              <h1 className="font-bold">IV. CAREER PROSPECTS</h1>
              <ul>
                <li>
                  - Positions in the hotel strategy, policy and business
                  planning department; Business project management or human
                  resource management department at hotel, restaurant, and
                  travel businesses.
                </li>
                <li>
                  - Positions in professional departments (Reception, room
                  services, bar, kitchen) at hotels and restaurants; Customer
                  service and tourism marketing department;
                </li>
                <li>
                  - Positions in administration and commercial operation
                  departments; production and business enterprises; R&D
                  departments in economic organizations and non-profit
                  organizations.
                </li>
                <li>
                  - Positions at research institutes; training facilities;
                  agencies and departments related to accommodation and tourism
                  management.
                </li>
              </ul>
            </section>

            <section>
              <h1 className="font-bold">V. POSTGRADUATE STUDY OPPORTUNITIES</h1>
              <ul>
                <li>
                  - Self-study and self-research to improve qualifications
                </li>
                <li>- Pursue postgraduate training programs.</li>
              </ul>
            </section>
          </div>
        );
      case 12:
        return (
          <div>
            <section>
              <h1 className="font-bold">
                I. GENERAL INFORMATION OF TRAINING COURSE/PROGRAM
              </h1>
              <ol>
                <li>
                  <span className="font-bold">1.Course:</span> Physical
                  Education
                </li>
                <li>
                  <span className="font-bold">2.Code:</span> 7140206
                </li>
                <li>
                  <span className="font-bold">
                    3.Certificate of accreditation:
                  </span>{" "}
                  Not awarded
                </li>
                <li>
                  <span className="font-bold">4.Training degree:</span> Bachelor
                </li>
                <li>
                  <span className="font-bold">5.Form of training:</span>{" "}
                  Full-time
                </li>
                <li>
                  <span className="font-bold">6. Admission requirements:</span>
                  <ul>
                    <li>
                      - Admission subjects: Candidates who have graduated from
                      high school (in the form of formal education or continuing
                      education) or have graduated from intermediate school or
                      college. (Candidates who have graduated from intermediate
                      school without a high school diploma must complete
                      cultural subjects at high school in accordance with the
                      regulations).
                    </li>
                    <li>- Scale of admission: nation-wide</li>
                    <li>
                      - Form of admission: Admission according to regulations of
                      the Ministry of Education and Training; Admission project
                      of Thanh Hoa University of Culture, Sports and Tourism as
                      follows:
                      <ul>
                        <li>
                          Method 1: Admission based on the results of the high
                          school graduation exam.
                        </li>
                        <li>
                          Method 2: Admission based on high school academic
                          results.
                        </li>
                        <li>
                          Method 3: Direct admission according to regulations of
                          the Ministry of Education and Training.
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <span className="font-bold">7. Graduation requirements:</span>
                  <ul>
                    <li>
                      - Students can pass the graduation check when they meet
                      the following conditions:
                      <ul>
                        <li>
                          Complete enough modules and credits and complete other
                          mandatory contents as required by the training
                          curriculum, meeting the expected learning outcome of
                          the training curriculum;
                        </li>
                        <li>
                          The grade point average of the entire course is
                          average or higher;
                        </li>
                        <li>
                          The students are not being prosecuted for criminal
                          liability or are not being disciplined at the level of
                          academic suspension during the graduation check;
                        </li>
                        <li>
                          Meet the output standards in foreign languages and
                          information technology according to the university’s
                          regulations (Level 3 of proficiency in English
                          according to the 6-level Framework for Foreign
                          Language in effect in Vietnam or equivalent according
                          to Circular 01/2014; Information Technology
                          Certificate according to Circular 03/2014).
                        </li>
                        <li>
                          Awarded the Certificate of National defense and
                          security.
                        </li>
                        <li>
                          Having sent an application form to Department of
                          Training Management for graduation check (for students
                          who graduate early or late compared to the expected
                          time of the course, or who have no desire to graduate
                          because they need to improve their academic results).
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <span className="font-bold">8. Degree:</span> Bachelor of
                  Physical Education
                </li>
                <li>
                  <span className="font-bold">9. Degree-granting unit:</span>{" "}
                  Thanh Hoa University of Culture, Sports and Tourism.
                </li>
              </ol>
            </section>

            <section>
              <h1 className="font-bold">II. COURSE OBJECTIVES</h1>
              <ol>
                <li>
                  <span className="font-bold">1. General objectives:</span>
                  <p>
                    Train bachelors of Physical Education with background
                    knowledge in social sciences, politics and law, information
                    technology and foreign languages, with comprehensive,
                    in-depth practical and theoretical knowledge of physical
                    education; acquire skills in analysis, synthesis, and
                    evaluation; communication and behavioral skills to carry out
                    educational activities; be able to work independently or in
                    groups and take responsibilities in providing knowledge in
                    the training field; be able to form ideas, plan, implement
                    and evaluate physical education activities in the context of
                    national modernization and international integration.
                  </p>
                </li>
                <li>
                  <span className="font-bold">2. Specific objectives:</span>
                  <ul>
                    <li>
                      - PO1: Basic knowledge of natural sciences, humanities,
                      politics and law, information technology, foreign
                      languages and understanding of contemporary issues in the
                      field of Physical Education.
                    </li>
                    <li>
                      - PO2: Professional capacity: Specialize in the field of
                      physical education and sports at all levels of the
                      National Education system.
                    </li>
                    <li>
                      - PO3: Ethics and responsibility: Demonstrate professional
                      ethics, the autonomy and responsibilities to improve
                      professional activities.
                    </li>
                    <li>
                      - PO4: Development and international integration:
                      Continuously study to improve professional capacity,
                      update professional knowledge, continuously research and
                      innovate, lead specialized and interdisciplinary groups to
                      carry out professional tasks to contribute to the
                      development of the Physical Education and international
                      integration.
                    </li>
                  </ul>
                </li>
              </ol>
            </section>

            <section>
              <h1 className="font-bold">III. PROGRAM LEARNING OUTCOME</h1>
              <ol>
                <li>
                  <span className="font-bold">1. Knowledge</span>
                  <ul>
                    <li>
                      - PLO1.1: Understand and apply basic knowledge of natural
                      sciences, humanities, politics, law, information
                      technology, foreign languages and understanding of
                      contemporary issues in the field of Physical Education.
                    </li>
                    <li>
                      - PLO1.2: Apply in-depth knowledge of principles and
                      teaching methods of Physical Education... to present,
                      analyze, and organize the teaching of physical education
                      and sports activities.
                    </li>
                    <li>
                      - PLO1.3: Analyze in-depth issues in the field of Physical
                      Education: design, implement and evaluate physical
                      education and sports activities at all levels of the
                      National Education system.
                    </li>
                  </ul>
                </li>
                <li>
                  <span className="font-bold">2. Skills</span>
                  <ul>
                    <li>
                      - PLO 2.1: Apply critical and creative thinking to solve
                      professional research problems and have exemplary
                      communication skills and behavior in performing
                      professional tasks effectively.
                    </li>
                    <li>
                      - PLO2.2: Apply theoretical and practical knowledge to
                      develop plans, prepare lesson plans, and organize the
                      teaching of Physical Education and Sports at all levels of
                      the National Education system appropriately.
                    </li>
                    <li>
                      - PLO2.3: Master information and communication technology
                      techniques, teaching software, and practical technical
                      means to research and teach physical education and mass
                      sports activities.
                    </li>
                  </ul>
                </li>
                <li>
                  <span className="font-bold">
                    3. Learner’s autonomy and responsibility
                  </span>
                  <ul>
                    <li>
                      - PLO3.1: Comply with state laws, rules and regulations of
                      the educational environment in teaching activities and
                      sports activities.
                    </li>
                    <li>
                      - PLO3.2: Maintain professional ethics, high
                      responsibility in professional activities, passion for
                      work and the development of sports and physical education.
                    </li>
                    <li>
                      - PLO3.3: Maintain the habit of self-study, update
                      knowledge and experience to improve professional
                      qualifications.
                    </li>
                  </ul>
                </li>
                <li>
                  <span className="font-bold">4. Capacity</span>
                  <ul>
                    <li>
                      - PLO4.1: Critical thinking on knowledge and educational
                      methods; form alternative solutions in terms of innovation
                      and improvement of educational quality, and development of
                      the Physical Education educational program.
                    </li>
                    <li>
                      - PLO4.2: Be able to research, observe, implement,
                      evaluate and improve physical education and sports
                      activities in the direction of developing the qualities
                      and abilities of students in the context of the
                      modernization and international integration.
                    </li>
                    <li>
                      - PLO4.3: Be able to evaluate the personal work
                      effectiveness and the work effectiveness of colleagues and
                      adjust working plans to meet the requirements of reality.
                    </li>
                  </ul>
                </li>
              </ol>
            </section>

            <section>
              <h1 className="font-bold">IV. CAREER PROSPECTS</h1>
              <ul>
                <li>
                  - Teacher of Physical Education or instructor of educational
                  activities outside of class time in Primary, Secondary
                  schools, High school, Intermediate school, and College.
                </li>
                <li>
                  - General Manager of the Ho Chi Minh Young Pioneers
                  Organization in primary and secondary schools.
                </li>
                <li>
                  - An officer or specialist in the Department of Education -
                  Training, Department of Culture, Sports and Tourism, Sports
                  Center...
                </li>
                <li>
                  - An officer in charge of Children's Sports and Physical
                  education, training sports teams in localities.
                </li>
              </ul>
            </section>

            <section>
              <h1 className="font-bold">V. POSTGRADUATE STUDY OPPORTUNITIES</h1>
              <ul>
                <li>
                  - Self-study and scientific research according to specialized
                  training.
                </li>
                <li>
                  - Pursue another bachelor degree in sports-related fields.
                </li>
                <li>
                  - Pursue postgraduate training programs in the field of
                  Physical Education and Sports.
                </li>
              </ul>
            </section>
          </div>
        );
      case 13:
        return (
          <div>
            <section>
              <h1 className="font-bold">
                I. GENERAL INFORMATION OF TRAINING COURSE/PROGRAM
              </h1>
              <ol>
                <li>
                  <span className="font-bold">Course:</span> Sports Management
                </li>
                <li>
                  <span className="font-bold">Code:</span> 52220343
                </li>
                <li>
                  <span className="font-bold">
                    Certificate of accreditation:
                  </span>{" "}
                  Not awarded
                </li>
                <li>
                  <span className="font-bold">Training degree:</span> Bachelor
                </li>
                <li>
                  <span className="font-bold">Form of training:</span> Full-time
                </li>
                <li>
                  <span className="font-bold">Admission requirements:</span>
                  <ul>
                    <li>
                      - Admission subjects: Candidates who have graduated from
                      high school (in the form of formal education or continuing
                      education) or have graduated from intermediate school or
                      college. (Candidates who have graduated from intermediate
                      school without a high school diploma must complete
                      cultural subjects at high school in accordance with the
                      regulations).
                    </li>
                    <li>- Scale of admission: nation-wide</li>
                    <li>
                      - Form of admission: Admission according to regulations of
                      the Ministry of Education and Training; Admission project
                      of Thanh Hoa University of Culture, Sports and Tourism as
                      follows:
                      <ul>
                        <li>
                          Method 1: Admission based on the results of the high
                          school graduation exam.
                        </li>
                        <li>
                          Method 2: Admission based on high school academic
                          results.
                        </li>
                        <li>
                          Method 3: Direct admission according to regulations of
                          the Ministry of Education and Training.
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <span className="font-bold">Graduation requirements:</span>
                  <ul>
                    <li>
                      - Students can pass the graduation check when they meet
                      the following conditions:
                      <ul>
                        <li>
                          Accumulate enough modules and credits and complete
                          other mandatory contents as required by the training
                          curriculum, meeting the expected learning outcome of
                          the training curriculum;
                        </li>
                        <li>
                          The grade point average of the entire course is
                          average or higher;
                        </li>
                        <li>
                          The students are not being prosecuted for criminal
                          liability or are not being disciplined at the level of
                          academic suspension during the graduation check;
                        </li>
                        <li>
                          Meet the output standards in foreign languages and
                          information technology according to the university’s
                          regulations (Level 3 of proficiency in English
                          according to the 6-level Framework for Foreign
                          Language in effect in Vietnam or equivalent according
                          to Circular 01/2014; Information Technology
                          Certificate according to Circular 03/2014).
                        </li>
                        <li>
                          Awarded the Certificate of National defense and
                          security.
                        </li>
                        <li>
                          Having sent an application form to Department of
                          Training Management for graduation check (for students
                          who graduate early or late compared to the expected
                          time of the course, or who have no desire to graduate
                          because they need to improve their academic results).
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <span className="font-bold">Degree:</span> Bachelor of Sports
                  Management
                </li>
                <li>
                  <span className="font-bold">Degree-granting unit:</span> Thanh
                  Hoa University of Culture, Sports and Tourism
                </li>
              </ol>
            </section>

            <section>
              <h1 className="font-bold">II. COURSE OBJECTIVES</h1>
              <ol>
                <li>
                  <span className="font-bold">1. General objectives</span>
                </li>
                <p>
                  Train the bachelors in Sports Management with background
                  knowledge in political, social sciences and law, information
                  technology and foreign languages; comprehensive and in-depth
                  practical and theoretical knowledge of the field of Sports
                  management; skills in analysis, synthesis, and evaluation;
                  skills in developing ideas, planning, implementing,
                  organizing, supervising and managing sports activities; the
                  ability to work independently or in groups and take
                  responsibility for the team in providing knowledge in the
                  training field; the capacity for autonomy and responsibility
                  in professional activities to meet the requirements of sports
                  development in the context of national modernization and
                  international integration.
                </p>
                <li>
                  <span className="font-bold">2. Specific objectives</span>
                  <ul>
                    <li>
                      - PO1: Basic knowledge of natural sciences, humanities,
                      politics and law, information technology, foreign
                      languages and understanding of contemporary issues in the
                      field of sports management.
                    </li>
                    <li>
                      - PO2: Professional capacity: specilized in the field of
                      Sports management in organizations, agencies, and
                      businesses.
                    </li>
                    <li>
                      - PO3: Ethics and responsibility: Demonstrate professional
                      ethics, ability to exercise autonomy in implementing tasks
                      to improve professional activities.
                    </li>
                    <li>
                      - PO4: Development and international integration:
                      Continuously study to improve professional capacity,
                      update professional knowledge, continuously research and
                      innovate, lead specialized and interdisciplinary groups to
                      carry out specialized tasks, contributing to the
                      development of the field of sports management and
                      international integration.
                    </li>
                  </ul>
                </li>
              </ol>
            </section>

            <section>
              <h1 className="font-bold">III. PROGRAM LEARNING OUTCOME</h1>
              <ol>
                <li>
                  <span className="font-bold">1. Knowledge</span>
                  <ul>
                    <li>
                      - PLO1.1. Understand and apply basic knowledge of natural
                      sciences, humanities, politics, law, information
                      technology, foreign languages and understanding of
                      contemporary issues in the field of sports management.
                    </li>
                    <li>
                      - PLO1.2. Apply specialized knowledge to the selection,
                      development, and application in identifying goals,
                      content, methods, forms of organization and management of
                      sports fields.
                    </li>
                    <li>
                      - PLO1.3. Analyze in-depth issues in the field of sports
                      management: plan, implement and evaluate forms of
                      organization and management of sports fields.
                    </li>
                  </ul>
                </li>
                <li>
                  <span className="font-bold">2. Skills</span>
                  <ul>
                    <li>
                      - PLO2.1. Apply critical and creative thinking to solve
                      professional research problems and have exemplary
                      communication skills and behavior while performing
                      professional tasks effectively.
                    </li>
                    <li>
                      - PLO2.2. Apply theoretical and practical knowledge to
                      plan and organize management activities in various sports
                      fields in society appropriately.
                    </li>
                    <li>
                      - PLO2.3. Master information and communication technology
                      techniques, teaching softwares, and practical technical
                      means to serve research and organize sports management
                      activities.
                    </li>
                  </ul>
                </li>
                <li>
                  <span className="font-bold">
                    3. Learner’s autonomy and responsibility
                  </span>
                  <ul>
                    <li>
                      - PLO3.1: Comply with state laws and standards for Sports
                      Management activities in the working place.
                    </li>
                    <li>
                      - PLO3.2: Maintain professional ethics, high
                      responsibility in professional activities, passion for
                      your job, effort for the development of sports.
                    </li>
                    <li>
                      - PLO3.3: Maintain the habit of self-studying, updating
                      knowledge and experience to improve professional
                      qualifications.
                    </li>
                  </ul>
                </li>
                <li>
                  <span className="font-bold">4. Capacity</span>
                  <ul>
                    <li>
                      - PLO4.1. Have critical thinking; form alternative
                      solutions in conditions of innovation; actively and
                      creatively solve problems that arise during the process of
                      developing and implementing management plans for physical
                      training and sports activities.
                    </li>
                    <li>
                      - PLO4.2. Be able to research, observe, learn and evaluate
                      social needs for physical education and sports as the
                      basis for proposing appropriate and effective
                      implementation methods.
                    </li>
                    <li>
                      - PLO4.3. Be able to evaluate the personal work
                      effectiveness and the work effectiveness of colleagues and
                      adjust working plans to meet the requirements of reality.
                    </li>
                  </ul>
                </li>
              </ol>
            </section>

            <section>
              <h1 className="font-bold">IV. CAREER PROSPECTS</h1>
              <ul>
                <li>
                  - Officer in sports management agencies and organizations at
                  all levels; social organizations, businesses, associations and
                  sports clubs; sports service businesses.
                </li>
                <li>
                  - Teacher of Physical Education at high schools, intermediate
                  schools, colleges (with pedagogical certificate).
                </li>
                <li>- Officer at sports research agencies.</li>
              </ul>
            </section>

            <section>
              <h1 className="font-bold">V. POSTGRADUATE STUDY OPPORTUNITIES</h1>
              <ul>
                <li>
                  - Self-study and scientific research according to specialized
                  training.
                </li>
                <li>
                  - Pursue postgraduate training programs in the field of Sports
                  Training and Physical Education.
                </li>
                <li>
                  - Pursue another bachelor degree in sports-related fields.
                </li>
              </ul>
            </section>
          </div>
        );
      case 14:
        return (
          <div>
            <section>
              <h1 className="font-bold">
                I. GENERAL INFORMATION OF TRAINING COURSE/PROGRAM
              </h1>
              <ul>
                <li>
                  <span className="font-bold">Course:</span> English Language
                </li>
                <li>
                  <span className="font-bold">Code:</span> 7220201
                </li>
                <li>
                  <span className="font-bold">
                    Certificate of accreditation:
                  </span>{" "}
                  Awarded
                </li>
                <li>
                  <span className="font-bold">Training degree:</span> Bachelor
                </li>
                <li>
                  <span className="font-bold">Form of training:</span> Full-time
                </li>
                <li>
                  <span className="font-bold">Admission requirements:</span>
                  <ul>
                    <li>
                      - Admission subjects: Candidates who have graduated from
                      high school (in the form of formal education or continuing
                      education) or have graduated from intermediate school or
                      college. (Candidates who have graduated from intermediate
                      school without a high school diploma must complete
                      cultural subjects at high school in accordance with the
                      regulations).
                    </li>
                    <li>- Scale of admission: nation-wide</li>
                    <li>
                      - Form of admission: Admission according to regulations of
                      the Ministry of Education and Training; Admission project
                      of Thanh Hoa University of Culture, Sports and Tourism as
                      follows:
                      <ul>
                        <li>
                          Method 1: Admission based on the results of the high
                          school graduation exam.
                        </li>
                        <li>
                          Method 2: Admission based on high school academic
                          results.
                        </li>
                        <li>
                          Method 3: Direct admission according to regulations of
                          the Ministry of Education and Training.
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <span className="font-bold">Graduation requirements:</span>
                  <ul>
                    <li>
                      - Students can pass the graduation check when they meet
                      the following conditions:
                      <ul>
                        <li>
                          Accumulate enough modules and credits and complete
                          other mandatory contents as required by the training
                          curriculum, meeting the expected learning outcome of
                          the training curriculum;
                        </li>
                        <li>
                          The grade point average of the entire course is
                          average or higher;
                        </li>
                        <li>
                          The students are not being prosecuted for criminal
                          liability or are not being disciplined at the level of
                          academic suspension during the graduation check;
                        </li>
                        <li>
                          Meet the output standards in foreign languages and
                          information technology according to the university’s
                          regulations (Level 5 of proficiency in English
                          according to the 6-level Framework for Foreign
                          Language in effect in Vietnam or equivalent according
                          to Circular 01/2014; Information Technology
                          Certificate according to Circular 03/2014).
                        </li>
                        <li>
                          Awarded the Certificate of National defense and
                          security.
                        </li>
                        <li>
                          Having sent an application form to Department of
                          Training Management for graduation check (for students
                          who graduate early or late compared to the expected
                          time of the course, or who have no desire to graduate
                          because they need to improve their academic results).
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <span className="font-bold">Degree:</span> Bachelor of English
                  Language
                </li>
                <li>
                  <span className="font-bold">Degree-granting unit:</span> Thanh
                  Hoa University of Culture, Sports and Tourism
                </li>
              </ul>
            </section>

            <section>
              <h1 className="font-bold">II. COURSE OBJECTIVES</h1>
              <ul>
                <li>
                  <span className="font-bold">1. General objectives:</span> The
                  course aims to train the bachelors of English Language with
                  the ability to use English fluently at least at Level 5 of
                  proficiency according to the 6-level Framework for Foreign
                  Language in effect in Vietnam (equivalent to Level C1
                  according to The Common European Framework of Reference for
                  Languages); basic knowledge of the language and culture of
                  English-speaking countries; the necessary knowledge and skills
                  to meet the requirements in the working place; the capacity
                  for autonomy and responsibility in professional activities to
                  meet the requirements of society and the economy in the
                  process of international integration; independent and creative
                  research thinking, the ability to pursue post-graduate
                  training programs.
                </li>
                <li>
                  <span className="font-bold">2. Specific objectives:</span>
                  <ul>
                    <li>
                      - PO1: Update basic knowledge of humanities, social
                      sciences, educational sciences and English language to
                      solve problems in English.
                    </li>
                    <li>
                      - PO2: Update basic knowledge of language and
                      language-related issues to analyze and identify units and
                      parts of the English language.
                    </li>
                    <li>
                      - PO3: Demonstrate skills, personal qualities and career
                      development orientation in professional fields using
                      English.
                    </li>
                    <li>
                      - PO4: Demonstrate thinking and scientific research
                      capacity on language, literature, culture and civilization
                      of English-speaking countries to participate in
                      professional activities that meet the requirements of the
                      society.
                    </li>
                    <li>
                      - PO5: Demonstrate autonomy and responsibility in
                      professional activities.
                    </li>
                  </ul>
                </li>
              </ul>
            </section>

            <section>
              <h1 className="font-bold">III. PROGRAM LEARNING OUTCOME</h1>
              <ul>
                <li>
                  <span className="font-bold">1. Knowledge</span>
                  <ul>
                    <li>
                      - PLO 1.1. Update basic knowledge of humanities, social
                      sciences, politics and law in solving practical tasks in a
                      working environment using English.
                    </li>
                    <li>
                      - PLO 1.2. Update basic knowledge of English phonetics and
                      phonology to develop language skills; basic knowledge of
                      English semantics, English grammar, English discourse in
                      professional work.
                    </li>
                    <li>
                      - PLO 1.3. Update general knowledge of culture,
                      literature, and cross-cultural communication of
                      English-speaking countries in the skills of presentation,
                      critical analysis, teamwork, interdisciplinary research,
                      and debate; improve lexical resources and English skills.
                    </li>
                  </ul>
                </li>
                <li>
                  <span className="font-bold">2. Skills</span>
                  <ul>
                    <li>
                      - PLO 2.1. Demonstrate ethics, professional responsibility
                      and good communication skills in professional tasks.
                    </li>
                    <li>
                      - PLO 2.2. Demonstrate communication skills in English
                      (listening, speaking, reading, writing) equivalent to
                      level 5 according to The Common European Framework of
                      Reference for Languages.
                    </li>
                    <li>
                      - PLO 2.3. Apply soft skills to solve specific tasks in a
                      professional working environment;
                    </li>
                    <li>
                      - PLO 2.4. Develop self-study skills and seize
                      opportunities to access the labor market after the
                      graduation.
                    </li>
                  </ul>
                </li>
                <li>
                  <span className="font-bold">
                    3. Learner’s autonomy and responsibility
                  </span>
                  <ul>
                    <li>
                      - PLO 3.1. Be able to work independently or in groups in
                      professional areas, taking personal responsibility to the
                      group and for personal working efficiency.
                    </li>
                    <li>
                      - PLO 3.2. Be able to analyze, evaluate, and draw
                      conclusions on professional issues and complicated issues
                      that arise in working practice.
                    </li>
                    <li>
                      - PLO 3.3. Be able to plan, arrange, improve professional
                      activities, promote collective intelligence, have a sense
                      of responsibility, cooperation, and autonomy in work.
                    </li>
                    <li>
                      - PLO 3.4. Be able to self-study and pursue lifelong
                      learning, accumulate and update knowledge and experience
                      to improve professional qualifications or pursue
                      post-graduate training programs to meet social
                      requirements.
                    </li>
                  </ul>
                </li>
                <li>
                  <span className="font-bold">4. Capacity</span>
                  <ul>
                    <li>
                      - PLO 4.1. Be able to critically reflect and effectively
                      self-study to continue improving knowledge and ability to
                      practice English language.
                    </li>
                    <li>
                      - PLO 4.2. Be able to research on language, literature,
                      culture and civilization issues of English-speaking
                      countries.
                    </li>
                    <li>
                      - PLO 4.3. Be able to evaluate the personal work
                      effectiveness and the work effectiveness of colleagues and
                      adjust working plans to meet the job requirements.
                    </li>
                  </ul>
                </li>
              </ul>
            </section>

            <section>
              <h1 className="font-bold">IV. CAREER PROSPECTS</h1>
              <ul>
                <li>
                  - English translator and interpreter in companies, businesses,
                  media agencies and social organizations that use English.
                </li>
                <li>
                  - Officer at local and foreign companies, businesses, schools,
                  training facilities, or social organizations that use English.
                </li>
                <li>
                  - English teacher at high schools or educational institutions
                  with English training.
                </li>
              </ul>
            </section>

            <section>
              <h1 className="font-bold">V. POSTGRADUATE STUDY OPPORTUNITIES</h1>
              <ul>
                <li>
                  - Self-study and conduct scientific research according to
                  specialized training.
                </li>
                <li>
                  - Pursue appropriate postgraduate training programs,
                  especially majors such as: English Language, English Theory
                  and Teaching Methods, Comparative Linguistics,...
                </li>
                <li>- Pursue another bachelor degree.</li>
              </ul>
            </section>
          </div>
        );
      case 15:
        return (
          <div>
            <section>
              <h1 className="font-bold">
                I. GENERAL INFORMATION OF TRAINING COURSE/PROGRAM
              </h1>
              <ul>
                <li>
                  <span className="font-bold">Course:</span> Law
                </li>
                <li>
                  <span className="font-bold">Code:</span> 7380101
                </li>
                <li>
                  <span className="font-bold">
                    Certificate of accreditation:
                  </span>{" "}
                  Awarded
                </li>
                <li>
                  <span className="font-bold">Training degree:</span> Bachelor
                </li>
                <li>
                  <span className="font-bold">Form of training:</span>{" "}
                  Full-time, inter-university, part-time
                </li>
                <li>
                  <span className="font-bold">Admission requirements:</span>
                  <ul>
                    <li>
                      - Admission subjects: Candidates who have graduated from
                      high school (in the form of formal education or continuing
                      education) or have graduated from intermediate school or
                      college. (Candidates who have graduated from intermediate
                      school without a high school diploma must complete
                      cultural subjects at high school in accordance with the
                      regulations).
                    </li>
                    <li>- Scale of admission: nation-wide</li>
                    <li>
                      - Form of admission: Admission according to regulations of
                      the Ministry of Education and Training; Admission project
                      of Thanh Hoa University of Culture, Sports and Tourism as
                      follows:
                      <ul>
                        <li>
                          Method 1: Admission based on the results of the high
                          school graduation exam.
                        </li>
                        <li>
                          Method 2: Admission based on high school academic
                          results.
                        </li>
                        <li>
                          Method 3: Direct admission according to regulations of
                          the Ministry of Education and Training.
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <span className="font-bold">Graduation requirements:</span>
                  <ul>
                    <li>
                      - Students can pass the graduation check when they meet
                      the following conditions:
                      <ul>
                        <li>
                          Accumulate enough modules and credits and complete
                          other mandatory contents as required by the training
                          curriculum, meeting the expected learning outcome of
                          the training curriculum;
                        </li>
                        <li>
                          The grade point average of the entire course is
                          average or higher;
                        </li>
                        <li>
                          The students are not being prosecuted for criminal
                          liability or are not being disciplined at the level of
                          academic suspension during the graduation check;
                        </li>
                        <li>
                          Meet the output standards in foreign languages and
                          information technology according to the university’s
                          regulations (Level 3 of proficiency in English
                          according to the 6-level Framework for Foreign
                          Language in effect in Vietnam or equivalent according
                          to Circular 01/2014; Information Technology
                          Certificate according to Circular 03/2014).
                        </li>
                        <li>
                          Awarded the Certificate of National defense and
                          security.
                        </li>
                        <li>
                          Having sent an application form to Department of
                          Training Management for graduation check (for students
                          who graduate early or late compared to the expected
                          time of the course, or who have no desire to graduate
                          because they need to improve their academic results).
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <span className="font-bold">Degree:</span> Bachelor of Law
                </li>
                <li>
                  <span className="font-bold">Degree-granting unit:</span> Thanh
                  Hoa University of Culture, Sports and Tourism
                </li>
              </ul>
            </section>

            <section>
              <h1 className="font-bold">II. COURSE OBJECTIVES</h1>
              <ul>
                <li>
                  <span className="font-bold">1. General objectives:</span>{" "}
                  Train the bachelors in Law with knowledge and expertise in the
                  state and law, legal practice and knowledge of politics,
                  economics, culture and society related to the field of law to
                  meet the development needs of the industry, society and
                  international integration; the ability to think independently
                  and adapt to future personal development needs; good moral
                  qualities, responsibility, strong political awareness, and
                  good health.
                </li>
                <li>
                  <span className="font-bold">2. Specific objectives:</span>
                  <ul>
                    <li>
                      - PO1: Apply basic knowledge of political sciences and
                      social sciences and humanities, legal science to solve
                      problems in the field of law.
                    </li>
                    <li>
                      - PO2: Demonstrate skills, personal qualities and career
                      development orientation in legal activities.
                    </li>
                    <li>
                      - PO3: Form the capacity to develop ideas, plan,
                      implement, evaluate and develop law programs that meet
                      social needs.
                    </li>
                    <li>
                      - PO4: Form the capacity for autonomy and responsibility
                      in professional activities.
                    </li>
                  </ul>
                </li>
              </ul>
            </section>

            <section>
              <h1 className="font-bold">III. PROGRAM LEARNING OUTCOME</h1>
              <ul>
                <li>
                  <span className="font-bold">1. Knowledge</span>
                  <ul>
                    <li>
                      - PLO1.1. Understand solid practical knowledge, deep and
                      broad theoretical knowledge within the field of law.
                    </li>
                    <li>
                      - PLO1.2. Understand basic knowledge of social sciences,
                      political science and law.
                    </li>
                    <li>
                      - PLO1.3. Apply knowledge of information technology to
                      meet the work requirements of the law industry.
                    </li>
                    <li>
                      - PLO1.4. Apply knowledge of planning, organizing and
                      monitoring processes in the field of law.
                    </li>
                    <li>
                      - PLO1.5. Apply basic knowledge of managing and operating
                      professional legal activities in the fields of
                      administrative, criminal, civil, economic, international
                      law... in professional activities.
                    </li>
                  </ul>
                </li>
                <li>
                  <span className="font-bold">2. Skills</span>
                  <ul>
                    <li>
                      - PLO2.1. Form necessary skills to be able to solve
                      complex problems such as: leadership skills, start-up,
                      creating jobs for yourself and others through the skills
                      of discovering, analyzing, evaluating, and planning.
                      Discuss, criticize, advise, and resolve legal issues based
                      on scientific arguments.
                    </li>
                    <li>
                      - PLO2.2. Form skills to evaluate the quality of work
                      after completion and the performance results of team
                      members; update new and practical legal knowledge; look up
                      legal documents; select and properly apply legal
                      provisions to solve problems that arise in practice; draft
                      legal documents in your work; analyze and criticize
                      judgments and decisions of judicial authorities; research
                      and resolve legal issues.
                    </li>
                    <li>
                      - PLO2.3. Form skills to transfer problems and solutions
                      to others in the workplace; transfer and disseminate
                      knowledge and skills in performing specific or complex
                      tasks in the field of law.
                    </li>
                    <li>
                      - PLO2.4. Acquire Level 3 of proficiency in English
                      according to the 6-level Framework for Foreign Language in
                      effect in Vietnam.
                    </li>
                  </ul>
                </li>
                <li>
                  <span className="font-bold">
                    3. Learner’s autonomy and responsibility
                  </span>
                  <ul>
                    <li>
                      - PLO3.1. Be able to work independently or in groups in
                      accordance with the requirements of specific tasks, be
                      responsible for assigned work and have a progressive,
                      cooperative and friendly spirit with colleagues and
                      individuals, and other organizations in the working
                      environment.
                    </li>
                    <li>
                      - PLO3.2. Be able to organize, guide, supervise and
                      interact professionally, proactively, confidently; take
                      responsibility in solving tasks; know how to express
                      opinions and to listen and implement the tasks; work
                      seriously and scientifically together with the combination
                      of practice and theory; learn the lessons to solve
                      problems effectively.
                    </li>
                    <li>
                      - PLO3.3. Be able to self-direct, draw professional
                      conclusions and defend independent personal viewpoints.
                    </li>
                    <li>
                      - PLO3.4. Be able to plan, coordinate, manage, and adapt
                      physical and human resources; evaluate, improve work
                      efficiency and take responsibility in assigned legal
                      fields.
                    </li>
                  </ul>
                </li>
                <li>
                  <span className="font-bold">4. Capacity</span>
                  <ul>
                    <li>
                      - PLO4.1. Critical thinking on legal issues, to form
                      initiative and confidence when expressing and defending
                      personal opinions, and providing scientific and legal
                      solutions to problems in accordance with the law.
                    </li>
                    <li>
                      - PLO4.2. Legal thinking ability on issues related to law,
                      applying industry knowledge to solve legal problems that
                      arise in social life.
                    </li>
                    <li>
                      - PLO4.3. Be able to research and observe legal issues to
                      learn, collect, arrange, select and process information on
                      specific legal issues.
                    </li>
                    <li>
                      - PLO4.4. Be able to evaluate the personal work
                      effectiveness and that of colleagues and adjust work plans
                      to suit the characteristics of the legal field.
                    </li>
                  </ul>
                </li>
              </ul>
            </section>

            <section>
              <h1 className="font-bold">IV. CAREER PROSPECTS</h1>
              <ul>
                <li>
                  - Officer in legislative, executive, judicial agencies, state
                  and non-state enterprises.
                </li>
                <li>
                  - Legal consultant and solicitor at law firms, lawyer offices,
                  notary offices, and commercial arbitration centers; Legal
                  advisors, legal experts at political, socio-political
                  organizations; social or socio-professional organizations;
                </li>
                <li>
                  - Work in legal training and research establishments,
                  governmental and non-governmental organizations with legal
                  activities.
                </li>
              </ul>
            </section>

            <section>
              <h1 className="font-bold">V. POSTGRADUATE STUDY OPPORTUNITIES</h1>
              <ul>
                <li>
                  - Self-study and conduct scientific research according to
                  specialized training.
                </li>
                <li>
                  - Pursue another bachelor degree in majors with the same
                  admission subjects such as: State management, Politics,
                  Journalism, Social Work, English language, Economics, Foreign
                  trade, Tourism,...
                </li>
                <li>
                  - Pursue postgraduate training programs at local and foreign
                  training institutions.
                </li>
              </ul>
            </section>
          </div>
        );
      case 16:
        return (
          <div>
            <section>
              <h1 className="font-bold">
                I. GENERAL INFORMATION OF TRAINING COURSE/PROGRAM
              </h1>
              <ul>
                <li>
                  <span className="font-bold">Course:</span> State Management
                </li>
                <li>
                  <span className="font-bold">Code:</span> 7310205
                </li>
                <li>
                  <span className="font-bold">
                    Certificate of accreditation:
                  </span>{" "}
                  Awarded
                </li>
                <li>
                  <span className="font-bold">Training degree:</span> Bachelor
                </li>
                <li>
                  <span className="font-bold">Form of training:</span> Full-time
                </li>
                <li>
                  <span className="font-bold">Admission requirements:</span>
                  <ul>
                    <li>
                      - Admission subjects: Candidates who have graduated from
                      high school (in the form of formal education or continuing
                      education) or have graduated from intermediate school or
                      college. (Candidates who have graduated from intermediate
                      school without a high school diploma must complete
                      cultural subjects at high school in accordance with the
                      regulations).
                    </li>
                    <li>- Scale of admission: nation-wide</li>
                    <li>
                      - Form of admission: Admission according to regulations of
                      the Ministry of Education and Training; Admission project
                      of Thanh Hoa University of Culture, Sports and Tourism as
                      follows:
                      <ul>
                        <li>
                          Method 1: Admission based on the results of the high
                          school graduation exam.
                        </li>
                        <li>
                          Method 2: Admission based on high school academic
                          results.
                        </li>
                        <li>
                          Method 3: Direct admission according to regulations of
                          the Ministry of Education and Training.
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <span className="font-bold">Graduation requirements:</span>
                  <ul>
                    <li>
                      - Students can pass the graduation check when they meet
                      the following conditions:
                      <ul>
                        <li>
                          Accumulate enough modules and credits and complete
                          other mandatory contents as required by the training
                          curriculum, meeting the expected learning outcome of
                          the training curriculum;
                        </li>
                        <li>
                          The grade point average of the entire course is
                          average or higher;
                        </li>
                        <li>
                          The students are not being prosecuted for criminal
                          liability or are not being disciplined at the level of
                          academic suspension during the graduation check;
                        </li>
                        <li>
                          Meet the output standards in foreign languages and
                          information technology according to the university’s
                          regulations (Level 3 of proficiency in English
                          according to the 6-level Framework for Foreign
                          Language in effect in Vietnam or equivalent according
                          to Circular 01/2014; Information Technology
                          Certificate according to Circular 03/2014).
                        </li>
                        <li>
                          Awarded the Certificate of National defense and
                          security.
                        </li>
                        <li>
                          Having sent an application form to Department of
                          Training Management for graduation check (for students
                          who graduate early or late compared to the expected
                          time of the course, or who have no desire to graduate
                          because they need to improve their academic results).
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <span className="font-bold">Degree:</span> Bachelor of State
                  Management
                </li>
                <li>
                  <span className="font-bold">Degree-granting unit:</span> Thanh
                  Hoa University of Culture, Sports and Tourism
                </li>
              </ul>
            </section>

            <section>
              <h1 className="font-bold">II. COURSE OBJECTIVES</h1>
              <ul>
                <li>
                  <span className="font-bold">1. General objectives:</span>{" "}
                  Train the bachelors of State Management with strong political
                  qualities, good health, comprehensive theoretical knowledge,
                  solid practical knowledge, and in-depth knowledge on state
                  administrative management; the necessary skills to meet job
                  requirements; the ability to self-study and research to
                  achieve higher qualifications to research, teach, and work at
                  agencies and organizations in the public and private sectors.
                </li>
                <li>
                  <span className="font-bold">2. Specific objectives:</span>
                  <ul>
                    <li>
                      - PO1: Update basic knowledge of management science and
                      leadership; social sciences and humanities; politics and
                      law in solving practical work tasks.
                    </li>
                    <li>
                      - PO2: Update basic and in-depth knowledge of
                      administrative management to solve problems in managing
                      and operating organizations in the public and private
                      sectors.
                    </li>
                    <li>
                      - PO3: Master administrative skills and operations,
                      advising, synthesizing, and implementing the work of
                      agencies and organizations.
                    </li>
                    <li>
                      - PO4: Demonstrate scientific thinking and research
                      capacity, foreign language and information technology
                      skills in professional work and research; teamwork and
                      adaptation skills in changing working conditions;
                    </li>
                    <li>
                      - PO5: Demonstrate autonomy and responsibility in
                      professional activities.
                    </li>
                  </ul>
                </li>
              </ul>
            </section>

            <section>
              <h1 className="font-bold">III. PROGRAM LEARNING OUTCOME</h1>
              <ul>
                <li>
                  <span className="font-bold">1. Knowledge</span>
                  <ul>
                    <li>
                      - PLO1.1: Update basic knowledge of management science and
                      leadership; social sciences and humanities; politics and
                      law; national defense and security; foreign language;
                      information technology.
                    </li>
                    <li>
                      - PLO1.2: Apply in-depth knowledge about the organization
                      of the state administrative apparatus, public policy,
                      management of state administrative personnel, civil
                      servants; administrative procedures, administrative
                      authority, inspection and resolution of administrative
                      complaints in the organization, administration and
                      performance of public duties.
                    </li>
                    <li>
                      - PLO1.3: Apply in-depth knowledge of state management to
                      effectively carry out state management activities in the
                      fields of economy, culture, sports and tourism; ethnicity
                      and religion; judicial administration; rural and urban
                      area.
                    </li>
                  </ul>
                </li>
                <li>
                  <span className="font-bold">2. Skills</span>
                  <ul>
                    <li>
                      - PLO2.1: Skills in searching, synthesizing, analyzing,
                      advising, and planning for leaders of agencies and units
                      on state management.
                    </li>
                    <li>
                      - PLO2.2: Skills in developing, organizing, implementing,
                      managing and evaluating and writing reports on tasks of
                      administrative specialists working in public and private
                      organizations.
                    </li>
                    <li>
                      - PLO2.3: Skills to work independently and in groups;
                      professional behavior, good ethics, public responsibility.
                    </li>
                    <li>
                      - PLO2.4: Skills in using foreign languages and
                      information technology in performing professional tasks
                      and doing research.
                    </li>
                  </ul>
                </li>
                <li>
                  <span className="font-bold">
                    3. Learner’s autonomy and responsibility
                  </span>
                  <ul>
                    <li>
                      - PLO3.1: Carry out evaluation and improvement of
                      professional activities to meet the requirements of the
                      job position.
                    </li>
                    <li>
                      - PLO3.2: Form, preserve and promote professional ethics;
                      be responsible for yourself, the organization and society;
                      have confidence, independence, creativity and ability to
                      integrate.
                    </li>
                    <li>
                      - PLO3.3: Implement the habit of self-study,
                      self-research, accumulate experience and adapt to
                      different working environments.
                    </li>
                  </ul>
                </li>
                <li>
                  <span className="font-bold">4. Capacity</span>
                  <ul>
                    <li>
                      - PLO4.1: Comprehensive thinking and interdisciplinary
                      thinking to adapt to social change and the process of
                      international integration.
                    </li>
                    <li>
                      - PLO4.2: Capacity to criticize specific issues and
                      situations in management and public service performance
                      with convincing arguments and evidence.
                    </li>
                    <li>
                      - PLO4.3: Capacity to lead, coordinate, and promote
                      collective intelligence to perform the tasks of public and
                      private sector management.
                    </li>
                  </ul>
                </li>
              </ul>
            </section>

            <section>
              <h1 className="font-bold">IV. CAREER PROSPECTS</h1>
              <ul>
                <li>
                  - Work in agencies, departments and branches of the political
                  system; social and professional organizations; Economic
                  organizations and businesses; Non-governmental
                  organizations... related to administrative management,
                  economic management, social management, human resource
                  management, service management...
                </li>
                <li>
                  - Work in the system of state agencies from central to local
                  levels.
                </li>
                <li>
                  - Work at strategic and policy planning advisory agencies of
                  the Party and State.
                </li>
                <li>
                  - Work as a consultant or researcher on State Management
                  expertise and skills;
                </li>
                <li>
                  - Work as an expert and teach at research institutes and
                  training facilities in the field of State Management.
                </li>
              </ul>
            </section>

            <section>
              <h1 className="font-bold">V. POSTGRADUATE STUDY OPPORTUNITIES</h1>
              <ul>
                <li>
                  - Self-study and scientific research according to specialized
                  training.
                </li>
                <li>
                  - Pursue a second bachelor degree in majors with the same
                  admission subjects such as: Law, Politics, Journalism, Social
                  Work, Tourism...
                </li>
                <li>
                  - Pursue post-graduate programs at local and foreign training
                  institutions.
                </li>
              </ul>
            </section>
          </div>
        );
      case 17:
        return (
          <div>
            <section>
              <h1 className="font-bold">
                I. GENERAL INFORMATION ABOUT THE TRAINING INDUSTRY
              </h1>
              <ul>
                <li>
                  <span className="font-bold">1. Training major:</span>{" "}
                  Communication Technology
                </li>
                <li>
                  <span className="font-bold">2. Major code:</span> 7320106
                </li>
                <li>
                  <span className="font-bold">3. Inspection certificate:</span>{" "}
                  Not yet inspected for quality
                </li>
                <li>
                  <span className="font-bold">4. Education level:</span>{" "}
                  University
                </li>
                <li>
                  <span className="font-bold">5. Type of training:</span>{" "}
                  Regular
                </li>
                <li>
                  <span className="font-bold">6. Admission conditions</span>
                  <ul>
                    <li>
                      - Admission target: Students who have graduated from high
                      school (in the form of formal education or continuing
                      education) or have graduated from vocational school or
                      college. (Those who have graduated from vocational school
                      but haven’t had a high school diploma must study to be
                      recognized as having completed high school cultural
                      subjects according to regulations).
                    </li>
                    <li>- Admission scope: whole country</li>
                    <li>
                      - Admission form: Organize entrance exam and admission
                      according to regulations of the Ministry of Education and
                      Training; Admission project of Thanh Hoa University of
                      Culture, Sports and Tourism, with the following methods:
                      <ul>
                        <li>
                          Method 1: Admission based on the results of the high
                          school graduation exam.
                        </li>
                        <li>
                          Method 2: Admission based on high school academic
                          results.
                        </li>
                        <li>
                          Method 3: Direct admission according to regulations of
                          the Ministry of Education and Training.
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <span className="font-bold">7. Graduation conditions</span>
                  <ul>
                    <li>
                      - Students are considered and recognized for graduation
                      when they meet the following conditions:
                      <ul>
                        <li>
                          Complete enough modules, credits and other mandatory
                          contents as required by the training program, meeting
                          the output standards of the training program;
                        </li>
                        <li>
                          The cumulative grade point average of the completed
                          course is average or higher;
                        </li>
                        <li>
                          At the time of graduation, you are not being
                          prosecuted for criminal liability or are not being
                          disciplined at the level of academic suspension;
                        </li>
                        <li>
                          Meet the output standards in foreign languages and
                          information technology according to the school's
                          regulations (English level 3 according to the 6-level
                          Framework for Vietnam or equivalent according to
                          Circular 01/2014; Information technology certificate
                          according to Circular 03/2014).
                        </li>
                        <li>
                          Have a certificate of National Defense and Security
                          Education and complete the Physical Education module.
                        </li>
                        <li>
                          Have an application sent to the Academic Affairs
                          Office requesting consideration for graduation (for
                          students who graduate early or late compared to the
                          allowed time of the course, or do not want to graduate
                          because they need to improve their graduation
                          ranking).
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <span className="font-bold">8. Graduation degree:</span>{" "}
                  Bachelor of Primary Education
                </li>
                <li>
                  <span className="font-bold">9. Degree granting place:</span>{" "}
                  Thanh Hoa University of Culture, Sports and Tourism.
                </li>
              </ul>
            </section>

            <section>
              <h1 className="font-bold">
                II. OBJECTIVES OF THE TRAINING PROGRAM
              </h1>
              <ul>
                <li>
                  <span className="font-bold">1. General objectives:</span>{" "}
                  Training bachelors of Communication Technology with good
                  political and ethical qualities; basic knowledge, professional
                  practice skills and research competence; creative thinking
                  skills to solve problems related to communication technology
                  activities; professional responsibility; ability to adapt to a
                  multicultural working environment; ability to self-study to
                  adapt to socio-economic development in the process of deep
                  international integration contributing to bringing
                  communication technology to meet the requirements of
                  socio-economic development, national defense and security and
                  international integration.
                </li>
                <li>
                  <span className="font-bold">2. Specific objectives:</span>
                  <ul>
                    <li>
                      - PO1: Apply knowledge of natural and social sciences,
                      humanities, politics and law, information technology,
                      foreign languages and contemporary issues to professional
                      activities.
                    </li>
                    <li>
                      - PO2: Demonstrate skills, personal qualities and career
                      development orientation in Communication Technology
                      activities.
                    </li>
                    <li>
                      - PO3: Form the capacity and ability to build ideas,
                      design, implement, evaluate and develop Communication
                      Technology programs that meet social needs.
                    </li>
                    <li>
                      - PO4: Form creative and scientific research competence;
                      level of autonomy and responsibility in professional
                      activities.
                    </li>
                  </ul>
                </li>
              </ul>
            </section>

            <section>
              <h1 className="font-bold">III. OUTPUT STANDARD</h1>
              <ul>
                <li>
                  <span className="font-bold">1. Knowledge:</span>
                  <ul>
                    <li>
                      - PLO1.1: Apply basic knowledge of social sciences,
                      humanities, politics and law, information technology,
                      foreign languages and contemporary issues to professional
                      activities.
                    </li>
                    <li>
                      - PLO1.2: Apply a system of knowledge about psychological
                      characteristics, ethics, language and media to the process
                      of communication activities.
                    </li>
                    <li>
                      - PLO1.3: Apply professional knowledge in selecting,
                      developing, applying, and integrating in determining
                      goals, content, methods, organizational forms and
                      evaluation of media and technology activities.
                    </li>
                  </ul>
                </li>
                <li>
                  <span className="font-bold">2. Skills:</span>
                  <ul>
                    <li>
                      - PLO2.1: Demonstrate ethics, professional responsibility
                      and have exemplary communication skills and behavior in
                      professional tasks.
                    </li>
                    <li>
                      - PLO2.2. Organizational skills to effectively carry out
                      media organization tasks, design media products and
                      proficiently use media equipment and apply organizational
                      methods and forms... for overall development, creating
                      excitement and positivity in communication technology
                      activities.
                    </li>
                    <li>
                      - PLO2.3: Apply the techniques of information technology,
                      communications and foreign languages according to needs to
                      design professional plans, improve forms and communication
                      products according to modernization needs.
                    </li>
                  </ul>
                </li>
                <li>
                  <span className="font-bold">
                    3. Learner’s level of autonomy and responsibility:
                  </span>
                  <ul>
                    <li>
                      - PLO3.1: Ability to work independently or in groups as
                      required by the tasks of communication technology
                      activities, taking personal and group responsibility for
                      their products.
                    </li>
                    <li>
                      - PLO3.2: Ability to organize, guide, supervise and
                      interact in group activities of professional groups and
                      group activities.
                    </li>
                    <li>
                      - PLO3.3: Ability to self-orient, adapt to working
                      environments and circumstances in communication technology
                      establishments; ability to evaluate and improve the
                      effectiveness of communication technology activities
                      within the scope for their professional activities; have
                      the habit of self-study, update knowledge and experience
                      to improve professional qualifications.
                    </li>
                  </ul>
                </li>
                <li>
                  <span className="font-bold">4. Competence:</span>
                  <ul>
                    <li>
                      - PLO4.1: Ability to criticize old and outdated knowledge
                      and educational methods; Forming alternative solutions in
                      conditions of innovation.
                    </li>
                    <li>
                      - PLO4.2: Ability to research, observe, learn and evaluate
                      the current state of library information, school
                      equipment, archives and application of information
                      technology as a basis for proposing appropriate and
                      effective methods.
                    </li>
                    <li>
                      - PLO4.3: Ability to evaluate the work efficiency of
                      oneself and colleagues and adjust work plans to suit
                      reality.
                    </li>
                  </ul>
                </li>
              </ul>
            </section>

            <section>
              <h1 className="font-bold">
                IV. EMPLOYMENT POSITION OF STUDENTS AFTER GRADUATION
              </h1>
              <ul>
                <li>
                  - Work at television, radio, film studios, media companies,
                  advertising companies, newspapers... or open media businesses.
                </li>
                <li>
                  - Work as a researcher and developer of media programs or
                  applications (TV shows, advertisements, games, web, mobile
                  applications).
                </li>
                <li>
                  - Working as an expert in sponsorship business, advertising
                  business, broadcast time, copyrights of film, program and
                  channel.
                </li>
                <li>
                  - Work as a marketing expert for movies, programs, editors,
                  reporters at newsrooms, publishers, television channels...;
                  website design expert, electronic information management
                  expert for businesses, administrative agencies.
                </li>
                <li>
                  - Work as a researcher and lecturer at training institutes in
                  the field of Communications Technology.
                </li>
                <li>
                  - Work as a manager, an editor to build press content,
                  publications, and book covers (at press agencies, electronic
                  newspapers, publishing houses); Editing and setting up
                  television programs and movies, processing sound and images
                  before broadcasting, designing television content, or creating
                  cinematic effects (at television companies, film studios).
                </li>
              </ul>
            </section>

            <section>
              <h1 className="font-bold">
                V. ABILITY TO STUDY AND IMPROVE QUALIFICATIONS AFTER GRADUATION
              </h1>
              <ul>
                <li>
                  - Ability to self-study and conduct scientific research in
                  accordance with specialized training.
                </li>
                <li>
                  - Ability to study a second university major in majors with
                  the same admission subjects such as: Information Technology,
                  Multimedia Communications, Public Relations...
                </li>
                <li>
                  - Ability to study at Master's and Doctoral levels at domestic
                  and foreign training institutions.
                </li>
                <li>
                  - Ability to organize professional activities, meeting
                  development and social needs in the period of
                  industrialization, modernization of the country and
                  international integration.
                </li>
              </ul>
            </section>
          </div>
        );
      case 18:
        return (
          <div>
            <section>
              <h1 className="font-bold">
                I. GENERAL INFORMATION ABOUT THE TRAINING INDUSTRY
              </h1>
              <ul>
                <li>
                  <span className="font-bold">1. Training major:</span> Social
                  work
                </li>
                <li>
                  <span className="font-bold">2. Major code:</span> 7760101
                </li>
                <li>
                  <span className="font-bold">3. Inspection certificate:</span>{" "}
                  Not yet inspected for quality
                </li>
                <li>
                  <span className="font-bold">4. Education level:</span>{" "}
                  University
                </li>
                <li>
                  <span className="font-bold">5. Type of training:</span>{" "}
                  Regular
                </li>
                <li>
                  <span className="font-bold">6. Admission conditions</span>
                  <ul>
                    <li>
                      - Admission target: Students who have graduated from high
                      school (in the form of formal education or continuing
                      education) or have graduated from vocational school or
                      college. (Those who have graduated from vocational school
                      but haven’t had a high school diploma must study to be
                      recognized as having completed high school cultural
                      subjects according to regulations).
                    </li>
                    <li>- Admission scope: whole country</li>
                    <li>
                      - Admission form: Organize entrance exam and admission
                      according to regulations of the Ministry of Education and
                      Training; Admission project of Thanh Hoa University of
                      Culture, Sports and Tourism, with the following methods:
                      <ul>
                        <li>
                          Method 1: Admission based on the results of the high
                          school graduation exam.
                        </li>
                        <li>
                          Method 2: Admission based on high school academic
                          results.
                        </li>
                        <li>
                          Method 3: Direct admission according to regulations of
                          the Ministry of Education and Training.
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <span className="font-bold">7. Graduation conditions</span>
                  <ul>
                    <li>
                      - Students are considered and recognized for graduation
                      when they meet the following conditions:
                      <ul>
                        <li>
                          Complete enough modules, credits and other mandatory
                          contents as required by the training program, meeting
                          the output standards of the training program;
                        </li>
                        <li>
                          The cumulative grade point average of the completed
                          course is average or higher;
                        </li>
                        <li>
                          At the time of graduation, you are not being
                          prosecuted for criminal liability or are not being
                          disciplined at the level of academic suspension;
                        </li>
                        <li>
                          Meet the output standards in foreign languages and
                          information technology according to the school's
                          regulations (English level 3 according to the 6-level
                          Framework for Vietnam or equivalent according to
                          Circular 01/2014; Information technology certificate
                          according to Circular 03/2014).
                        </li>
                        <li>
                          Have a certificate of National Defense and Security
                          Education and complete the Physical Education module.
                        </li>
                        <li>
                          Have an application sent to the Academic Affairs
                          Office requesting consideration for graduation (for
                          students who graduate early or late compared to the
                          allowed time of the course, or do not want to graduate
                          because they need to improve their graduation
                          ranking).
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <span className="font-bold">8. Graduation degree:</span>{" "}
                  Bachelor of Primary Education
                </li>
                <li>
                  <span className="font-bold">9. Degree granting place:</span>{" "}
                  Thanh Hoa University of Culture, Sports and Tourism.
                </li>
              </ul>
            </section>

            <section>
              <h1 className="font-bold">
                II. OBJECTIVES OF THE TRAINING PROGRAM
              </h1>
              <ul>
                <li>
                  <span className="font-bold">1. General objectives:</span>{" "}
                  Training bachelors in Social Work with knowledge of social
                  sciences, politics and law, information technology and foreign
                  languages; Comprehensive and in-depth theoretical knowledge,
                  practical knowledge of social work; professional practice
                  skills and scientific research competence; creative ability
                  and professional responsibility; ability to work effectively
                  in domestic and foreign organizations in the context of
                  international integration.
                </li>
                <li>
                  <span className="font-bold">2. Specific objectives:</span>
                  <ul>
                    <li>
                      - PO1: Apply basic knowledge of humanities, social
                      sciences, politics, law and understanding of current
                      social issues to social work professional activities.
                    </li>
                    <li>
                      - PO2: Demonstrate skills, personal qualities and career
                      development orientation in social work activities.
                    </li>
                    <li>
                      - PO3: Form the capacity and ability to develop ideas,
                      design, implement, evaluate and develop social work
                      programs that meet the needs of society.
                    </li>
                    <li>
                      - PO4: Form the ability for autonomy and responsibility in
                      professional activities.
                    </li>
                  </ul>
                </li>
              </ul>
            </section>

            <section>
              <h1 className="font-bold">III. OUTPUT STANDARD</h1>
              <ol>
                <li>
                  <span className="font-bold">1. Knowledge:</span>
                  <ul>
                    <li>
                      - PLO1.1. Apply basic knowledge of humanities, social
                      sciences, politics, law and understanding of social issues
                      to social work professional activities.
                    </li>
                    <li>
                      - PLO1.2. Apply the knowledge system of individual social
                      work, group social work, community development practice,
                      consultation and consultation practice in activities of
                      supporting unlucky people in society, helping themselves
                      to self-solve difficult problems in life.
                    </li>
                    <li>
                      - PLO1.3. Apply professional knowledge in selecting,
                      developing, applying, and integrating in determining
                      objectives, contents, and methods of individual and group
                      social work for each specific subject who need to be
                      supported, consultated in society.
                    </li>
                    <li>
                      - PLO1.4. Apply scientific research methodology as well as
                      specific social work research methods to solve social
                      problems.
                    </li>
                    <li>
                      - PLO1.5. Understanding social issues in the development
                      context of Vietnam and the world; have knowledge of social
                      policy and analyze its impact through the system of social
                      services to help solve social problems.
                    </li>
                  </ul>
                </li>
                <li>
                  <span className="font-bold">2. Skills:</span>
                  <ul>
                    <li>
                      - PLO2.1. Demonstrate ethics, professional responsibility
                      and have exemplary communication skills and professional
                      behavior in professional tasks.
                    </li>
                    <li>
                      - PLO2.2. Skills to effectively carry out social work
                      practice tasks with individuals, groups and communities in
                      different fields of social work; use individual and group
                      social work skills to provide direct social work services
                      for individuals, families and groups to help them solve
                      their own problems.
                    </li>
                    <li>
                      - PLO2.3. Good application of skills to participate in
                      community development programs; social policy advocacy
                      skills and career guidance support.
                    </li>
                    <li>
                      - PLO2.4. Ability to apply scientific and critical
                      thinking skills in the context of professional social work
                      practice and research; kills in organizing, leading and
                      working in professional groups as well as in
                      multidisciplinary teams.
                    </li>
                  </ul>
                </li>
                <li>
                  <span className="font-bold">
                    3. Learner's level of autonomy and responsibility:
                  </span>
                  <ul>
                    <li>
                      - PLO3.1. Ability to work independently or in groups
                      according to the requirements of each individual’s
                      specific tasks; ability to self-orient and adapt to
                      different working environments such as schools, hospitals
                      and businesses to support unlucky groups, at-risk groups
                      and vulnerable groups.
                    </li>
                    <li>
                      - PLO3.2. Ability to organize, guide, supervise and
                      interact in group activities of the professional team and
                      group activities for each individual.
                    </li>
                    <li>
                      - PLO3.3. Ability to plan, coordinate and manage assets
                      and human resources; ability to evaluate and improve the
                      effectiveness of individual and group social work
                      activities in the scope of their professional activities;
                      take responsibility for the quality and efficiency of work
                      according to the established plan; have the habit of
                      self-study, update knowledge and experience to improve
                      professional qualifications.
                    </li>
                  </ul>
                </li>
                <li>
                  <span className="font-bold">4. Competence:</span>
                  <ul>
                    <li>
                      - PLO4.1. Ability to use individual and group social work
                      skills to provide support services for individuals,
                      families and groups to help them in solving their problems
                      and meeting their needs.
                    </li>
                    <li>
                      - PLO4.2. Ability to research, observe, study and evaluate
                      data and information, synthesize collective opinions and
                      use new achievements in science and technology to solve
                      real or abstract problems in the professional field.
                    </li>
                    <li>
                      - PLO4.3. Ability to analyze, synthesize, evaluate, detect
                      problems in the community; mobilize community development
                      resources; participate in managing and implementing
                      community development projects.
                    </li>
                  </ul>
                </li>
              </ol>
            </section>

            <section>
              <h1 className="font-bold">
                IV. EMPLOYMENT POSITION OF STUDENTS AFTER GRADUATION
              </h1>
              <ul>
                <li>
                  - Work at agencies of the Labor, War Invalids and Social
                  Affairs; Officials in charge of social work in communes,
                  wards, districts, towns, provinces and cities.
                </li>
                <li>
                  - Work at establishments providing social services to
                  different types of social subjects in fields such as health,
                  education, law, media, culture, social welfare...
                </li>
                <li>
                  - Work in non-governmental organizations, social development
                  projects of domestic and foreign organizations.
                </li>
                <li>
                  - Work independently as a social worker to assist individuals,
                  families and communities.
                </li>
              </ul>
            </section>

            <section>
              <h1 className="font-bold">
                V. ABILITY TO STUDY AND IMPROVE QUALIFICATIONS AFTER GRADUATION
              </h1>
              <ul>
                <li>
                  - Ability to self-study and conduct scientific research in
                  accordance with specialized training.
                </li>
                <li>
                  - Ability to study a second university major with the same
                  admission subjects such as Law, Politics, Journalism,
                  Philosophy, Tourism...
                </li>
                <li>
                  - Ability to study at master's and doctoral levels at domestic
                  and foreign training institutions.
                </li>
              </ul>
            </section>
          </div>
        );
      case 19:
        return (
          <div>
            <section>
              <h1 className="font-bold">I. GENERAL INFORMATION</h1>
              <ul>
                <li>
                  <span className="font-bold">1. Training field:</span> Primary
                  Education
                </li>
                <li>
                  <span className="font-bold">2. Major code:</span> 7140202
                </li>
                <li>
                  <span className="font-bold">3. Inspection certificate:</span>{" "}
                  Not yet inspected for quality
                </li>
                <li>
                  <span className="font-bold">4. Education level:</span>{" "}
                  University
                </li>
                <li>
                  <span className="font-bold">5. Type of training:</span>{" "}
                  Regular
                </li>
                <li>
                  <span className="font-bold">6. Admission conditions</span>
                  <ul>
                    <li>
                      - Admission target: Students who have graduated from high
                      school (in the form of formal education or continuing
                      education) or have graduated from vocational school or
                      college. (Those who have graduated from vocational school
                      but haven’t had a high school diploma must study to be
                      recognized as having completed high school cultural
                      subjects according to regulations).
                    </li>
                    <li>- Admission scope: whole country</li>
                    <li>
                      - Admission form: Organize entrance exam and admission
                      according to regulations of the Ministry of Education and
                      Training; Admission project of Thanh Hoa University of
                      Culture, Sports and Tourism, with the following methods:
                      <ul>
                        <li>
                          Method 1: Admission based on the results of the high
                          school graduation exam.
                        </li>
                        <li>
                          Method 2: Admission based on high school academic
                          results.
                        </li>
                        <li>
                          Method 3: Direct admission according to regulations of
                          the Ministry of Education and Training.
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <span className="font-bold">7. Graduation conditions</span>
                  <ul>
                    <li>
                      - Students are considered and recognized for graduation
                      when they meet the following conditions:
                      <ul>
                        <li>
                          Complete enough modules, credits and other mandatory
                          contents as required by the training program, meeting
                          the output standards of the training program;
                        </li>
                        <li>
                          The cumulative grade point average of the completed
                          course is average or higher;
                        </li>
                        <li>
                          At the time of graduation, you are not being
                          prosecuted for criminal liability or are not being
                          disciplined at the level of academic suspension;
                        </li>
                        <li>
                          Meet the output standards in foreign languages and
                          information technology according to the school's
                          regulations (English level 3 according to the 6-level
                          Framework for Vietnam or equivalent according to
                          Circular 01/2014; Information technology certificate
                          according to Circular 03/2014).
                        </li>
                        <li>
                          Have a certificate of National Defense and Security
                          Education and complete the Physical Education module.
                        </li>
                        <li>
                          Have an application sent to the Academic Affairs
                          Office requesting consideration for graduation (for
                          students who graduate early or late compared to the
                          allowed time of the course, or do not want to graduate
                          because they need to improve their graduation
                          ranking).
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <span className="font-bold">8. Graduation degree:</span>{" "}
                  Bachelor of Primary Education
                </li>
                <li>
                  <span className="font-bold">9. Degree granting place:</span>{" "}
                  Thanh Hoa University of Culture, Sports and Tourism.
                </li>
              </ul>
            </section>

            <section>
              <h1 className="font-bold">
                II. OBJECTIVES OF THE TRAINING PROGRAM
              </h1>
              <ul>
                <li>
                  <span className="font-bold">1. General objectives:</span>{" "}
                  Training primary school teachers with political, moral and
                  health qualities; having knowledge, professional practice
                  skills and research competence; applying science and
                  technology to meet the professional standards of primary
                  school teachers; adapting to the working environment;
                  Conscious of serving the community, building and developing
                  the country.
                </li>
                <li>
                  <span className="font-bold">2. Specific objectives:</span>
                  <ul>
                    <li>
                      - PO1: Apply knowledge of political theory, physical
                      education, national defense and security, foreign
                      languages and basic information technology to professional
                      activities.
                    </li>
                    <li>
                      - PO2: Apply teaching theory, psychology, education,
                      theoretical and practical knowledge of the major to
                      activities in the field of primary education.
                    </li>
                    <li>
                      - PO3: Form the necessary pedagogical capacity to organize
                      and evaluate educational activities.
                    </li>
                    <li>
                      - PO4: Perform tasks demonstrating professional ethical
                      qualities, ability to work independently or in groups;
                      take responsibility, dynamism, creativity, contribute to
                      serving the community, building and developing country.
                    </li>
                  </ul>
                </li>
              </ul>
            </section>

            <section>
              <h1 className="font-bold">III. OUTPUT STANDARD</h1>
              <ol>
                <li>
                  <span className="font-bold">1. Knowledge</span>
                  <ul>
                    <li>
                      - PLO1.1: Apply basic knowledge of humanities, social
                      sciences, politics and law in solving problems of life,
                      learning and educational practice in schools.
                    </li>
                    <li>
                      - PLO1.2: Apply knowledge of psychology, education,
                      natural and social sciences to organize teaching of
                      subjects and supervise the educational process in primary
                      schools.
                    </li>
                    <li>
                      - PLO1.3: Apply the knowledge in selecting, developing,
                      applying, and integrating in determining goals, content,
                      methods, organizational forms and evaluation of teaching
                      activities in primary school.
                    </li>
                  </ul>
                </li>
                <li>
                  <span className="font-bold">2. Skills</span>
                  <ul>
                    <li>
                      2.1. Hard skills:
                      <ul>
                        <li>
                          - PLO2.1: Skills in planning and organizing teaching
                          and educational activities in primary schools,
                          communication skills and exemplary pedagogical
                          behavior in professional tasks.
                        </li>
                        <li>
                          - PLO2.2. Analyze related problems during the process
                          of developing and implementing teaching plans to
                          determine appropriate solutions.
                        </li>
                      </ul>
                    </li>
                    <li>
                      2.2. Soft skills:
                      <ul>
                        <li>
                          - PLO2.3: Use information technology and foreign
                          languages in common professional activities, have good
                          pedagogical communication skills.
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <span className="font-bold">
                    3. Learner's level of autonomy and responsibility
                  </span>
                  <ul>
                    <li>
                      - PLO3.1: Ability to work independently or in groups
                      according to the requirements of primary school teaching
                      activities and the needs of reforming primary education,
                      taking responsibility for work.
                    </li>
                    <li>
                      - PLO3.2: Ability to organize, guide, supervise and
                      interact in group activities of professional groups and
                      group activities of primary students.
                    </li>
                    <li>
                      - PLO3.3: Ability to self-orient, adapt to working
                      environments and circumstances, ability to evaluate and
                      improve the effectiveness of educational activities in
                      primary schools within the scope of one's professional
                      activities .
                    </li>
                  </ul>
                </li>
                <li>
                  <span className="font-bold">4. Competence</span>
                  <ul>
                    <li>
                      - PLO4.1: Ability to criticize knowledge and educational
                      methods; Forming alternative solutions in innovative
                      conditions to improve, enhance quality, and develop
                      educational programs in primary schools.
                    </li>
                    <li>
                      - PLO4.2: Necessary pedagogical ability to organize and
                      evaluate educational activities.
                    </li>
                    <li>
                      - PLO4.3: Ability to evaluate the work effectiveness of
                      oneself, colleagues and adjust educational plans to suit
                      students' developmental characteristics; communicate
                      problems and solutions to colleagues; disseminate
                      knowledge and skills in performing specific or complex
                      educational tasks.
                    </li>
                  </ul>
                </li>
              </ol>
            </section>

            <section>
              <h1 className="font-bold">
                IV. EMPLOYMENT POSITION OF STUDENTS AFTER GRADUATION
              </h1>
              <ul>
                <li>
                  - Primary school teachers, primary school administrators.
                </li>
                <li>
                  - Commander of Ho Chi Minh Young Pioneer chapters;
                  Specialists, consultants, researchers at primary schools.
                </li>
              </ul>
            </section>

            <section>
              <h1 className="font-bold">
                V. ABILITY TO STUDY AND IMPROVE QUALIFICATIONS AFTER GRADUATION
              </h1>
              <ul>
                <li>
                  - Able to self-study and conduct scientific research on
                  Primary Education and other fields related to Primary
                  Education
                </li>
                <li>
                  - Continue studying at the Master's or Doctoral level in the
                  majors of Primary Education, Educational Management or close
                  majors.
                </li>
              </ul>
            </section>
          </div>
        );
      case 20:
        return (
          <div>
            <section>
              <h1 className="font-bold">
                I. GENERAL INFORMATION ABOUT THE TRAINING INDUSTRY
              </h1>
              <ul>
                <li>
                  <span className="font-bold">1. Training major:</span> Cultural
                  Management
                </li>
                <li>
                  <span className="font-bold">2. Major code:</span> 7229042
                </li>
                <li>
                  <span className="font-bold">3. Inspection certificate:</span>{" "}
                  Not yet inspected for quality
                </li>
                <li>
                  <span className="font-bold">4. Education level:</span>{" "}
                  University
                </li>
                <li>
                  <span className="font-bold">5. Type of training:</span>{" "}
                  Regular
                </li>
                <li>
                  <span className="font-bold">6. Admission conditions</span>
                  <ul>
                    <li>
                      - Admission target: Students who have graduated from high
                      school (in the form of formal education or continuing
                      education) or have graduated from vocational school or
                      college. (Those who have graduated from vocational school
                      but haven’t had a high school diploma must study to be
                      recognized as having completed high school cultural
                      subjects according to regulations).
                    </li>
                    <li>- Admission scope: whole country</li>
                    <li>
                      - Admission form: Organize entrance exam and admission
                      according to regulations of the Ministry of Education and
                      Training; Admission project of Thanh Hoa University of
                      Culture, Sports and Tourism, with the following methods:
                      <ul>
                        <li>
                          Method 1: Admission based on the results of the high
                          school graduation exam.
                        </li>
                        <li>
                          Method 2: Admission based on high school academic
                          results.
                        </li>
                        <li>
                          Method 3: Direct admission according to regulations of
                          the Ministry of Education and Training.
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <span className="font-bold">7. Graduation conditions</span>
                  <ul>
                    <li>
                      - Students are considered and recognized for graduation
                      when they meet the following conditions:
                      <ul>
                        <li>
                          Complete enough modules, credits and other mandatory
                          contents as required by the training program, meeting
                          the output standards of the training program;
                        </li>
                        <li>
                          The cumulative grade point average of the completed
                          course is average or higher;
                        </li>
                        <li>
                          At the time of graduation, you are not being
                          prosecuted for criminal liability or are not being
                          disciplined at the level of academic suspension;
                        </li>
                        <li>
                          Meet the output standards in foreign languages and
                          information technology according to the school's
                          regulations (English level 3 according to the 6-level
                          Framework for Vietnam or equivalent according to
                          Circular 01/2014; Information technology certificate
                          according to Circular 03/2014).
                        </li>
                        <li>
                          Have a certificate of National Defense and Security
                          Education and complete the Physical Education module.
                        </li>
                        <li>
                          Have an application sent to the Academic Affairs
                          Office requesting consideration for graduation (for
                          students who graduate early or late compared to the
                          allowed time of the course, or do not want to graduate
                          because they need to improve their graduation
                          ranking).
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <span className="font-bold">8. Graduation degree:</span>{" "}
                  Bachelor of Cultural Management
                </li>
                <li>
                  <span className="font-bold">9. Degree granting place:</span>{" "}
                  Thanh Hoa University of Culture, Sports and Tourism.
                </li>
              </ul>
            </section>

            <section>
              <h1 className="font-bold">
                II. OBJECTIVES OF THE TRAINING PROGRAM
              </h1>
              <ul>
                <li>
                  <span className="font-bold">1. General objectives:</span>{" "}
                  Training bachelors in Cultural Management with knowledge of
                  social sciences, politics and law, information technology and
                  foreign languages; comprehensive and in-depth theoretical
                  knowledge and practical knowledge of Cultural Management,
                  professional practice skills and scientific research
                  competence; creative ability and professional responsibility;
                  ability to work independently or in groups.
                </li>
                <li>
                  <span className="font-bold">2. Specific objectives:</span>
                  <ul>
                    <li>
                      - PO1: Knowledge competence: Understanding of natural and
                      social sciences, humanities, politics, law, information
                      technology, foreign languages and contemporary issues in
                      professional activities.
                    </li>
                    <li>
                      - PO2: Professional competence: Work intensively in the
                      field of cultural management at public agencies,
                      organizations and businesses
                    </li>
                    <li>
                      - PO3: Development and international integration:
                      Continuously study to improve professional competence,
                      continuously research and innovate, update professional
                      knowledge, lead specialized and interdisciplinary groups
                      to carry out professional tasks contributing to the
                      development of Vietnam's Cultural Management industry and
                      international integration.
                    </li>
                    <li>
                      - PO4: Ethics and responsibility: Demonstrate professional
                      ethics, actively contribute to the development of
                      Vietnamese culture and express high responsibility in
                      professional activities.
                    </li>
                  </ul>
                </li>
              </ul>
            </section>

            <section>
              <h1 className="font-bold">III. OUTPUT STANDARD</h1>
              <ol>
                <li>
                  <span className="font-bold">1. Knowledge</span>
                  <ul>
                    <li>
                      - PLO1: Apply knowledge of social sciences, politics and
                      law, information technology, foreign languages and
                      contemporary issues to professional activities
                    </li>
                    <li>
                      - PLO2: Apply cultural management knowledge in planning,
                      organizing, and operating cultural activities of agencies,
                      organizations and businesses.
                    </li>
                    <li>
                      - PLO3: Analyze in-depth issues in the cultural field to
                      serve practical activities; effectively solve specific
                      situations in agencies, organizations and businesses.
                    </li>
                    <li>
                      - PLO4: Assess the quality of organization and management
                      of cultural activities that impact socio-economic
                      development.
                    </li>
                  </ul>
                </li>
                <li>
                  <span className="font-bold">2. Skills</span>
                  <ul>
                    <li>
                      - PLO2.1: Apply critical and creative thinking to study
                      and solve problems in state management of culture
                      effectively.
                    </li>
                    <li>
                      - PLO2.2. Work in groups to achieve objectives as a member
                      or a leader.
                    </li>
                    <li>
                      - PLO2.3. Effective multi-media and cross-cultural
                      communication with stakeholders in professional
                      activities; English standards as prescribed by the
                      Ministry of Education and Training.
                    </li>
                    <li>
                      - PLO4: Use information technology and equipment to
                      effectively serve cultural management activities.
                    </li>
                    <li>
                      - PLO5: Appropriately apply methods and skills in
                      collecting, analyzing and processing information in
                      cultural research and issues of professional practice.
                    </li>
                    <li>
                      - PLO6: Competently perform professional activities in
                      organizing and operating cultural and artistic events and
                      art performance in agencies, organizations and businesses.
                    </li>
                  </ul>
                </li>
                <li>
                  <span className="font-bold">
                    3. Learner's level of autonomy and responsibility
                  </span>
                  <ul>
                    <li>
                      - PLO3.1. Comply with laws on culture and arts and
                      professional principles in the working environment.
                    </li>
                    <li>
                      - PLO3.2. Maintain professional ethics, social
                      responsibility and take responsibility for work quality
                      and efficiency.
                    </li>
                    <li>
                      - PLO3.3. Have the habit of self-study, update knowledge
                      and experience to improve professional qualifications.
                    </li>
                  </ul>
                </li>
                <li>
                  <span className="font-bold">4. Competence</span>
                  <ul>
                    <li>
                      - PLO4.1. Ability to criticize old and outdated cultural
                      knowledge and management methods, forming appropriate
                      alternative solutions in new conditions.
                    </li>
                    <li>
                      - PLO4.2. Ability to research, observe, study and evaluate
                      the current state of cultural management as a basis for
                      proposing appropriate and effective solutions.
                    </li>
                    <li>
                      - PLO4.3. Ability to evaluate the work of oneself and
                      colleagues and adjust work plans to suit reality.
                    </li>
                  </ul>
                </li>
              </ol>
            </section>

            <section>
              <h1 className="font-bold">
                IV. EMPLOYMENT POSITION OF STUDENTS AFTER GRADUATION
              </h1>
              <ul>
                <li>
                  - Work as an employee at cultural and artistic organizations
                  and enterprises in the public and private sectors or foreign
                  cultural and artistic organizations and enterprises.
                </li>
                <li>
                  - Work as an expert/officer at state management agencies in
                  charge of culture; cultural service units; socio-political
                  organizations.
                </li>
                <li>
                  - Work as an employee or manager at event organizing
                  companies, tourism media companies, entertainment sites,
                  marketing departments, fundraising and sponsor seeking, public
                  relations, personnel management, project management of
                  domestic and foreign organizations and businesses.
                </li>
                <li>
                  - Work independently for cultural and artistic programs,
                  events or projects...
                </li>
              </ul>
            </section>

            <section>
              <h1 className="font-bold">
                V. ABILITY TO STUDY AND IMPROVE QUALIFICATIONS AFTER GRADUATION
              </h1>
              <ul>
                <li>
                  - Self-study and scientific research according to specialized
                  training.
                </li>
                <li>
                  - Study a second university major with the same admission
                  subjects such as: State Management, Law, Politics, Journalism,
                  Social Work, Tourism...
                </li>
                <li>
                  - Postgraduate study at domestic and foreign training
                  institutions.
                </li>
              </ul>
            </section>
          </div>
        );
      case 21:
        return (
          <div>
            <section>
              <h1 className="font-bold">
                I. GENERAL INFORMATION ABOUT THE TRAINING INDUSTRY
              </h1>
              <ul>
                <li>
                  <span className="font-bold">1. Training major:</span> Library
                  and Information Science
                </li>
                <li>
                  <span className="font-bold">2. Major code:</span> 7320201
                </li>
                <li>
                  <span className="font-bold">3. Inspection certificate:</span>{" "}
                  Not yet inspected for quality
                </li>
                <li>
                  <span className="font-bold">4. Education level:</span>{" "}
                  University
                </li>
                <li>
                  <span className="font-bold">5. Type of training:</span>{" "}
                  Regular
                </li>
                <li>
                  <span className="font-bold">6. Admission conditions</span>
                  <ul>
                    <li>
                      - Admission target: Students who have graduated from high
                      school (in the form of formal education or continuing
                      education) or have graduated from vocational school or
                      college. (Those who have graduated from vocational school
                      but haven’t had a high school diploma must study to be
                      recognized as having completed high school cultural
                      subjects according to regulations).
                    </li>
                    <li>- Admission scope: whole country</li>
                    <li>
                      - Admission form: Organize entrance exam and admission
                      according to regulations of the Ministry of Education and
                      Training; Admission project of Thanh Hoa University of
                      Culture, Sports and Tourism, with the following methods:
                      <ul>
                        <li>
                          Method 1: Admission based on the results of the high
                          school graduation exam.
                        </li>
                        <li>
                          Method 2: Admission based on high school academic
                          results.
                        </li>
                        <li>
                          Method 3: Direct admission according to regulations of
                          the Ministry of Education and Training.
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <span className="font-bold">7. Graduation conditions</span>
                  <ul>
                    <li>
                      - Students are considered and recognized for graduation
                      when they meet the following conditions:
                      <ul>
                        <li>
                          Complete enough modules, credits and other mandatory
                          contents as required by the training program, meeting
                          the output standards of the training program;
                        </li>
                        <li>
                          The cumulative grade point average of the completed
                          course is average or higher;
                        </li>
                        <li>
                          At the time of graduation, you are not being
                          prosecuted for criminal liability or are not being
                          disciplined at the level of academic suspension;
                        </li>
                        <li>
                          Meet the output standards in foreign languages and
                          information technology according to the school's
                          regulations (English level 3 according to the 6-level
                          Framework for Vietnam or equivalent according to
                          Circular 01/2014; Information technology certificate
                          according to Circular 03/2014).
                        </li>
                        <li>
                          Have a certificate of National Defense and Security
                          Education and complete the Physical Education module.
                        </li>
                        <li>
                          Have an application sent to the Academic Affairs
                          Office requesting consideration for graduation (for
                          students who graduate early or late compared to the
                          allowed time of the course, or do not want to graduate
                          because they need to improve their graduation
                          ranking).
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <span className="font-bold">8. Graduation degree:</span>{" "}
                  Bachelor of Primary Education
                </li>
                <li>
                  <span className="font-bold">9. Degree granting place:</span>{" "}
                  Thanh Hoa University of Culture, Sports and Tourism.
                </li>
              </ul>
            </section>

            <section>
              <h1 className="font-bold">
                II. OBJECTIVES OF THE TRAINING PROGRAM
              </h1>
              <ul>
                <li>
                  <span className="font-bold">1. General objectives:</span>{" "}
                  Training bachelor of Information – Library Science with basic
                  knowledge of social sciences, politics and law, information
                  technology and foreign languages; with comprehensive and
                  in-depth practical and theoretical knowledge of Information -
                  Library and specialized fields such as: Library - School
                  equipment, Applied Information Technology, Archives; have
                  critical thinking, analysis, synthesis, and evaluation;
                  professional practice skills in library information, school
                  equipment, applied information technology, archives, and
                  communication and behavioral skills necessary to perform the
                  tasks of the profession; ability to work independently or in
                  groups, take personal and group responsibility in guiding
                  professional knowledge; job satisfaction related to Library
                  Information, School Equipment, Information Technology, and
                  Archives in organizations, agencies, and businesses.
                </li>
                <li>
                  <span className="font-bold">2. Specific objectives:</span>
                  <ul>
                    <li>
                      - PO1 Knowledge: have knowledge of natural and social
                      sciences, politics and law, information technology,
                      foreign languages and contemporary issues in professional
                      activities.
                    </li>
                    <li>
                      - PO2: Professional competence: work intensively in the
                      fields of Library Information, School Equipment,
                      Information Technology, and Archives in organizations,
                      agencies, and businesses.
                    </li>
                    <li>
                      - PO3: Ethics and responsibility: Demonstrate professional
                      ethics and self-control ability in implementing
                      responsibilities to improve professional activities.
                    </li>
                    <li>
                      - PO4: Development and international integration:
                      Continuously study and improve foreign languages,
                      information technology, professional competence; update
                      professional knowledge; continuously research and create;
                      do interdisciplinary and professional tasks to contribute
                      to the development of Vietnam's Information and Library
                      major and international integration.
                    </li>
                  </ul>
                </li>
              </ul>
            </section>

            <section>
              <h1 className="font-bold">III. OUTPUT STANDARD</h1>
              <ol>
                <li>
                  <span className="font-bold">1. Knowledge</span>
                  <ul>
                    <li>
                      <span className="font-bold">
                        1.1. Library - School Equipment major.
                      </span>
                      <ul>
                        <li>
                          - PLO1.1: Understand and apply knowledge of social
                          sciences, politics and law, information technology,
                          foreign languages and contemporary issues in
                          professional activities
                        </li>
                        <li>
                          - PLO1.2: Apply in-depth knowledge about organizing
                          and managing library information and school equipment
                          in activities of collecting, processing, storing,
                          preserving, searching for information, building
                          information service products, organizing service and
                          using library - school equipment.
                        </li>
                        <li>
                          - PLO1.3: Analyze in-depth issues in the field of
                          Library - School equipment: manage, operate and
                          evaluate information technology systems, libraries,
                          and teaching equipment for subjects at school.
                        </li>
                      </ul>
                    </li>
                    <li>
                      <span className="font-bold">1.2. Archives major</span>
                      <ul>
                        <li>
                          - PLO1.1: Understand and apply knowledge of social
                          sciences, politics and law, information technology,
                          foreign languages and contemporary issues in
                          professional activities
                        </li>
                        <li>
                          - PLO1.2: Apply in-depth knowledge of Archives, office
                          administration in document draft, document management,
                          collecting, processing, storage, preservation and
                          service Documents stored in agencies, organizations,
                          businesses.
                        </li>
                        <li>
                          - PLO1.3: Analyze in-depth issues of archives and the
                          State's legal document system.
                        </li>
                      </ul>
                    </li>
                    <li>
                      <span className="font-bold">
                        1.3. Applied Information Technology Major.
                      </span>
                      <ul>
                        <li>
                          - PLO1.1: Understand and apply knowledge of social
                          sciences, politics and law, information technology,
                          foreign languages and contemporary issues in
                          professional activities
                        </li>
                        <li>
                          - PLO1.2: Apply in-depth knowledge of information
                          technology in analyzing information systems,
                          databases, management systems, software, hardware,
                          basic programming, web design, secret information
                          security
                        </li>
                        <li>
                          - PLO1.3: Analyze in-depth knowledge of information
                          technology: hardware, software, computer networks,
                          information technology and the State's legal document
                          system on applied information technology.
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <span className="font-bold">2. Skills</span>
                  <ul>
                    <li>
                      <span className="font-bold">
                        2.1. Library - School Equipment Major.
                      </span>
                      <ul>
                        <li>
                          - PLO2.1: Apply critical and creative thinking to
                          solve professional research problems; have exemplary
                          communication skills and behavior while performing
                          professional work effectively .
                        </li>
                        <li>
                          - PLO2.2: Appropriately apply knowledge, methods and
                          skills in collecting, analyzing and processing
                          information, using, storing and preserving documents,
                          information technology equipment and teaching devices,
                          experimenting in organizing library activities and
                          school equipment.
                        </li>
                        <li>
                          - PLO2.3: Proficiently perform professional work
                          processes from collecting, processing, storing,
                          preserving, searching for information, building
                          information service products, organizing service and
                          using library - school equipment.
                        </li>
                      </ul>
                    </li>
                    <li>
                      <span className="font-bold">2.2. Archives major</span>
                      <ul>
                        <li>
                          - PLO2.1: Apply critical and creative thinking to
                          solve professional research problems and have
                          exemplary communication skills and behavior while
                          performing professional work effectively .
                        </li>
                        <li>
                          - PLO2.2: Appropriately apply knowledge, methods, and
                          skills in document management and storage related to
                          archival work
                        </li>
                        <li>
                          - PLO2.3: Proficiently perform professional work
                          processes of document drafting, document management,
                          collecting, processing, storage, preservation and
                          service of archival documents in the agency ,
                          organizations, businesses.
                        </li>
                      </ul>
                    </li>
                    <li>
                      <span className="font-bold">
                        2.3. Applied information technology major.
                      </span>
                      <ul>
                        <li>
                          - PLO2.1: Apply critical and creative thinking to
                          solve professional research problems and have
                          exemplary communication skills and behavior while
                          performing professional work effectively .
                        </li>
                        <li>
                          - PLO2.2: Appropriately apply knowledge, methods, and
                          skills in analyzing information systems, databases,
                          management systems, software, hardware, basic
                          programming, web design, and information security,
                          computer networks, informatics, graphic design,
                          artificial intelligence and applications in various
                          fields
                        </li>
                        <li>
                          - PLO2.3: Proficiently perform professional work
                          processes: analyzing information systems, databases,
                          management systems, software, hardware, basic
                          programming, web design, security information
                          security, computer networks, informatics, graphic
                          design, artificial intelligence, applications in
                          various fields
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <span className="font-bold">
                    3. Learner's level of autonomy and responsibility
                  </span>
                  <ul>
                    <li>
                      - PLO3.1: Obey laws and standards on Library operations -
                      school equipment, archives, and information technology in
                      the working environment
                    </li>
                    <li>
                      - PLO3.1: Maintain professional ethics, carry out
                      responsibilities for quality and work efficiency according
                      to the established plan.
                    </li>
                    <li>
                      - PLO3.3: Implement the habit of self-study, update
                      knowledge and experience to improve professional
                      qualifications
                    </li>
                  </ul>
                </li>
                <li>
                  <span className="font-bold">4. Competence</span>
                  <ul>
                    <li>
                      - PLO4.1: Ability to criticize old and outdated knowledge
                      and educational methods; Forming alternative solutions in
                      conditions of innovation.
                    </li>
                    <li>
                      - PLO4.2: Ability to research, observe, study and evaluate
                      the current state of library information, school
                      equipment, archives, and application of information
                      technology as a basis for proposing methods and effective
                      implementation.
                    </li>
                    <li>
                      - PLO4.3: Ability to evaluate the work efficiency of
                      oneself and colleagues and adjust work plans to suit
                      reality.
                    </li>
                  </ul>
                </li>
              </ol>
            </section>

            <section>
              <h1 className="font-bold">
                IV. EMPLOYMENT POSITION OF STUDENTS AFTER GRADUATION
              </h1>
              <ol>
                <li>
                  <span className="font-bold">
                    1.Library - School equipment major.
                  </span>
                  <ul>
                    <li>
                      - Work as a librarian - school equipment staff at schools,
                      Continuing Education Centers, universities, colleges,
                      vocational schools, companies, and businesses.
                    </li>
                    <li>
                      - Working as an expert at Departments of Education and
                      Training; Department of Culture, Sports and Tourism;
                      Cultural and Information Center.
                    </li>
                    <li>
                      - Work as an officer at information – library centers,
                      research institutes, Vietnam Academy of Social Sciences,
                      and book and school equipment companies.
                    </li>
                  </ul>
                </li>
                <li>
                  <span className="font-bold">2. Archives major:</span>
                  <ul>
                    <li>
                      - Work at the office of all agencies, businesses and
                      organizations; National Archives; Industry archives.
                    </li>
                    <li>
                      - Work as a teacher at training institutes for clerks,
                      archives and office administration.
                    </li>
                  </ul>
                </li>
                <li>
                  <span className="font-bold">
                    3. Applied Information Technology major.
                  </span>
                  <ul>
                    <li>
                      - Work in IT departments of agencies, units, organizations
                      and businesses.
                    </li>
                    <li>
                      - Working in consulting companies and businesses on
                      proposing solutions, building and maintaining information
                      systems, network and mass media.
                    </li>
                    <li>
                      - Work as a teacher at high schools and related training
                      institutes.
                    </li>
                  </ul>
                </li>
              </ol>
            </section>

            <section>
              <h1 className="font-bold">
                V. ABILITY TO STUDY AND IMPROVE QUALIFICATIONS AFTER GRADUATION
              </h1>
              <ul>
                <li>
                  - Self-study and scientific research according to specialized
                  training.
                </li>
                <li>
                  - Study a second university major with the same admission
                  subjects such as: Multimedia Communications, Public
                  Relations...
                </li>
                <li>
                  - Study at master's and doctoral levels at domestic and
                  foreign training institutions.
                </li>
              </ul>
            </section>
          </div>
        );

      default:
        return <></>;
    }
  };

  return (
    <section className="w-full">
      <div className="w-full">
        <img style={contentStyle} src="/img/ban5.png" alt="banner 2" />
      </div>
      <section className="bg-gray-100 w-full text-orange-500 font-bold  justify-between items-center px-20 py-8">
        <p className="text-3xl border-b-4 text-center">Academics</p>
        <section id="functional_unit">
          <p className="text-2xl mt-8">Formal Training</p>
          <div className="flex text-black border-black mt-4">
            <div className="title w-1/3 rounded-l-xl bg-orange-400">
              {ACADEMICS_FORMAL_TRAINING.map((item) => (
                <div
                  key={item.id}
                  onClick={() => handleChangeUnit(item.id)}
                  className={`border-b font-normal text-xl flex justify-between items-center cursor-pointer text-white hover:text-gray-300 px-4 py-2 `}
                >
                  <a className={`${unitId === item.id ? "text-gray-300" : ""}`}>
                    {item.title}
                  </a>
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
export default FormalTraining;
