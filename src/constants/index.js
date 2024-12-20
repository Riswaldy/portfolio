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
    tailwind,
    nodejs,
    sql,
    git,
    figma,
    docker,
    meta,
    logop,
    cipus,
    kijara,
    expense,
    smokdet,
    serti1,
    serti2,
    nodered,
    serti3,
    serti4,
    serti5,
    iot,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "education",
      title: "education",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "IoT Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
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
      name: "Node Red",
      icon: nodered,
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
      name: "SQL",
      icon: sql,
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
  
  const experiences = [
    {
      title: "President University",
      company_name: "Cikarang Utara",
      icon: logop,
      iconBg: "#383E56",
      date: "August 2022 - present",
      points: [
        "Member of BEM Faculty of Communication and Multimedia.",
        "Become a Volunteer @transfornation_id as Social Media.",
        "Jababeka Scholarship Awardee.",
      ],
    },
    {
      title: "SMAN 1 Cikarang Pusat",
      company_name: "Cikarang Pusat",
      icon: cipus,
      iconBg: "#E6DEDD",
      date: "August 2018 - August 2021",
      points: [
        "Head of the School Flag Hoisting Troop (PASKIBRA).",
      ],
    },
    {
      title: "SMPN 1 Cikarang Utara",
      company_name: "Cikarang Utara",
      icon: kijara,
      iconBg: "#383E56",
      date: "July 2015 - July 2018",
      points: [
        "Main Champion 1 Best Danton.",
        "Third Runner Up Place in PASKIBRA Competition Representing Bekasi Regency at the National Level.",
      ],
    },
  ];
  
  const testimonials = [
    {
      name: "Generative AI",
      image: serti1,
    },
    {
      name: "Data Science",
      image: serti2,
    },
    {
      name: "Networking Basic",
      image: serti3,
    },
    {
      name: "Data Visualization",
      image: serti4,
    },
    {
      name: "Data Science",
      image: serti5,
    },
  ];
  
  const projects = [
    {
      name: "Expense Tracker",
      description:
        "An application to manage and track daily expenses efficiently.This app aims to help users monitor their spending patterns and improve financial planning.",
      tags: [
        {
          name: ".NET MVC(C#)",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "HTML",
          color: "pink-text-gradient",
        },
      ],
      image: expense,
      source_code_link: "https://github.com/Riswaldy/Expense-Tracker",
    },
    {
      name: "Smoking Detection",
      description:
        "This project implements a real-time smoking detection system using YOLOv8 and OpenCV. It is designed to detect individuals smoking in video streams or live camera feeds.",
      tags: [
        {
          name: "python3",
          color: "blue-text-gradient",
        },
        {
          name: "roboflow",
          color: "green-text-gradient",
        },
        {
          name: "YOLOv8",
          color: "pink-text-gradient",
        },
      ],
      image: smokdet,
      source_code_link: "https://github.com/Riswaldy/smoking-detection",
    },
    {
      name: "Monitoring Machine",
      description:
        "Development and Implementation of an IoT-Based Monitoring Application for the Trimming Machine M110S-1 (6 Ton) at PT Komatsu Undercarriage Indonesia.",
      tags: [
        {
          name: "NodeRed",
          color: "blue-text-gradient",
        },
        {
          name: "Javascript",
          color: "green-text-gradient",
        },
        {
          name: "python",
          color: "pink-text-gradient",
        },
      ],
      image: iot,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };