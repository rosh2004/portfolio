import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { TimelineSteps } from "../../../types";
import { SiJest, SiSupabase, SiTypescript } from "react-icons/si";
import { FaAngular, FaDocker, FaReact } from "react-icons/fa";

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
    description: "",
    teams: [
      {
        title: "Research and Development - DevOps",
        description: "Description for Devops",
        icons: [RiNextjsFill, RiTailwindCssFill, SiTypescript, FaReact, SiSupabase, FaDocker],
      },
      {
        title: "Label Designer - HTML5 Canvas",
        description: "Description for Tag Designer",
        icons: [FaAngular, SiTypescript],
      },
      {
        title: "Forex Exchange Internal Management System",
        description: "AFX Description",
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
    description: "SE Description",
    teams: [
      {
        title: "HR Management System",
        description: "ATLAS Description",
        icons: [FaReact, RiTailwindCssFill, SiTypescript, SiJest],
      },
      {
        title: "Product Supply Chain Tracking Solution",
        description: "Digitrax Description",
        icons: [FaAngular, SiTypescript],
      },
    ],
  },
];
