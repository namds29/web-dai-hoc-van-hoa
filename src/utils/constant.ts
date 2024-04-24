export const BASE_API_URL = import.meta.env.VITE_API_URL

export const TOKEN_KEY = import.meta.env.VITE_TOKEN_KEY
export const ACADEMICS_FUCTIONAL_UNITS = [
  {
    id: 1,
    title: "General Administration Department",
  },
  {
    id: 2,
    title: "Personnel Organization Department",
  },
  {
    id: 3,
    title: "Finance & Planning Department",
  },
  {
    id: 4,
    title: "Academic Affairs Department",
  },
  {
    id: 5,
    title: "Postgraduate Training Department",
  },
  {
    id: 6,
    title: "Politics & Student Affairs Department",
  },
  {
    id: 7,
    title: "Department of Scientific Management - International Cooperation",
  },
  {
    id: 8,
    title: "Inspection Department",
  },
  {
    id: 9,
    title: "Testing and Quality Assurance Department",
  },
  {
    id: 10,
    title: "Assets Management & Security Department",
  },
  {
    id: 11,
    title: "Advisory Center of Admission and Job",
  },
  {
    id: 12,
    title: "Center of Joint and Continuous Training",
  },
  {
    id: 13,
    title: "Informatics – Foreign Language Center",
  },
  {
    id: 14,
    title: "Center of Tourism training & Event Organization",
  },
  {
    id: 15,
    title: "Library and Information Center",
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
]

export const ACADEMICS_TRAINING_PROGRAM = [
  {
    parent_title: "Doctor of Science",
    children_title: [
      {
        title: "Cultural Management",
        link: "doctor-of-culture-management"
      }
    ],
  },
  {
    parent_title: "Master",
    children_title: [
      {
        title: "Cultural Management",
        link: "master-of-culture-management"
      },
      {
        title: "Public Management",
        link: "master-of-public-administration-management"
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
    title: "State Management",
  },
  {
    id: 17,
    title: "COMMUNICATION TECHNOLOGY MAJOR",
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