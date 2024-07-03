import { BsAward } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";
import { HiOutlineBriefcase } from "react-icons/hi";

// images
import packurbags from "../assets/packurbags.png";

export const statistics = [
  {
    id: 1,
    title: "Completed",
    desc: "― 5+ projects",
    icon: HiOutlineBriefcase,
  },
  {
    id: 2,
    title: "Experience",
    desc: "― 1 year",
    icon: BsAward,
  },
  {
    id: 3,
    title: "Support",
    desc: "― Online 24/7",
    icon: BiSupport,
  },
];

export const skills = [
  {
    id: 1,
    name: "Java",
    progress: "70",
  },
  {
    id: 2,
    name: "Python",
    progress: "70",
  },
  {
    id: 3,
    name: "JavaScript",
    progress: "60",
  },
  {
    id: 4,
    name: "HTML",
    progress: "60",
  },
  {
    id: 5,
    name: "CSS",
    progress: "50",
  },
  {
    id: 6,
    name: "ReactJS",
    progress: "70",
  },
  {
    id: 7,
    name: "SQL",
    progress: "80",
  },
  {
    id: 8,
    name: "Git/Github",
    progress: "50",
  },
  {
    id: 9,
    name: "NodeJS",
    progress: "30",
  },
  {
    id: 10,
    name: "ExpressJS",
    progress: "40",
  },
  {
    id: 11,
    name: "MongoDB",
    progress: "50",
  },
];
// Category
// Web Application
// AIML
// Mini Projects
export const projects = [
  {
    id: 1,
    img: packurbags,
    category: "Web application",
    name: "Pack Ur Bags",
    languages: ["HTML", "CSS", "JavaScript", "React JS", "Redux", "MongoDB"],
    desc: "― Attractive website with eight types of tour packages for year-round family vacations.",
    preview: "https://frontend-packurbags.onrender.com/",
    code: "https://github.com/rahulvarma5297/PACK-UR-BAGS",
  },
];
