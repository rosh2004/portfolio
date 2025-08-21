import { FaAngular, FaReact } from "react-icons/fa";
import { Project } from "../../../types";
import { SiDotnet, SiMaterialdesign, SiNestjs, SiPrimeng, SiShadcnui, SiSqlite, SiSupabase, SiTypescript } from "react-icons/si";
import { BsBootstrapFill } from "react-icons/bs";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";

export const ProjectList: Project[] = [

  {
    type: "professional",
    title: "Jayu Merchant Portal - B2B",
    description: "Led the front-end in an Angular 16 project using PrimeNG, Bootstrap, Reactive Forms, RxJS, and NgRX, delivering 20+ pixel-perfect, responsive pages from Figma designs. Built shared components, followed strict TypeScript practices, and ensured quality with thorough unit testing.",
    images: [
      "https://2ddyvmtgjt.ufs.sh/f/7kE3rOCyK0iETfqecrXY6Ex5y02adPDIg9QbhUVfAwemtClL",
      "https://2ddyvmtgjt.ufs.sh/f/7kE3rOCyK0iENmr8A7UKyTaKtz1eb3Movcr7S0jfPBuL4A5U",
      "https://2ddyvmtgjt.ufs.sh/f/7kE3rOCyK0iEErbKltkxdDlrvhPKGVeFnRIX5jQ2BL849Msp",
      "https://2ddyvmtgjt.ufs.sh/f/7kE3rOCyK0iEpiZSMkrT7HJNFoIPOL8UME4xd0z5ZvwfnkuV",
      "https://2ddyvmtgjt.ufs.sh/f/7kE3rOCyK0iE4esFDyLiuNOv1jowpB90ZX4tm8LM53yPDKnG",
      "https://2ddyvmtgjt.ufs.sh/f/7kE3rOCyK0iEXMym0o1ubPOM8oYtdAnVxB6NlQKFk4yDRevI",
      "https://2ddyvmtgjt.ufs.sh/f/7kE3rOCyK0iEBo6hUUy7IL4G9Sm1gkoUJpKCBQ6w5ubPZjhF",
      "https://2ddyvmtgjt.ufs.sh/f/7kE3rOCyK0iE1NaUHqVAETQCMgL4u8mWhcjfYsa0ZwdtDeiz",
      "https://2ddyvmtgjt.ufs.sh/f/7kE3rOCyK0iEqyOEWoRFvOQj1wTIgxCGu7DfSAEXp8l9zU0k",
      "https://2ddyvmtgjt.ufs.sh/f/7kE3rOCyK0iE3LLzquSjzTMFO4YkPUb1ldwDauxcBXqpRNtr",
      "https://2ddyvmtgjt.ufs.sh/f/7kE3rOCyK0iEndHNpG1cI65hHWwZ4DJiMQVqyv9lm8kEdsO7",
      "https://2ddyvmtgjt.ufs.sh/f/7kE3rOCyK0iEFGDosMTxT0d5NfWZtuyOKr4GA3i8BcneYXsw",
    ],
    icons: [FaAngular, SiTypescript, SiPrimeng, BsBootstrapFill],
  },
  {
    type: "professional",
    title: "AI/LLM Assisted Contract Management System",
    description: "Developed clean, scalable, and tested code by creating custom components, complex hooks, and layered architecture, using Tailwind CSS and component libraries. Optimized performance to prevent memory leaks and control rendering. Worked on API development in Nest, server functions, server actions, and the App Router. Leveraged Syncfusion for features like Kanban boards, document editors, PDF viewers, and rich text editors, used migrations for Supabase DB updates, and resolved multiple complex bugs.",
    images: [
      "https://2ddyvmtgjt.ufs.sh/f/7kE3rOCyK0iEF1WqKkGTxT0d5NfWZtuyOKr4GA3i8BcneYXs",
      "https://2ddyvmtgjt.ufs.sh/f/7kE3rOCyK0iELSg8sZMdCqWwpOvfgBJyH2hzIij9EDaYbsrk",
      "https://2ddyvmtgjt.ufs.sh/f/7kE3rOCyK0iEZs969hmJsQRAXVWegvhSfDcFa0xOLGt4d79M",
      "https://2ddyvmtgjt.ufs.sh/f/7kE3rOCyK0iEpzuXBPrT7HJNFoIPOL8UME4xd0z5ZvwfnkuV"
    ],
    icons: [RiNextjsFill, RiTailwindCssFill, SiTypescript, FaReact, SiSupabase, SiShadcnui, SiNestjs]
  },
  {
    type: "professional",
    title: "Label Designer - HTML5 Canvas",
    description: "Developed a graphics designer tool for creating labels with barcodes, QR codes, and text using the Konva.js library. The tool was built over Angular 15 and Material UI. It had a dashboard where multiple users were able to create view and edit labels based on their role and the company they were reigsterd with as it was multi tenant program. Major feature was the label editor tool where Konva.JS was used to handle HTML5Canvas in order to make a canvas where items could be dragged, dropped, scaled, resize, rotated, aligned, grouped and updated. It was a new challange, I lead the decisions, developed plan and solved major strategies faced in this project",
    images: [
      "https://utfs.io/f/7kE3rOCyK0iEzlqR0GDec5qRMFdXrIYktxJTl1ePN40ASCEy", 
      "https://utfs.io/f/7kE3rOCyK0iEjRf9UbEFMJBDrsxYytiRhXnULoKWEdq3vP1N",
      "https://utfs.io/f/7kE3rOCyK0iENmoH23jKyTaKtz1eb3Movcr7S0jfPBuL4A5U",
      "https://utfs.io/f/7kE3rOCyK0iEpcODfnMrT7HJNFoIPOL8UME4xd0z5Zvwfnku"
    ],
    icons: [FaAngular, SiTypescript, SiPrimeng, SiMaterialdesign]
  },
  {
    type: "professional",
    title: "Product Supply Chain Tracking Solution",
    description: "Developed the frontend of a multi-tenant management portal using Angular 13 and Kendo UI, enabling customers to register programs, add items, and manage custom incidents and events. Designed dynamic grids with advanced filtering, customizable views, and CSV export, integrated with Google Maps to visualize real-time data clusters and lifecycle triggers. Solved complex challenges in tracking and visualizing large datasets, ensuring a responsive and intuitive UI while optimizing performance. Collaborated effectively with backend teams to deliver a seamless, data-driven experience.",
    images: [
      "https://utfs.io/f/7kE3rOCyK0iEDY82ZR6pMci580DnAX6vZRtakez4hfyxouWY", 
      "https://utfs.io/f/7kE3rOCyK0iEF1X5HsrTxT0d5NfWZtuyOKr4GA3i8BcneYXs",
      "https://utfs.io/f/7kE3rOCyK0iEF5YYwGTxT0d5NfWZtuyOKr4GA3i8BcneYXsw",
      "https://utfs.io/f/7kE3rOCyK0iELcVdtsMdCqWwpOvfgBJyH2hzIij9EDaYbsrk",
      "https://utfs.io/f/7kE3rOCyK0iEEW50LpkxdDlrvhPKGVeFnRIX5jQ2BL849Msp"
    ],
    icons: [FaAngular, SiTypescript, SiDotnet]
  },
  // PERSONAL PROJECTS
  
  {
    type: "personal",
    title: "Chart UI (Angular + ECharts)",
    description: "A demonstration project using Apache ECharts with Angular and TailwindCSS to create highly customized charts. This project features a functioning chart UI for demonstration purposes.",
    images: ['https://2ddyvmtgjt.ufs.sh/f/7kE3rOCyK0iEbJjFYIlpWNYo26U9x4ukD5icGnzTB7vXwOgZ'],
    projectLink: "https://chart-ui-angular.netlify.app/",
    sourceCodeLink: "https://github.com/rosh2004/mobile-chart-ui"
  },
  {
    type: "personal",
    title: "Chart Animations (Angular + ECharts)",
    description: "A demonstration project using Apache ECharts with Angular and TailwindCSS to showcase chart customized animations. This project features a functioning animated chart for demonstration purposes.",
    images: ['https://2ddyvmtgjt.ufs.sh/f/7kE3rOCyK0iETH025NXY6Ex5y02adPDIg9QbhUVfAwemtClL'],
    projectLink: "https://chart-mobile-animation.netlify.app/",
    sourceCodeLink: "https://github.com/rosh2004/chart-mobile-animation"
  },
  {
    type: "personal",
    title: "Personal Portfolio Website",
    description: "A modern portfolio website built with NextJS the one you are currently viewing. It features a responsive design. Check sourcecode for repository with more details and code",
    images: ["https://utfs.io/f/7kE3rOCyK0iEKoo5eOSZIX3hjKMJaDYSoP79Gte6Zx5lu4qy"],
    projectLink: "https://roshaantech.com/",
    sourceCodeLink: "https://github.com/rosh2004/portfolio",
  },
  {
    type: "personal",
    title: "MDX Blog posts sourced from github repo with NextJS",
    description: "Next JS Blog that is statically generated and uses github repo for the blogposts, It utilizes MDX for writing blog posts.",
    images: ["https://2ddyvmtgjt.ufs.sh/f/7kE3rOCyK0iELeoTqomMdCqWwpOvfgBJyH2hzIij9EDaYbsr"],
    projectLink: "https://blog.roshfire.com/",
    sourceCodeLink: "https://github.com/rosh2004/my-nextjs-remote-mdx-blog",
  },
  
];
