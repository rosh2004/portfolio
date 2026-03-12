import { RiNextjsFill, RiTailwindCssFill, RiVercelFill } from "react-icons/ri";
import { TimelineSteps } from "../../../types";
import { SiJest, SiNgrx, SiPrimeng, SiSupabase, SiTypescript } from "react-icons/si";
import { FaAngular, FaReact } from "react-icons/fa";
import { SiNestjs } from "react-icons/si";
import { SiReactivex } from "react-icons/si";

export const WORK_EXPERIENCE_LIST: TimelineSteps = [
  {
    from: "Jan 2025",
    to: "Jan 2026",
    company: {
      name: "Contract - Remote",
    },
    title: "Lead Frontend Developer",
    description: "Led the entire frontend development for a B2B Merchant Loyalty Platform, managing planning and delivery across two major project phases.",
    teams: [
      {
        title: "Jayu Portal (B2B Merchant Loyalty Platform)",
        description: "Led entire frontend development with 2,013 hours total (Phase 1: 955 | Phase 2: 1,057). Migrated Angular 16 to 20, PrimeNG 16 to 20, and PrimeFlex to TailwindCSS. Built 50+ custom components and 30+ pages from Figma designs. Implemented complex reactive forms with JSON tree parsing and 100+ conditional triggers.",
        icons: [FaAngular, SiTypescript, SiPrimeng, RiTailwindCssFill, SiNgrx, SiReactivex],
      },
    ],
  },
  {
    from: "Jun 2023",
    to: "Jul 2025",
    company: {
      name: "Techlogix Pvt Limited",
      url: "https://www.techlogix.com/",
      linkedin: "https://www.linkedin.com/company/techlogix/",
    },
    title: "Senior Software Engineer (SSE)",
    description: "Collaborated with multiple teams and projects as a Fullstack Developer, significantly contributing to research and development, strategic planning, decision-making, and problem-solving.",
    teams: [
      {
        title: "Awarded AI Team - Contract Management System",
        description: "Developed AI-assisted contract management platform using Next.js 14, NestJS, Supabase, and Vercel. Built features including Kanban boards, document editors, and PDF viewers.",
        icons: [RiNextjsFill, SiNestjs, SiSupabase, RiVercelFill, SiTypescript, FaReact],
      },
      {
        title: "Label Designer - HP NiceLabel Integration",
        description: "Developed a graphics designer tool for creating labels with barcodes, QR codes, and text using Konva.js library. Integrated with HP NiceLabel for printing. Implemented concurrent editing with SignalR and auto-save functionality. Led the front-end development of the project.",
        icons: [FaAngular, SiTypescript],
      },
      {
        title: "Al Fardan Exchange - Management System",
        description: "Developed 24 screens in 3 weeks for a Forex Exchange company using Angular and Kendo UI. Successfully delivered modules with full CRUD functionality, resulting in improved project timelines and client satisfaction.",
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
