"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FaReact, FaNodeJs, FaAngular, FaGitAlt, FaPython, FaGithub } from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  SiNextdotjs,
  SiMongodb,
  SiRedis,
  SiSocketdotio,
  SiExpress,
} from "react-icons/si";
import { LuArrowLeft, LuInfo, LuX, LuExternalLink } from "react-icons/lu";

const skill_icon_map: Record<string, React.ReactNode> = {
  JavaScript: <SiJavascript className="text-yellow-400" />,
  TypeScript: <SiTypescript className="text-blue-400" />,
  Python: <FaPython className="text-blue-300" />,
  React: <FaReact className="text-cyan-400" />,
  "Next.js": <SiNextdotjs className="text-slate-200" />,
  Angular: <FaAngular className="text-red-500" />,
  "Node.js": <FaNodeJs className="text-green-500" />,
  "Express.js": <SiExpress className="text-slate-300" />,
  MongoDB: <SiMongodb className="text-green-400" />,
  Redis: <SiRedis className="text-red-400" />,
  "Socket.IO": <SiSocketdotio className="text-slate-200" />,
  Git: <FaGitAlt className="text-orange-400" />,
};

const projects = [
    {
    year: "2026",
    name: "DeployDock",
    company: "Personal Project",
    github: "https://github.com/vickynot-10/DeployDock",
    stack: ["Next.js", "Node.js", "TypeScript", "MongoDB", "SSH", "PM2", "SSE", "React Flow"],
    desc: [
      "Developed a self-hosted CI/CD platform supporting SSH-based remote deployments with PM2 process management and git-based rollbacks.",
      "Architected multi-tenant isolation with per-tenant MongoDB databases and AES-256-CBC encrypted SSH credentials.",
      "Implemented real-time log streaming via SSE using worker threads for non-blocking deploy pipelines.",
      "Integrated GitHub OAuth and webhook-based auto-deploy with commit SHA tracking and deployment history.",
      "Integrated React Flow to deliver a visual no-code automation editor supporting conditional notification workflows across SMTP, ZeptoMail, Twilio, and Meta WhatsApp API.",
    ],
  },
  {
    year: "2025",
    name: "ProfluxIoT – IoT Management",
    company: "AAPGS Private Limited",
    github: null,
    stack: ["Angular", "ECharts", "Gridster3", "FoblexFlow", "Node.js", "Express.js", "Socket.IO", "MongoDB", "Redis"],
    desc: [
      "Built a scalable IoT management system with multi-tenant architecture, implementing dynamic database switching based on user JWT authentication.",
      "Designed and developed CRUD modules for devices, categories, and location hierarchy (site → floor → device mapping).",
      "Implemented a dynamic dashboard builder allowing users to drag & drop widgets (charts, tables, gauges) using Gridster3.",
      "Developed configurable ECharts widgets (line, bar, pie, stacked, gauge, table) with dynamic input mapping (X/Y, multi-axis, thresholds).",
      "Optimized dashboard performance using Socket.IO push updates, ChangeDetectionStrategy.OnPush, and incremental chart updates via setOption(false).",
      "Leveraged MongoDB Time Series collections for high-frequency device data ingestion and efficient querying.",
      "Designed a Redis-first ingestion strategy, batching inserts via background workers (insertMany) to reduce database load.",
      "Built a rule-based automation engine using FoblexFlow with conditional nodes (AND/OR), HTTP, Email, WhatsApp actions.",
    ],
  },
  {
    year: "2025",
    name: "Keepwisely – Asset Management",
    company: "AAPGS Private Limited",
    github: null,
    stack: ["Angular", "OLA Maps API", "ECharts", "Gridster3", "Node.js", "Express.js", "Socket.IO", "MongoDB"],
    desc: [
      "Developed a custom analytics platform enabling users to create widgets by writing MongoDB queries with enforced response schemas.",
      "Built an admin query editor using CodeMirror and Prettier with validation for chart/table compatibility.",
      "Safely executed stored queries using Node.js worker processes, isolating runtime execution from the main thread.",
      "Integrated Ola Maps API to display real-time asset locations with dynamic latitude/longitude updates.",
      "Enabled live GPS tracking by streaming coordinates from Flutter mobile apps via Socket.IO to Angular dashboards.",
      "Integrated live video streaming using WebRTC (Flutter → Node → Angular) for real-time asset monitoring.",
    ],
  },
  {
    year: "2025",
    name: "Spicy Greens – Hotel & Dining Management",
    company: "AAPGS Private Limited",
    github: null,
    stack: ["Next.js", "MongoDB"],
    desc: [
      "Built a full-stack hotel and dining management system with separate client and admin applications.",
      "Implemented admin modules for managing hotels, food items, categories, availability status, and image galleries.",
      "Enabled dining reservation functionality with automated email notifications using Nodemailer.",
      "Implemented JWT cookie-based authentication with secure sign-up and sign-in flows for users and admins.",
      "Optimized performance by implementing lazy loading for images using Intersection Observer API.",
    ],
  },
  {
    year: "2025",
    name: "E-Digicard – Digital Business Card Platform",
    company: "AAPGS Private Limited",
    github: null,
    stack: ["Next.js", "MongoDB"],
    desc: [
      "Developed a multi-user digital business card platform with dynamic content rendering based on user IDs.",
      "Built an admin panel to manage products and embed YouTube videos dynamically.",
      "Implemented a feedback module to collect user responses and improve engagement.",
      "Designed a scalable content structure to support multiple users and personalized profiles.",
    ],
  },
  {
    year: "2025",
    name: "OKR – Real-time Chat & Collaboration",
    company: "AAPGS Private Limited",
    github: null,
    stack: ["Angular", "Node.js", "Express.js", "MongoDB", "Socket.IO"],
    desc: [
      "Developed a real-time chat module supporting one-to-one chats, group chats, and contact lists.",
      "Implemented real-time messaging using Socket.IO with support for images, files, and shared links.",
      "Added emoji reactions, message editing, and delete functionality to improve chat usability.",
      "Integrated browser notifications with sound alerts to notify users of new messages across the app.",
      "Initialized global socket connections to ensure notifications work outside the active chat view.",
    ],
  },
  {
    year: "2025",
    name: "Expense Tracker",
    company: "AAPGS Private Limited",
    github: null,
    stack: ["Node.js", "Express.js", "MongoDB", "Angular", "OneSignal"],
    desc: [
      "Developed backend APIs for a personal and group-based expense tracking application.",
      "Collaborated with Flutter developers to design and implement APIs for dashboards, transactions, and group management.",
      "Implemented group features including referral code invitations, shared expenses, and group transaction tracking.",
      "Built notification infrastructure using OneSignal for real-time alerts and reminders.",
      "Built an Angular-based admin panel with analytics dashboard displaying country-wise and gender-wise user metrics.",
    ],
  },
  
];

type Project = (typeof projects)[0];

function Modal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        onClick={onClose}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm"
      >
        <motion.div
          initial={{ opacity: 0, y: 32, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.97 }}
          transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          onClick={(e) => e.stopPropagation()}
          className="relative  w-[90%] bg-slate-900 border border-slate-700/60 rounded-2xl p-6 shadow-2xl"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-slate-500 hover:text-slate-200 transition-colors cursor-pointer"
          >
            <LuX size={18} />
          </button>

          <div className="flex items-start  gap-4 mb-1">
            <h2 className="text-slate-100 font-bold text-xl tracking-tight">{project.name}</h2>
            {project.github && (
              <Link
                href={project.github}
                target="_blank"
                className="flex items-center gap-1.5 text-teal-300 hover:text-teal-200 text-xs font-semibold transition-colors mt-1 shrink-0"
              >
                <FaGithub size={14} />
                GitHub
                <LuExternalLink size={12} />
              </Link>
            )}
          </div>

          <span className="inline-flex items-center text-xs font-medium text-slate-400 bg-slate-800 border border-slate-700 px-2.5 py-0.5 rounded-full mb-5">
            {project.company} · {project.year}
          </span>

          <ul className="space-y-3 mb-6">
            {project.desc.map((d, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06, duration: 0.3 }}
                className="flex gap-3 text-slate-400 text-sm leading-7"
              >
                <span className="text-teal-400 mt-2 shrink-0 w-1 h-1 rounded-full bg-teal-400 block" />
                {d}
              </motion.li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800">
            {project.stack.map((s, i) => (
              <span
                key={i}
                className="flex items-center gap-1.5 text-teal-300 text-xs font-medium bg-teal-400/10 px-3 py-1 rounded-full border border-teal-400/10"
              >
                {skill_icon_map[s] && <span className="text-sm">{skill_icon_map[s]}</span>}
                {s}
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function Projects() {
  const [selected, set_selected] = useState<Project | null>(null);

  return (
    <div className="min-h-screen w-full py-16 px-6 md:px-16 lg:px-24">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link
          href="/"
          className="group inline-flex items-center gap-2 text-teal-300 hover:text-teal-200 text-sm font-medium mb-8 transition-colors"
        >
          <span className="transition-transform duration-200 group-hover:-translate-x-1">←</span>
          Vignesh
        </Link>
        <h1 className="text-4xl md:text-5xl font-bold text-slate-200 tracking-tight mb-12">
          All Projects
        </h1>
      </motion.div>

      <div className="w-full overflow-x-auto">
        <table className="w-full min-w-[640px]">
          <thead>
            <tr className="border-b border-slate-700/60">
              {["Year", "Project", "Built at", "Built with", ""].map((h, i) => (
                <th
                  key={i}
                  className="pb-4 text-left text-xs font-bold uppercase tracking-widest text-slate-500 pr-6 last:pr-0"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {projects.map((p, i) => (
              <motion.tr
                key={i}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 + 0.2, duration: 0.4 }}
                className="group border-b border-slate-800/60 hover:bg-slate-800/30 transition-colors duration-200"
              >
                <td className="py-5 pr-6 text-slate-500 text-sm font-medium align-top">
                  {p.year}
                </td>

                <td className="py-5 pr-6 align-top">
                  <span className="text-slate-200 font-semibold text-sm group-hover:text-teal-300 transition-colors duration-200">
                    {p.name}
                  </span>
                </td>

                <td className="py-5 pr-6 align-top">
                  <span className="text-slate-400 text-sm whitespace-nowrap">{p.company}</span>
                </td>

                <td className="py-5 pr-6 align-top">
                  <div className="flex flex-wrap gap-2">
                    {p.stack.map((s, j) => (
                      <span
                        key={j}
                        className="flex items-center gap-1 text-teal-300 text-xs font-medium bg-teal-400/10 px-2.5 py-0.5 rounded-full border border-teal-400/10"
                      >
                        {skill_icon_map[s] && (
                          <span className="text-xs">{skill_icon_map[s]}</span>
                        )}
                        {s}
                      </span>
                    ))}
                  </div>
                </td>

                <td className="py-5 align-top">
                  <button
                    onClick={() => set_selected(p)}
                    className="cursor-pointer text-slate-500 hover:text-teal-300 transition-colors duration-200 p-1 rounded-lg hover:bg-teal-400/10"
                    title="View details"
                  >
                    <LuInfo size={17} />
                  </button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      <AnimatePresence>
        {selected && <Modal project={selected} onClose={() => set_selected(null)} />}
      </AnimatePresence>
    </div>
  );
}