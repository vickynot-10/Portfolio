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
} from "react-icons/si";

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
  MongoDB: <SiMongodb className="text-green-400" />,
  Redis: <SiRedis className="text-red-400" />,
  "Socket.IO": <SiSocketdotio className="text-slate-200" />,
  Git: <FaGitAlt className="text-orange-400" />,
  PM2: <FaNodeJs className="text-green-400" />,
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
      "Built a self-hosted CI/CD platform with SSH-based remote deployments, PM2 process management, and git-based rollback support.",
      "Designed multi-tenant isolation using per-tenant MongoDB databases and AES-256-CBC encrypted SSH credentials.",
      "Streamed deploy logs in real time via SSE backed by worker threads, keeping the deployment pipeline non-blocking under concurrent jobs.",
      "Automated deployments with GitHub OAuth and webhook integration, tracking commit SHAs and full deployment history.",
      "Supported Docker-based deployments alongside SSH, allowing containerized apps to be deployed and managed through the same CI/CD pipeline.",
    ],
  },
  {
    name: "ProfluxIoT",
    company: "AAPGS Private Limited",
    github: null,
    stack: ["Angular", "Node.js", "MongoDB", "Redis", "Socket.IO", "ECharts"],
    desc: [
      "Architected a scalable IoT platform with per-tenant database isolation and JWT-based authentication.",
      "Delivered a configurable dashboard system with drag-and-drop real-time ECharts and table widgets with user-level assignment.",
      "Eliminated per-emit MongoDB reads by caching dashboard metadata in Redis with NX locks, reducing query latency on every real-time data push.",
      "Engineered a visual automation engine using FoblexFlow enabling conditional workflows (HTTP, Email, WhatsApp) per device.",
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
    val: ["React", "Next.js", "Angular", "Node.js", "Express.js"],
  },
  { title: "Databases", val: ["MongoDB", "Redis"] },
  { title: "Tools & Libraries", val: ["Socket.IO", "PayU", "Git", "PM2"] },
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
