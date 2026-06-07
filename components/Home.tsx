"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
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
} from "react-icons/si";
import { LuDownload, LuExternalLink } from "react-icons/lu";

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
  PM2: <FaNodeJs className="text-green-400" />,
};

const experience = [
  {
    year: "Mar 2025 – Present",
    role: "Software Engineer",
    company: "AAPGS Private Limited",
    description: [
      "Engineered scalable full-stack applications using React, Angular, Next.js, Node.js, TypeScript, and MongoDB from REST API design to production deployment.",
      "Optimized MongoDB aggregation pipelines and backend logic for analytics dashboards, resolving data accuracy issues across reporting and shift calculation modules.",
      "Implemented real-time features using Socket.IO across multiple production applications, including live data updates, notifications, and event-driven UI rendering.",
      "Architected multi-tenant systems with dynamic database switching and JWT-based authentication across production applications.",
    ],
    skills: [
      "React",
      "Angular",
      "Next.js",
      "Node.js",
      "TypeScript",
      "MongoDB",
      "Socket.IO",
    ],
  },
  {
    year: "Dec 2024 – Feb 2025",
    role: "Web Developer",
    company: "E-CareerPluz Private Limited",
    description: [
      "Delivered a responsive business website offering digital services, consulting, and legal advisory.",
      "Implemented backend functionality using PHP to handle contact forms, subscription emails, and notifications.",
      "Crafted interactive user interfaces using HTML, CSS, and JavaScript to enhance user experience.",
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
      "React Flow",
    ],
    desc: [
      "Developed a self-hosted CI/CD platform supporting SSH-based remote deployments with PM2 process management and git-based rollbacks.",
      "Architected multi-tenant isolation with per-tenant MongoDB databases and AES-256-CBC encrypted SSH credentials.",
      "Implemented real-time log streaming via SSE using worker threads for non-blocking deploy pipelines.",
      "Integrated GitHub OAuth and webhook-based auto-deploy with commit SHA tracking and deployment history.",
      "Integrated React Flow to deliver a visual no-code automation editor supporting conditional notification workflows across SMTP, ZeptoMail, Twilio, and Meta WhatsApp API.",
    ],
  },
  {
    name: "ProfluxIoT",
    company: "AAPGS Private Limited",
    github: null,
    stack: [
      "Angular",
      "Node.js",
      "MongoDB",
      "Redis",
      "Socket.IO",
      "ECharts",
      "FoblexFlow",
    ],
    desc: [
      "Architected a scalable IoT platform with multi-tenant architecture using dynamic database switching based on JWT authentication.",
      "Delivered a configurable dashboard system with drag-and-drop real-time ECharts and table widgets with user-level assignment.",
      "Reduced database write operations by 98% by batching 50 documents per insertMany in background workers instead of individual inserts.",
      "Eliminated per-emit MongoDB reads by caching dashboard metadata in Redis with NX locks, reducing query latency on every real-time data push.",
      "Engineered a visual automation engine using FoblexFlow enabling conditional workflows (HTTP, Email, WhatsApp) per device.",
    ],
  },
];

const skills = [
  { title: "Languages", val: ["JavaScript", "TypeScript", "Python"] },
  {
    title: "Frameworks",
    val: ["React", "Next.js", "Angular", "Node.js", "Express.js"],
  },
  { title: "Databases", val: ["MongoDB", "Redis"] },
  {
    title: "Tools & Libraries",
    val: ["Socket.IO", "Git", "PM2"],
  },
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
  const [active_nav, set_active_nav] = useState("about");
  const card_refs = useRef<HTMLDivElement[]>([]);
  card_refs.current = [];

  const add_to_refs = (el: HTMLDivElement | null) => {
    if (el && !card_refs.current.includes(el)) card_refs.current.push(el);
  };

  function scroll_to_section(id: string) {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  useEffect(() => {
    const sections = document.querySelectorAll(
      "#about,#skills,#experience,#projects",
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) set_active_nav(entry.target.id);
        });
      },
      { rootMargin: "0px", threshold: 0.4 },
    );
    sections.forEach((s) => observer.observe(s));
    return () => sections.forEach((s) => observer.unobserve(s));
  }, []);

  useEffect(() => {
    const cards = card_refs.current;
    const enter = (hovered: HTMLDivElement) => {
      cards.forEach((c) => {
        c !== hovered
          ? c.classList.add("card-blurred")
          : c.classList.add("card-focused");
      });
    };
    const leave = () =>
      cards.forEach((c) => c.classList.remove("card-blurred", "card-focused"));
    cards.forEach((c) => {
      c.addEventListener("mouseenter", () => enter(c));
      c.addEventListener("mouseleave", leave);
    });
    return () => {
      cards.forEach((c) => {
        c.removeEventListener("mouseenter", () => enter(c));
        c.removeEventListener("mouseleave", leave);
      });
    };
  }, []);

  return (
    <div className="relative w-full min-h-screen">
      

      <div className="w-full flex flex-col lg:flex-row lg:justify-between py-12 lg:py-24 min-h-screen gap-0 lg:gap-8">
        <div className="lg:sticky lg:top-24 w-full lg:w-[46%] lg:self-start flex flex-col lg:justify-between lg:h-[calc(100vh-12rem)] mb-14 lg:mb-0">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-200 mb-4 tracking-tight">
              Vignesh
            </h1>
            <p className="text-lg md:text-xl font-semibold text-slate-200 mb-4">
              Software Engineer
            </p>
            <p className="text-sm text-slate-400 leading-7 ">
              I build and ship full-stack web applications — REST APIs,
              real-time Socket.IO systems, multi-tenant architectures, and
              developer tooling. I care about clean code, fast backends, and UIs
              that work well in production.
            </p>
          </div>

          <nav className="hidden lg:flex flex-col gap-3 my-8">
            {nav_items.map((item) => (
              <button
                key={item.id}
                onClick={() => scroll_to_section(item.id)}
                className={`group flex items-center gap-4 text-xs font-bold uppercase tracking-widest transition-all duration-200 text-left py-1 w-fit cursor-pointer bg-transparent border-none ${
                  active_nav === item.id
                    ? "text-slate-200"
                    : "text-slate-500 hover:text-slate-200"
                }`}
              >
                <span
                  className={`block h-px transition-all duration-200 ${
                    active_nav === item.id
                      ? "w-16 bg-slate-200"
                      : "w-8 bg-slate-500 group-hover:w-16 group-hover:bg-slate-200"
                  }`}
                />
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex flex-row items-center gap-5 mt-8 lg:mt-0">
            {social_links.map((s, i) => (
              <Link
                key={i}
                href={s.href}
                target="_blank"
                className="text-slate-400 hover:text-slate-200 text-2xl transition-colors duration-200"
              >
                {s.icon}
              </Link>
            ))}
          </div>
        </div>

        <div className="w-full lg:w-[50%] flex flex-col">
          <section id="about" className="scroll-mt-24 pb-16 lg:pb-24">
            <h2 className="lg:hidden text-xs font-bold uppercase tracking-widest text-slate-400 mb-6">
              About
            </h2>
            <p className="text-slate-400 leading-8 mb-5 text-sm md:text-base">
              I&apos;m a developer based in Madurai, Tamil Nadu. I spend most of
              my time building full-stack web apps, designing backend systems,
              and solving real engineering problems. I care about code
              that&apos;s clean, performant, and maintainable in production.
            </p>
            <p className="text-slate-400 leading-8 text-sm md:text-base">
              Currently a Software Engineer at{" "}
              <span className="text-slate-200 font-medium">
                AAPGS Private Limited
              </span>
              , where I&apos;ve built IoT dashboards, multi-tenant platforms,
              real-time data pipelines, and internal tooling — using React,
              Angular, Next.js, Node.js, and MongoDB.
            </p>
          </section>

          <section id="skills" className="scroll-mt-24 pb-16 lg:pb-24">
            <h2 className="lg:hidden text-xs font-bold uppercase tracking-widest text-slate-400 mb-6">
              Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {skills.map((item, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:border-teal-400/30 hover:bg-slate-800/80 transition-all duration-300"
                >
                  <p className="text-teal-300 text-xs font-bold uppercase tracking-widest mb-4">
                    {item.title}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {item.val.map((v, j) => (
                      <div key={j} className="flex items-center gap-1.5">
                        {skill_icon_map[v] && (
                          <span className="text-base">{skill_icon_map[v]}</span>
                        )}
                        <span className="text-slate-300 text-sm">{v}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section
            id="experience"
            className="scroll-mt-16 pb-16 lg:pb-24 flex flex-col gap-3"
          >
            <h2 className="lg:hidden text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">
              Experience
            </h2>
            {experience.map((item, i) => (
              <div
                key={i}
                ref={add_to_refs}
                className="group relative flex flex-col sm:grid sm:grid-cols-9 gap-2 sm:gap-4 p-4 rounded-xl transition-all duration-300 hover:bg-slate-800/50 cursor-default border border-transparent hover:border-slate-700/50"
              >
                <div className="sm:col-span-3">
                  <p className="text-slate-500 text-xs font-medium leading-relaxed">
                    {item.year}
                  </p>
                </div>
                <div className="sm:col-span-6">
                  <p className="text-slate-200 font-semibold text-sm mb-3 leading-relaxed">
                    {item.role}{" "}
                    <span className="text-slate-400 font-normal">
                      · {item.company}
                    </span>
                  </p>
                  <ul className="space-y-2 mb-4 max-h-48 overflow-y-auto pr-1 scrollbar-thin">
                    {item.description.map((d, j) => (
                      <li
                        key={j}
                        className="text-slate-400 text-sm leading-7 list-disc ml-4"
                      >
                        {d}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {item.skills.map((s, j) => (
                      <span
                        key={j}
                        className="text-teal-300 text-xs font-medium bg-teal-400/10 px-3 py-1 rounded-full border border-teal-400/10"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </section>

          <section
            id="projects"
            className="scroll-mt-24 flex flex-col gap-3 pb-16 lg:pb-24"
          >
            <h2 className="lg:hidden text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">
              Projects
            </h2>
            {projects.map((item, i) => (
              <div
                key={i}
                ref={add_to_refs}
                className="group relative flex flex-col sm:grid sm:grid-cols-9 gap-2 sm:gap-4 p-4 rounded-xl transition-all duration-300 hover:bg-slate-800/50 cursor-default border border-transparent hover:border-slate-700/50"
              >
                <div className="sm:col-span-3">
                  <p className="text-slate-500 text-xs font-medium leading-relaxed">
                    {item.company}
                  </p>
                </div>
                <div className="sm:col-span-6">
                  <div className="flex items-center gap-2 mb-3">
                    <p className="text-slate-200 font-semibold text-sm">
                      {item.name}
                    </p>
                    {item.github && (
                      <Link
                        href={item.github}
                        target="_blank"
                        className="text-slate-500 hover:text-teal-300 transition-colors duration-200 text-sm"
                      >
                        <LuExternalLink />
                      </Link>
                    )}
                  </div>
                  <ul className="space-y-2 mb-4 max-h-48 overflow-y-auto pr-1 scrollbar-thin">
                    {item.desc.map((d, j) => (
                      <li
                        key={j}
                        className="text-slate-400 text-sm leading-7 list-disc ml-4"
                      >
                        {d}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {item.stack.map((s, j) => (
                      <span
                        key={j}
                        className="text-teal-300 text-xs font-medium bg-teal-400/10 px-3 py-1 rounded-full border border-teal-400/10"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </section>
        </div>
      </div>
    </div>
  );
}
