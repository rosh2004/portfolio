import { RiNextjsFill, RiTailwindCssFill, RiVercelFill } from "react-icons/ri";
import { TimelineSteps } from "../../../types";
import { SiJest, SiSupabase, SiTypescript } from "react-icons/si";
import { FaAngular, FaDocker, FaReact } from "react-icons/fa";
import { GrGraphQl } from "react-icons/gr";

export const WORK_EXPERIENCE_LIST: TimelineSteps = [
  {
    from: "2023",
    to: "Present",
    company: {
      name: "Techlogix Pvt Limited",
      url: "https://www.techlogix.com/",
      linkedin: "https://www.linkedin.com/company/techlogix/",
    },
    title: "Senior Software Engineer (SSE)",
    description: "Collaborated with multiple teams and projects as a Fullstack Developer, significantly contributing to research and development, strategic planning, decision-making, and problem-solving.",
    teams: [
      {
        title: "Research and Development - DevOps",
        description: "Conducting research on new technologies and DevOps practices to integrate them into the company's infrastructure.",
        icons: [RiNextjsFill, RiTailwindCssFill, SiTypescript, FaReact, SiSupabase, FaDocker, RiVercelFill, GrGraphQl],
      },
      {
        title: "Label Designer - HTML5 Canvas",
        description: "Developed a graphics designer tool for creating labels with barcodes, QR codes, and text using the Konva.js library. Led the front-end development of the project.",
        icons: [FaAngular, SiTypescript],
      },
      {
        title: "Forex Exchange Internal Management System",
        description: "Developed multiple modules for an enterprise management system of a Forex Exchange company. Successfully delivered 2 sub-modules within 1.5 months, each comprising approximately 6 screens with full CRUD functionality, resulting in improved project timelines and client satisfaction.",
        icons: [FaAngular, SiTypescript],
      },
    ],
  },
  {
    from: "2021",
    to: "2023",
    company: {
      name: "Techlogix Pvt Limited",
      url: "https://www.techlogix.com/",
      linkedin: "https://www.linkedin.com/company/techlogix/",
    },
    title: "Software Engineer",
    description: "Served as a Front-End Developer, initially working on the Track and Trace Solution and eventually leading the front-end development. Later transitioned to React for an HR management system, working with various front-end technologies.",
    teams: [
      {
        title: "HR Management System",
        description: "Developed the pay slip module for a global Human Resource Management System using React, Tailwind, and TypeScript, with testing implemented using Jest. Collaborated with a team of over 50 members across multiple regions.",
        icons: [FaReact, RiTailwindCssFill, SiTypescript, SiJest],
      },
      {
        title: "Product Supply Chain Tracking Solution",
        description: "Joined the team during the initial design phase of version 2 of the application. Contributed to multiple modules and eventually led the front-end development. Utilized Angular with Kendo UI, Google Maps API, and geofencing to track the product supply chain from production to placement, configuring incidents and events throughout the lifecycle.",
        icons: [FaAngular, SiTypescript],
      },
    ],
  },
];
