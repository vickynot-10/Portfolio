import HomeClient from "./HomeClient";
import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaNodeJs,
  FaAngular,
  FaReact,
  FaGitAlt,
  FaPython,
  FaDocker,
  FaKey,
  FaSitemap,FaLink,
  FaCubes,
} from "react-icons/fa";
import {
  SiGmail,
  SiMongodb,
  SiRedis,
  SiSocketdotio,
  SiTypescript,
  SiJavascript,
  SiNextdotjs,
  SiExpress,
  SiC,
  SiCplusplus,
  SiFastify,
  SiMysql,
  
} from "react-icons/si";
import { MdOutlineSync } from "react-icons/md";

const skill_icon_map: Record<string, React.ReactNode> = {
  JavaScript: <SiJavascript className="text-yellow-400" />,
  TypeScript: <SiTypescript className="text-blue-400" />,
  Python: <FaPython className="text-blue-300" />,
  C: <SiC className="text-blue-500" />,
  "C++": <SiCplusplus className="text-blue-600" />,
  React: <FaReact className="text-cyan-400" />,
  "Next.js": <SiNextdotjs className="text-slate-200" />,
  Angular: <FaAngular className="text-red-500" />,
  "Node.js": <FaNodeJs className="text-green-500" />,
  "Express.js": <SiExpress className="text-slate-300" />,
  Fastify: <SiFastify className="text-slate-200" />,
  MongoDB: <SiMongodb className="text-green-400" />,
  Redis: <SiRedis className="text-red-400" />,
  MySQL: <SiMysql className="text-blue-400" />,
  "Socket.IO": <SiSocketdotio className="text-slate-200" />,
  Git: <FaGitAlt className="text-orange-400" />,
  GitHub: <FaGithub className="text-slate-200" />,
  Docker: <FaDocker className="text-blue-400" />,
  Webhooks: <FaLink className="text-purple-400" />,
  BullMQ: <FaCubes className="text-red-400" />,
  PM2: <FaNodeJs className="text-green-400" />,
  "S3-Compatible Storage": <FaCubes className="text-orange-400" />,
  JWT: <FaKey className="text-yellow-500" />,
  OAuth: <FaKey className="text-yellow-400" />,
  "REST APIs": <FaSitemap className="text-teal-400" />,
  "CI/CD": <MdOutlineSync className="text-green-400" />,
  Microservices: <FaCubes className="text-indigo-400" />,
};

const experience = [
  {
    year: "Mar 2025 – Present",
    role: "Software Engineer",
    company: "AAPGS Private Limited",
    description: [
  "Reduced database write operations by 98% by buffering IoT payloads in Redis and flushing via background worker using insertMany, replacing per-event individual inserts.",
  "Built REST APIs and Angular/React UIs for IoT and SaaS products, owning features end-to-end from MongoDB schema design through frontend integration.",
  "Designed multi-tenant architecture with dynamic per-tenant database switching and JWT-based authentication.",
  "Engineered OTP-based delivery verification for e-commerce platform, generating OTP via UPI request to PayU pre-delivery and validating against delivery agent and customer input to prevent fraudulent order confirmation.",
  "Built idempotent PayU payment integration with hash-based signature verification and retry-safe txn id handling to prevent duplicate transactions.",
],
    skills: [
      "React",
      "Angular",
      "Next.js",
      "Node.js",
      "TypeScript",
      "MongoDB",
      "PayU",
    ],
  },
  {
    year: "Dec 2024 – Feb 2025",
    role: "Web Developer",
    company: "E-CareerPluz Private Limited",
    description: [
      "Built a responsive business website with PHP backend handling contact forms, subscription emails, and notifications.",
      "Crafted interactive UI using HTML, CSS, and JavaScript for a digital services and legal advisory platform.",
    ],
    skills: ["HTML", "CSS", "Bootstrap", "JavaScript", "PHP"],
  },
];

const projects = [
  {
    name: "DeployDock",
    company: "Personal Project",
    github: "https://github.com/vickynot-10/DeployDock",
    stack: [
      "Next.js",
      "Node.js",
      "TypeScript",
      "MongoDB",
      "SSH",
      "PM2",
      "SSE",
      "Docker",
    ],
    desc: [
  "Built a self-hosted Continuous Integration/Continuous Deployment (CI/CD) platform with SSH-based remote deployments, PM2 process management, and git-based rollback support.",
  "Automated deployments via GitHub webhook integration, supporting both SSH-based and Docker-based deployment targets while tracking commit SHAs and full deployment history.",
  "Streamed deploy logs in real time via SSE backed by worker threads, keeping the deployment pipeline non-blocking under concurrent jobs.",
  "Built a post-deploy notification system sending deployment status updates via email and WhatsApp, keeping teams informed without manually checking the pipeline.",
],
  },
  {
    name: "ProfluxIoT",
    company: "AAPGS Private Limited",
    github: null,
    stack: ["Angular", "Node.js", "MongoDB", "Redis", "Socket.IO", "ECharts"],
    desc: [
  "Architected a scalable IoT platform with per-tenant database isolation and JWT-based authentication.",
  "Eliminated per-emit MongoDB reads by caching dashboard metadata in Redis with NX locks, reducing query latency on every real-time data push.",
  "Delivered a configurable dashboard system with drag-and-drop chart and table widgets, supporting multiple dashboards per user each subscribing to its own room for targeted real-time updates.",
],
  },
];

const skills = [
  {
    title: "Languages",
    val: ["JavaScript", "TypeScript", "Python", "C", "C++"],
  },
  {
    title: "Frameworks",
    val: ["React", "Next.js", "Angular", "Node.js", "Express.js", "Fastify"],
  },
  { title: "Databases", val: ["MongoDB", "Redis", "MySQL"] },
  { title: "Tools & Technologies", val: ["Git", "GitHub", "Docker", "Webhooks", "Socket.IO", "BullMQ", "PM2", "S3-Compatible Storage"] },
  { title: "Concepts", val: ["JWT", "OAuth", "REST APIs", "CI/CD", "Microservices"] },
];
const nav_items = [
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Experience", id: "experience" },
  { label: "Projects", id: "projects" },
];

const social_links = [
  { icon: <FaGithub />, href: "https://github.com/vickynot-10" },
  {
    icon: <FaLinkedin />,
    href: "https://www.linkedin.com/in/vignesh-s-512245293/",
  },
  {
    icon: <FaWhatsapp />,
    href: "https://wa.me/916382409401?text=Hello%20There!",
  },
  { icon: <SiGmail />, href: "mailto:vigneshselvam504@gmail.com" },
];

export default function Home() {
  return (
    <HomeClient
      experience={experience}
      projects={projects}
      skills={skills}
      nav_items={nav_items}
      social_links={social_links}
      skill_icon_map={skill_icon_map}
    />
  );
}
