import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Flusk Developer",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences: TExperience[] = [
  {
    title: "Mentor and Management Lead",
    companyName: "LetsGrowMore",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Jan 2021 - June 2021",
    points: [
      "Promoted campus awareness of activities and engagement opportunities with on-campus table tents, email distribution,and social media promotion.",
      "Hosted programs to connect students with non-student neighbours.",
      "Got letter of recommendation.",
      "Coordinated group and individual activities to promote creativity and perseverance in face of challenges.",
    ],
  },
  {
    title: "Software Developer Intern",
    companyName: "IBM",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "July 2021 - Nov 2022",
    points: [
      "Worked for a security based management system.",
      "Attended training to learn software development theory, techniques and coding best practices.",
      "Assisted in programme development through planning, designing, creating and testing.",
      "Gained in-depth expertise in various coding languages, including C++, Java and JavaScript.",
      "Had been a part of student developer community"
    ],
  },
  {
    title: "Software Developer Intern",
    companyName: "Misfits",
    icon: shopify,
    iconBg: "#383E56",
    date: "July 2023 - Current",
    points: [
      "Worked on the Web application and App development",
      "Gained real time experience and hand-on expertise in various frameworks MERN, Golang, Flask.",
    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "Moudipa has been a great colleague and a good problem solver. She has exceptional communication skills and is a go getter. She came up with quick and creative solutions to every problem and loves taking on challenges and explore new skills. She is a very curious person and will be my first call.",
    name: "Anuradha Khaitan",
    designation: "CFO",
    company: "LetsGrowmore",
    image: "https://media.licdn.com/dms/image/C5603AQH4ErrckDxoUA/profile-displayphoto-shrink_400_400/0/1662009151332?e=1714003200&v=beta&t=ukOCfIYbxU_zQGcGuK2RfxFbHKqHZhvcpFMqyPX7RVQ",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Shaswata Basu",
    designation: "COO",
    company: "Misfits",
    image: "https://media.licdn.com/dms/image/C4E03AQEsXRa_L7xzXw/profile-displayphoto-shrink_400_400/0/1628615923488?e=1714003200&v=beta&t=yqBN3bgBw9PcJcyaBM2D_slvkLYu9N-5LT8s9bKaYbI",
  },
];

const projects: TProject[] = [
  {
    name: "Medicure",
    description:
      "The Medicine Recommendation System utilizes machine learning algorithms to analyze drug data, providing alternative medication suggestions based on user queries through a user-friendly Streamlit web interface.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "streamlit",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    sourceCodeLink: "https://github.com/Moudipa01/medicine-recommendation-system",
  },
  {
    name: "Automated Tagging System for Stack Overflow",
    description:
      "Revolutionizing content categorization on Stack Overflow by employing machine learning algorithms and real-time tagging, enhancing efficiency, accuracy, and adaptability to evolving community trends.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "streamlit",
        color: "green-text-gradient",
      },
      {
        name: "python",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    sourceCodeLink: "https://github.com/Moudipa01/Stack-Overflow-Question-tag",
  },
  {
    name: "MetaBox| Mental Health Chatbot",
    description:
      "It is an attempt to cure depression among the people by understanding the root cause. It's developed from scrape with the intention of helping people in regulating their moods and barring negative thinking.",
    tags: [
      {
        name: "Pandas",
        color: "blue-text-gradient",
      },
      {
        name: "Flask",
        color: "green-text-gradient",
      },
    ],
    image: tripguide,
    sourceCodeLink: "https://github.com/Moudipa01/mental-health-chatbot",
  },
  
];

export { services, technologies, experiences, testimonials, projects };
