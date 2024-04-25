export const BASE_API_URL = import.meta.env.VITE_API_URL;

export const TOKEN_KEY = import.meta.env.VITE_TOKEN_KEY;
export const ACADEMICS_FUCTIONAL_UNITS = [
  {
    id: 1,
    title: "Department of General Administration",
  },
  {
    id: 2,
    title: "Department of Personnel Organization",
  },
  {
    id: 3,
    title: "Department of Finance & Planning",
  },
  {
    id: 4,
    title: "Department of Training Management",
  },
  {
    id: 5,
    title: "Department of Postgraduate Training",
  },
  {
    id: 6,
    title: "Department of Politics & Student Affairs",
  },
  {
    id: 7,
    title: "Department of Scientific Management - International Cooperation",
  },
  {
    id: 8,
    title: "Department of Inspection",
  },
  {
    id: 9,
    title: "Department of Testing and Quality Assurance",
  },
  {
    id: 10,
    title: "Department of Facilities Management",
  },
  {
    id: 11,
    title: "Center of Admissions Consulting and Job Introduction",
  },
  {
    id: 12,
    title: "Center of Joint and Continuous Training",
  },
  {
    id: 13,
    title: "Center of Informatics – Foreign Languages",
  },
  {
    id: 14,
    title: "Center of Tourism Training & Event Organization",
  },
  {
    id: 15,
    title: "Center of Library and Information",
  },
];

export const FACULTY_UNITS = [
  {
    id: 1,
    title: "Faculty of Culture and Information",
  },
  {
    id: 2,
    title: "Falcuty of Music",
  },
  {
    id: 3,
    title: "Falcuty of Fine Arts",
  },
  {
    id: 4,
    title: "Faculty of Tourism",
  },
  {
    id: 5,
    title: "Falcuty of Physical Education and Sports",
  },
  {
    id: 6,
    title: "Falcuty of Prechool  - Primary Education",
  },
  {
    id: 7,
    title: "Faculty of Law and State management",
  },
  {
    id: 8,
    title: "Falcuty of Foreign Languages",
  },
];

export const ACADEMICS_TRAINING_PROGRAM = [
  {
    parent_title: "Doctor of Science",
    children_title: [
      {
        title: "Cultural Management",
        link: "doctor-of-culture-management",
      },
    ],
  },
  {
    parent_title: "Master",
    children_title: [
      {
        title: "Cultural Management",
        link: "master-of-culture-management",
      },
      {
        title: "Public Management",
        link: "master-of-public-administration-management",
      },
    ],
  },
  // {
  //   parent_title: "Gifted intermediate level",
  //   children_title: [
  //     "Vocal music",
  //     "Performing Western musical instruments",
  //     "Art",
  //   ],
  // },
  // {
  //   parent_title: "Primary vocational certificate",
  //   children_title: [
  //     "Restaurant operations",
  //     "Hotel management",
  //     "Cooking techniques",
  //     "Hotel receptionist operations",
  //     "Room service",
  //     "Industrial machines",
  //     "Graphics",
  //   ],
  // },
];
export const ACADEMICS_FORMAL_TRAINING = [
  {
    id: 1,
    title: "EARLY CHILDHOOD EDUCATION",
  },
  {
    id: 2,
    title: "MUSIC EDUCATION",
  },
  {
    id: 3,
    title: "ART EDUCATION",
  },
  {
    id: 4,
    title: "VOCAL MUSIC",
  },
  {
    id: 5,
    title: "FASHION DESIGN",
  },
  {
    id: 6,
    title: "GRAPHIC",
  },
  {
    id: 7,
    title: "TOURISM",
  },
  {
    id: 8,
    title: "SPORTS TRAINING MAJOR",
  },
  {
    id: 9,
    title: "INFORMATICS TEACHER EDUCATION",
  },
  {
    id: 10,
    title: "TOURISM AND TRAVEL SERVICE MANAGEMENT",
  },
  {
    id: 11,
    title: "HOTEL MANAGEMENT",
  },
  {
    id: 12,
    title: "PHYSICAL EDUCATION",
  },
  {
    id: 13,
    title: "PHYSICAL EDUCATION",
  },
  {
    id: 14,
    title: "ENGLISH LANGUAGE",
  },
  {
    id: 15,
    title: "LAW",
  },
  {
    id: 16,
    title: "STATE MANAGEMENT",
  },
  {
    id: 17,
    title: "COMMUNICATION TECHNOLOGY",
  },
  {
    id: 18,
    title: "SOCIAL WORK MAJOR",
  },
  {
    id: 19,
    title: "PRIMARY EDUCATION",
  },
  {
    id: 20,
    title: "CULTURAL MANAGEMENT MAJOR",
  },
  {
    id: 21,
    title: "LIBRARY AND INFORMATION SCIENCE",
  },
];
